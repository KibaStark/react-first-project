self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectDestructuringEmpty; }
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
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

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
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
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    var handleLoad = function handleLoad() {
      if (!img.src.startsWith('data:')) {
        var p = 'decode' in img ? img.decode() : Promise.resolve();
        p["catch"](function () {}).then(function () {
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
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'empty' : _ref$placeholder,
      blurDataURL = _ref.blurDataURL,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  var staticSrc = '';

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"width\" or \"height\" property. These should be numeric values."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn("Image with src \"".concat(src, "\" is smaller than 40x40. Consider removing the \"placeholder='blur'\" property to improve performance."));
      }

      if (!blurDataURL) {
        var VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error("Image with src \"".concat(src, "\" has \"placeholder='blur'\" property but is missing the \"blurDataURL\" property.\n          Possible solutions:\n            - Add a \"blurDataURL\" property, the contents should be a small Data URL to represent the image\n            - Change the \"src\" property to a static import with one of the supported file types: ").concat(VALID_BLUR_EXT.join(','), "\n            - Remove the \"placeholder\" property, effectively no blur effect\n          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url"));
      }
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = (0, _extends2["default"])({
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
    objectFit: objectFit,
    objectPosition: objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

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
        paddingTop: paddingTop
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
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
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
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
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
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, !isVisible && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: function ref(element) {
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
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
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


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/composants/Unite/Unite */ "./src/composants/Unite/Unite.tsx");
/* harmony import */ var _src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/composants/Unite/Element */ "./src/composants/Unite/Element.tsx");
/* harmony import */ var _src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/composants/Chimere/Chimere */ "./src/composants/Chimere/Chimere.tsx");
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* harmony import */ var _src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/composants/AV/AV */ "./src/composants/AV/AV.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\user\\[id].tsx",
    _s = $RefreshSig$();











var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function Home() {
  _s();

  var _this = this;

  var id = router.query.id;

  var connexionBox = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('connexionBox');
              _context.next = 3;
              return axios.get("http://localhost:8080/api/getUnite/".concat(id));

            case 3:
              response = _context.sent;
              localStorage.setItem('Box', JSON.stringify(response.data.data));
              console.log(response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function connexionBox() {
      return _ref.apply(this, arguments);
    };
  }();

  connexionBox();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      userUnitesFireUR = _useState[0],
      setUserUnitesFireUR = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      unitesfireMR = _useState2[0],
      setUnitesfireMR = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
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

  var getUnites = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("http://localhost:8080/api/getUnite/".concat(id));

            case 2:
              response = _context2.sent;
              console.log(response);
              setUserUnitesFireUR(response.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getUnites() {
      return _ref2.apply(this, arguments);
    };
  }();

  var test2 = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get('http://localhost:8080/api/Unites/fire/MR');

            case 2:
              response = _context3.sent;
              console.log(response);
              setUnitesfireMR(response.data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function test2() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      var sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),
      session = _useState3[0],
      setSession = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
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
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_8__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().uniteContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_5__.Element, {
        elem: "fire",
        name: "fire"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().elemFireContainer),
        children: userUnitesFireUR.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            id: unite.id,
            element: unite.element,
            level: unite.level,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 76
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().AV2),
        children: atvURFire.map(function (av, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_9__.AV, {
            name: av.name,
            element: av.elem,
            image: av.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 52
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().chimere),
        children: chimereURFire.map(function (chimere, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__.Chimere, {
            name: chimere.name,
            element: chimere.elem,
            image: chimere.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 61
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().elemFireContainer),
        children: unitesfireMR.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            element: unite.element,
            sniv: unite.sniv,
            niv: unite.niv,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 54
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().AV2),
        children: atvMRFire.map(function (av, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_9__.AV, {
            name: av.name,
            element: av.elem,
            image: av.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 52
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().chimere),
        children: chimereMRFire.map(function (chimere, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__.Chimere, {
            name: chimere.name,
            element: chimere.elem,
            image: chimere.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 61
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE SR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().elemFireContainer),
        children: unitesSRFire.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            element: unite.element,
            sniv: unite.sniv,
            niv: unite.niv,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 54
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().chimere),
        children: chimereSRFire.map(function (chimere, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__.Chimere, {
            name: chimere.name,
            element: chimere.elem,
            image: chimere.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 61
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE R"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().elemFireContainer),
        children: unitesRFire.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            element: unite.element,
            sniv: unite.sniv,
            niv: unite.niv,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 53
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 9
  }, this);
}

_s(Home, "X3+8v6vCEpSM6BYhNb7UEBj0ze0=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/AV/AV.tsx":
/*!**********************************!*\
  !*** ./src/composants/AV/AV.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AV": function() { return /* binding */ AV; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Unite_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unite/Element */ "./src/composants/Unite/Element.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\AV\\AV.tsx",
    _this = undefined;



var AV = function AV(_ref) {
  var name = _ref.name,
      element = _ref.element,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? '/images/unnamed.jpg' : _ref$image;
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
      name: name,
      elem: element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, _this);
};
_c = AV;

var _c;

$RefreshReg$(_c, "AV");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/Chimere/Chimere.tsx":
/*!********************************************!*\
  !*** ./src/composants/Chimere/Chimere.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chimere": function() { return /* binding */ Chimere; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Unite_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unite/Element */ "./src/composants/Unite/Element.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Chimere\\Chimere.tsx",
    _this = undefined;



var Chimere = function Chimere(_ref) {
  var name = _ref.name,
      element = _ref.element,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? '/images/unnamed.jpg' : _ref$image;
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
      name: name,
      elem: element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }, _this);
};
_c = Chimere;

var _c;

$RefreshReg$(_c, "Chimere");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/composants/Header/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.css */ "./src/composants/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserProfile/UserProfile */ "./src/composants/UserProfile/UserProfile.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Header\\Header.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Header = function Header(_ref) {
  _s();

  (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var OnElementClick = function OnElementClick(route) {
    router.push("/".concat(route));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      var sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      session = _useState[0],
      setSession = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_4__.UserProfile, {
        pseudo: (session === null || session === void 0 ? void 0 : session.pseudo) || 'vous n\'êtes pas connecté'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().AedesLumina),
        children: "Aedes Lumina"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().ButtonEloria),
          onClick: function onClick() {
            OnElementClick('Eloria');
          },
          children: "Eloria"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().ButtonAirole),
          onClick: function onClick() {
            OnElementClick('Airole');
          },
          children: "Airole"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().ButtonIvalice),
          onClick: function onClick() {
            OnElementClick('Ivalice');
          },
          children: "Ivalice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().deco),
          onClick: function onClick() {
            OnElementClick(''), localStorage.clear();
          },
          children: "D\xE9connexion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 12
  }, _this);
};

_s(Header, "UDenloJJsR1hgCjdIVDdSNWCEL4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/SideBar/SideBar.tsx":
/*!********************************************!*\
  !*** ./src/composants/SideBar/SideBar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBar": function() { return /* binding */ SideBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _Unite_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unite/Element */ "./src/composants/Unite/Element.tsx");
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideBar.module.css */ "./src/composants/SideBar/SideBar.module.css");
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\SideBar\\SideBar.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var SideBar = function SideBar(_ref) {
  _s();

  (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var OnElementClick = function OnElementClick(route) {
    router.push("/".concat(route));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().MenuContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonMain),
        onClick: function onClick() {
          OnElementClick('Main');
        },
        children: "Main"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonMain),
        onClick: function onClick() {
          OnElementClick('Equipement');
        },
        children: "Equipement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["ButtonChimère"]),
        onClick: function onClick() {
          OnElementClick('Chimere');
        },
        children: "Chim\xE8re"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonAV),
        onClick: function onClick() {
          OnElementClick('AV');
        },
        children: "Atout Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUnite),
        onClick: function onClick() {
          OnElementClick('Unite');
        },
        children: "Unite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteFire),
        onClick: function onClick() {
          OnElementClick('Fire');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "fire",
          name: "fire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteIce),
        onClick: function onClick() {
          OnElementClick('Ice');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "ice",
          name: "ice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteWind),
        onClick: function onClick() {
          OnElementClick('Wind');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "wind",
          name: "wind"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteEarth),
        onClick: function onClick() {
          OnElementClick('Earth');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "earth",
          name: "earth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteLightning),
        onClick: function onClick() {
          OnElementClick('Lightning');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "lightning",
          name: "lightning"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteWater),
        onClick: function onClick() {
          OnElementClick('Water');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "water",
          name: "water"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteLight),
        onClick: function onClick() {
          OnElementClick('Light');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "light",
          name: "light"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().ButtonUniteDark),
        onClick: function onClick() {
          OnElementClick('Dark');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Unite_Element__WEBPACK_IMPORTED_MODULE_2__.Element, {
          elem: "dark",
          name: "dark"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, _this);
};

_s(SideBar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = SideBar;

var _c;

$RefreshReg$(_c, "SideBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/Unite/Element.tsx":
/*!******************************************!*\
  !*** ./src/composants/Unite/Element.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": function() { return /* binding */ Element; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Unite\\Element.tsx",
    _this = undefined;


var Element = function Element(_ref) {
  var elem = _ref.elem,
      name = _ref.name;
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      height: 40,
      width: 40,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 10
  }, _this);
};
_c = Element;

var _c;

$RefreshReg$(_c, "Element");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/Unite/Unite.tsx":
/*!****************************************!*\
  !*** ./src/composants/Unite/Unite.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unite": function() { return /* binding */ Unite; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Unite\\Unite.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");


var Unite = function Unite(_ref) {
  _s();

  var id = _ref.id,
      name = _ref.name,
      level = _ref.level,
      element = _ref.element,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? '/images/unnamed.jpg' : _ref$image;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(level),
      levelUp = _useState[0],
      setLevelUp = _useState[1];

  var onLevelUpChange = function onLevelUpChange(event) {
    setLevelUp(event.target.value);
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(id),
      iD = _useState2[0],
      setId = _useState2[1];

  var onIdChange = function onIdChange(event) {
    setId(event.target.value);
  };

  var changeUniteLevel = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log('changeLevel');
              _context.next = 4;
              return axios.post('http://localhost:8080/api/sessionUniteLevel', {
                iD: parseInt(iD),
                levelUp: parseInt(levelUp)
              });

            case 4:
              getUnites();
              console.log('changeFinish');
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

              if (!_context.t0) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", alert('erreur'));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function changeUniteLevel() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      var sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      session = _useState3[0],
      setSession = _useState3[1];

  var getUnites = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("http://localhost:8080/api/getUnite/".concat(session.id));

            case 2:
              response = _context2.sent;
              console.log(response);
              setUserUnitesFireUR(response.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getUnites() {
      return _ref3.apply(this, arguments);
    };
  }();

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      userUnitesFireUR = _useState4[0],
      setUserUnitesFireUR = _useState4[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().divUnite),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 12
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 18
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 81
      }, _this), "level : ", levelUp, " - ", id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 10
  }, _this);
};

_s(Unite, "wux658rOa4t4tfs84aeW4O3ZnjI=");

_c = Unite;

var _c;

$RefreshReg$(_c, "Unite");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/UserProfile/UserProfile.tsx":
/*!****************************************************!*\
  !*** ./src/composants/UserProfile/UserProfile.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfile": function() { return /* binding */ UserProfile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\UserProfile\\UserProfile.tsx",
    _this = undefined;

var UserProfile = function UserProfile(_ref) {
  var id = _ref.id,
      pseudo = _ref.pseudo,
      email = _ref.email,
      grade = _ref.grade;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [id, pseudo, email, grade]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, _this);
};
_c = UserProfile;

var _c;

$RefreshReg$(_c, "UserProfile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/composants/Header/Header.module.css":
/*!*************************************************!*\
  !*** ./src/composants/Header/Header.module.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Header.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/Header/Header.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Header.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/Header/Header.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Header.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/Header/Header.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/composants/SideBar/SideBar.module.css":
/*!***************************************************!*\
  !*** ./src/composants/SideBar/SideBar.module.css ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./SideBar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/SideBar/SideBar.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./SideBar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/SideBar/SideBar.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./SideBar.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/SideBar/SideBar.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/Header/Header.module.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/Header/Header.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Header_header__1Zc8B {\r\n    z-index: 1;\r\n    background-color: rgb(104, 103, 103);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 75px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content:center;\r\n  }\r\n  .Header_AedesLumina__VXZ94 {\r\n    font-size: 30px;\r\n    letter-spacing: 5px;\r\n  }\r\n  .Header_ButtonEloria__3HqxI {\r\n    width: 30%;\r\n    height: 40px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .Header_ButtonAirole__uElDY {\r\n    width: 30%;\r\n    height: 40px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .Header_ButtonIvalice__1GG7g {\r\n    width: 30%;\r\n    height: 40px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .Header_deco__x-u18{\r\n    width: 50%;\r\n    height: 30px;\r\n    background-color: rgb(255, 255, 255);\r\n  }", "",{"version":3,"sources":["webpack://src/composants/Header/Header.module.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,oCAAoC;IACpC,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,UAAU;IACV,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,UAAU;IACV,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,UAAU;IACV,YAAY;IACZ,oCAAoC;EACtC","sourcesContent":[".header {\r\n    z-index: 1;\r\n    background-color: rgb(104, 103, 103);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 75px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content:center;\r\n  }\r\n  .AedesLumina {\r\n    font-size: 30px;\r\n    letter-spacing: 5px;\r\n  }\r\n  .ButtonEloria {\r\n    width: 30%;\r\n    height: 40px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .ButtonAirole {\r\n    width: 30%;\r\n    height: 40px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .ButtonIvalice {\r\n    width: 30%;\r\n    height: 40px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .deco{\r\n    width: 50%;\r\n    height: 30px;\r\n    background-color: rgb(255, 255, 255);\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "Header_header__1Zc8B",
	"AedesLumina": "Header_AedesLumina__VXZ94",
	"ButtonEloria": "Header_ButtonEloria__3HqxI",
	"ButtonAirole": "Header_ButtonAirole__uElDY",
	"ButtonIvalice": "Header_ButtonIvalice__1GG7g",
	"deco": "Header_deco__x-u18"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/SideBar/SideBar.module.css":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/composants/SideBar/SideBar.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SideBar_MenuContainer__1c51R{\r\n    z-index: 2;\r\n    position: fixed;\r\n    background-color: rgb(104, 103, 103);\r\n    right: 0px;\r\n    width: 100px;\r\n    height: 100%;\r\n    text-align: center;\r\n  }\r\n  .SideBar_ButtonMain__1TMI1 {\r\n      width: 90px;\r\n      height: 50px;\r\n      background-color: rgb(255, 255, 255);\r\n  }\r\n  .SideBar_ButtonChim_re__3kejL {\r\n      width: 90px;\r\n      height: 50px;\r\n      background-color: rgb(255, 255, 255);\r\n  }\r\n  .SideBar_ButtonAV__2s08D {\r\n    width: 90px;\r\n    height: 50px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  \r\n  .SideBar_ButtonUnite__3Cr8N {\r\n    width: 90px;\r\n    height: 50px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .SideBar_ButtonUniteFire__HuxRZ {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(211, 0, 0);\r\n  }\r\n  .SideBar_ButtonUniteIce__1oFVt {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(157, 240, 255);\r\n  }\r\n  .SideBar_ButtonUniteWind__HHxzw {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(8, 168, 16);\r\n  }\r\n  .SideBar_ButtonUniteEarth__sgR0I {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(230, 140, 6);\r\n  }\r\n  .SideBar_ButtonUniteLightning__3s6dw {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(235, 219, 74);\r\n  }\r\n  .SideBar_ButtonUniteWater__2Hgah {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(4, 94, 211);\r\n  }\r\n  .SideBar_ButtonUniteLight__1bCHf {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(199, 194, 185);\r\n  }\r\n  .SideBar_ButtonUniteDark__2TcqK {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(116, 28, 89);\r\n  }\r\n\r\n", "",{"version":3,"sources":["webpack://src/composants/SideBar/SideBar.module.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,eAAe;IACf,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;EACA;MACI,WAAW;MACX,YAAY;MACZ,oCAAoC;EACxC;EACA;MACI,WAAW;MACX,YAAY;MACZ,oCAAoC;EACxC;EACA;IACE,WAAW;IACX,YAAY;IACZ,oCAAoC;EACtC;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,WAAW;IACX,YAAY;IACZ,gCAAgC;EAClC;EACA;IACE,WAAW;IACX,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,WAAW;IACX,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,WAAW;IACX,YAAY;IACZ,kCAAkC;EACpC;EACA;IACE,WAAW;IACX,YAAY;IACZ,mCAAmC;EACrC;EACA;IACE,WAAW;IACX,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,WAAW;IACX,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,WAAW;IACX,YAAY;IACZ,kCAAkC;EACpC","sourcesContent":[".MenuContainer{\r\n    z-index: 2;\r\n    position: fixed;\r\n    background-color: rgb(104, 103, 103);\r\n    right: 0px;\r\n    width: 100px;\r\n    height: 100%;\r\n    text-align: center;\r\n  }\r\n  .ButtonMain {\r\n      width: 90px;\r\n      height: 50px;\r\n      background-color: rgb(255, 255, 255);\r\n  }\r\n  .ButtonChimère {\r\n      width: 90px;\r\n      height: 50px;\r\n      background-color: rgb(255, 255, 255);\r\n  }\r\n  .ButtonAV {\r\n    width: 90px;\r\n    height: 50px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  \r\n  .ButtonUnite {\r\n    width: 90px;\r\n    height: 50px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .ButtonUniteFire {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(211, 0, 0);\r\n  }\r\n  .ButtonUniteIce {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(157, 240, 255);\r\n  }\r\n  .ButtonUniteWind {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(8, 168, 16);\r\n  }\r\n  .ButtonUniteEarth {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(230, 140, 6);\r\n  }\r\n  .ButtonUniteLightning {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(235, 219, 74);\r\n  }\r\n  .ButtonUniteWater {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(4, 94, 211);\r\n  }\r\n  .ButtonUniteLight {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(199, 194, 185);\r\n  }\r\n  .ButtonUniteDark {\r\n    width: 65px;\r\n    height: 60px;\r\n    background-color: rgb(116, 28, 89);\r\n  }\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
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
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[],disableStaticImages:false};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvW2lkXS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb3NhbnRzL0FWL0FWLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvQ2hpbWVyZS9DaGltZXJlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb3NhbnRzL1VuaXRlL0VsZW1lbnQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9zYW50cy9Vbml0ZS9Vbml0ZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzPzQwNjUiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhci5tb2R1bGUuY3NzPzVjMzUiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb3NhbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvU2lkZUJhci9TaWRlQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImNvbmZpZ0RldmljZVNpemVzIiwiZGV2aWNlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsImxvYWRlciIsImNvbmZpZ1BhdGgiLCJwYXRoIiwiY29uZmlnRG9tYWlucyIsImRvbWFpbnMiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5IiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsInVzZUVmZmVjdCIsImlkbGVDYWxsYmFjayIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJjcmVhdGVPYnNlcnZlciIsImlkIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsInNldCIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInN0ciIsIndpbmRvdyIsImJ0b2EiLCJheGlvcyIsIkhvbWUiLCJyb3V0ZXIiLCJxdWVyeSIsImNvbm5leGlvbkJveCIsImxvZyIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJ1c2VyVW5pdGVzRmlyZVVSIiwic2V0VXNlclVuaXRlc0ZpcmVVUiIsInVuaXRlc2ZpcmVNUiIsInNldFVuaXRlc2ZpcmVNUiIsInRlc3QyIiwidW5pdGVzU1JGaXJlIiwibmFtZSIsInNuaXYiLCJuaXYiLCJpbWFnZSIsInVuaXRlc1JGaXJlIiwiYXR2VVJGaXJlIiwiZWxlbSIsImF0dk1SRmlyZSIsImNoaW1lcmVVUkZpcmUiLCJjaGltZXJlTVJGaXJlIiwiY2hpbWVyZVNSRmlyZSIsImdldFVuaXRlcyIsImxvY2FsU2Vzc2lvbiIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwicGFyc2UiLCJzZXRTZXNzaW9uIiwic2Vzc2lvbiIsInN0eWxlcyIsInVuaXRlIiwiaW5kZXgiLCJsZXZlbCIsImF2IiwiY2hpbWVyZSIsIkFWIiwiQ2hpbWVyZSIsIkhlYWRlciIsInVzZVJvdXRlciIsIk9uRWxlbWVudENsaWNrIiwicm91dGUiLCJwc2V1ZG8iLCJjbGVhciIsIlNpZGVCYXIiLCJFbGVtZW50IiwiVW5pdGUiLCJsZXZlbFVwIiwic2V0TGV2ZWxVcCIsIm9uTGV2ZWxVcENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJpRCIsInNldElkIiwib25JZENoYW5nZSIsImNoYW5nZVVuaXRlTGV2ZWwiLCJwb3N0IiwiYWxlcnQiLCJVc2VyUHJvZmlsZSIsImVtYWlsIiwiZ3JhZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7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TSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLHlDQUF5QyxtQkFBbUIsd0JBQXdCLDZDQUE2QyxtQkFBbUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsT0FBTyxtQkFBbUIsc0JBQXNCLHVCQUF1QiwrQ0FBK0MsT0FBTyxzQkFBc0Isc0JBQXNCLHVCQUF1QiwrQ0FBK0MsT0FBTyxpQkFBaUIsb0JBQW9CLHFCQUFxQiw2Q0FBNkMsT0FBTywwQkFBMEIsb0JBQW9CLHFCQUFxQiw2Q0FBNkMsT0FBTyx3QkFBd0Isb0JBQW9CLHFCQUFxQix5Q0FBeUMsT0FBTyx1QkFBdUIsb0JBQW9CLHFCQUFxQiw2Q0FBNkMsT0FBTyx3QkFBd0Isb0JBQW9CLHFCQUFxQiwwQ0FBMEMsT0FBTyx5QkFBeUIsb0JBQW9CLHFCQUFxQiwyQ0FBMkMsT0FBTyw2QkFBNkIsb0JBQW9CLHFCQUFxQiw0Q0FBNEMsT0FBTyx5QkFBeUIsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsT0FBTyx5QkFBeUIsb0JBQW9CLHFCQUFxQiw2Q0FBNkMsT0FBTyx3QkFBd0Isb0JBQW9CLHFCQUFxQiwyQ0FBMkMsT0FBTywyQkFBMkI7QUFDL2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCYSxrQkFBa0IsTUFBTSwwQkFBMEIsQ0FBQyxxQkFBcUIsUUFBUSw4REFBOEQscUJBQXFCLGVBQWUsMEJBQTBCLHNLQUFzSywwQkFBMEI7QUFDelosd0M7Ozs7Ozs7Ozs7QUNEQSwyR0FBK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLmZkNzI0NWFmZmNjNjQzYzRjNzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5KG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgZGVzdHJ1Y3R1cmUgdW5kZWZpbmVkXCIpO1xufSIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudG9CYXNlNjQ9dG9CYXNlNjQ7LyoqXG4gKiBJc29tb3JwaGljIGJhc2U2NCB0aGF0IHdvcmtzIG9uIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICovZnVuY3Rpb24gdG9CYXNlNjQoc3RyKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe3JldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKTt9ZWxzZXtyZXR1cm4gd2luZG93LmJ0b2Eoc3RyKTt9fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG8tYmFzZS02NC5qcy5tYXAiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVbml0ZSwgUHJvcHMgYXMgVW5pdGVQcm9wc30gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvVW5pdGUvRWxlbWVudCdcclxuaW1wb3J0IHtDaGltZXJlfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9DaGltZXJlL0NoaW1lcmUnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uLy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHtBVn0gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvQVYvQVYnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5pbXBvcnQge1VzZXJQcm9maWxlLCBQcm9wcyBhcyBVc2VyUHJvZmlsZVByb3BzfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZSdcclxuaW1wb3J0IHtVc2VyVW5pdGUsIFByb3BzIGFzIFVzZXJVbml0ZVByb3BzfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyVW5pdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IGNvbm5leGlvbkJveCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmV4aW9uQm94JylcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUvJHtpZH1gKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQm94JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS5kYXRhKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmV4aW9uQm94KCk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJVbml0ZXNGaXJlVVIsIHNldFVzZXJVbml0ZXNGaXJlVVJdID0gdXNlU3RhdGU8VW5pdGVQcm9wc1tdPihbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFt1bml0ZXNmaXJlTVIsIHNldFVuaXRlc2ZpcmVNUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgdGVzdDIoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy8gY29uc3QgW3VzZXJ1bml0ZXNmaXJlVVIsIHNldFVzZXJVbml0ZXNmaXJlVVJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgLy8gICAgIHRlc3QzKClcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIC8vIHZhciB1bml0ZXNVUkZpcmU9W3tcclxuICAgIC8vIG5hbWU6J0RlbGl0YScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjo5OSwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvRGVsaXRhLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0VsZG8nLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvRWxkby5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidLaW5nIG1vbnQnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MTIwLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9LaW5nIG1vbnQucG5nJ30se1xyXG4gICAgLy8gbmFtZTonTHVhcnRoYScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9MdWFydGhhLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J01hY2hhbGllIEhpdmVyJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01hY2hhbGllIEhpdmVyLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1JhaW4nLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvUmFpbi5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidSaGFsZG9yJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL1JoYWxkb3IucG5nJ31cclxuICAgIC8vIF1cclxuXHJcbiAgICAvLyB2YXIgdW5pdGVzTVJGaXJlPVt7XHJcbiAgICAvLyBuYW1lOidBZGVsYXJkJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9BZGVsYXJkLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0xpbHl0aCcsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9MaWx5dGgucG5nJ30se1xyXG4gICAgLy8gbmFtZTonTWFyZ3JpdHRlJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjEyMCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvTWFyZ3JpdHRlLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1NleW1vcmUnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvU2V5bW9yZS5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidZc2h0b2xhJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL1lzaHRvbGEucG5nJ31cclxuICAgIC8vIF1cclxuXHJcbiAgICB2YXIgdW5pdGVzU1JGaXJlPVt7XHJcbiAgICBuYW1lOidOYWlhaCcsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjo5OSwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvU1IvTmFpYWgucG5nJ31cclxuICAgIF1cclxuICAgIFxyXG4gICAgdmFyIHVuaXRlc1JGaXJlPVt7XHJcbiAgICBuYW1lOidNaWNoYcOpJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9SL01pY2hhw6kucG5nJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgYXR2VVJGaXJlPVt7XHJcbiAgICAgICAgbmFtZTonR3VlcnJpZXJzIGRlcyB0w6luw6hicmVzJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL0d1ZXJyaWVycyBkZXMgdMOpbsOoYnJlcy5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonSWZyaXQnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvSWZyaXQucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J0xlcyBnYXJkaWVucyBkZXMgY3Jpc3RhdXgnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTGVzIGdhcmRpZW5zIGRlcyBjcmlzdGF1eC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTW9udCBMZW9uaXMsIGxlIHJvaSBkZXMgbGlvbnMnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTW9udCBMZW9uaXMsIGxlIHJvaSBkZXMgbGlvbnMucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1Bow6luaXgnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvUGjDqW5peC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonUmVuY29udHJlIGjDqXJvw69xdWUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvUmVuY29udHJlIGjDqXJvw69xdWUucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1NlbnRpbmVsbGUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvU2VudGluZWxsZS5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonVW4gc2ltcGxlIGJyaW4gZGhlcmJlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL1VuIHNpbXBsZSBicmluIGRoZXJiZS5wbmcnfVxyXG4gICAgICBdXHJcblxyXG4gICAgICB2YXIgYXR2TVJGaXJlPVt7XHJcbiAgICAgICAgbmFtZTonTWFyaWxpdGgnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvTWFyaWxpdGgucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J01vYml1cyBkZSBsZXNwb2lyIGV0IGRlcyBpbGx1c2lvbnMnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvTW9iaXVzIGRlIGxlc3BvaXIgZXQgZGVzIGlsbHVzaW9ucy5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonUmVpbmUgTGFtaWEnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvUmVpbmUgTGFtaWEucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1VuZSB2aWUgc8OpdmVpbGxlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL1VuZSB2aWUgc8OpdmVpbGxlLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidWb2l4IGRlIGxhIHZlbmdlYW5jZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9Wb2l4IGRlIGxhIHZlbmdlYW5jZS5wbmcnfVxyXG4gICAgICBdXHJcblxyXG4gICAgdmFyIGNoaW1lcmVVUkZpcmU9W3tcclxuICAgIG5hbWU6J0lmcml0JywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL0lmcml0LnBuZyd9LHtcclxuICAgIG5hbWU6J1Bow6luaXgnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvUGjDqW5peC5wbmcnfSx7XHJcbiAgICBuYW1lOidTZW50aW5lbGxlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL1NlbnRpbmVsbGUucG5nJ31cclxuICAgICAgICBdICBcclxuXHJcbiAgICB2YXIgY2hpbWVyZU1SRmlyZT1be1xyXG4gICAgbmFtZTonTWFyaWxpdGgnLCBlbGVtOidGaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvTWFyaWxpdGgucG5nJ30se1xyXG4gICAgbmFtZTonUmVpbmUgbGFtaWEnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvUmVpbmUgbGFtaWEucG5nJ31cclxuICAgICAgICBdXHJcblxyXG4gICAgdmFyIGNoaW1lcmVTUkZpcmU9W3tcclxuICAgIG5hbWU6J0JvbWJvJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0NoaW3DqHJlL0JvbWJvLnBuZyd9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIGNvbnN0IGdldFVuaXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUvJHtpZH1gKTtcclxuICAgICAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgICAgICBzZXRVc2VyVW5pdGVzRmlyZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlc3QyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9Vbml0ZXMvZmlyZS9NUicpO1xyXG4gICAgICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgICAgIHNldFVuaXRlc2ZpcmVNUihyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB2YXIgbG9jYWxTZXNzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKVxyXG4gICAgICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbiAgICAgICAgIGlmIChzZXNzaW9uT2JqZWN0KXtcclxuICAgICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uIF0gPSB1c2VTdGF0ZTxVc2VyUHJvZmlsZVByb3BzPigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChzZXNzaW9uICE9bnVsbCl7XHJcbiAgICAgICAgICAgIGdldFVuaXRlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nlc3Npb25dKVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnN0IFt1c2VyVW5pdGVzRmlyZVVSLCBzZXRVc2VyVW5pdGVzRmlyZVVSIF0gPSB1c2VTdGF0ZTxVc2VyVW5pdGVQcm9wcz4oW10pO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIC8vICAgICB0ZXN0MygpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyBjb25zdCB0ZXN0MyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUnKTtcclxuICAgIC8vICAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIC8vICAgICBzZXRVc2VyVW5pdGVzZmlyZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPFNpZGVCYXIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bml0ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoND5GSVJFIFVSPC9oND5cclxuICAgICAgICAgICAgPEVsZW1lbnQgZWxlbT0nZmlyZScgbmFtZT0nZmlyZScgPjwvRWxlbWVudD5cclxuICAgICAgICAgICAgPGg1PlVuaXTDqXMgVVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1GaXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt1c2VyVW5pdGVzRmlyZVVSLm1hcCgodW5pdGU6VW5pdGVQcm9wcywgaW5kZXg6bnVtYmVyKSA9PiAoPFVuaXRlIG5hbWU9e3VuaXRlLm5hbWV9IGlkPXt1bml0ZS5pZH0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gbGV2ZWw9e3VuaXRlLmxldmVsfSBrZXk9e2luZGV4fSBpbWFnZT17dW5pdGUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+QXRvdXQgdmlzaW9uIFVSPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQVYyfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXR2VVJGaXJlLm1hcCgoYXYsIGluZGV4KSA9PiAoPEFWIG5hbWU9e2F2Lm5hbWV9IGVsZW1lbnQ9e2F2LmVsZW19IGtleT17aW5kZXh9IGltYWdlPXthdi5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT5DaGltw6hyZSBVUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaW1lcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGltZXJlVVJGaXJlLm1hcCgoY2hpbWVyZSwgaW5kZXgpID0+ICg8Q2hpbWVyZSBuYW1lPXtjaGltZXJlLm5hbWV9IGVsZW1lbnQ9e2NoaW1lcmUuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2NoaW1lcmUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQ+RklSRSBNUjwvaDQ+XHJcbiAgICAgICAgICAgIDxoNT5Vbml0w6lzIE1SPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUZpcmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3VuaXRlc2ZpcmVNUi5tYXAoKHVuaXRlLCBpbmRleCkgPT4gKDxVbml0ZSBuYW1lPXt1bml0ZS5uYW1lfSBlbGVtZW50PXt1bml0ZS5lbGVtZW50fSBzbml2PXt1bml0ZS5zbml2fSBuaXY9e3VuaXRlLm5pdn0ga2V5PXtpbmRleH0gaW1hZ2U9e3VuaXRlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkF0b3V0IHZpc2lvbiBNUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFWMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2F0dk1SRmlyZS5tYXAoKGF2LCBpbmRleCkgPT4gKDxBViBuYW1lPXthdi5uYW1lfSBlbGVtZW50PXthdi5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17YXYuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+Q2hpbcOocmUgTVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGltZXJlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbWVyZU1SRmlyZS5tYXAoKGNoaW1lcmUsIGluZGV4KSA9PiAoPENoaW1lcmUgbmFtZT17Y2hpbWVyZS5uYW1lfSBlbGVtZW50PXtjaGltZXJlLmVsZW19IGtleT17aW5kZXh9IGltYWdlPXtjaGltZXJlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0PkZJUkUgU1I8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtRmlyZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdGVzU1JGaXJlLm1hcCgodW5pdGUsIGluZGV4KSA9PiAoPFVuaXRlIG5hbWU9e3VuaXRlLm5hbWV9IGVsZW1lbnQ9e3VuaXRlLmVsZW1lbnR9IHNuaXY9e3VuaXRlLnNuaXZ9IG5pdj17dW5pdGUubml2fSBrZXk9e2luZGV4fSBpbWFnZT17dW5pdGUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGltZXJlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbWVyZVNSRmlyZS5tYXAoKGNoaW1lcmUsIGluZGV4KSA9PiAoPENoaW1lcmUgbmFtZT17Y2hpbWVyZS5uYW1lfSBlbGVtZW50PXtjaGltZXJlLmVsZW19IGtleT17aW5kZXh9IGltYWdlPXtjaGltZXJlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0PkZJUkUgUjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1GaXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt1bml0ZXNSRmlyZS5tYXAoKHVuaXRlLCBpbmRleCkgPT4gKDxVbml0ZSBuYW1lPXt1bml0ZS5uYW1lfSBlbGVtZW50PXt1bml0ZS5lbGVtZW50fSBzbml2PXt1bml0ZS5zbml2fSBuaXY9e3VuaXRlLm5pdn0ga2V5PXtpbmRleH0gaW1hZ2U9e3VuaXRlLmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSBcIi4uL1VuaXRlL0VsZW1lbnRcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQVYubW9kdWxlLmNzcydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbGVtZW50OnN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVjpGQzxQcm9wcz4gPSAoe25hbWUsIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD17MTUwfSB3aWR0aD17MTAwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICAgICAgICA8RWxlbWVudCBuYW1lPXtuYW1lfSBlbGVtPXtlbGVtZW50fT48L0VsZW1lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuLi9Vbml0ZS9FbGVtZW50XCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbGVtZW50OnN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGltZXJlOkZDPFByb3BzPiA9ICh7bmFtZSwgZWxlbWVudCwgaW1hZ2U9Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsxNTB9IHdpZHRoPXsxNTB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPlxyXG4gICAgICAgIDxFbGVtZW50IG5hbWU9e25hbWV9IGVsZW09e2VsZW1lbnR9PjwvRWxlbWVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1VzZXJQcm9maWxlLCBQcm9wcyBhcyBVc2VyUHJvZmlsZVByb3BzfSBmcm9tICcuLi9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZSdcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXI6RkM8UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBPbkVsZW1lbnRDbGljayA9IChyb3V0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvJHtyb3V0ZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICB2YXIgbG9jYWxTZXNzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKVxyXG4gICAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XHJcbiAgICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICAgIGlmIChzZXNzaW9uT2JqZWN0KXtcclxuICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbiBdID0gdXNlU3RhdGU8VXNlclByb2ZpbGVQcm9wcz4oKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG5cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgPFVzZXJQcm9maWxlIHBzZXVkbz17c2Vzc2lvbj8ucHNldWRvIHx8ICd2b3VzIG5cXCfDqnRlcyBwYXMgY29ubmVjdMOpJ30vPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuQWVkZXNMdW1pbmF9PkFlZGVzIEx1bWluYTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQnV0dG9ufT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25FbG9yaWF9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRWxvcmlhJyl9fT5FbG9yaWE8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25BaXJvbGV9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnQWlyb2xlJyl9fT5BaXJvbGU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25JdmFsaWNlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0l2YWxpY2UnKX19Pkl2YWxpY2U8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kZWNvfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJycpLCBsb2NhbFN0b3JhZ2UuY2xlYXIoKX19PkTDqWNvbm5leGlvbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgXHJcbiAgPC9kaXY+XHJcblxyXG5cclxuICB9IiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9Vbml0ZS9FbGVtZW50J1xyXG5pbXBvcnQge0ZDLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGVCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2lkZUJhcjpGQzxQcm9wcz4gPSAoe30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBPbkVsZW1lbnRDbGljayA9IChyb3V0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke3JvdXRlfWApXHJcbiAgICAgIH1cclxuICByZXR1cm4gKCA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW51Q29udGFpbmVyfT5cclxuXHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b25NYWlufSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ01haW4nKX19Pk1haW48L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbk1haW59IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnRXF1aXBlbWVudCcpfX0+RXF1aXBlbWVudDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uQ2hpbcOocmV9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnQ2hpbWVyZScpfX0+Q2hpbcOocmU8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbkFWfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0FWJyl9fT5BdG91dCBWaXNpb248L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ1VuaXRlJyl9fT5Vbml0ZTwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVGaXJlfSBvbkNsaWNrPXsoKSA9PiB7T25FbGVtZW50Q2xpY2soJ0ZpcmUnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nZmlyZScgbmFtZT0nZmlyZScgPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVJY2V9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnSWNlJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2ljZScgbmFtZT0naWNlJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlV2luZH0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdXaW5kJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J3dpbmQnIG5hbWU9J3dpbmQnPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVFYXJ0aH0gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdFYXJ0aCcpfX0+XHJcbiAgICA8RWxlbWVudCBlbGVtPSdlYXJ0aCcgbmFtZT0nZWFydGgnPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9uVW5pdGVMaWdodG5pbmd9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnTGlnaHRuaW5nJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2xpZ2h0bmluZycgbmFtZT0nbGlnaHRuaW5nJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlV2F0ZXJ9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnV2F0ZXInKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nd2F0ZXInIG5hbWU9J3dhdGVyJz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlTGlnaHR9IG9uQ2xpY2s9eygpID0+IHtPbkVsZW1lbnRDbGljaygnTGlnaHQnKX19PlxyXG4gICAgPEVsZW1lbnQgZWxlbT0nbGlnaHQnIG5hbWU9J2xpZ2h0Jz48L0VsZW1lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvblVuaXRlRGFya30gb25DbGljaz17KCkgPT4ge09uRWxlbWVudENsaWNrKCdEYXJrJyl9fT5cclxuICAgIDxFbGVtZW50IGVsZW09J2RhcmsnIG5hbWU9J2RhcmsnPjwvRWxlbWVudD5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IG5vcm1hbGl6ZUNvbmZpZyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2NvbmZpZy1zaGFyZWRcIlxyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZWxlbTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVsZW1lbnQ6RkM8UHJvcHM+ID0gKHtlbGVtLCBuYW1lfSkgPT4ge1xyXG4gICAgdmFyIGltYWdlPSd0ZXN0JztcclxuICAgIHN3aXRjaCAoZWxlbSl7XHJcbiAgICAgICAgY2FzZSAnZmlyZSc6XHJcbiAgICAgICAgICAgIGltYWdlID0gJy9pbWFnZXMvZWxlbWVudC9maXJlLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdpY2UnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9pY2UucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2RhcmsnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9kYXJrLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdlYXJ0aCc6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L2VhcnRoLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdsaWdodCc6XHJcbiAgICAgICAgICAgIGltYWdlID0nL2ltYWdlcy9lbGVtZW50L2xpZ2h0LnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdsaWdodG5pbmcnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC9saWdodG5pbmcucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ3dhdGVyJzpcclxuICAgICAgICAgICAgaW1hZ2UgPScvaW1hZ2VzL2VsZW1lbnQvd2F0ZXIucG5nJ1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ3dpbmQnOlxyXG4gICAgICAgICAgICBpbWFnZSA9Jy9pbWFnZXMvZWxlbWVudC93aW5kLnBuZydcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBpbWFnZT0gJy9pbWFnZXMvZWxlbWVudC9maXJlLnBuZydcclxuICAgIH1cclxuICByZXR1cm4gPGRpdj5cclxuXHJcbiAgPHNwYW4gPntuYW1lfTwvc3Bhbj5cclxuICA8SW1hZ2UgaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz5cclxuICBcclxuPC9kaXY+XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSBcIi4vRWxlbWVudFwiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1VzZXJQcm9maWxlLCBQcm9wcyBhcyBVc2VyUHJvZmlsZVByb3BzfSBmcm9tICcuLi9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOm51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBlbGVtZW50OnN0cmluZztcclxuICBsZXZlbDpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVbml0ZTpGQzxQcm9wcz4gPSAoe2lkLCBuYW1lLCBsZXZlbCwgIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuICBjb25zdCBbbGV2ZWxVcCwgc2V0TGV2ZWxVcCBdID0gdXNlU3RhdGUobGV2ZWwpO1xyXG4gIGNvbnN0IG9uTGV2ZWxVcENoYW5nZSA9IChldmVudDphbnkpID0+IHtzZXRMZXZlbFVwKGV2ZW50LnRhcmdldC52YWx1ZSl9O1xyXG5cclxuICBjb25zdCBbaUQsIHNldElkIF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3Qgb25JZENoYW5nZSA9IChldmVudDphbnkpID0+IHtzZXRJZChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVW5pdGVMZXZlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZUxldmVsJylcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zZXNzaW9uVW5pdGVMZXZlbCcsIHtpRDpwYXJzZUludChpRCksIGxldmVsVXA6cGFyc2VJbnQobGV2ZWxVcCl9KTtcclxuICAgICAgZ2V0VW5pdGVzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VGaW5pc2gnKVxyXG4gICAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiBhbGVydCAoJ2VycmV1cicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICB9XHJcbiAgICBcclxuICB9XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcblxyXG4gIGNvbnN0IGdldFVuaXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke3Nlc3Npb24uaWR9YCk7XHJcbiAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIHNldFVzZXJVbml0ZXNGaXJlVVIocmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuXHJcbmNvbnN0IFt1c2VyVW5pdGVzRmlyZVVSLCBzZXRVc2VyVW5pdGVzRmlyZVVSXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2VW5pdGV9PlxyXG4gICAgPHNwYW4+XHJcbiAgICB7bmFtZX0gPGJyLz4gPGJyLz5cclxuICAgIDxJbWFnZSBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+IDxici8+XHJcbiAgICBsZXZlbCA6IHtsZXZlbFVwfSAtIHtpZH1cclxuICAgIDxmb3JtPlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwiaWRcIiBwbGFjZWhvbGRlcj1cImlkXCIgdmFsdWU9e2lEfSBvbkNoYW5nZT17b25JZENoYW5nZX0+PC9pbnB1dD48L3A+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9XCJsZXZlbFwiIHBsYWNlaG9sZGVyPVwibGV2ZWxcIiB2YWx1ZT17bGV2ZWxVcH0gb25DaGFuZ2U9e29uTGV2ZWxVcENoYW5nZX0vPjwvcD5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImNoYW5nZSAtIGxldmVsXCIgb25DbGljaz17Y2hhbmdlVW5pdGVMZXZlbH0vPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICAgIDwvc3Bhbj4gXHJcbjwvZGl2PlxyXG59IiwiaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgICAgIGlkPzogbnVtYmVyO1xyXG4gICAgICAgIHBzZXVkbzogc3RyaW5nO1xyXG4gICAgICAgIGVtYWlsPzpzdHJpbmc7XHJcbiAgICAgICAgZ3JhZGU6c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb2ZpbGU6RkM8UHJvcHM+ID0gKHtpZCwgcHNldWRvLCBlbWFpbCwgZ3JhZGUgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPntpZH17cHNldWRvfXtlbWFpbH17Z3JhZGV9PC9zcGFuPlxyXG5cclxuICAgIDwvZGl2PlxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL0hlYWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL0hlYWRlci5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9IZWFkZXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vU2lkZUJhci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL1NpZGVCYXIubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vU2lkZUJhci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5IZWFkZXJfaGVhZGVyX18xWmM4QiB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDEwMywgMTAzKTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuSGVhZGVyX0FlZGVzTHVtaW5hX19WWFo5NCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG4gIC5IZWFkZXJfQnV0dG9uRWxvcmlhX18zSHF4SSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgfVxcclxcbiAgLkhlYWRlcl9CdXR0b25BaXJvbGVfX3VFbERZIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuSGVhZGVyX0J1dHRvbkl2YWxpY2VfXzFHRzdnIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuSGVhZGVyX2RlY29fX3gtdTE4e1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7RUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDEwMywgMTAzKTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuQWVkZXNMdW1pbmEge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uRWxvcmlhIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uQWlyb2xlIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uSXZhbGljZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgfVxcclxcbiAgLmRlY297XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzFaYzhCXCIsXG5cdFwiQWVkZXNMdW1pbmFcIjogXCJIZWFkZXJfQWVkZXNMdW1pbmFfX1ZYWjk0XCIsXG5cdFwiQnV0dG9uRWxvcmlhXCI6IFwiSGVhZGVyX0J1dHRvbkVsb3JpYV9fM0hxeElcIixcblx0XCJCdXR0b25BaXJvbGVcIjogXCJIZWFkZXJfQnV0dG9uQWlyb2xlX191RWxEWVwiLFxuXHRcIkJ1dHRvbkl2YWxpY2VcIjogXCJIZWFkZXJfQnV0dG9uSXZhbGljZV9fMUdHN2dcIixcblx0XCJkZWNvXCI6IFwiSGVhZGVyX2RlY29fX3gtdTE4XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlNpZGVCYXJfTWVudUNvbnRhaW5lcl9fMWM1MVJ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTAzLCAxMDMpO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLlNpZGVCYXJfQnV0dG9uTWFpbl9fMVRNSTEge1xcclxcbiAgICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuU2lkZUJhcl9CdXR0b25DaGltX3JlX18za2VqTCB7XFxyXFxuICAgICAgd2lkdGg6IDkwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIH1cXHJcXG4gIC5TaWRlQmFyX0J1dHRvbkFWX18yczA4RCB7XFxyXFxuICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlNpZGVCYXJfQnV0dG9uVW5pdGVfXzNDcjhOIHtcXHJcXG4gICAgd2lkdGg6IDkwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgfVxcclxcbiAgLlNpZGVCYXJfQnV0dG9uVW5pdGVGaXJlX19IdXhSWiB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgLlNpZGVCYXJfQnV0dG9uVW5pdGVJY2VfXzFvRlZ0IHtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMjQwLCAyNTUpO1xcclxcbiAgfVxcclxcbiAgLlNpZGVCYXJfQnV0dG9uVW5pdGVXaW5kX19ISHh6dyB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAxNjgsIDE2KTtcXHJcXG4gIH1cXHJcXG4gIC5TaWRlQmFyX0J1dHRvblVuaXRlRWFydGhfX3NnUjBJIHtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTQwLCA2KTtcXHJcXG4gIH1cXHJcXG4gIC5TaWRlQmFyX0J1dHRvblVuaXRlTGlnaHRuaW5nX18zczZkdyB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIxOSwgNzQpO1xcclxcbiAgfVxcclxcbiAgLlNpZGVCYXJfQnV0dG9uVW5pdGVXYXRlcl9fMkhnYWgge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgOTQsIDIxMSk7XFxyXFxuICB9XFxyXFxuICAuU2lkZUJhcl9CdXR0b25Vbml0ZUxpZ2h0X18xYkNIZiB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5NCwgMTg1KTtcXHJcXG4gIH1cXHJcXG4gIC5TaWRlQmFyX0J1dHRvblVuaXRlRGFya19fMlRjcUsge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAyOCwgODkpO1xcclxcbiAgfVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixvQ0FBb0M7RUFDeEM7RUFDQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osb0NBQW9DO0VBQ3hDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7RUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLk1lbnVDb250YWluZXJ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTAzLCAxMDMpO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLkJ1dHRvbk1haW4ge1xcclxcbiAgICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uQ2hpbcOocmUge1xcclxcbiAgICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uQVYge1xcclxcbiAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5CdXR0b25Vbml0ZSB7XFxyXFxuICAgIHdpZHRoOiA5MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIH1cXHJcXG4gIC5CdXR0b25Vbml0ZUZpcmUge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIC5CdXR0b25Vbml0ZUljZSB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDI0MCwgMjU1KTtcXHJcXG4gIH1cXHJcXG4gIC5CdXR0b25Vbml0ZVdpbmQge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgMTY4LCAxNik7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uVW5pdGVFYXJ0aCB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE0MCwgNik7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uVW5pdGVMaWdodG5pbmcge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMTksIDc0KTtcXHJcXG4gIH1cXHJcXG4gIC5CdXR0b25Vbml0ZVdhdGVyIHtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDk0LCAyMTEpO1xcclxcbiAgfVxcclxcbiAgLkJ1dHRvblVuaXRlTGlnaHQge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTQsIDE4NSk7XFxyXFxuICB9XFxyXFxuICAuQnV0dG9uVW5pdGVEYXJrIHtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMjgsIDg5KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJNZW51Q29udGFpbmVyXCI6IFwiU2lkZUJhcl9NZW51Q29udGFpbmVyX18xYzUxUlwiLFxuXHRcIkJ1dHRvbk1haW5cIjogXCJTaWRlQmFyX0J1dHRvbk1haW5fXzFUTUkxXCIsXG5cdFwiQnV0dG9uQ2hpbcOocmVcIjogXCJTaWRlQmFyX0J1dHRvbkNoaW1fcmVfXzNrZWpMXCIsXG5cdFwiQnV0dG9uQVZcIjogXCJTaWRlQmFyX0J1dHRvbkFWX18yczA4RFwiLFxuXHRcIkJ1dHRvblVuaXRlXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZV9fM0NyOE5cIixcblx0XCJCdXR0b25Vbml0ZUZpcmVcIjogXCJTaWRlQmFyX0J1dHRvblVuaXRlRmlyZV9fSHV4UlpcIixcblx0XCJCdXR0b25Vbml0ZUljZVwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVJY2VfXzFvRlZ0XCIsXG5cdFwiQnV0dG9uVW5pdGVXaW5kXCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZVdpbmRfX0hIeHp3XCIsXG5cdFwiQnV0dG9uVW5pdGVFYXJ0aFwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVFYXJ0aF9fc2dSMElcIixcblx0XCJCdXR0b25Vbml0ZUxpZ2h0bmluZ1wiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVMaWdodG5pbmdfXzNzNmR3XCIsXG5cdFwiQnV0dG9uVW5pdGVXYXRlclwiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVXYXRlcl9fMkhnYWhcIixcblx0XCJCdXR0b25Vbml0ZUxpZ2h0XCI6IFwiU2lkZUJhcl9CdXR0b25Vbml0ZUxpZ2h0X18xYkNIZlwiLFxuXHRcIkJ1dHRvblVuaXRlRGFya1wiOiBcIlNpZGVCYXJfQnV0dG9uVW5pdGVEYXJrX18yVGNxS1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWV4cG9ydHMuVkFMSURfTE9BREVSUz12b2lkIDA7Y29uc3QgVkFMSURfTE9BREVSUz1bJ2RlZmF1bHQnLCdpbWdpeCcsJ2Nsb3VkaW5hcnknLCdha2FtYWknXTtleHBvcnRzLlZBTElEX0xPQURFUlM9VkFMSURfTE9BREVSUztjb25zdCBpbWFnZUNvbmZpZ0RlZmF1bHQ9e2RldmljZVNpemVzOls2NDAsNzUwLDgyOCwxMDgwLDEyMDAsMTkyMCwyMDQ4LDM4NDBdLGltYWdlU2l6ZXM6WzE2LDMyLDQ4LDY0LDk2LDEyOCwyNTYsMzg0XSxwYXRoOicvX25leHQvaW1hZ2UnLGxvYWRlcjonZGVmYXVsdCcsZG9tYWluczpbXSxkaXNhYmxlU3RhdGljSW1hZ2VzOmZhbHNlfTtleHBvcnRzLmltYWdlQ29uZmlnRGVmYXVsdD1pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1jb25maWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiJdLCJzb3VyY2VSb290IjoiIn0=