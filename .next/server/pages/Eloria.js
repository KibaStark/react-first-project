(function() {
var exports = {};
exports.id = "pages/Eloria";
exports.ids = ["pages/Eloria"];
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

/***/ "./pages/Eloria.tsx":
/*!**************************!*\
  !*** ./pages/Eloria.tsx ***!
  \**************************/
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* harmony import */ var _src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/composants/Member/Member */ "./src/composants/Member/Member.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\Eloria.tsx";







const axios = __webpack_require__(/*! axios */ "axios");

function Home() {
  var MemberEloriachef = [{
    pseudo: 'Demed',
    grade: 'chef',
    image: '/images/Membre/Demed.png'
  }];
  var MemberEloriaBrasDroit = [{
    pseudo: 'Kiba',
    grade: 'Bras droit',
    image: '/images/Membre/Kiba.png'
  }, {
    pseudo: 'Razmo',
    grade: 'Bras droit',
    image: '/images/Membre/Razmo.jpg'
  }, {
    pseudo: 'Schlagen',
    grade: 'Bras droit',
    image: '/images/Membre/Schlagen.jpg'
  }, {
    pseudo: 'Oscar',
    grade: 'Bras droit',
    image: '/images/Membre/Oscar.png'
  }, {
    pseudo: 'Link',
    grade: 'Bras droit',
    image: '/images/Membre/Link.jpg'
  }, {
    pseudo: 'Unknown',
    grade: 'Bras droit',
    image: '/images/Membre/Unknown.jpg'
  }];
  var MemberEloriaCapitaine = [{
    pseudo: 'typher',
    grade: 'Capitaine',
    image: '/images/Membre/Typher.png'
  }, {
    pseudo: 'Zhak',
    grade: 'Capitaine',
    image: '/images/Membre/Zhak.jpg'
  }, {
    pseudo: 'FarAlex',
    grade: 'Capitaine',
    image: '/images/Membre/FarAlex.png'
  }, {
    pseudo: 'Perlin',
    grade: 'Capitaine',
    image: '/images/Membre/Perlin.png'
  }, {
    pseudo: 'Flo408',
    grade: 'Capitaine',
    image: '/images/Membre/Flo.png'
  }, {
    pseudo: 'Djinsung',
    grade: 'Capitaine',
    image: '/images/Membre/Djinsung.png'
  }];
  var MemberEloria = [{
    pseudo: 'Angenoir',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Samba93',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Wrath',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'sethart',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'SamZR',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Bahamut',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Pype',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Vexxy',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Tamouna22',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Miseru',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Grandcoeur',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Pikajon',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Lloyd',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Gina',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Garzeth',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Sherda',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Keille',
    grade: 'Membre',
    image: '/images/unnamed.jpg'
  }];
  const {
    0: users,
    1: setUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);

  const getUsers = async () => {
    let response = await axios.get(`http://localhost:8080/api/getUser/brasDroit`);
    console.log(response);
    setUsers(response.data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    getUsers();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Eloria"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chef"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaChefContainer),
        children: MemberEloriachef.map((member, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_4__.Member, {
          pseudo: member.pseudo,
          id: member.id,
          grade: member.grade,
          image: member.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 53
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Bras droit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaBrasDroitContainer),
        children: [users.map((user, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_4__.Member, {
          pseudo: user.pseudo,
          id: user.id,
          grade: user.grade,
          image: user.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 48
        }, this)), MemberEloriaBrasDroit.map((member, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_4__.Member, {
          pseudo: member.pseudo,
          id: member.id,
          grade: member.grade,
          image: member.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 58
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Capitaine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaCapitaineContainer),
        children: MemberEloriaCapitaine.map((member, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_4__.Member, {
          pseudo: member.pseudo,
          id: member.id,
          grade: member.grade,
          image: member.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 57
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Membre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaMemberContainer),
        children: MemberEloria.map((member, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_4__.Member, {
          pseudo: member.pseudo,
          id: member.id,
          grade: member.grade,
          image: member.image
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 48
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

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

/***/ "./src/composants/Member/Member.tsx":
/*!******************************************!*\
  !*** ./src/composants/Member/Member.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": function() { return /* binding */ Member; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Member\\Member.tsx";


const axios = __webpack_require__(/*! axios */ "axios");


const Member = ({
  id,
  pseudo,
  grade,
  image = '/images/unnamed.jpg'
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const boxUser = route => {
    router.push(`/${route}`);
  };

  const connexionBox = async () => {
    console.log('connexionBox');

    try {
      boxUser(`user/${id}`);
      let response = await axios.get('http://localhost:8080/api/getUnite/{user_id}');
      localStorage.setItem('Box', JSON.stringify(response.data.data));
      console.log(response);
    } catch (error) {
      console.log(error);

      if (error = 'code 500') {
        return alert('Connexion à la box impossible');
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "button",
          value: pseudo,
          onClick: connexionBox
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 16
        }, undefined), " ", id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 87
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      height: 125,
      width: 200,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 87
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 16
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
var __webpack_exports__ = (__webpack_exec__("./pages/Eloria.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vcGFnZXMvRWxvcmlhLnRzeCIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3NyYy9jb21wb3NhbnRzL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlci50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXIudHN4Iiwid2VicGFjazovL215LWZpcnN0LXJlYWN0Ly4vc3JjL2NvbXBvc2FudHMvVW5pdGUvRWxlbWVudC50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJJbWFnZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwidXNlRWZmZWN0IiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwic2V0IiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiYXhpb3MiLCJIb21lIiwiTWVtYmVyRWxvcmlhY2hlZiIsInBzZXVkbyIsImdyYWRlIiwiaW1hZ2UiLCJNZW1iZXJFbG9yaWFCcmFzRHJvaXQiLCJNZW1iZXJFbG9yaWFDYXBpdGFpbmUiLCJNZW1iZXJFbG9yaWEiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlcnMiLCJyZXNwb25zZSIsImxvZyIsImRhdGEiLCJzdHlsZXMiLCJtZW1iZXIiLCJpbmRleCIsInVzZXIiLCJmb290ZXIiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJPbkVsZW1lbnRDbGljayIsInJvdXRlIiwibG9jYWxTZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJwYXJzZSIsInNldFNlc3Npb24iLCJzZXNzaW9uIiwiY2xlYXIiLCJNZW1iZXIiLCJib3hVc2VyIiwiY29ubmV4aW9uQm94Iiwic2V0SXRlbSIsImFsZXJ0IiwiU2lkZUJhciIsIkVsZW1lbnQiLCJlbGVtIiwibmFtZSIsIlVzZXJQcm9maWxlIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7QUNmYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCQyxLQUFoQjs7QUFBc0IsSUFBSUMsOEJBQThCLEdBQUNKLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLGtJQUFELENBQVIsQ0FBekQ7O0FBQTBILElBQUlJLFNBQVMsR0FBQ0wsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsd0ZBQUQsQ0FBUixDQUFwQzs7QUFBZ0YsSUFBSUssTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJTSxLQUFLLEdBQUNQLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdEQUFELENBQVIsQ0FBaEM7O0FBQXFFLElBQUlPLE9BQU8sR0FBQ1AsbUJBQU8sQ0FBQyxvRUFBRCxDQUFuQjs7QUFBcUQsSUFBSVEsWUFBWSxHQUFDUixtQkFBTyxDQUFDLDhFQUFELENBQXhCOztBQUErRCxJQUFJUyxnQkFBZ0IsR0FBQ1QsbUJBQU8sQ0FBQywr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QTtBQUFBLGVBQVA7QUFJSCxDQU5NLEM7Ozs7Ozs7Ozs7QUNUUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQyxtQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9FbG9yaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHsgTWVtYmVyLCBQcm9wcyBhcyBNZW1iZXJQcm9wcyB9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL01lbWJlci9NZW1iZXInXHJcbmltcG9ydCB7VXNlclVuaXRlLCBQcm9wcyBhcyBVc2VyUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJVbml0ZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFjaGVmPVt7XHJcbiAgICAgIHBzZXVkbzonRGVtZWQnLCBncmFkZTonY2hlZicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9EZW1lZC5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFCcmFzRHJvaXQ9W3tcclxuICAgICAgcHNldWRvOidLaWJhJywgZ3JhZGU6J0JyYXMgZHJvaXQnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvS2liYS5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonUmF6bW8nLCBncmFkZTonQnJhcyBkcm9pdCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9SYXptby5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonU2NobGFnZW4nLCBncmFkZTonQnJhcyBkcm9pdCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9TY2hsYWdlbi5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonT3NjYXInLCBncmFkZTonQnJhcyBkcm9pdCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Pc2Nhci5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonTGluaycsIGdyYWRlOidCcmFzIGRyb2l0JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0xpbmsuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1Vua25vd24nLCBncmFkZTonQnJhcyBkcm9pdCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Vbmtub3duLmpwZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYUNhcGl0YWluZT1be1xyXG4gICAgICBwc2V1ZG86J3R5cGhlcicsIGdyYWRlOidDYXBpdGFpbmUnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvVHlwaGVyLnBuZyd9LHtcclxuICAgICAgcHNldWRvOidaaGFrJywgZ3JhZGU6J0NhcGl0YWluZScsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9aaGFrLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidGYXJBbGV4JywgZ3JhZGU6J0NhcGl0YWluZScsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9GYXJBbGV4LnBuZyd9LHtcclxuICAgICAgcHNldWRvOidQZXJsaW4nLCBncmFkZTonQ2FwaXRhaW5lJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Blcmxpbi5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonRmxvNDA4JywgZ3JhZGU6J0NhcGl0YWluZScsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9GbG8ucG5nJ30se1xyXG4gICAgICBwc2V1ZG86J0RqaW5zdW5nJywgZ3JhZGU6J0NhcGl0YWluZScsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Eamluc3VuZy5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWE9W3tcclxuICAgICAgcHNldWRvOidBbmdlbm9pcicsIGdyYWRlOidNZW1icmUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidTYW1iYTkzJywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1dyYXRoJywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J3NldGhhcnQnLCBncmFkZTonTWVtYnJlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonU2FtWlInLCBncmFkZTonTWVtYnJlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonQmFoYW11dCcsIGdyYWRlOidNZW1icmUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidQeXBlJywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1ZleHh5JywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1RhbW91bmEyMicsIGdyYWRlOidNZW1icmUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidNaXNlcnUnLCBncmFkZTonTWVtYnJlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonR3JhbmRjb2V1cicsIGdyYWRlOidNZW1icmUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidQaWtham9uJywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J0xsb3lkJywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J0dpbmEnLCBncmFkZTonTWVtYnJlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonR2FyemV0aCcsIGdyYWRlOidNZW1icmUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidTaGVyZGEnLCBncmFkZTonTWVtYnJlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonS2VpbGxlJywgZ3JhZGU6J01lbWJyZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ31cclxuICAgIF1cclxuICAgIFxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlclByb3BzW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VXNlci9icmFzRHJvaXRgKTtcclxuICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XHJcbn1cclxudXNlRWZmZWN0KCgpID0+e1xyXG4gIGdldFVzZXJzKCk7XHJcbn0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RWxvcmlhPC9oMj5cclxuICAgICAgICA8aDM+Q2hlZjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFjaGVmLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgcHNldWRvPXttZW1iZXIucHNldWRvfSBpZD17bWVtYmVyLmlkfSBncmFkZT17bWVtYmVyLmdyYWRlfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5CcmFzIGRyb2l0PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcn0+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcjpVc2VyUHJvcHMsIGluZGV4KSA9PiAoPE1lbWJlciBwc2V1ZG89e3VzZXIucHNldWRvfSBpZD17dXNlci5pZH0gZ3JhZGU9e3VzZXIuZ3JhZGV9IGtleT17aW5kZXh9IGltYWdlPXt1c2VyLmltYWdlfS8+KSl9XHJcblxyXG4gICAgICAgICAge01lbWJlckVsb3JpYUJyYXNEcm9pdC5tYXAoKG1lbWJlciwgaW5kZXgpID0+ICg8TWVtYmVyIHBzZXVkbz17bWVtYmVyLnBzZXVkb30gaWQ9e21lbWJlci5pZH0gZ3JhZGU9e21lbWJlci5ncmFkZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDM+Q2FwaXRhaW5lPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUNhcGl0YWluZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhQ2FwaXRhaW5lLm1hcCgobWVtYmVyLCBpbmRleCkgPT4oPE1lbWJlciBwc2V1ZG89e21lbWJlci5wc2V1ZG99IGlkPXttZW1iZXIuaWR9IGdyYWRlPXttZW1iZXIuZ3JhZGV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDM+TWVtYnJlPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhLm1hcCgobWVtYmVyLCBpbmRleCkgPT4oPE1lbWJlciBwc2V1ZG89e21lbWJlci5wc2V1ZG99IGlkPXttZW1iZXIuaWR9IGdyYWRlPXttZW1iZXIuZ3JhZGV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcblxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7VXNlclByb2ZpbGUsIFByb3BzIGFzIFVzZXJQcm9maWxlUHJvcHN9IGZyb20gJy4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjpGQzxQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IE9uRWxlbWVudENsaWNrID0gKHJvdXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgcm91dGVyLnB1c2goYC8ke3JvdXRlfWApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIHZhciBsb2NhbFNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpXHJcbiAgICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbk9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTZXNzaW9uKVxyXG4gICAgICAgaWYgKHNlc3Npb25PYmplY3Qpe1xyXG4gICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uIF0gPSB1c2VTdGF0ZTxVc2VyUHJvZmlsZVByb3BzPigpO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICA8VXNlclByb2ZpbGUgcHNldWRvPXtzZXNzaW9uPy5wc2V1ZG8gfHwgJ3ZvdXMgblxcJ8OqdGVzIHBhcyBjb25uZWN0w6knfS8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5BZWRlc0x1bWluYX0+QWVkZXMgTHVtaW5hPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJCdXR0b259PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkVsb3JpYX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdFbG9yaWEnKX19PkVsb3JpYTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkFpcm9sZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdBaXJvbGUnKX19PkFpcm9sZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkl2YWxpY2V9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnSXZhbGljZScpfX0+SXZhbGljZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmRlY299IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnJyksIGxvY2FsU3RvcmFnZS5jbGVhcigpfX0+RMOpY29ubmV4aW9uPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICBcclxuICA8L2Rpdj5cclxuXHJcblxyXG4gIH0iLCJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZDpudW1iZXI7XHJcbiAgcHNldWRvOiBzdHJpbmc7XHJcbiAgZ3JhZGU6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNZW1iZXI6RkM8UHJvcHM+ID0gKHtpZCwgcHNldWRvLCBncmFkZSwgaW1hZ2U9Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSkgPT4ge1xyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuY29uc3QgYm94VXNlciA9IChyb3V0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY29ubmV4aW9uQm94ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmV4aW9uQm94JylcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGJveFVzZXIoYHVzZXIvJHtpZH1gKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlL3t1c2VyX2lkfScpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQm94JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS5kYXRhKSlcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IgPSAnY29kZSA1MDAnKXtcclxuICAgICAgICAgIHJldHVybiBhbGVydCAoJ0Nvbm5leGlvbiDDoCBsYSBib3ggaW1wb3NzaWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgIFxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICBcclxuICAgICAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT17cHNldWRvfSBvbkNsaWNrPXtjb25uZXhpb25Cb3h9IC8+IHtpZH08L3A+IDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsxMjV9IHdpZHRoPXsyMDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPiA8YnIvPlxyXG4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH0iLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL1VuaXRlL0VsZW1lbnQnXHJcbmltcG9ydCB7RkMsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZUJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlQmFyOkZDPFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IE9uRWxlbWVudENsaWNrID0gKHJvdXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcclxuICAgICAgfVxyXG4gIHJldHVybiAoIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lbnVDb250YWluZXJ9PlxyXG5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbk1haW59IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnTWFpbicpfX0+TWFpbjwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uTWFpbn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdFcXVpcGVtZW50Jyl9fT5FcXVpcGVtZW50PC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25DaGltw6hyZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdDaGltZXJlJyl9fT5DaGltw6hyZTwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uQVZ9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnQVYnKX19PkF0b3V0IFZpc2lvbjwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGV9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnVW5pdGUnKX19PlVuaXRlPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUZpcmV9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRmlyZScpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdmaXJlJyBuYW1lPSdmaXJlJyA+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUljZX0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdJY2UnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0naWNlJyBuYW1lPSdpY2UnPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVXaW5kfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ1dpbmQnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nd2luZCcgbmFtZT0nd2luZCc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUVhcnRofSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0VhcnRoJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2VhcnRoJyBuYW1lPSdlYXJ0aCc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25Vbml0ZUxpZ2h0bmluZ30gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdMaWdodG5pbmcnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nbGlnaHRuaW5nJyBuYW1lPSdsaWdodG5pbmcnPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVXYXRlcn0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdXYXRlcicpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSd3YXRlcicgbmFtZT0nd2F0ZXInPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVMaWdodH0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdMaWdodCcpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdsaWdodCcgbmFtZT0nbGlnaHQnPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVEYXJrfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0RhcmsnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nZGFyaycgbmFtZT0nZGFyayc+PC9FbGVtZW50PlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBlbGVtOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWxlbWVudDpGQzxQcm9wcz4gPSAoe2VsZW0sIG5hbWV9KSA9PiB7XHJcbiAgICB2YXIgaW1hZ2U9J3Rlc3QnO1xyXG4gICAgc3dpdGNoIChlbGVtKXtcclxuICAgICAgICBjYXNlICdmaXJlJzpcclxuICAgICAgICAgICAgaW1hZ2UgPSAnL2ltYWdlcy9lbGVtZW50L2ZpcmUucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2ljZSc6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L2ljZS5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L2RhcmsucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2VhcnRoJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvZWFydGgucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2xpZ2h0JzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvbGlnaHQucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2xpZ2h0bmluZyc6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L2xpZ2h0bmluZy5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnd2F0ZXInOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC93YXRlci5wbmcnXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnd2luZCc6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L3dpbmQucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGltYWdlPSAnL2ltYWdlcy9lbGVtZW50L2ZpcmUucG5nJ1xyXG4gICAgfVxyXG4gIHJldHVybiA8ZGl2PlxyXG5cclxuICA8c3BhbiA+e25hbWV9PC9zcGFuPlxyXG4gIDxJbWFnZSBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPlxyXG4gIFxyXG48L2Rpdj5cclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgICAgICBpZD86IG51bWJlcjtcclxuICAgICAgICBwc2V1ZG86IHN0cmluZztcclxuICAgICAgICBlbWFpbD86c3RyaW5nO1xyXG4gICAgICAgIGdyYWRlOnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlOkZDPFByb3BzPiA9ICh7aWQsIHBzZXVkbywgZW1haWwsIGdyYWRlIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8c3Bhbj57aWR9e3BzZXVkb317ZW1haWx9e2dyYWRlfTwvc3Bhbj5cclxuXHJcbiAgICA8L2Rpdj5cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzFaYzhCXCIsXG5cdFwiQWVkZXNMdW1pbmFcIjogXCJIZWFkZXJfQWVkZXNMdW1pbmFfX1ZYWjk0XCIsXG5cdFwiQnV0dG9uRWxvcmlhXCI6IFwiSGVhZGVyX0J1dHRvbkVsb3JpYV9fM0hxeElcIixcblx0XCJCdXR0b25BaXJvbGVcIjogXCJIZWFkZXJfQnV0dG9uQWlyb2xlX191RWxEWVwiLFxuXHRcIkJ1dHRvbkl2YWxpY2VcIjogXCJIZWFkZXJfQnV0dG9uSXZhbGljZV9fMUdHN2dcIixcblx0XCJkZWNvXCI6IFwiSGVhZGVyX2RlY29fX3gtdTE4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51Q29udGFpbmVyXCI6IFwiU2lkZUJhcl9NZW51Q29udGFpbmVyX18xYzUxUlwiLFxuXHRcIkJ1dHRvbk1haW5cIjogXCJTaWRlQmFyX0J1dHRvbk1haW5fXzFUTUkxXCIsXG5cdFwiQnV0dG9uQ2hpbcOocmVcIjogXCJTaWRlQmFyX0J1dHRvbkNoaW1fcmVfXzNrZWpMXCIsXG5cdFwiQnV0dG9uQVZcIjogXCJTaWRlQmFyX0J1dHRvbkFWX18yczA4RFwiLFxuXHRcIkJ1dHRvblVuaXRlXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZV9fM0NyOE5cIixcblx0XCJCdXR0b25Vbml0ZUZpcmVcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRmlyZV9fSHV4UlpcIixcblx0XCJCdXR0b25Vbml0ZUljZVwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVJY2VfXzFvRlZ0XCIsXG5cdFwiQnV0dG9uVW5pdGVXaW5kXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZVdpbmRfX0hIeHp3XCIsXG5cdFwiQnV0dG9uVW5pdGVFYXJ0aFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVFYXJ0aF9fc2dSMElcIixcblx0XCJCdXR0b25Vbml0ZUxpZ2h0bmluZ1wiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVMaWdodG5pbmdfXzNzNmR3XCIsXG5cdFwiQnV0dG9uVW5pdGVXYXRlclwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVXYXRlcl9fMkhnYWhcIixcblx0XCJCdXR0b25Vbml0ZUxpZ2h0XCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZUxpZ2h0X18xYkNIZlwiLFxuXHRcIkJ1dHRvblVuaXRlRGFya1wiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVEYXJrX18yVGNxS1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiZm9ybVwiOiBcIkhvbWVfZm9ybV9fMWZPeXBcIixcblx0XCJkZWNvXCI6IFwiSG9tZV9kZWNvX18zbjlrN1wiLFxuXHRcImluc2NyaXB0aW9uXCI6IFwiSG9tZV9pbnNjcmlwdGlvbl9fM2d3V0xcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJndWlsZGVFbG9yaWFDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUVsb3JpYUNvbnRhaW5lcl9fM2ViS3pcIixcblx0XCJndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyX18zYTgydlwiLFxuXHRcImd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhQnJhc0Ryb2l0Q29udGFpbmVyX18yRm56dlwiLFxuXHRcImd1aWxkZUVsb3JpYUNhcGl0YWluZUNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhQ2FwaXRhaW5lQ29udGFpbmVyX18ycFdaQVwiLFxuXHRcImd1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlRWxvcmlhTWVtYmVyQ29udGFpbmVyX18yUmd4WlwiLFxuXHRcImd1aWxkZUFpcm9sZUNvbnRhaW5lclwiOiBcIkhvbWVfZ3VpbGRlQWlyb2xlQ29udGFpbmVyX18yOENpVFwiLFxuXHRcImd1aWxkZUFpcm9sZUNoZWZDb250YWluZXJcIjogXCJIb21lX2d1aWxkZUFpcm9sZUNoZWZDb250YWluZXJfXzNKNXJqXCIsXG5cdFwiZ3VpbGRlQWlyb2xlQnJhc0Ryb2l0Q29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVCcmFzRHJvaXRDb250YWluZXJfXzNMZVBlXCIsXG5cdFwiZ3VpbGRlQWlyb2xlQ2FwaXRhaW5lQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVDYXBpdGFpbmVDb250YWluZXJfXzN0V0JCXCIsXG5cdFwiZ3VpbGRlQWlyb2xlTWVtYmVyQ29udGFpbmVyXCI6IFwiSG9tZV9ndWlsZGVBaXJvbGVNZW1iZXJDb250YWluZXJfXzIxSW8tXCIsXG5cdFwiY2hpbWVyZVwiOiBcIkhvbWVfY2hpbWVyZV9faTVLY2JcIixcblx0XCJBVkNvbmF0YWluZXJcIjogXCJIb21lX0FWQ29uYXRhaW5lcl9fU281RkFcIixcblx0XCJBVlwiOiBcIkhvbWVfQVZfX0VhMTNHXCIsXG5cdFwiQVYyXCI6IFwiSG9tZV9BVjJfX1l2dW9hXCIsXG5cdFwiZGl2VW5pdGVcIjogXCJIb21lX2RpdlVuaXRlX18xSHl6MVwiLFxuXHRcInVuaXRlQ29udGFpbmVyXCI6IFwiSG9tZV91bml0ZUNvbnRhaW5lcl9fMndRZWNcIixcblx0XCJlbGVtRmlyZUNvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUZpcmVDb250YWluZXJfX1JxTkExXCIsXG5cdFwiZWxlbUljZUNvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUljZUNvbnRhaW5lcl9fYzVXZ3VcIixcblx0XCJlbGVtV2luZENvbnRhaW5lclwiOiBcIkhvbWVfZWxlbVdpbmRDb250YWluZXJfXy1GaWF0XCIsXG5cdFwiZWxlbUVhcnRoQ29udGFpbmVyXCI6IFwiSG9tZV9lbGVtRWFydGhDb250YWluZXJfXzJMM0F4XCIsXG5cdFwiZWxlbUxpZ2h0bmluZ0NvbnRhaW5lclwiOiBcIkhvbWVfZWxlbUxpZ2h0bmluZ0NvbnRhaW5lcl9fMmVmZHFcIixcblx0XCJlbGVtV2F0ZXJDb250YWluZXJcIjogXCJIb21lX2VsZW1XYXRlckNvbnRhaW5lcl9fMVVTbnVcIixcblx0XCJlbGVtTGlnaHRDb250YWluZXJcIjogXCJIb21lX2VsZW1MaWdodENvbnRhaW5lcl9fMk5malNcIixcblx0XCJlbGVtRGFya0NvbnRhaW5lclwiOiBcIkhvbWVfZWxlbURhcmtDb250YWluZXJfX1dYQXJqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==