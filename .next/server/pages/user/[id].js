(function() {
var exports = {};
exports.id = "pages/user/[id]";
exports.ids = ["pages/user/[id]"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/composants/Unite/Unite */ "./src/composants/Unite/Unite.tsx");
/* harmony import */ var _src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/composants/Unite/Element */ "./src/composants/Unite/Element.tsx");
/* harmony import */ var _src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/composants/Chimere/Chimere */ "./src/composants/Chimere/Chimere.tsx");
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* harmony import */ var _src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/composants/AV/AV */ "./src/composants/AV/AV.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\user\\[id].tsx";










const axios = __webpack_require__(/*! axios */ "axios");


function Home() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    id
  } = router.query;

  const connexionBox = async () => {
    console.log('connexionBox');
    let response = await axios.get(`http://localhost:8080/api/getUnite/${id}`);
    localStorage.setItem('Box', JSON.stringify(response.data.data));
    console.log(response);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    connexionBox();
  }, []);
  const {
    0: userUnitesFireUR,
    1: setUserUnitesFireUR
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  const {
    0: unitesfireMR,
    1: setUnitesfireMR
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    test2();
  }, []); // const [userunitesfireUR, setUserUnitesfireUR] = useState([]);
  // useEffect(() =>{
  //     test3()
  // }, [])
  // var unitesURFire=[{
  // name:'Delita', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/Delita.png'},{
  // name:'Eldo', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Eldo.png'},{
  // name:'King mont', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/King mont.png'},{
  // name:'Luartha', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Luartha.png'},{
  // name:'Machalie Hiver', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Machalie Hiver.png'},{
  // name:'Rain', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rain.png'},{
  // name:'Rhaldor', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rhaldor.png'}
  // ]
  // var unitesMRFire=[{
  // name:'Adelard', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Adelard.png'},{
  // name:'Lilyth', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Lilyth.png'},{
  // name:'Margritte', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Margritte.png'},{
  // name:'Seymore', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Seymore.png'},{
  // name:'Yshtola', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Yshtola.png'}
  // ]

  var unitesSRFire = [{
    name: 'Naiah',
    element: 'fire',
    sniv: '/niv:',
    niv: 99,
    image: '/images/Unite/SR/Naiah.png'
  }];
  var unitesRFire = [{
    name: 'Michaé',
    element: 'fire',
    sniv: '/niv:',
    niv: 99,
    image: '/images/Unite/R/Michaé.png'
  }];
  var atvURFire = [{
    name: 'Guerriers des ténèbres',
    elem: 'fire',
    image: '/images/AV/Guerriers des ténèbres.png'
  }, {
    name: 'Ifrit',
    elem: 'fire',
    image: '/images/AV/Ifrit.png'
  }, {
    name: 'Les gardiens des cristaux',
    elem: 'fire',
    image: '/images/AV/Les gardiens des cristaux.png'
  }, {
    name: 'Mont Leonis, le roi des lions',
    elem: 'fire',
    image: '/images/AV/Mont Leonis, le roi des lions.png'
  }, {
    name: 'Phénix',
    elem: 'fire',
    image: '/images/AV/Phénix.png'
  }, {
    name: 'Rencontre héroïque',
    elem: 'fire',
    image: '/images/AV/Rencontre héroïque.png'
  }, {
    name: 'Sentinelle',
    elem: 'fire',
    image: '/images/AV/Sentinelle.png'
  }, {
    name: 'Un simple brin dherbe',
    elem: 'fire',
    image: '/images/AV/Un simple brin dherbe.png'
  }];
  var atvMRFire = [{
    name: 'Marilith',
    elem: 'fire',
    image: '/images/AV/MR/Marilith.png'
  }, {
    name: 'Mobius de lespoir et des illusions',
    elem: 'fire',
    image: '/images/AV/MR/Mobius de lespoir et des illusions.png'
  }, {
    name: 'Reine Lamia',
    elem: 'fire',
    image: '/images/AV/MR/Reine Lamia.png'
  }, {
    name: 'Une vie séveille',
    elem: 'fire',
    image: '/images/AV/MR/Une vie séveille.png'
  }, {
    name: 'Voix de la vengeance',
    elem: 'fire',
    image: '/images/AV/MR/Voix de la vengeance.png'
  }];
  var chimereURFire = [{
    name: 'Ifrit',
    elem: 'fire',
    image: '/images/Chimère/Ifrit.png'
  }, {
    name: 'Phénix',
    elem: 'fire',
    image: '/images/Chimère/Phénix.png'
  }, {
    name: 'Sentinelle',
    elem: 'fire',
    image: '/images/Chimère/Sentinelle.png'
  }];
  var chimereMRFire = [{
    name: 'Marilith',
    elem: 'Fire',
    image: '/images/Chimère/Marilith.png'
  }, {
    name: 'Reine lamia',
    elem: 'fire',
    image: '/images/Chimère/Reine lamia.png'
  }];
  var chimereSRFire = [{
    name: 'Bombo',
    elem: 'fire',
    image: '/images/Chimère/Bombo.png'
  }];

  const getUnites = async () => {
    let response = await axios.get(`http://localhost:8080/api/getUnite/${id}`);
    console.log(response);
    setUserUnitesFireUR(response.data);
  };

  const test2 = async () => {
    let response = await axios.get('http://localhost:8080/api/Unites/fire/MR');
    console.log(response);
    setUnitesfireMR(response.data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      let sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);
  const {
    0: session,
    1: setSession
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (session != null) {
      getUnites();
    }
  }, [session]); // const [userUnitesFireUR, setUserUnitesFireUR ] = useState<UserUniteProps>([]);
  // useEffect(() =>{
  //     test3()
  // }, [])
  // const test3 = async () => {
  //     let response = await axios.get('http://localhost:8080/api/getUnite');
  //     (console.log(response));
  //     setUserUnitesfireUR(response.data);
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().uniteContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_3__.Element, {
        elem: "fire",
        name: "fire"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().elemFireContainer),
        children: userUnitesFireUR.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          id: unite.id,
          element: unite.element,
          level: unite.level,
          image: unite.image,
          isInputShown: false
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 76
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().AV2),
        children: atvURFire.map((av, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__.AV, {
          name: av.name,
          element: av.elem,
          image: av.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 52
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().chimere),
        children: chimereURFire.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 61
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().elemFireContainer),
        children: unitesfireMR.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 54
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().AV2),
        children: atvMRFire.map((av, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__.AV, {
          name: av.name,
          element: av.elem,
          image: av.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 52
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().chimere),
        children: chimereMRFire.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 61
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE SR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().elemFireContainer),
        children: unitesSRFire.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 54
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().chimere),
        children: chimereSRFire.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 61
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE R"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().elemFireContainer),
        children: unitesRFire.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 53
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/composants/AV/AV.tsx":
/*!**********************************!*\
  !*** ./src/composants/AV/AV.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AV": function() { return /* binding */ AV; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Unite_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unite/Element */ "./src/composants/Unite/Element.tsx");

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\AV\\AV.tsx";


const AV = ({
  name,
  element,
  image = '/images/unnamed.jpg'
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      height: 150,
      width: 100,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
      name: name,
      elem: element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, undefined);
};

/***/ }),

/***/ "./src/composants/Chimere/Chimere.tsx":
/*!********************************************!*\
  !*** ./src/composants/Chimere/Chimere.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chimere": function() { return /* binding */ Chimere; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Unite_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unite/Element */ "./src/composants/Unite/Element.tsx");

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Chimere\\Chimere.tsx";


const Chimere = ({
  name,
  element,
  image = '/images/unnamed.jpg'
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      height: 150,
      width: 150,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
      name: name,
      elem: element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }, undefined);
};

/***/ }),

/***/ "./src/composants/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/composants/Header/Header.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.css */ "./src/composants/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserProfile/UserProfile */ "./src/composants/UserProfile/UserProfile.tsx");

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Header\\Header.tsx";




const Header = ({}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const OnElementClick = route => {
    router.push(`/${route}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      let sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);
  const {
    0: session,
    1: setSession
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_3__.UserProfile, {
        pseudo: (session === null || session === void 0 ? void 0 : session.pseudo) || 'vous n\'êtes pas connecté'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().AedesLumina),
        children: "Aedes Lumina"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonEloria),
          onClick: () => {
            OnElementClick('Eloria');
          },
          children: "Eloria"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonAirole),
          onClick: () => {
            OnElementClick('Airole');
          },
          children: "Airole"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonIvalice),
          onClick: () => {
            OnElementClick('Ivalice');
          },
          children: "Ivalice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().deco),
          onClick: () => {
            OnElementClick(''), localStorage.clear();
          },
          children: "D\xE9connexion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/composants/SideBar/SideBar.tsx":
/*!********************************************!*\
  !*** ./src/composants/SideBar/SideBar.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBar": function() { return /* binding */ SideBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Unite_Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Unite/Element */ "./src/composants/Unite/Element.tsx");
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar.module.css */ "./src/composants/SideBar/SideBar.module.css");
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\SideBar\\SideBar.tsx";



const SideBar = ({}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const OnElementClick = route => {
    router.push(`/${route}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().MenuContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonMain),
        onClick: () => {
          OnElementClick('Main');
        },
        children: "Main"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonMain),
        onClick: () => {
          OnElementClick('Equipement');
        },
        children: "Equipement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default()["ButtonChimère"]),
        onClick: () => {
          OnElementClick('Chimere');
        },
        children: "Chim\xE8re"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonAV),
        onClick: () => {
          OnElementClick('AV');
        },
        children: "Atout Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUnite),
        onClick: () => {
          OnElementClick('Unite');
        },
        children: "Unite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteFire),
        onClick: () => {
          OnElementClick('Fire');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "fire",
          name: "fire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteIce),
        onClick: () => {
          OnElementClick('Ice');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "ice",
          name: "ice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteWind),
        onClick: () => {
          OnElementClick('Wind');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "wind",
          name: "wind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteEarth),
        onClick: () => {
          OnElementClick('Earth');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "earth",
          name: "earth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteLightning),
        onClick: () => {
          OnElementClick('Lightning');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "lightning",
          name: "lightning"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteWater),
        onClick: () => {
          OnElementClick('Water');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "water",
          name: "water"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteLight),
        onClick: () => {
          OnElementClick('Light');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "light",
          name: "light"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonUniteDark),
        onClick: () => {
          OnElementClick('Dark');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_1__.Element, {
          elem: "dark",
          name: "dark"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/composants/Unite/Element.tsx":
/*!******************************************!*\
  !*** ./src/composants/Unite/Element.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": function() { return /* binding */ Element; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Unite\\Element.tsx";

const Element = ({
  elem,
  name
}) => {
  var image = 'test';

  switch (elem) {
    case 'fire':
      image = '/images/element/fire.png';
      break;

    case 'ice':
      image = '/images/element/ice.png';
      break;

    case 'dark':
      image = '/images/element/dark.png';
      break;

    case 'earth':
      image = '/images/element/earth.png';
      break;

    case 'light':
      image = '/images/element/light.png';
      break;

    case 'lightning':
      image = '/images/element/lightning.png';
      break;

    case 'water':
      image = '/images/element/water.png';
      break;

    case 'wind':
      image = '/images/element/wind.png';
      break;

    default:
      image = '/images/element/fire.png';
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      height: 40,
      width: 40,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/composants/Unite/Unite.tsx":
/*!****************************************!*\
  !*** ./src/composants/Unite/Unite.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unite": function() { return /* binding */ Unite; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Unite\\Unite.tsx";



const axios = __webpack_require__(/*! axios */ "axios");


const Unite = ({
  isInputShown = true,
  id,
  name,
  level,
  element,
  image = '/images/unnamed.jpg'
}) => {
  const {
    0: levelUp,
    1: setLevelUp
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(level);

  const onLevelUpChange = event => {
    setLevelUp(event.target.value);
  };

  const {
    0: iD,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(id);

  const onIdChange = event => {
    setId(event.target.value);
  };

  const changeUniteLevel = async () => {
    try {
      await axios.post('http://localhost:8080/api/sessionUniteLevel', {
        iD: parseInt(iD),
        levelUp: parseInt(levelUp)
      });
      getUnites();
    } catch (error) {
      if (error) {
        return alert('erreur');
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      let sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);
  const {
    0: session,
    1: setSession
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();

  const getUnites = async () => {
    let response = await axios.get(`http://localhost:8080/api/getUnite/${session.id}`);
    setUserUnitesFireUR(response.data);
  };

  const {
    0: userUnitesFireUR,
    1: setUserUnitesFireUR
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().divUnite),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 12
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 18
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 81
      }, undefined), "level : ", levelUp, " - ", id, isInputShown && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "id",
            placeholder: "id",
            value: iD,
            onChange: onIdChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "level",
            placeholder: "level",
            value: levelUp,
            onChange: onLevelUpChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/composants/UserProfile/UserProfile.tsx":
/*!****************************************************!*\
  !*** ./src/composants/UserProfile/UserProfile.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfile": function() { return /* binding */ UserProfile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\UserProfile\\UserProfile.tsx";
const UserProfile = ({
  id,
  pseudo,
  email,
  grade
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [id, pseudo, email, grade]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/composants/Header/Header.module.css":
/*!*************************************************!*\
  !*** ./src/composants/Header/Header.module.css ***!
  \*************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__1Zc8B",
	"AedesLumina": "Header_AedesLumina__VXZ94",
	"ButtonEloria": "Header_ButtonEloria__3HqxI",
	"ButtonAirole": "Header_ButtonAirole__uElDY",
	"ButtonIvalice": "Header_ButtonIvalice__1GG7g",
	"deco": "Header_deco__x-u18"
};


/***/ }),

/***/ "./src/composants/SideBar/SideBar.module.css":
/*!***************************************************!*\
  !*** ./src/composants/SideBar/SideBar.module.css ***!
  \***************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"MenuContainer": "SideBar_MenuContainer__1c51R",
	"ButtonMain": "SideBar_ButtonMain__1TMI1",
	"ButtonChimère": "SideBar_ButtonChim_re__3kejL",
	"ButtonAV": "SideBar_ButtonAV__2s08D",
	"ButtonUnite": "SideBar_ButtonUnite__3Cr8N",
	"ButtonUniteFire": "SideBar_ButtonUniteFire__HuxRZ",
	"ButtonUniteIce": "SideBar_ButtonUniteIce__1oFVt",
	"ButtonUniteWind": "SideBar_ButtonUniteWind__HHxzw",
	"ButtonUniteEarth": "SideBar_ButtonUniteEarth__sgR0I",
	"ButtonUniteLightning": "SideBar_ButtonUniteLightning__3s6dw",
	"ButtonUniteWater": "SideBar_ButtonUniteWater__2Hgah",
	"ButtonUniteLight": "SideBar_ButtonUniteLight__1bCHf",
	"ButtonUniteDark": "SideBar_ButtonUniteDark__2TcqK"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"form": "Home_form__1fOyp",
	"deco": "Home_deco__3n9k7",
	"inscription": "Home_inscription__3gwWL",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"guildeEloriaContainer": "Home_guildeEloriaContainer__3ebKz",
	"guildeEloriaChefContainer": "Home_guildeEloriaChefContainer__3a82v",
	"guildeEloriaBrasDroitContainer": "Home_guildeEloriaBrasDroitContainer__2Fnzv",
	"guildeEloriaCapitaineContainer": "Home_guildeEloriaCapitaineContainer__2pWZA",
	"guildeEloriaMemberContainer": "Home_guildeEloriaMemberContainer__2RgxZ",
	"guildeAiroleContainer": "Home_guildeAiroleContainer__28CiT",
	"guildeAiroleChefContainer": "Home_guildeAiroleChefContainer__3J5rj",
	"guildeAiroleBrasDroitContainer": "Home_guildeAiroleBrasDroitContainer__3LePe",
	"guildeAiroleCapitaineContainer": "Home_guildeAiroleCapitaineContainer__3tWBB",
	"guildeAiroleMemberContainer": "Home_guildeAiroleMemberContainer__21Io-",
	"chimere": "Home_chimere__i5Kcb",
	"AVConatainer": "Home_AVConatainer__So5FA",
	"AV": "Home_AV__Ea13G",
	"AV2": "Home_AV2__Yvuoa",
	"divUnite": "Home_divUnite__1Hyz1",
	"uniteContainer": "Home_uniteContainer__2wQec",
	"elemFireContainer": "Home_elemFireContainer__RqNA1",
	"elemIceContainer": "Home_elemIceContainer__c5Wgu",
	"elemWindContainer": "Home_elemWindContainer__-Fiat",
	"elemEarthContainer": "Home_elemEarthContainer__2L3Ax",
	"elemLightningContainer": "Home_elemLightningContainer__2efdq",
	"elemWaterContainer": "Home_elemWaterContainer__1USnu",
	"elemLightContainer": "Home_elemLightContainer__2NfjS",
	"elemDarkContainer": "Home_elemDarkContainer__WXArj"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/user/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vcGFnZXMvdXNlci9baWRdLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0FWL0FWLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0NoaW1lcmUvQ2hpbWVyZS50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9Vbml0ZS9FbGVtZW50LnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1VuaXRlL1VuaXRlLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJheGlvcyIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNvbm5leGlvbkJveCIsImxvZyIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJ1c2VyVW5pdGVzRmlyZVVSIiwic2V0VXNlclVuaXRlc0ZpcmVVUiIsInVuaXRlc2ZpcmVNUiIsInNldFVuaXRlc2ZpcmVNUiIsInRlc3QyIiwidW5pdGVzU1JGaXJlIiwibmFtZSIsInNuaXYiLCJuaXYiLCJpbWFnZSIsInVuaXRlc1JGaXJlIiwiYXR2VVJGaXJlIiwiZWxlbSIsImF0dk1SRmlyZSIsImNoaW1lcmVVUkZpcmUiLCJjaGltZXJlTVJGaXJlIiwiY2hpbWVyZVNSRmlyZSIsImdldFVuaXRlcyIsImxvY2FsU2Vzc2lvbiIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwicGFyc2UiLCJzZXRTZXNzaW9uIiwic2Vzc2lvbiIsInN0eWxlcyIsInVuaXRlIiwiaW5kZXgiLCJsZXZlbCIsImF2IiwiY2hpbWVyZSIsIkFWIiwiQ2hpbWVyZSIsIkhlYWRlciIsIk9uRWxlbWVudENsaWNrIiwicm91dGUiLCJwc2V1ZG8iLCJjbGVhciIsIlNpZGVCYXIiLCJFbGVtZW50IiwiVW5pdGUiLCJpc0lucHV0U2hvd24iLCJsZXZlbFVwIiwic2V0TGV2ZWxVcCIsIm9uTGV2ZWxVcENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJpRCIsInNldElkIiwib25JZENoYW5nZSIsImNoYW5nZVVuaXRlTGV2ZWwiLCJwb3N0IiwiYWxlcnQiLCJVc2VyUHJvZmlsZSIsImVtYWlsIiwiZ3JhZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7QUNmYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCQyxLQUFoQjs7QUFBc0IsSUFBSUMsOEJBQThCLEdBQUNKLHNCQUFzQixDQUFD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QUFPO0FBQUEsMkJBQ0g7QUFBQSxpQkFBT3BHLEVBQVAsRUFBV2lGLE1BQVgsRUFBbUJrQixLQUFuQixFQUEwQkMsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBSUgsQ0FOTSxDOzs7Ozs7Ozs7O0FDVFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0EsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdXNlci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1VuaXRlLCBQcm9wcyBhcyBVbml0ZVByb3BzfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9Vbml0ZS9Vbml0ZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9Vbml0ZS9FbGVtZW50J1xyXG5pbXBvcnQge0NoaW1lcmV9IGZyb20gJy4uLy4uL3NyYy9jb21wb3NhbnRzL0NoaW1lcmUvQ2hpbWVyZSdcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4uLy4uL3NyYy9jb21wb3NhbnRzL0hlYWRlci9IZWFkZXInXHJcbmltcG9ydCB7U2lkZUJhcn0gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvU2lkZUJhci9TaWRlQmFyJ1xyXG5pbXBvcnQge0FWfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9BVi9BVidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmltcG9ydCB7VXNlclByb2ZpbGUsIFByb3BzIGFzIFVzZXJQcm9maWxlUHJvcHN9IGZyb20gJy4uLy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xyXG5pbXBvcnQge1VzZXJVbml0ZSwgUHJvcHMgYXMgVXNlclVuaXRlUHJvcHN9IGZyb20gJy4uLy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJVbml0ZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgICBjb25zdCBjb25uZXhpb25Cb3ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5leGlvbkJveCcpXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlLyR7aWR9YCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0JveCcsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEuZGF0YSkpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbm5leGlvbkJveCgpO1xyXG4gICAgfSxbXSlcclxuIFxyXG5cclxuICAgIGNvbnN0IFt1c2VyVW5pdGVzRmlyZVVSLCBzZXRVc2VyVW5pdGVzRmlyZVVSXSA9IHVzZVN0YXRlPFVuaXRlUHJvcHNbXT4oW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBbdW5pdGVzZmlyZU1SLCBzZXRVbml0ZXNmaXJlTVJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIHRlc3QyKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIGNvbnN0IFt1c2VydW5pdGVzZmlyZVVSLCBzZXRVc2VyVW5pdGVzZmlyZVVSXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIC8vICAgICB0ZXN0MygpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyB2YXIgdW5pdGVzVVJGaXJlPVt7XHJcbiAgICAvLyBuYW1lOidEZWxpdGEnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL0RlbGl0YS5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidFbGRvJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL0VsZG8ucG5nJ30se1xyXG4gICAgLy8gbmFtZTonS2luZyBtb250JywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjEyMCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvS2luZyBtb250LnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0x1YXJ0aGEnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTHVhcnRoYS5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidNYWNoYWxpZSBIaXZlcicsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NYWNoYWxpZSBIaXZlci5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidSYWluJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL1JhaW4ucG5nJ30se1xyXG4gICAgLy8gbmFtZTonUmhhbGRvcicsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9SaGFsZG9yLnBuZyd9XHJcbiAgICAvLyBdXHJcblxyXG4gICAgLy8gdmFyIHVuaXRlc01SRmlyZT1be1xyXG4gICAgLy8gbmFtZTonQWRlbGFyZCcsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjo5OSwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvQWRlbGFyZC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidMaWx5dGgnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvTGlseXRoLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J01hcmdyaXR0ZScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjoxMjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL01hcmdyaXR0ZS5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidTZXltb3JlJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL1NleW1vcmUucG5nJ30se1xyXG4gICAgLy8gbmFtZTonWXNodG9sYScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9Zc2h0b2xhLnBuZyd9XHJcbiAgICAvLyBdXHJcblxyXG4gICAgdmFyIHVuaXRlc1NSRmlyZT1be1xyXG4gICAgbmFtZTonTmFpYWgnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL1NSL05haWFoLnBuZyd9XHJcbiAgICBdXHJcbiAgICBcclxuICAgIHZhciB1bml0ZXNSRmlyZT1be1xyXG4gICAgbmFtZTonTWljaGHDqScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjo5OSwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvUi9NaWNoYcOpLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIGF0dlVSRmlyZT1be1xyXG4gICAgICAgIG5hbWU6J0d1ZXJyaWVycyBkZXMgdMOpbsOoYnJlcycsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9HdWVycmllcnMgZGVzIHTDqW7DqGJyZXMucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J0lmcml0JywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL0lmcml0LnBuZyd9LHtcclxuICAgICAgICBuYW1lOidMZXMgZ2FyZGllbnMgZGVzIGNyaXN0YXV4JywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL0xlcyBnYXJkaWVucyBkZXMgY3Jpc3RhdXgucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J01vbnQgTGVvbmlzLCBsZSByb2kgZGVzIGxpb25zJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01vbnQgTGVvbmlzLCBsZSByb2kgZGVzIGxpb25zLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidQaMOpbml4JywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL1Bow6luaXgucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1JlbmNvbnRyZSBow6lyb8OvcXVlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL1JlbmNvbnRyZSBow6lyb8OvcXVlLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidTZW50aW5lbGxlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL1NlbnRpbmVsbGUucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1VuIHNpbXBsZSBicmluIGRoZXJiZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9VbiBzaW1wbGUgYnJpbiBkaGVyYmUucG5nJ31cclxuICAgICAgXVxyXG5cclxuICAgICAgdmFyIGF0dk1SRmlyZT1be1xyXG4gICAgICAgIG5hbWU6J01hcmlsaXRoJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL01hcmlsaXRoLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidNb2JpdXMgZGUgbGVzcG9pciBldCBkZXMgaWxsdXNpb25zJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL01vYml1cyBkZSBsZXNwb2lyIGV0IGRlcyBpbGx1c2lvbnMucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1JlaW5lIExhbWlhJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL1JlaW5lIExhbWlhLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidVbmUgdmllIHPDqXZlaWxsZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9VbmUgdmllIHPDqXZlaWxsZS5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonVm9peCBkZSBsYSB2ZW5nZWFuY2UnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvVm9peCBkZSBsYSB2ZW5nZWFuY2UucG5nJ31cclxuICAgICAgXVxyXG5cclxuICAgIHZhciBjaGltZXJlVVJGaXJlPVt7XHJcbiAgICBuYW1lOidJZnJpdCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9JZnJpdC5wbmcnfSx7XHJcbiAgICBuYW1lOidQaMOpbml4JywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL1Bow6luaXgucG5nJ30se1xyXG4gICAgbmFtZTonU2VudGluZWxsZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9TZW50aW5lbGxlLnBuZyd9XHJcbiAgICAgICAgXSAgXHJcblxyXG4gICAgdmFyIGNoaW1lcmVNUkZpcmU9W3tcclxuICAgIG5hbWU6J01hcmlsaXRoJywgZWxlbTonRmlyZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL01hcmlsaXRoLnBuZyd9LHtcclxuICAgIG5hbWU6J1JlaW5lIGxhbWlhJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL1JlaW5lIGxhbWlhLnBuZyd9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIHZhciBjaGltZXJlU1JGaXJlPVt7XHJcbiAgICBuYW1lOidCb21ibycsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9Cb21iby5wbmcnfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICBjb25zdCBnZXRVbml0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlLyR7aWR9YCk7XHJcbiAgICAgICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgc2V0VXNlclVuaXRlc0ZpcmVVUihyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZXN0MiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvVW5pdGVzL2ZpcmUvTVInKTtcclxuICAgICAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgICAgICBzZXRVbml0ZXNmaXJlTVIocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgICAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XHJcbiAgICAgICAgICBsZXQgc2Vzc2lvbk9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTZXNzaW9uKVxyXG4gICAgICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gIFxyXG4gICAgICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbiBdID0gdXNlU3RhdGU8VXNlclByb2ZpbGVQcm9wcz4oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoc2Vzc2lvbiAhPW51bGwpe1xyXG4gICAgICAgICAgICBnZXRVbml0ZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXNzaW9uXSlcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUiBdID0gdXNlU3RhdGU8VXNlclVuaXRlUHJvcHM+KFtdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAvLyAgICAgdGVzdDMoKVxyXG4gICAgLy8gfSwgW10pXHJcblxyXG4gICAgLy8gY29uc3QgdGVzdDMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlJyk7XHJcbiAgICAvLyAgICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICAvLyAgICAgc2V0VXNlclVuaXRlc2ZpcmVVUihyZXNwb25zZS5kYXRhKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5pdGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDQ+RklSRSBVUjwvaDQ+XHJcbiAgICAgICAgICAgIDxFbGVtZW50IGVsZW09J2ZpcmUnIG5hbWU9J2ZpcmUnID48L0VsZW1lbnQ+XHJcbiAgICAgICAgICAgIDxoNT5Vbml0w6lzIFVSPC9oNT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtRmlyZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dXNlclVuaXRlc0ZpcmVVUi5tYXAoKHVuaXRlOlVuaXRlUHJvcHMsIGluZGV4Om51bWJlcikgPT4gKDxVbml0ZSBuYW1lPXt1bml0ZS5uYW1lfSBpZD17dW5pdGUuaWR9IGVsZW1lbnQ9e3VuaXRlLmVsZW1lbnR9IGxldmVsPXt1bml0ZS5sZXZlbH0ga2V5PXtpbmRleH0gaW1hZ2U9e3VuaXRlLmltYWdlfSBpc0lucHV0U2hvd249e2ZhbHNlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkF0b3V0IHZpc2lvbiBVUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFWMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2F0dlVSRmlyZS5tYXAoKGF2LCBpbmRleCkgPT4gKDxBViBuYW1lPXthdi5uYW1lfSBlbGVtZW50PXthdi5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17YXYuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+Q2hpbcOocmUgVVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGltZXJlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbWVyZVVSRmlyZS5tYXAoKGNoaW1lcmUsIGluZGV4KSA9PiAoPENoaW1lcmUgbmFtZT17Y2hpbWVyZS5uYW1lfSBlbGVtZW50PXtjaGltZXJlLmVsZW19IGtleT17aW5kZXh9IGltYWdlPXtjaGltZXJlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0PkZJUkUgTVI8L2g0PlxyXG4gICAgICAgICAgICA8aDU+VW5pdMOpcyBNUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1GaXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt1bml0ZXNmaXJlTVIubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT5BdG91dCB2aXNpb24gTVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BVjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdHZNUkZpcmUubWFwKChhdiwgaW5kZXgpID0+ICg8QVYgbmFtZT17YXYubmFtZX0gZWxlbWVudD17YXYuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2F2LmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkNoaW3DqHJlIE1SPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbWVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaW1lcmVNUkZpcmUubWFwKChjaGltZXJlLCBpbmRleCkgPT4gKDxDaGltZXJlIG5hbWU9e2NoaW1lcmUubmFtZX0gZWxlbWVudD17Y2hpbWVyZS5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17Y2hpbWVyZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoND5GSVJFIFNSPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUZpcmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3VuaXRlc1NSRmlyZS5tYXAoKHVuaXRlLCBpbmRleCkgPT4gKDxVbml0ZSBuYW1lPXt1bml0ZS5uYW1lfSBlbGVtZW50PXt1bml0ZS5lbGVtZW50fSBzbml2PXt1bml0ZS5zbml2fSBuaXY9e3VuaXRlLm5pdn0ga2V5PXtpbmRleH0gaW1hZ2U9e3VuaXRlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbWVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaW1lcmVTUkZpcmUubWFwKChjaGltZXJlLCBpbmRleCkgPT4gKDxDaGltZXJlIG5hbWU9e2NoaW1lcmUubmFtZX0gZWxlbWVudD17Y2hpbWVyZS5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17Y2hpbWVyZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoND5GSVJFIFI8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtRmlyZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdGVzUkZpcmUubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuLi9Vbml0ZS9FbGVtZW50XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FWLm1vZHVsZS5jc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZWxlbWVudDpzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVY6RkM8UHJvcHM+ID0gKHtuYW1lLCBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9ezE1MH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgICAgPEVsZW1lbnQgbmFtZT17bmFtZX0gZWxlbT17ZWxlbWVudH0+PC9FbGVtZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tIFwiLi4vVW5pdGUvRWxlbWVudFwiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZWxlbWVudDpzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hpbWVyZTpGQzxQcm9wcz4gPSAoe25hbWUsIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD17MTUwfSB3aWR0aD17MTUwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgICA8RWxlbWVudCBuYW1lPXtuYW1lfSBlbGVtPXtlbGVtZW50fT48L0VsZW1lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOkZDPFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgT25FbGVtZW50Q2xpY2sgPSAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgICAgaWYobG9jYWxTZXNzaW9uICE9bnVsbCkge1xyXG4gICAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbiAgICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uT2JqZWN0KVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgIDxVc2VyUHJvZmlsZSBwc2V1ZG89e3Nlc3Npb24/LnBzZXVkbyB8fCAndm91cyBuXFwnw6p0ZXMgcGFzIGNvbm5lY3TDqSd9Lz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkFlZGVzTHVtaW5hfT5BZWRlcyBMdW1pbmE8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckJ1dHRvbn0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uRWxvcmlhfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0Vsb3JpYScpfX0+RWxvcmlhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uQWlyb2xlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0Fpcm9sZScpfX0+QWlyb2xlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uSXZhbGljZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdJdmFsaWNlJyl9fT5JdmFsaWNlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVjb30gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCcnKSwgbG9jYWxTdG9yYWdlLmNsZWFyKCl9fT5Ew6ljb25uZXhpb248L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbiAgfSIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vVW5pdGUvRWxlbWVudCdcclxuaW1wb3J0IHtGQywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVCYXI6RkM8UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgT25FbGVtZW50Q2xpY2sgPSAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtyb3V0ZX1gKVxyXG4gICAgICB9XHJcbiAgcmV0dXJuICggPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcblxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uTWFpbn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdNYWluJyl9fT5NYWluPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25NYWlufSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0VxdWlwZW1lbnQnKX19PkVxdWlwZW1lbnQ8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkNoaW3DqHJlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0NoaW1lcmUnKX19PkNoaW3DqHJlPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25BVn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdBVicpfX0+QXRvdXQgVmlzaW9uPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdVbml0ZScpfX0+VW5pdGU8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRmlyZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdGaXJlJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2ZpcmUnIG5hbWU9J2ZpcmUnID48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlSWNlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0ljZScpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdpY2UnIG5hbWU9J2ljZSc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZVdpbmR9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnV2luZCcpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSd3aW5kJyBuYW1lPSd3aW5kJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRWFydGh9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRWFydGgnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nZWFydGgnIG5hbWU9J2VhcnRoJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlTGlnaHRuaW5nfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0xpZ2h0bmluZycpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdsaWdodG5pbmcnIG5hbWU9J2xpZ2h0bmluZyc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZVdhdGVyfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ1dhdGVyJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J3dhdGVyJyBuYW1lPSd3YXRlcic+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUxpZ2h0fSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0xpZ2h0Jyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2xpZ2h0JyBuYW1lPSdsaWdodCc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZURhcmt9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRGFyaycpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdkYXJrJyBuYW1lPSdkYXJrJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGVsZW06IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFbGVtZW50OkZDPFByb3BzPiA9ICh7ZWxlbSwgbmFtZX0pID0+IHtcclxuICAgIHZhciBpbWFnZT0ndGVzdCc7XHJcbiAgICBzd2l0Y2ggKGVsZW0pe1xyXG4gICAgICAgIGNhc2UgJ2ZpcmUnOlxyXG4gICAgICAgICAgICBpbWFnZSA9ICcvaW1hZ2VzL2VsZW1lbnQvZmlyZS5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnaWNlJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvaWNlLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvZGFyay5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnZWFydGgnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9lYXJ0aC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9saWdodC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGlnaHRuaW5nJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvbGlnaHRuaW5nLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd3YXRlcic6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L3dhdGVyLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd3aW5kJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvd2luZC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaW1hZ2U9ICcvaW1hZ2VzL2VsZW1lbnQvZmlyZS5wbmcnXHJcbiAgICB9XHJcbiAgcmV0dXJuIDxkaXY+XHJcblxyXG4gIDxzcGFuID57bmFtZX08L3NwYW4+XHJcbiAgPEltYWdlIGhlaWdodD17NDB9IHdpZHRoPXs0MH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgXHJcbjwvZGl2PlxyXG59IiwiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuL0VsZW1lbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc0lucHV0U2hvd246Ym9vbGVhbjtcclxuICBpZDpudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgZWxlbWVudDpzdHJpbmc7XHJcbiAgbGV2ZWw6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5pdGU6RkM8UHJvcHM+ID0gKHtpc0lucHV0U2hvd249dHJ1ZSwgaWQsIG5hbWUsIGxldmVsLCAgZWxlbWVudCwgaW1hZ2U9Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSkgPT4ge1xyXG4gIGNvbnN0IFtsZXZlbFVwLCBzZXRMZXZlbFVwIF0gPSB1c2VTdGF0ZShsZXZlbCk7XHJcbiAgY29uc3Qgb25MZXZlbFVwQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge3NldExldmVsVXAoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG4gIGNvbnN0IFtpRCwgc2V0SWQgXSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBvbklkQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge3NldElkKGV2ZW50LnRhcmdldC52YWx1ZSl9O1xyXG5cclxuXHJcbiAgY29uc3QgY2hhbmdlVW5pdGVMZXZlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zZXNzaW9uVW5pdGVMZXZlbCcsIHtpRDpwYXJzZUludChpRCksIGxldmVsVXA6cGFyc2VJbnQobGV2ZWxVcCl9KTtcclxuICAgICAgZ2V0VW5pdGVzKCk7XHJcbiAgICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiBhbGVydCAoJ2VycmV1cicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICB9XHJcbiAgICBcclxuICB9XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcblxyXG4gIGNvbnN0IGdldFVuaXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke3Nlc3Npb24uaWR9YCk7XHJcbiAgICBzZXRVc2VyVW5pdGVzRmlyZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcblxyXG5jb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZVbml0ZX0+XHJcbiAgICA8c3Bhbj5cclxuICAgIHtuYW1lfSA8YnIvPiA8YnIvPlxyXG4gICAgPEltYWdlIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz4gPGJyLz5cclxuICAgIGxldmVsIDoge2xldmVsVXB9IC0ge2lkfVxyXG4gICAge1xyXG4gICAgICBpc0lucHV0U2hvd24gJiYgKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9XCJpZFwiIHBsYWNlaG9sZGVyPVwiaWRcIiB2YWx1ZT17aUR9IG9uQ2hhbmdlPXtvbklkQ2hhbmdlfT48L2lucHV0PjwvcD5cclxuICAgICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwibGV2ZWxcIiBwbGFjZWhvbGRlcj1cImxldmVsXCIgdmFsdWU9e2xldmVsVXB9IG9uQ2hhbmdlPXtvbkxldmVsVXBDaGFuZ2V9Lz48L3A+XHJcbiAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImNoYW5nZSAtIGxldmVsXCIgb25DbGljaz17Y2hhbmdlVW5pdGVMZXZlbH0vPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgPC9zcGFuPiBcclxuPC9kaXY+XHJcbn0iLCJpbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICAgICAgaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgcHNldWRvOiBzdHJpbmc7XHJcbiAgICAgICAgZW1haWw/OnN0cmluZztcclxuICAgICAgICBncmFkZTpzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZTpGQzxQcm9wcz4gPSAoe2lkLCBwc2V1ZG8sIGVtYWlsLCBncmFkZSB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+e2lkfXtwc2V1ZG99e2VtYWlsfXtncmFkZX08L3NwYW4+XHJcblxyXG4gICAgPC9kaXY+XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18xWmM4QlwiLFxuXHRcIkFlZGVzTHVtaW5hXCI6IFwiSGVhZGVyX0FlZGVzTHVtaW5hX19WWFo5NFwiLFxuXHRcIkJ1dHRvbkVsb3JpYVwiOiBcIkhlYWRlcl9CdXR0b25FbG9yaWFfXzNIcXhJXCIsXG5cdFwiQnV0dG9uQWlyb2xlXCI6IFwiSGVhZGVyX0J1dHRvbkFpcm9sZV9fdUVsRFlcIixcblx0XCJCdXR0b25JdmFsaWNlXCI6IFwiSGVhZGVyX0J1dHRvbkl2YWxpY2VfXzFHRzdnXCIsXG5cdFwiZGVjb1wiOiBcIkhlYWRlcl9kZWNvX194LXUxOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWVudUNvbnRhaW5lclwiOiBcIlNpZGVCYXJfTWVudUNvbnRhaW5lcl9fMWM1MVJcIixcblx0XCJCdXR0b25NYWluXCI6IFwiU2lkZUJhcl9CdXR0b25NYWluX18xVE1JMVwiLFxuXHRcIkJ1dHRvbkNoaW3DqHJlXCI6IFwiU2lkZUJhcl9CdXR0b25DaGltX3JlX18za2VqTFwiLFxuXHRcIkJ1dHRvbkFWXCI6IFwiU2lkZUJhcl9CdXR0b25BVl9fMnMwOERcIixcblx0XCJCdXR0b25Vbml0ZVwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVfXzNDcjhOXCIsXG5cdFwiQnV0dG9uVW5pdGVGaXJlXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZUZpcmVfX0h1eFJaXCIsXG5cdFwiQnV0dG9uVW5pdGVJY2VcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlSWNlX18xb0ZWdFwiLFxuXHRcIkJ1dHRvblVuaXRlV2luZFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVXaW5kX19ISHh6d1wiLFxuXHRcIkJ1dHRvblVuaXRlRWFydGhcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRWFydGhfX3NnUjBJXCIsXG5cdFwiQnV0dG9uVW5pdGVMaWdodG5pbmdcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlTGlnaHRuaW5nX18zczZkd1wiLFxuXHRcIkJ1dHRvblVuaXRlV2F0ZXJcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlV2F0ZXJfXzJIZ2FoXCIsXG5cdFwiQnV0dG9uVW5pdGVMaWdodFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVMaWdodF9fMWJDSGZcIixcblx0XCJCdXR0b25Vbml0ZURhcmtcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRGFya19fMlRjcUtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcImZvcm1cIjogXCJIb21lX2Zvcm1fXzFmT3lwXCIsXG5cdFwiZGVjb1wiOiBcIkhvbWVfZGVjb19fM245azdcIixcblx0XCJpbnNjcmlwdGlvblwiOiBcIkhvbWVfaW5zY3JpcHRpb25fXzNnd1dMXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCIsXG5cdFwiZ3VpbGRlRWxvcmlhQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVFbG9yaWFDb250YWluZXJfXzNlYkt6XCIsXG5cdFwiZ3VpbGRlRWxvcmlhQ2hlZkNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhQ2hlZkNvbnRhaW5lcl9fM2E4MnZcIixcblx0XCJndWlsZGVFbG9yaWFCcmFzRHJvaXRDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcl9fMkZuenZcIixcblx0XCJndWlsZGVFbG9yaWFDYXBpdGFpbmVDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYUNhcGl0YWluZUNvbnRhaW5lcl9fMnBXWkFcIixcblx0XCJndWlsZGVFbG9yaWFNZW1iZXJDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lcl9fMlJneFpcIixcblx0XCJndWlsZGVBaXJvbGVDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUFpcm9sZUNvbnRhaW5lcl9fMjhDaVRcIixcblx0XCJndWlsZGVBaXJvbGVDaGVmQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVDaGVmQ29udGFpbmVyX18zSjVyalwiLFxuXHRcImd1aWxkZUFpcm9sZUJyYXNEcm9pdENvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlQnJhc0Ryb2l0Q29udGFpbmVyX18zTGVQZVwiLFxuXHRcImd1aWxkZUFpcm9sZUNhcGl0YWluZUNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlQ2FwaXRhaW5lQ29udGFpbmVyX18zdFdCQlwiLFxuXHRcImd1aWxkZUFpcm9sZU1lbWJlckNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlTWVtYmVyQ29udGFpbmVyX18yMUlvLVwiLFxuXHRcImNoaW1lcmVcIjogXCJIb21lX2NoaW1lcmVfX2k1S2NiXCIsXG5cdFwiQVZDb25hdGFpbmVyXCI6IFwiSG9tZV9BVkNvbmF0YWluZXJfX1NvNUZBXCIsXG5cdFwiQVZcIjogXCJIb21lX0FWX19FYTEzR1wiLFxuXHRcIkFWMlwiOiBcIkhvbWVfQVYyX19ZdnVvYVwiLFxuXHRcImRpdlVuaXRlXCI6IFwiSG9tZV9kaXZVbml0ZV9fMUh5ejFcIixcblx0XCJ1bml0ZUNvbnRhaW5lclwiOiBcIkhvbWVfdW5pdGVDb250YWluZXJfXzJ3UWVjXCIsXG5cdFwiZWxlbUZpcmVDb250YWluZXJcIjogXCJIb21lX2VsZW1GaXJlQ29udGFpbmVyX19ScU5BMVwiLFxuXHRcImVsZW1JY2VDb250YWluZXJcIjogXCJIb21lX2VsZW1JY2VDb250YWluZXJfX2M1V2d1XCIsXG5cdFwiZWxlbVdpbmRDb250YWluZXJcIjogXCJIb21lX2VsZW1XaW5kQ29udGFpbmVyX18tRmlhdFwiLFxuXHRcImVsZW1FYXJ0aENvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUVhcnRoQ29udGFpbmVyX18yTDNBeFwiLFxuXHRcImVsZW1MaWdodG5pbmdDb250YWluZXJcIjogXCJIb21lX2VsZW1MaWdodG5pbmdDb250YWluZXJfXzJlZmRxXCIsXG5cdFwiZWxlbVdhdGVyQ29udGFpbmVyXCI6IFwiSG9tZV9lbGVtV2F0ZXJDb250YWluZXJfXzFVU251XCIsXG5cdFwiZWxlbUxpZ2h0Q29udGFpbmVyXCI6IFwiSG9tZV9lbGVtTGlnaHRDb250YWluZXJfXzJOZmpTXCIsXG5cdFwiZWxlbURhcmtDb250YWluZXJcIjogXCJIb21lX2VsZW1EYXJrQ29udGFpbmVyX19XWEFyalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=