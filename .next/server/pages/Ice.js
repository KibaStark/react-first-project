(function() {
var exports = {};
exports.id = "pages/Ice";
exports.ids = ["pages/Ice"];
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

/***/ "./pages/Ice.tsx":
/*!***********************!*\
  !*** ./pages/Ice.tsx ***!
  \***********************/
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/composants/Unite/Unite */ "./src/composants/Unite/Unite.tsx");
/* harmony import */ var _src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/composants/Unite/Element */ "./src/composants/Unite/Element.tsx");
/* harmony import */ var _src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/composants/Chimere/Chimere */ "./src/composants/Chimere/Chimere.tsx");
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* harmony import */ var _src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/composants/AV/AV */ "./src/composants/AV/AV.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\Ice.tsx";










const axios = __webpack_require__(/*! axios */ "axios");

function Home() {
  const {
    0: unitesiceUR,
    1: setUnitesiceUR
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    test();
  }, []);
  const {
    0: unitesiceMR,
    1: setUnitesiceMR
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    test2();
  }, []); // var unitesURIce=[{
  // name:'Agrias',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Agrias.png'},{
  // name:'Auron',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Auron.png'},{
  // name:'Fryevia',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Fryevia.png'},{
  // name:'Gilgamesh',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Gilgamesh.png'},{
  // name:'Laswell',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Laswell.png'},{
  // name:'Mediena',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Mediena.png'},{
  // name:'Rosa',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Rosa.png'},{
  // name:'Saliah Romantique',  element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/Saliah Romantique.png'},{
  // name:'Viktora',  element:'ice', sniv:'/niv:', niv:0,  image:'/images/Unite/Viktora.png'}
  // ]
  // var unitesMRIce=[{
  // name:'Chel', element:'ice', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Chel.png'},{
  // name:'Khory Wezett', element:'ice', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Khory Wezett.png'},{
  // name:'Nasha', element:'ice', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Nasha.png'}
  // ]

  var unitesSRIce = [{
    name: 'Serjes',
    element: 'ice',
    sniv: '/niv:',
    niv: 99,
    image: '/images/Unite/SR/Serjes.png'
  }, {
    name: 'Valaïde',
    element: 'ice',
    sniv: '/niv:',
    niv: 0,
    image: '/images/Unite/SR/Valaïde.png'
  }];
  var atvURIce = [{
    name: 'Fenrir',
    elem: 'ice',
    image: '/images/AV/Fenrir.png'
  }, {
    name: 'Freezus',
    elem: 'ice',
    image: '/images/AV/Freezus.png'
  }, {
    name: 'Masque de la perfidie',
    elem: 'ice',
    image: '/images/AV/Masque de la perfidie.png'
  }, {
    name: 'Odin',
    elem: 'ice',
    image: '/images/AV/Odin.png'
  }, {
    name: 'Shiva',
    elem: 'ice',
    image: '/images/AV/Shiva.png'
  }];
  var atvMRIce = [{
    name: 'Concentration optimale',
    elem: 'ice',
    image: '/images/AV/MR/Concentration optimale.png'
  }, {
    name: 'Glacial',
    elem: 'ice',
    image: '/images/AV/MR/Glacial.png'
  }, {
    name: 'Les quatre seigneurs de guerre',
    elem: 'ice',
    image: '/images/AV/MR/Les quatre seigneurs de guerre.png'
  }, {
    name: 'Mog de la nuit hivernale',
    elem: 'ice',
    image: '/images/AV/MR/Mog de la nuit hivernale.png'
  }, {
    name: 'Un adversaire imbattable',
    elem: 'ice',
    image: '/images/AV/MR/Un adversaire imbattable.png'
  }];
  var chimereURIce = [{
    name: 'Fenrir',
    elem: 'ice',
    image: '/images/Chimère/Fenrir.png'
  }, {
    name: 'Shiva',
    elem: 'ice',
    image: '/images/Chimère/Shiva.png'
  }];
  var chimereMRIce = [{
    name: 'Glacial',
    elem: 'ice',
    image: '/images/Chimère/Glacial.png'
  }, {
    name: 'Mog hiver',
    elem: 'ice',
    image: '/images/Chimère/Mog hiver.png'
  }];
  var chimereSRIce = [{
    name: 'Oeil flottant',
    elem: 'ice',
    image: '/images/Chimère/Oeil flottant.png'
  }];

  const test = async () => {
    let response = await axios.get('http://localhost:8080/api/Unites/ice/UR');
    console.log(response);
    setUnitesiceUR(response.data);
  };

  const test2 = async () => {
    let response = await axios.get('http://localhost:8080/api/Unites/ice/MR');
    console.log(response);
    setUnitesiceMR(response.data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().uniteContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "Ice UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_3__.Element, {
        elem: "ice",
        name: "ice"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemIceContainer),
        children: unitesiceUR.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 53
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().AV2),
        children: atvURIce.map((av, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__.AV, {
          name: av.name,
          element: av.elem,
          image: av.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 51
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().chimere),
        children: chimereURIce.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 60
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "Ice MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemIceContainer),
        children: unitesiceMR.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 53
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().AV2),
        children: atvMRIce.map((av, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__.AV, {
          name: av.name,
          element: av.elem,
          image: av.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 51
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().chimere),
        children: chimereMRIce.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 60
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "Ice SR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemIceContainer),
        children: unitesSRIce.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 53
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().chimere),
        children: chimereSRIce.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 60
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
      console.log('changeLevel');
      await axios.post('http://localhost:8080/api/sessionUniteLevel', {
        iD: parseInt(iD),
        levelUp: parseInt(levelUp)
      });
      getUnites();
      console.log('changeFinish');
    } catch (error) {
      console.log(error);

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
    console.log(response);
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
        lineNumber: 65,
        columnNumber: 12
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 18
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 81
      }, undefined), "level : ", levelUp, " - ", id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
            columnNumber: 10
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
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
            columnNumber: 10
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 10
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
  email
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [id, pseudo, email]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Ice.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vcGFnZXMvSWNlLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0FWL0FWLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0NoaW1lcmUvQ2hpbWVyZS50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9Vbml0ZS9FbGVtZW50LnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1VuaXRlL1VuaXRlLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJheGlvcyIsIkhvbWUiLCJ1bml0ZXNpY2VVUiIsInNldFVuaXRlc2ljZVVSIiwidGVzdCIsInVuaXRlc2ljZU1SIiwic2V0VW5pdGVzaWNlTVIiLCJ0ZXN0MiIsInVuaXRlc1NSSWNlIiwibmFtZSIsInNuaXYiLCJuaXYiLCJpbWFnZSIsImF0dlVSSWNlIiwiZWxlbSIsImF0dk1SSWNlIiwiY2hpbWVyZVVSSWNlIiwiY2hpbWVyZU1SSWNlIiwiY2hpbWVyZVNSSWNlIiwicmVzcG9uc2UiLCJsb2ciLCJkYXRhIiwic3R5bGVzIiwidW5pdGUiLCJpbmRleCIsImF2IiwiY2hpbWVyZSIsIkFWIiwiQ2hpbWVyZSIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIk9uRWxlbWVudENsaWNrIiwicm91dGUiLCJsb2NhbFNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Vzc2lvbk9iamVjdCIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJwc2V1ZG8iLCJjbGVhciIsIlNpZGVCYXIiLCJFbGVtZW50IiwiVW5pdGUiLCJsZXZlbCIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsInBvc3QiLCJnZXRVbml0ZXMiLCJhbGVydCIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJ1c2VyVW5pdGVzRmlyZVVSIiwiVXNlclByb2ZpbGUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7OztBQ2ZhOztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkMsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLGVBQUEsR0FBZ0JDLEtBQWhCOztBQUFzQixJQUFJQyw4QkFBOEIsR0FBQ0osc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsa0lBQUQsQ0FBUixDQUF6RDs7QUFBMEgsSUFBSUksU0FB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QUFBLGVBQVA7QUFZRCxDQXpETSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsTUFBTU0sV0FBcUIsR0FBRyxDQUFDO0FBQUNoRyxJQUFEO0FBQUs0RSxRQUFMO0FBQWFxQjtBQUFiLENBQUQsS0FBMEI7QUFFM0Qsc0JBQU87QUFBQSwyQkFDSDtBQUFBLGlCQUFPakcsRUFBUCxFQUFXNEUsTUFBWCxFQUFtQnFCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUlILENBTk0sQzs7Ozs7Ozs7OztBQ1JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdENBLDJHQUErQzs7Ozs7Ozs7Ozs7O0FDQS9DLG1DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL0ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVbml0ZX0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvVW5pdGUvRWxlbWVudCdcclxuaW1wb3J0IHtDaGltZXJlfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9DaGltZXJlL0NoaW1lcmUnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHtBVn0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvQVYvQVYnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFt1bml0ZXNpY2VVUiwgc2V0VW5pdGVzaWNlVVJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIHRlc3QoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgW3VuaXRlc2ljZU1SLCBzZXRVbml0ZXNpY2VNUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgdGVzdDIoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy8gdmFyIHVuaXRlc1VSSWNlPVt7XHJcbiAgICAvLyBuYW1lOidBZ3JpYXMnLCAgZWxlbWVudDonaWNlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvQWdyaWFzLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0F1cm9uJywgIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL0F1cm9uLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0ZyeWV2aWEnLCAgZWxlbWVudDonaWNlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvRnJ5ZXZpYS5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidHaWxnYW1lc2gnLCAgZWxlbWVudDonaWNlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvR2lsZ2FtZXNoLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0xhc3dlbGwnLCAgZWxlbWVudDonaWNlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTGFzd2VsbC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidNZWRpZW5hJywgIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01lZGllbmEucG5nJ30se1xyXG4gICAgLy8gbmFtZTonUm9zYScsICBlbGVtZW50OidpY2UnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9Sb3NhLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1NhbGlhaCBSb21hbnRpcXVlJywgIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL1NhbGlhaCBSb21hbnRpcXVlLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1Zpa3RvcmEnLCAgZWxlbWVudDonaWNlJywgc25pdjonL25pdjonLCBuaXY6MCwgIGltYWdlOicvaW1hZ2VzL1VuaXRlL1Zpa3RvcmEucG5nJ31cclxuICAgIC8vIF1cclxuICAgIC8vIHZhciB1bml0ZXNNUkljZT1be1xyXG4gICAgLy8gbmFtZTonQ2hlbCcsIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9DaGVsLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0tob3J5IFdlemV0dCcsIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL0tob3J5IFdlemV0dC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidOYXNoYScsIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2OjEyMCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvTmFzaGEucG5nJ31cclxuICAgIC8vIF1cclxuICAgIHZhciB1bml0ZXNTUkljZT1be1xyXG4gICAgbmFtZTonU2VyamVzJywgZWxlbWVudDonaWNlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL1NSL1Nlcmplcy5wbmcnfSx7XHJcbiAgICBuYW1lOidWYWxhw69kZScsIGVsZW1lbnQ6J2ljZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL1NSL1ZhbGHDr2RlLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIGF0dlVSSWNlPVt7XHJcbiAgICAgICAgbmFtZTonRmVucmlyJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvRmVucmlyLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidGcmVlenVzJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvRnJlZXp1cy5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTWFzcXVlIGRlIGxhIHBlcmZpZGllJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTWFzcXVlIGRlIGxhIHBlcmZpZGllLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidPZGluJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvT2Rpbi5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonU2hpdmEnLCBlbGVtOidpY2UnLCBpbWFnZTonL2ltYWdlcy9BVi9TaGl2YS5wbmcnfVxyXG4gICAgICBdXHJcbiAgXHJcbiAgICAgIHZhciBhdHZNUkljZT1be1xyXG4gICAgICAgIG5hbWU6J0NvbmNlbnRyYXRpb24gb3B0aW1hbGUnLCBlbGVtOidpY2UnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9Db25jZW50cmF0aW9uIG9wdGltYWxlLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidHbGFjaWFsJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvR2xhY2lhbC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTGVzIHF1YXRyZSBzZWlnbmV1cnMgZGUgZ3VlcnJlJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvTGVzIHF1YXRyZSBzZWlnbmV1cnMgZGUgZ3VlcnJlLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidNb2cgZGUgbGEgbnVpdCBoaXZlcm5hbGUnLCBlbGVtOidpY2UnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9Nb2cgZGUgbGEgbnVpdCBoaXZlcm5hbGUucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1VuIGFkdmVyc2FpcmUgaW1iYXR0YWJsZScsIGVsZW06J2ljZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL1VuIGFkdmVyc2FpcmUgaW1iYXR0YWJsZS5wbmcnfVxyXG4gICAgICBdXHJcblxyXG4gICAgdmFyIGNoaW1lcmVVUkljZT1be1xyXG4gICAgbmFtZTonRmVucmlyJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvRmVucmlyLnBuZyd9LHtcclxuICAgIG5hbWU6J1NoaXZhJywgZWxlbTonaWNlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvU2hpdmEucG5nJ31cclxuICAgIF1cclxuXHJcbnZhciBjaGltZXJlTVJJY2U9W3tcclxuICAgIG5hbWU6J0dsYWNpYWwnLCBlbGVtOidpY2UnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9HbGFjaWFsLnBuZyd9LHtcclxuICAgIG5hbWU6J01vZyBoaXZlcicsIGVsZW06J2ljZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL01vZyBoaXZlci5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBjaGltZXJlU1JJY2U9W3tcclxuICAgIG5hbWU6J09laWwgZmxvdHRhbnQnLCBlbGVtOidpY2UnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9PZWlsIGZsb3R0YW50LnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgdGVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvVW5pdGVzL2ljZS9VUicpO1xyXG4gICAgICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgICAgIHNldFVuaXRlc2ljZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGVzdDIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL1VuaXRlcy9pY2UvTVInKTtcclxuICAgICAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgICAgICBzZXRVbml0ZXNpY2VNUihyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPFNpZGVCYXIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bml0ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoND5JY2UgVVI8L2g0PlxyXG4gICAgICAgICAgICA8RWxlbWVudCBlbGVtPSdpY2UnIG5hbWU9J2ljZScgPjwvRWxlbWVudD5cclxuICAgICAgICAgICAgPGg1PlVuaXTDqXMgVVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1JY2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3VuaXRlc2ljZVVSLm1hcCgodW5pdGUsIGluZGV4KSA9PiAoPFVuaXRlIG5hbWU9e3VuaXRlLm5hbWV9IGVsZW1lbnQ9e3VuaXRlLmVsZW1lbnR9IHNuaXY9e3VuaXRlLnNuaXZ9IG5pdj17dW5pdGUubml2fSBrZXk9e2luZGV4fSBpbWFnZT17dW5pdGUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+QXRvdXQgdmlzaW9uIFVSPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQVYyfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXR2VVJJY2UubWFwKChhdiwgaW5kZXgpID0+ICg8QVYgbmFtZT17YXYubmFtZX0gZWxlbWVudD17YXYuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2F2LmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkNoaW3DqHJlIFVSPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbWVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaW1lcmVVUkljZS5tYXAoKGNoaW1lcmUsIGluZGV4KSA9PiAoPENoaW1lcmUgbmFtZT17Y2hpbWVyZS5uYW1lfSBlbGVtZW50PXtjaGltZXJlLmVsZW19IGtleT17aW5kZXh9IGltYWdlPXtjaGltZXJlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0PkljZSBNUjwvaDQ+XHJcbiAgICAgICAgICAgIDxoNT5Vbml0w6lzIE1SPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUljZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdGVzaWNlTVIubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT5BdG91dCB2aXNpb24gTVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BVjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdHZNUkljZS5tYXAoKGF2LCBpbmRleCkgPT4gKDxBViBuYW1lPXthdi5uYW1lfSBlbGVtZW50PXthdi5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17YXYuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+Q2hpbcOocmUgTVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGltZXJlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbWVyZU1SSWNlLm1hcCgoY2hpbWVyZSwgaW5kZXgpID0+ICg8Q2hpbWVyZSBuYW1lPXtjaGltZXJlLm5hbWV9IGVsZW1lbnQ9e2NoaW1lcmUuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2NoaW1lcmUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQ+SWNlIFNSPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUljZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdGVzU1JJY2UubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaW1lcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGltZXJlU1JJY2UubWFwKChjaGltZXJlLCBpbmRleCkgPT4gKDxDaGltZXJlIG5hbWU9e2NoaW1lcmUubmFtZX0gZWxlbWVudD17Y2hpbWVyZS5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17Y2hpbWVyZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuLi9Vbml0ZS9FbGVtZW50XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FWLm1vZHVsZS5jc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZWxlbWVudDpzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVY6RkM8UHJvcHM+ID0gKHtuYW1lLCBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9ezE1MH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgICAgPEVsZW1lbnQgbmFtZT17bmFtZX0gZWxlbT17ZWxlbWVudH0+PC9FbGVtZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tIFwiLi4vVW5pdGUvRWxlbWVudFwiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZWxlbWVudDpzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hpbWVyZTpGQzxQcm9wcz4gPSAoe25hbWUsIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD17MTUwfSB3aWR0aD17MTUwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgICA8RWxlbWVudCBuYW1lPXtuYW1lfSBlbGVtPXtlbGVtZW50fT48L0VsZW1lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOkZDPFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgT25FbGVtZW50Q2xpY2sgPSAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgICAgaWYobG9jYWxTZXNzaW9uICE9bnVsbCkge1xyXG4gICAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbiAgICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uT2JqZWN0KVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgIDxVc2VyUHJvZmlsZSBwc2V1ZG89e3Nlc3Npb24/LnBzZXVkbyB8fCAndm91cyBuXFwnw6p0ZXMgcGFzIGNvbm5lY3TDqSd9Lz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkFlZGVzTHVtaW5hfT5BZWRlcyBMdW1pbmE8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckJ1dHRvbn0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uRWxvcmlhfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0Vsb3JpYScpfX0+RWxvcmlhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uQWlyb2xlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0Fpcm9sZScpfX0+QWlyb2xlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uSXZhbGljZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdJdmFsaWNlJyl9fT5JdmFsaWNlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVjb30gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCcnKSwgbG9jYWxTdG9yYWdlLmNsZWFyKCl9fT5Ew6ljb25uZXhpb248L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbiAgfSIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vVW5pdGUvRWxlbWVudCdcclxuaW1wb3J0IHtGQywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVCYXI6RkM8UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgT25FbGVtZW50Q2xpY2sgPSAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtyb3V0ZX1gKVxyXG4gICAgICB9XHJcbiAgcmV0dXJuICggPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcblxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uTWFpbn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdNYWluJyl9fT5NYWluPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25NYWlufSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0VxdWlwZW1lbnQnKX19PkVxdWlwZW1lbnQ8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkNoaW3DqHJlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0NoaW1lcmUnKX19PkNoaW3DqHJlPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25BVn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdBVicpfX0+QXRvdXQgVmlzaW9uPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdVbml0ZScpfX0+VW5pdGU8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRmlyZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdGaXJlJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2ZpcmUnIG5hbWU9J2ZpcmUnID48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlSWNlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0ljZScpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdpY2UnIG5hbWU9J2ljZSc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZVdpbmR9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnV2luZCcpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSd3aW5kJyBuYW1lPSd3aW5kJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRWFydGh9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRWFydGgnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nZWFydGgnIG5hbWU9J2VhcnRoJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlTGlnaHRuaW5nfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0xpZ2h0bmluZycpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdsaWdodG5pbmcnIG5hbWU9J2xpZ2h0bmluZyc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZVdhdGVyfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ1dhdGVyJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J3dhdGVyJyBuYW1lPSd3YXRlcic+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUxpZ2h0fSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0xpZ2h0Jyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2xpZ2h0JyBuYW1lPSdsaWdodCc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZURhcmt9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRGFyaycpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdkYXJrJyBuYW1lPSdkYXJrJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGVsZW06IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFbGVtZW50OkZDPFByb3BzPiA9ICh7ZWxlbSwgbmFtZX0pID0+IHtcclxuICAgIHZhciBpbWFnZT0ndGVzdCc7XHJcbiAgICBzd2l0Y2ggKGVsZW0pe1xyXG4gICAgICAgIGNhc2UgJ2ZpcmUnOlxyXG4gICAgICAgICAgICBpbWFnZSA9ICcvaW1hZ2VzL2VsZW1lbnQvZmlyZS5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnaWNlJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvaWNlLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvZGFyay5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnZWFydGgnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9lYXJ0aC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9saWdodC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGlnaHRuaW5nJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvbGlnaHRuaW5nLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd3YXRlcic6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L3dhdGVyLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd3aW5kJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvd2luZC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaW1hZ2U9ICcvaW1hZ2VzL2VsZW1lbnQvZmlyZS5wbmcnXHJcbiAgICB9XHJcbiAgcmV0dXJuIDxkaXY+XHJcblxyXG4gIDxzcGFuID57bmFtZX08L3NwYW4+XHJcbiAgPEltYWdlIGhlaWdodD17NDB9IHdpZHRoPXs0MH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgXHJcbjwvZGl2PlxyXG59IiwiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuL0VsZW1lbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZDpudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgZWxlbWVudDpzdHJpbmc7XHJcbiAgbGV2ZWw6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5pdGU6RkM8UHJvcHM+ID0gKHtpZCwgbmFtZSwgbGV2ZWwsICBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcbiAgY29uc3QgW2xldmVsVXAsIHNldExldmVsVXAgXSA9IHVzZVN0YXRlKGxldmVsKTtcclxuICBjb25zdCBvbkxldmVsVXBDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0TGV2ZWxVcChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcbiAgY29uc3QgW2lELCBzZXRJZCBdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG9uSWRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVVuaXRlTGV2ZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VMZXZlbCcpXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvc2Vzc2lvblVuaXRlTGV2ZWwnLCB7aUQ6cGFyc2VJbnQoaUQpLCBsZXZlbFVwOnBhcnNlSW50KGxldmVsVXApfSk7XHJcbiAgICAgIGdldFVuaXRlcygpO1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlRmluaXNoJylcclxuICAgICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yKXtcclxuICAgICAgICByZXR1cm4gYWxlcnQgKCdlcnJldXInKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHZhciBsb2NhbFNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpXHJcbiAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XHJcbiAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbiAgICAgaWYgKHNlc3Npb25PYmplY3Qpe1xyXG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgfVxyXG59LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uIF0gPSB1c2VTdGF0ZTxVc2VyUHJvZmlsZVByb3BzPigpO1xyXG5cclxuICBjb25zdCBnZXRVbml0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUvJHtzZXNzaW9uLmlkfWApO1xyXG4gICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICBzZXRVc2VyVW5pdGVzRmlyZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcblxyXG5jb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcblxyXG4gIFxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdlVuaXRlfT5cclxuICAgIDxzcGFuPlxyXG4gICAge25hbWV9IDxici8+IDxici8+XHJcbiAgICA8SW1hZ2UgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPiA8YnIvPlxyXG4gICAgbGV2ZWwgOiB7bGV2ZWxVcH0gLSB7aWR9XHJcbiAgICA8Zm9ybT5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9J251bWJlcicgbmFtZT1cImlkXCIgcGxhY2Vob2xkZXI9XCJpZFwiIHZhbHVlPXtpRH0gb25DaGFuZ2U9e29uSWRDaGFuZ2V9PjwvaW5wdXQ+PC9wPlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwibGV2ZWxcIiBwbGFjZWhvbGRlcj1cImxldmVsXCIgdmFsdWU9e2xldmVsVXB9IG9uQ2hhbmdlPXtvbkxldmVsVXBDaGFuZ2V9Lz48L3A+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJjaGFuZ2UgLSBsZXZlbFwiIG9uQ2xpY2s9e2NoYW5nZVVuaXRlTGV2ZWx9Lz48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8L3NwYW4+IFxyXG48L2Rpdj5cclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgICAgICBpZD86IG51bWJlcjtcclxuICAgICAgICBwc2V1ZG86IHN0cmluZztcclxuICAgICAgICBlbWFpbD86c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb2ZpbGU6RkM8UHJvcHM+ID0gKHtpZCwgcHNldWRvLCBlbWFpbCB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+e2lkfXtwc2V1ZG99e2VtYWlsfTwvc3Bhbj5cclxuXHJcbiAgICA8L2Rpdj5cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzFaYzhCXCIsXG5cdFwiQWVkZXNMdW1pbmFcIjogXCJIZWFkZXJfQWVkZXNMdW1pbmFfX1ZYWjk0XCIsXG5cdFwiQnV0dG9uRWxvcmlhXCI6IFwiSGVhZGVyX0J1dHRvbkVsb3JpYV9fM0hxeElcIixcblx0XCJCdXR0b25BaXJvbGVcIjogXCJIZWFkZXJfQnV0dG9uQWlyb2xlX191RWxEWVwiLFxuXHRcIkJ1dHRvbkl2YWxpY2VcIjogXCJIZWFkZXJfQnV0dG9uSXZhbGljZV9fMUdHN2dcIixcblx0XCJkZWNvXCI6IFwiSGVhZGVyX2RlY29fX3gtdTE4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51Q29udGFpbmVyXCI6IFwiU2lkZUJhcl9NZW51Q29udGFpbmVyX18xYzUxUlwiLFxuXHRcIkJ1dHRvbk1haW5cIjogXCJTaWRlQmFyX0J1dHRvbk1haW5fXzFUTUkxXCIsXG5cdFwiQnV0dG9uQ2hpbcOocmVcIjogXCJTaWRlQmFyX0J1dHRvbkNoaW1fcmVfXzNrZWpMXCIsXG5cdFwiQnV0dG9uQVZcIjogXCJTaWRlQmFyX0J1dHRvbkFWX18yczA4RFwiLFxuXHRcIkJ1dHRvblVuaXRlXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZV9fM0NyOE5cIixcblx0XCJCdXR0b25Vbml0ZUZpcmVcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRmlyZV9fSHV4UlpcIixcblx0XCJCdXR0b25Vbml0ZUljZVwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVJY2VfXzFvRlZ0XCIsXG5cdFwiQnV0dG9uVW5pdGVXaW5kXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZVdpbmRfX0hIeHp3XCIsXG5cdFwiQnV0dG9uVW5pdGVFYXJ0aFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVFYXJ0aF9fc2dSMElcIixcblx0XCJCdXR0b25Vbml0ZUxpZ2h0bmluZ1wiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVMaWdodG5pbmdfXzNzNmR3XCIsXG5cdFwiQnV0dG9uVW5pdGVXYXRlclwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVXYXRlcl9fMkhnYWhcIixcblx0XCJCdXR0b25Vbml0ZUxpZ2h0XCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZUxpZ2h0X18xYkNIZlwiLFxuXHRcIkJ1dHRvblVuaXRlRGFya1wiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVEYXJrX18yVGNxS1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiZm9ybVwiOiBcIkhvbWVfZm9ybV9fMWZPeXBcIixcblx0XCJkZWNvXCI6IFwiSG9tZV9kZWNvX18zbjlrN1wiLFxuXHRcImluc2NyaXB0aW9uXCI6IFwiSG9tZV9pbnNjcmlwdGlvbl9fM2d3V0xcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJndWlsZGVFbG9yaWFDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYUNvbnRhaW5lcl9fM2ViS3pcIixcblx0XCJndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyX18zYTgydlwiLFxuXHRcImd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhQnJhc0Ryb2l0Q29udGFpbmVyX18yRm56dlwiLFxuXHRcImd1aWxkZUVsb3JpYUNhcGl0YWluZUNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhQ2FwaXRhaW5lQ29udGFpbmVyX18ycFdaQVwiLFxuXHRcImd1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhTWVtYmVyQ29udGFpbmVyX18yUmd4WlwiLFxuXHRcImd1aWxkZUFpcm9sZUNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlQ29udGFpbmVyX18yOENpVFwiLFxuXHRcImd1aWxkZUFpcm9sZUNoZWZDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUFpcm9sZUNoZWZDb250YWluZXJfXzNKNXJqXCIsXG5cdFwiZ3VpbGRlQWlyb2xlQnJhc0Ryb2l0Q29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVCcmFzRHJvaXRDb250YWluZXJfXzNMZVBlXCIsXG5cdFwiZ3VpbGRlQWlyb2xlQ2FwaXRhaW5lQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVDYXBpdGFpbmVDb250YWluZXJfXzN0V0JCXCIsXG5cdFwiZ3VpbGRlQWlyb2xlTWVtYmVyQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVNZW1iZXJDb250YWluZXJfXzIxSW8tXCIsXG5cdFwiY2hpbWVyZVwiOiBcIkhvbWVfY2hpbWVyZV9faTVLY2JcIixcblx0XCJBVkNvbmF0YWluZXJcIjogXCJIb21lX0FWQ29uYXRhaW5lcl9fU281RkFcIixcblx0XCJBVlwiOiBcIkhvbWVfQVZfX0VhMTNHXCIsXG5cdFwiQVYyXCI6IFwiSG9tZV9BVjJfX1l2dW9hXCIsXG5cdFwiZGl2VW5pdGVcIjogXCJIb21lX2RpdlVuaXRlX18xSHl6MVwiLFxuXHRcInVuaXRlQ29udGFpbmVyXCI6IFwiSG9tZV91bml0ZUNvbnRhaW5lcl9fMndRZWNcIixcblx0XCJlbGVtRmlyZUNvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUZpcmVDb250YWluZXJfX1JxTkExXCIsXG5cdFwiZWxlbUljZUNvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUljZUNvbnRhaW5lcl9fYzVXZ3VcIixcblx0XCJlbGVtV2luZENvbnRhaW5lclwiOiBcIkhvbWVfZWxlbVdpbmRDb250YWluZXJfXy1GaWF0XCIsXG5cdFwiZWxlbUVhcnRoQ29udGFpbmVyXCI6IFwiSG9tZV9lbGVtRWFydGhDb250YWluZXJfXzJMM0F4XCIsXG5cdFwiZWxlbUxpZ2h0bmluZ0NvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUxpZ2h0bmluZ0NvbnRhaW5lcl9fMmVmZHFcIixcblx0XCJlbGVtV2F0ZXJDb250YWluZXJcIjogXCJIb21lX2VsZW1XYXRlckNvbnRhaW5lcl9fMVVTbnVcIixcblx0XCJlbGVtTGlnaHRDb250YWluZXJcIjogXCJIb21lX2VsZW1MaWdodENvbnRhaW5lcl9fMk5malNcIixcblx0XCJlbGVtRGFya0NvbnRhaW5lclwiOiBcIkhvbWVfZWxlbURhcmtDb250YWluZXJfX1dYQXJqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==