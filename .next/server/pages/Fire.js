(function() {
var exports = {};
exports.id = "pages/Fire";
exports.ids = ["pages/Fire"];
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

/***/ "./pages/Fire.tsx":
/*!************************!*\
  !*** ./pages/Fire.tsx ***!
  \************************/
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

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\Fire.tsx";










const axios = __webpack_require__(/*! axios */ "axios");

function Home() {
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
  }, []); // var unitesURFire=[{
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
    let response = await axios.get(`http://localhost:8080/api/getUnite/${session.id}`);
    setUserUnitesFireUR(response.data);
  };

  const test2 = async () => {
    let response = await axios.get('http://localhost:8080/api/Unites/fire/MR');
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
  }, [session]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().uniteContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_3__.Element, {
        elem: "fire",
        name: "fire"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemFireContainer),
        children: userUnitesFireUR.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          id: unite.id,
          element: unite.element,
          level: unite.level,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 76
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().AV2),
        children: atvURFire.map((av, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__.AV, {
          name: av.name,
          element: av.elem,
          image: av.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 52
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().chimere),
        children: chimereURFire.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 61
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemFireContainer),
        children: unitesfireMR.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 54
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().AV2),
        children: atvMRFire.map((av, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_7__.AV, {
          name: av.name,
          element: av.elem,
          image: av.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 52
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().chimere),
        children: chimereMRFire.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 61
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE SR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemFireContainer),
        children: unitesSRFire.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 54
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().chimere),
        children: chimereSRFire.map((chimere, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_4__.Chimere, {
          name: chimere.name,
          element: chimere.elem,
          image: chimere.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 61
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE R"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().elemFireContainer),
        children: unitesRFire.map((unite, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_2__.Unite, {
          name: unite.name,
          element: unite.element,
          sniv: unite.sniv,
          niv: unite.niv,
          image: unite.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 53
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Fire.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vcGFnZXMvRmlyZS50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9BVi9BVi50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9DaGltZXJlL0NoaW1lcmUudHN4Iiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXIudHN4Iiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vc3JjL2NvbXBvc2FudHMvVW5pdGUvRWxlbWVudC50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9Vbml0ZS9Vbml0ZS50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJJbWFnZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwidXNlRWZmZWN0IiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwic2V0IiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiYXhpb3MiLCJIb21lIiwidXNlclVuaXRlc0ZpcmVVUiIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJ1bml0ZXNmaXJlTVIiLCJzZXRVbml0ZXNmaXJlTVIiLCJ0ZXN0MiIsInVuaXRlc1NSRmlyZSIsIm5hbWUiLCJzbml2Iiwibml2IiwiaW1hZ2UiLCJ1bml0ZXNSRmlyZSIsImF0dlVSRmlyZSIsImVsZW0iLCJhdHZNUkZpcmUiLCJjaGltZXJlVVJGaXJlIiwiY2hpbWVyZU1SRmlyZSIsImNoaW1lcmVTUkZpcmUiLCJnZXRVbml0ZXMiLCJyZXNwb25zZSIsInNlc3Npb24iLCJkYXRhIiwibG9jYWxTZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJwYXJzZSIsInNldFNlc3Npb24iLCJzdHlsZXMiLCJ1bml0ZSIsImluZGV4IiwibGV2ZWwiLCJhdiIsImNoaW1lcmUiLCJBViIsIkNoaW1lcmUiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJPbkVsZW1lbnRDbGljayIsInJvdXRlIiwicHNldWRvIiwiY2xlYXIiLCJTaWRlQmFyIiwiRWxlbWVudCIsIlVuaXRlIiwiaXNJbnB1dFNob3duIiwibGV2ZWxVcCIsInNldExldmVsVXAiLCJvbkxldmVsVXBDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwiaUQiLCJzZXRJZCIsIm9uSWRDaGFuZ2UiLCJjaGFuZ2VVbml0ZUxldmVsIiwicG9zdCIsImFsZXJ0IiwiVXNlclByb2ZpbGUiLCJlbWFpbCIsImdyYWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7O0FDZmE7O0FBQUEsSUFBSUEsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GQyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQkMsS0FBaEI7O0FBQXNCLElBQUlDLDhCQUE4QixHQUFDSixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxrSUFBRCxDQUFSLENBQXpEOztBQUEwSCxJQUFJSSxT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OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL0ZpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VW5pdGUsIFByb3BzIGFzIFVuaXRlUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VuaXRlL1VuaXRlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VuaXRlL0VsZW1lbnQnXHJcbmltcG9ydCB7Q2hpbWVyZX0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvQ2hpbWVyZS9DaGltZXJlJ1xyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHtTaWRlQmFyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXInXHJcbmltcG9ydCB7QVZ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL0FWL0FWJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcbmltcG9ydCB7VXNlclVuaXRlLCBQcm9wcyBhcyBVc2VyVW5pdGVQcm9wc30gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvVXNlclByb2ZpbGUvVXNlclVuaXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUl0gPSB1c2VTdGF0ZTxVbml0ZVByb3BzW10+KFtdKTtcclxuICAgIGNvbnN0IFt1bml0ZXNmaXJlTVIsIHNldFVuaXRlc2ZpcmVNUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgdGVzdDIoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy8gdmFyIHVuaXRlc1VSRmlyZT1be1xyXG4gICAgLy8gbmFtZTonRGVsaXRhJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9EZWxpdGEucG5nJ30se1xyXG4gICAgLy8gbmFtZTonRWxkbycsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9FbGRvLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0tpbmcgbW9udCcsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjoxMjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL0tpbmcgbW9udC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidMdWFydGhhJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL0x1YXJ0aGEucG5nJ30se1xyXG4gICAgLy8gbmFtZTonTWFjaGFsaWUgSGl2ZXInLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTWFjaGFsaWUgSGl2ZXIucG5nJ30se1xyXG4gICAgLy8gbmFtZTonUmFpbicsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9SYWluLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1JoYWxkb3InLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvUmhhbGRvci5wbmcnfVxyXG4gICAgLy8gXVxyXG5cclxuICAgIC8vIHZhciB1bml0ZXNNUkZpcmU9W3tcclxuICAgIC8vIG5hbWU6J0FkZWxhcmQnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL0FkZWxhcmQucG5nJ30se1xyXG4gICAgLy8gbmFtZTonTGlseXRoJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL0xpbHl0aC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidNYXJncml0dGUnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MTIwLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9NYXJncml0dGUucG5nJ30se1xyXG4gICAgLy8gbmFtZTonU2V5bW9yZScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9TZXltb3JlLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1lzaHRvbGEnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvWXNodG9sYS5wbmcnfVxyXG4gICAgLy8gXVxyXG5cclxuICAgIHZhciB1bml0ZXNTUkZpcmU9W3tcclxuICAgIG5hbWU6J05haWFoJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9TUi9OYWlhaC5wbmcnfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICB2YXIgdW5pdGVzUkZpcmU9W3tcclxuICAgIG5hbWU6J01pY2hhw6knLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL1IvTWljaGHDqS5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBhdHZVUkZpcmU9W3tcclxuICAgICAgICBuYW1lOidHdWVycmllcnMgZGVzIHTDqW7DqGJyZXMnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvR3VlcnJpZXJzIGRlcyB0w6luw6hicmVzLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidJZnJpdCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9JZnJpdC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTGVzIGdhcmRpZW5zIGRlcyBjcmlzdGF1eCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9MZXMgZ2FyZGllbnMgZGVzIGNyaXN0YXV4LnBuZyd9LHtcclxuICAgICAgICBuYW1lOidNb250IExlb25pcywgbGUgcm9pIGRlcyBsaW9ucycsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9Nb250IExlb25pcywgbGUgcm9pIGRlcyBsaW9ucy5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonUGjDqW5peCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9QaMOpbml4LnBuZyd9LHtcclxuICAgICAgICBuYW1lOidSZW5jb250cmUgaMOpcm/Dr3F1ZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9SZW5jb250cmUgaMOpcm/Dr3F1ZS5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonU2VudGluZWxsZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9TZW50aW5lbGxlLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidVbiBzaW1wbGUgYnJpbiBkaGVyYmUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvVW4gc2ltcGxlIGJyaW4gZGhlcmJlLnBuZyd9XHJcbiAgICAgIF1cclxuXHJcbiAgICAgIHZhciBhdHZNUkZpcmU9W3tcclxuICAgICAgICBuYW1lOidNYXJpbGl0aCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9NYXJpbGl0aC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTW9iaXVzIGRlIGxlc3BvaXIgZXQgZGVzIGlsbHVzaW9ucycsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9Nb2JpdXMgZGUgbGVzcG9pciBldCBkZXMgaWxsdXNpb25zLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidSZWluZSBMYW1pYScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9SZWluZSBMYW1pYS5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonVW5lIHZpZSBzw6l2ZWlsbGUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvVW5lIHZpZSBzw6l2ZWlsbGUucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1ZvaXggZGUgbGEgdmVuZ2VhbmNlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL1ZvaXggZGUgbGEgdmVuZ2VhbmNlLnBuZyd9XHJcbiAgICAgIF1cclxuXHJcbiAgICB2YXIgY2hpbWVyZVVSRmlyZT1be1xyXG4gICAgbmFtZTonSWZyaXQnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvSWZyaXQucG5nJ30se1xyXG4gICAgbmFtZTonUGjDqW5peCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9QaMOpbml4LnBuZyd9LHtcclxuICAgIG5hbWU6J1NlbnRpbmVsbGUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvU2VudGluZWxsZS5wbmcnfVxyXG4gICAgICAgIF0gIFxyXG5cclxuICAgIHZhciBjaGltZXJlTVJGaXJlPVt7XHJcbiAgICBuYW1lOidNYXJpbGl0aCcsIGVsZW06J0ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9NYXJpbGl0aC5wbmcnfSx7XHJcbiAgICBuYW1lOidSZWluZSBsYW1pYScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9SZWluZSBsYW1pYS5wbmcnfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB2YXIgY2hpbWVyZVNSRmlyZT1be1xyXG4gICAgbmFtZTonQm9tYm8nLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvQm9tYm8ucG5nJ31cclxuICAgICAgICBdXHJcblxyXG4gICAgY29uc3QgZ2V0VW5pdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke3Nlc3Npb24uaWR9YCk7XHJcbiAgICAgICAgc2V0VXNlclVuaXRlc0ZpcmVVUihyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZXN0MiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvVW5pdGVzL2ZpcmUvTVInKTtcclxuICAgICAgICBzZXRVbml0ZXNmaXJlTVIocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgICAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XHJcbiAgICAgICAgICBsZXQgc2Vzc2lvbk9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTZXNzaW9uKVxyXG4gICAgICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gIFxyXG4gICAgICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbiBdID0gdXNlU3RhdGU8VXNlclByb2ZpbGVQcm9wcz4oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoc2Vzc2lvbiAhPW51bGwpe1xyXG4gICAgICAgICAgICBnZXRVbml0ZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXNzaW9uXSlcclxuXHJcbiAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5pdGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDQ+RklSRSBVUjwvaDQ+XHJcbiAgICAgICAgICAgIDxFbGVtZW50IGVsZW09J2ZpcmUnIG5hbWU9J2ZpcmUnID48L0VsZW1lbnQ+XHJcbiAgICAgICAgICAgIDxoNT5Vbml0w6lzIFVSPC9oNT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtRmlyZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dXNlclVuaXRlc0ZpcmVVUi5tYXAoKHVuaXRlOlVuaXRlUHJvcHMsIGluZGV4Om51bWJlcikgPT4gKDxVbml0ZSBuYW1lPXt1bml0ZS5uYW1lfSBpZD17dW5pdGUuaWR9IGVsZW1lbnQ9e3VuaXRlLmVsZW1lbnR9IGxldmVsPXt1bml0ZS5sZXZlbH0ga2V5PXtpbmRleH0gaW1hZ2U9e3VuaXRlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkF0b3V0IHZpc2lvbiBVUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFWMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2F0dlVSRmlyZS5tYXAoKGF2LCBpbmRleCkgPT4gKDxBViBuYW1lPXthdi5uYW1lfSBlbGVtZW50PXthdi5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17YXYuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+Q2hpbcOocmUgVVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGltZXJlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbWVyZVVSRmlyZS5tYXAoKGNoaW1lcmUsIGluZGV4KSA9PiAoPENoaW1lcmUgbmFtZT17Y2hpbWVyZS5uYW1lfSBlbGVtZW50PXtjaGltZXJlLmVsZW19IGtleT17aW5kZXh9IGltYWdlPXtjaGltZXJlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0PkZJUkUgTVI8L2g0PlxyXG4gICAgICAgICAgICA8aDU+VW5pdMOpcyBNUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1GaXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt1bml0ZXNmaXJlTVIubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT5BdG91dCB2aXNpb24gTVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BVjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdHZNUkZpcmUubWFwKChhdiwgaW5kZXgpID0+ICg8QVYgbmFtZT17YXYubmFtZX0gZWxlbWVudD17YXYuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2F2LmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkNoaW3DqHJlIE1SPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbWVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaW1lcmVNUkZpcmUubWFwKChjaGltZXJlLCBpbmRleCkgPT4gKDxDaGltZXJlIG5hbWU9e2NoaW1lcmUubmFtZX0gZWxlbWVudD17Y2hpbWVyZS5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17Y2hpbWVyZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoND5GSVJFIFNSPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUZpcmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3VuaXRlc1NSRmlyZS5tYXAoKHVuaXRlLCBpbmRleCkgPT4gKDxVbml0ZSBuYW1lPXt1bml0ZS5uYW1lfSBlbGVtZW50PXt1bml0ZS5lbGVtZW50fSBzbml2PXt1bml0ZS5zbml2fSBuaXY9e3VuaXRlLm5pdn0ga2V5PXtpbmRleH0gaW1hZ2U9e3VuaXRlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbWVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaW1lcmVTUkZpcmUubWFwKChjaGltZXJlLCBpbmRleCkgPT4gKDxDaGltZXJlIG5hbWU9e2NoaW1lcmUubmFtZX0gZWxlbWVudD17Y2hpbWVyZS5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17Y2hpbWVyZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoND5GSVJFIFI8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtRmlyZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdGVzUkZpcmUubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuLi9Vbml0ZS9FbGVtZW50XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FWLm1vZHVsZS5jc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZWxlbWVudDpzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVY6RkM8UHJvcHM+ID0gKHtuYW1lLCBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9ezE1MH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgICAgICAgPEVsZW1lbnQgbmFtZT17bmFtZX0gZWxlbT17ZWxlbWVudH0+PC9FbGVtZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tIFwiLi4vVW5pdGUvRWxlbWVudFwiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZWxlbWVudDpzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hpbWVyZTpGQzxQcm9wcz4gPSAoe25hbWUsIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD17MTUwfSB3aWR0aD17MTUwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgICA8RWxlbWVudCBuYW1lPXtuYW1lfSBlbGVtPXtlbGVtZW50fT48L0VsZW1lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOkZDPFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgT25FbGVtZW50Q2xpY2sgPSAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgICAgaWYobG9jYWxTZXNzaW9uICE9bnVsbCkge1xyXG4gICAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbiAgICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uT2JqZWN0KVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgIDxVc2VyUHJvZmlsZSBwc2V1ZG89e3Nlc3Npb24/LnBzZXVkbyB8fCAndm91cyBuXFwnw6p0ZXMgcGFzIGNvbm5lY3TDqSd9Lz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkFlZGVzTHVtaW5hfT5BZWRlcyBMdW1pbmE8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckJ1dHRvbn0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uRWxvcmlhfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0Vsb3JpYScpfX0+RWxvcmlhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uQWlyb2xlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0Fpcm9sZScpfX0+QWlyb2xlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uSXZhbGljZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdJdmFsaWNlJyl9fT5JdmFsaWNlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVjb30gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCcnKSwgbG9jYWxTdG9yYWdlLmNsZWFyKCl9fT5Ew6ljb25uZXhpb248L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbiAgfSIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vVW5pdGUvRWxlbWVudCdcclxuaW1wb3J0IHtGQywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVCYXI6RkM8UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgT25FbGVtZW50Q2xpY2sgPSAocm91dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtyb3V0ZX1gKVxyXG4gICAgICB9XHJcbiAgcmV0dXJuICggPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVudUNvbnRhaW5lcn0+XHJcblxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uTWFpbn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdNYWluJyl9fT5NYWluPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25NYWlufSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0VxdWlwZW1lbnQnKX19PkVxdWlwZW1lbnQ8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkNoaW3DqHJlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0NoaW1lcmUnKX19PkNoaW3DqHJlPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25BVn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdBVicpfX0+QXRvdXQgVmlzaW9uPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdVbml0ZScpfX0+VW5pdGU8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRmlyZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdGaXJlJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2ZpcmUnIG5hbWU9J2ZpcmUnID48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlSWNlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0ljZScpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdpY2UnIG5hbWU9J2ljZSc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZVdpbmR9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnV2luZCcpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSd3aW5kJyBuYW1lPSd3aW5kJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRWFydGh9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRWFydGgnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nZWFydGgnIG5hbWU9J2VhcnRoJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlTGlnaHRuaW5nfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0xpZ2h0bmluZycpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdsaWdodG5pbmcnIG5hbWU9J2xpZ2h0bmluZyc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZVdhdGVyfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ1dhdGVyJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J3dhdGVyJyBuYW1lPSd3YXRlcic+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUxpZ2h0fSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0xpZ2h0Jyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2xpZ2h0JyBuYW1lPSdsaWdodCc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZURhcmt9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRGFyaycpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdkYXJrJyBuYW1lPSdkYXJrJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGVsZW06IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFbGVtZW50OkZDPFByb3BzPiA9ICh7ZWxlbSwgbmFtZX0pID0+IHtcclxuICAgIHZhciBpbWFnZT0ndGVzdCc7XHJcbiAgICBzd2l0Y2ggKGVsZW0pe1xyXG4gICAgICAgIGNhc2UgJ2ZpcmUnOlxyXG4gICAgICAgICAgICBpbWFnZSA9ICcvaW1hZ2VzL2VsZW1lbnQvZmlyZS5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnaWNlJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvaWNlLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvZGFyay5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnZWFydGgnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9lYXJ0aC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9saWdodC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGlnaHRuaW5nJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvbGlnaHRuaW5nLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd3YXRlcic6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L3dhdGVyLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd3aW5kJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvd2luZC5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaW1hZ2U9ICcvaW1hZ2VzL2VsZW1lbnQvZmlyZS5wbmcnXHJcbiAgICB9XHJcbiAgcmV0dXJuIDxkaXY+XHJcblxyXG4gIDxzcGFuID57bmFtZX08L3NwYW4+XHJcbiAgPEltYWdlIGhlaWdodD17NDB9IHdpZHRoPXs0MH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+XHJcbiAgXHJcbjwvZGl2PlxyXG59IiwiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuL0VsZW1lbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc0lucHV0U2hvd246Ym9vbGVhbjtcclxuICBpZDpudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgZWxlbWVudDpzdHJpbmc7XHJcbiAgbGV2ZWw6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5pdGU6RkM8UHJvcHM+ID0gKHtpc0lucHV0U2hvd249dHJ1ZSwgaWQsIG5hbWUsIGxldmVsLCAgZWxlbWVudCwgaW1hZ2U9Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSkgPT4ge1xyXG4gIGNvbnN0IFtsZXZlbFVwLCBzZXRMZXZlbFVwIF0gPSB1c2VTdGF0ZShsZXZlbCk7XHJcbiAgY29uc3Qgb25MZXZlbFVwQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge3NldExldmVsVXAoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG4gIGNvbnN0IFtpRCwgc2V0SWQgXSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBvbklkQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge3NldElkKGV2ZW50LnRhcmdldC52YWx1ZSl9O1xyXG5cclxuXHJcbiAgY29uc3QgY2hhbmdlVW5pdGVMZXZlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zZXNzaW9uVW5pdGVMZXZlbCcsIHtpRDpwYXJzZUludChpRCksIGxldmVsVXA6cGFyc2VJbnQobGV2ZWxVcCl9KTtcclxuICAgICAgZ2V0VW5pdGVzKCk7XHJcbiAgICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiBhbGVydCAoJ2VycmV1cicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICB9XHJcbiAgICBcclxuICB9XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcblxyXG4gIGNvbnN0IGdldFVuaXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke3Nlc3Npb24uaWR9YCk7XHJcbiAgICBzZXRVc2VyVW5pdGVzRmlyZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcblxyXG5jb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZVbml0ZX0+XHJcbiAgICA8c3Bhbj5cclxuICAgIHtuYW1lfSA8YnIvPiA8YnIvPlxyXG4gICAgPEltYWdlIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz4gPGJyLz5cclxuICAgIGxldmVsIDoge2xldmVsVXB9IC0ge2lkfVxyXG4gICAge1xyXG4gICAgICBpc0lucHV0U2hvd24gJiYgKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9XCJpZFwiIHBsYWNlaG9sZGVyPVwiaWRcIiB2YWx1ZT17aUR9IG9uQ2hhbmdlPXtvbklkQ2hhbmdlfT48L2lucHV0PjwvcD5cclxuICAgICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwibGV2ZWxcIiBwbGFjZWhvbGRlcj1cImxldmVsXCIgdmFsdWU9e2xldmVsVXB9IG9uQ2hhbmdlPXtvbkxldmVsVXBDaGFuZ2V9Lz48L3A+XHJcbiAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImNoYW5nZSAtIGxldmVsXCIgb25DbGljaz17Y2hhbmdlVW5pdGVMZXZlbH0vPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgPC9zcGFuPiBcclxuPC9kaXY+XHJcbn0iLCJpbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICAgICAgaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgcHNldWRvOiBzdHJpbmc7XHJcbiAgICAgICAgZW1haWw/OnN0cmluZztcclxuICAgICAgICBncmFkZTpzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZTpGQzxQcm9wcz4gPSAoe2lkLCBwc2V1ZG8sIGVtYWlsLCBncmFkZSB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+e2lkfXtwc2V1ZG99e2VtYWlsfXtncmFkZX08L3NwYW4+XHJcblxyXG4gICAgPC9kaXY+XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18xWmM4QlwiLFxuXHRcIkFlZGVzTHVtaW5hXCI6IFwiSGVhZGVyX0FlZGVzTHVtaW5hX19WWFo5NFwiLFxuXHRcIkJ1dHRvbkVsb3JpYVwiOiBcIkhlYWRlcl9CdXR0b25FbG9yaWFfXzNIcXhJXCIsXG5cdFwiQnV0dG9uQWlyb2xlXCI6IFwiSGVhZGVyX0J1dHRvbkFpcm9sZV9fdUVsRFlcIixcblx0XCJCdXR0b25JdmFsaWNlXCI6IFwiSGVhZGVyX0J1dHRvbkl2YWxpY2VfXzFHRzdnXCIsXG5cdFwiZGVjb1wiOiBcIkhlYWRlcl9kZWNvX194LXUxOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWVudUNvbnRhaW5lclwiOiBcIlNpZGVCYXJfTWVudUNvbnRhaW5lcl9fMWM1MVJcIixcblx0XCJCdXR0b25NYWluXCI6IFwiU2lkZUJhcl9CdXR0b25NYWluX18xVE1JMVwiLFxuXHRcIkJ1dHRvbkNoaW3DqHJlXCI6IFwiU2lkZUJhcl9CdXR0b25DaGltX3JlX18za2VqTFwiLFxuXHRcIkJ1dHRvbkFWXCI6IFwiU2lkZUJhcl9CdXR0b25BVl9fMnMwOERcIixcblx0XCJCdXR0b25Vbml0ZVwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVfXzNDcjhOXCIsXG5cdFwiQnV0dG9uVW5pdGVGaXJlXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZUZpcmVfX0h1eFJaXCIsXG5cdFwiQnV0dG9uVW5pdGVJY2VcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlSWNlX18xb0ZWdFwiLFxuXHRcIkJ1dHRvblVuaXRlV2luZFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVXaW5kX19ISHh6d1wiLFxuXHRcIkJ1dHRvblVuaXRlRWFydGhcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRWFydGhfX3NnUjBJXCIsXG5cdFwiQnV0dG9uVW5pdGVMaWdodG5pbmdcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlTGlnaHRuaW5nX18zczZkd1wiLFxuXHRcIkJ1dHRvblVuaXRlV2F0ZXJcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlV2F0ZXJfXzJIZ2FoXCIsXG5cdFwiQnV0dG9uVW5pdGVMaWdodFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVMaWdodF9fMWJDSGZcIixcblx0XCJCdXR0b25Vbml0ZURhcmtcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRGFya19fMlRjcUtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcImZvcm1cIjogXCJIb21lX2Zvcm1fXzFmT3lwXCIsXG5cdFwiZGVjb1wiOiBcIkhvbWVfZGVjb19fM245azdcIixcblx0XCJpbnNjcmlwdGlvblwiOiBcIkhvbWVfaW5zY3JpcHRpb25fXzNnd1dMXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCIsXG5cdFwiZ3VpbGRlRWxvcmlhQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVFbG9yaWFDb250YWluZXJfXzNlYkt6XCIsXG5cdFwiZ3VpbGRlRWxvcmlhQ2hlZkNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhQ2hlZkNvbnRhaW5lcl9fM2E4MnZcIixcblx0XCJndWlsZGVFbG9yaWFCcmFzRHJvaXRDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcl9fMkZuenZcIixcblx0XCJndWlsZGVFbG9yaWFDYXBpdGFpbmVDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYUNhcGl0YWluZUNvbnRhaW5lcl9fMnBXWkFcIixcblx0XCJndWlsZGVFbG9yaWFNZW1iZXJDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lcl9fMlJneFpcIixcblx0XCJndWlsZGVBaXJvbGVDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUFpcm9sZUNvbnRhaW5lcl9fMjhDaVRcIixcblx0XCJndWlsZGVBaXJvbGVDaGVmQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVDaGVmQ29udGFpbmVyX18zSjVyalwiLFxuXHRcImd1aWxkZUFpcm9sZUJyYXNEcm9pdENvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlQnJhc0Ryb2l0Q29udGFpbmVyX18zTGVQZVwiLFxuXHRcImd1aWxkZUFpcm9sZUNhcGl0YWluZUNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlQ2FwaXRhaW5lQ29udGFpbmVyX18zdFdCQlwiLFxuXHRcImd1aWxkZUFpcm9sZU1lbWJlckNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlTWVtYmVyQ29udGFpbmVyX18yMUlvLVwiLFxuXHRcImNoaW1lcmVcIjogXCJIb21lX2NoaW1lcmVfX2k1S2NiXCIsXG5cdFwiQVZDb25hdGFpbmVyXCI6IFwiSG9tZV9BVkNvbmF0YWluZXJfX1NvNUZBXCIsXG5cdFwiQVZcIjogXCJIb21lX0FWX19FYTEzR1wiLFxuXHRcIkFWMlwiOiBcIkhvbWVfQVYyX19ZdnVvYVwiLFxuXHRcImRpdlVuaXRlXCI6IFwiSG9tZV9kaXZVbml0ZV9fMUh5ejFcIixcblx0XCJ1bml0ZUNvbnRhaW5lclwiOiBcIkhvbWVfdW5pdGVDb250YWluZXJfXzJ3UWVjXCIsXG5cdFwiZWxlbUZpcmVDb250YWluZXJcIjogXCJIb21lX2VsZW1GaXJlQ29udGFpbmVyX19ScU5BMVwiLFxuXHRcImVsZW1JY2VDb250YWluZXJcIjogXCJIb21lX2VsZW1JY2VDb250YWluZXJfX2M1V2d1XCIsXG5cdFwiZWxlbVdpbmRDb250YWluZXJcIjogXCJIb21lX2VsZW1XaW5kQ29udGFpbmVyX18tRmlhdFwiLFxuXHRcImVsZW1FYXJ0aENvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUVhcnRoQ29udGFpbmVyX18yTDNBeFwiLFxuXHRcImVsZW1MaWdodG5pbmdDb250YWluZXJcIjogXCJIb21lX2VsZW1MaWdodG5pbmdDb250YWluZXJfXzJlZmRxXCIsXG5cdFwiZWxlbVdhdGVyQ29udGFpbmVyXCI6IFwiSG9tZV9lbGVtV2F0ZXJDb250YWluZXJfXzFVU251XCIsXG5cdFwiZWxlbUxpZ2h0Q29udGFpbmVyXCI6IFwiSG9tZV9lbGVtTGlnaHRDb250YWluZXJfXzJOZmpTXCIsXG5cdFwiZWxlbURhcmtDb250YWluZXJcIjogXCJIb21lX2VsZW1EYXJrQ29udGFpbmVyX19XWEFyalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=