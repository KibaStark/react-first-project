self["webpackHotUpdate_N_E"]("pages/Eloria",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./pages/Eloria.tsx":
/*!**************************!*\
  !*** ./pages/Eloria.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/composants/Member/Member */ "./src/composants/Member/Member.tsx");
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\Eloria.tsx",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _this = this;

  var _useState = useState([]),
      _useState2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var MemberEloriachef = [{
    name: 'Demed',
    image: '/images/Membre/Demed.png'
  }];
  var MemberEloriaBrasDroit = [{
    name: 'Kiba',
    image: '/images/Membre/Kiba.png'
  }, {
    name: 'Razmo',
    image: '/images/Membre/Razmo.jpg'
  }, {
    name: 'Schlagen',
    image: '/images/Membre/Schlagen.jpg'
  }, {
    name: 'Oscar',
    image: '/images/Membre/Oscar.png'
  }, {
    name: 'Link',
    image: '/images/Membre/Link.jpg'
  }, {
    name: 'Unknown',
    image: '/images/Membre/Unknown.jpg'
  }];
  var MemberEloriaCapitaine = [{
    name: 'typher',
    image: '/images/Membre/Typher.png'
  }, {
    name: 'Zhak',
    image: '/images/Membre/Zhak.jpg'
  }, {
    name: 'FarAlex',
    image: '/images/Membre/FarAlex.png'
  }, {
    name: 'Perlin',
    image: '/images/Membre/Perlin.png'
  }, {
    name: 'Flo408',
    image: '/images/Membre/Flo.png'
  }, {
    name: 'Djinsung',
    image: '/images/Membre/Djinsung.png'
  }];
  var MemberEloria = [{
    name: 'Angenoir',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Samba93',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Wrath',
    image: '/images/unnamed.jpg'
  }, {
    name: 'sethart',
    image: '/images/unnamed.jpg'
  }, {
    name: 'SamZR',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Bahamut',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Pype',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Vexxy',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Tamouna22',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Miseru',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Grandcoeur',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Pikajon',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Lloyd',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Gina',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Garzeth',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Sherda',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Keille',
    image: '/images/unnamed.jpg'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_5__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Eloria"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chef"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaChefContainer),
        children: MemberEloriachef.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_3__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 53
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Bras droit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaBrasDroitContainer),
        children: MemberEloriaBrasDroit.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_3__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 58
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Capitaine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaCapitaineContainer),
        children: MemberEloriaCapitaine.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_3__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 57
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Membre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().guildeEloriaMemberContainer),
        children: MemberEloria.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_3__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(Home, "VklLibMv5eZEFMyAzC8A++y6mD4=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9FbG9yaWEudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiTWVtYmVyRWxvcmlhY2hlZiIsIm5hbWUiLCJpbWFnZSIsIk1lbWJlckVsb3JpYUJyYXNEcm9pdCIsIk1lbWJlckVsb3JpYUNhcGl0YWluZSIsIk1lbWJlckVsb3JpYSIsInN0eWxlcyIsIm1hcCIsIm1lbWJlciIsImluZGV4IiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFB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S0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbkI7QUFBQSxTQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQWtCRTtBQUFLLGlCQUFTLEVBQUVILDRGQUFoQjtBQUFBLGtCQUNHRCxZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsOEJBQW1CLDhEQUFDLGlFQUFEO0FBQVEsZ0JBQUksRUFBRUQsTUFBTSxDQUFDUCxJQUFyQjtBQUF1QyxpQkFBSyxFQUFFTyxNQUFNLENBQUNOO0FBQXJELGFBQWdDTyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFuQjtBQUFBLFNBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWlDRTtBQUFRLGVBQVMsRUFBRUgsdUVBQWFJO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUF3Q0Q7O0dBdEZ1QmQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9FbG9yaWEuYzE2NTYzOGE3Yjg5NGYxNjQ0NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge01lbWJlciwgcHJvcHMgYXMgVXNlclByb3BzfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9NZW1iZXIvTWVtYmVyJ1xyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHtTaWRlQmFyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXInXHJcbmltcG9ydCB7VXNlclByb2ZpbGUsIFByb3BzIGFzIFVzZXJQcm9maWxlUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VW5pdGVQcm9wc1tdPihbXSk7XHJcbiAgICBcclxuICAgIHZhciBNZW1iZXJFbG9yaWFjaGVmPVt7XHJcbiAgICAgIG5hbWU6J0RlbWVkJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RlbWVkLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYUJyYXNEcm9pdD1be1xyXG4gICAgICBuYW1lOidLaWJhJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0tpYmEucG5nJ30se1xyXG4gICAgICBuYW1lOidSYXptbycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9SYXptby5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1NjaGxhZ2VuJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1NjaGxhZ2VuLmpwZyd9LHtcclxuICAgICAgbmFtZTonT3NjYXInLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvT3NjYXIucG5nJ30se1xyXG4gICAgICBuYW1lOidMaW5rJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0xpbmsuanBnJ30se1xyXG4gICAgICBuYW1lOidVbmtub3duJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Vua25vd24uanBnJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhQ2FwaXRhaW5lPVt7XHJcbiAgICAgIG5hbWU6J3R5cGhlcicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9UeXBoZXIucG5nJ30se1xyXG4gICAgICBuYW1lOidaaGFrJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1poYWsuanBnJ30se1xyXG4gICAgICBuYW1lOidGYXJBbGV4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0ZhckFsZXgucG5nJ30se1xyXG4gICAgICBuYW1lOidQZXJsaW4nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvUGVybGluLnBuZyd9LHtcclxuICAgICAgbmFtZTonRmxvNDA4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0Zsby5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J0RqaW5zdW5nJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RqaW5zdW5nLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYT1be1xyXG4gICAgICBuYW1lOidBbmdlbm9pcicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTYW1iYTkzJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1dyYXRoJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J3NldGhhcnQnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonU2FtWlInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonQmFoYW11dCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidQeXBlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1ZleHh5JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1RhbW91bmEyMicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidNaXNlcnUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR3JhbmRjb2V1cicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidQaWtham9uJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0xsb3lkJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0dpbmEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR2FyemV0aCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTaGVyZGEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonS2VpbGxlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfVxyXG4gICAgXVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RWxvcmlhPC9oMj5cclxuICAgICAgICA8aDM+Q2hlZjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFjaGVmLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPkJyYXMgZHJvaXQ8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQnJhc0Ryb2l0Q29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFCcmFzRHJvaXQubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoPE1lbWJlciBuYW1lPXttZW1iZXIubmFtZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDM+Q2FwaXRhaW5lPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUNhcGl0YWluZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhQ2FwaXRhaW5lLm1hcCgobWVtYmVyLCBpbmRleCkgPT4oPE1lbWJlciBuYW1lPXttZW1iZXIubmFtZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxoMz5NZW1icmU8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhTWVtYmVyQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWEubWFwKChtZW1iZXIsIGluZGV4KSA9Pig8TWVtYmVyIG5hbWU9e21lbWJlci5uYW1lfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==