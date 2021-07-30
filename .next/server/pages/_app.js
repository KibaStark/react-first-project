(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const handleNoSession = route => {
    router.push(`/${route}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      let sessionObject = JSON.parse(localSession);
      console.log(sessionObject);

      if (sessionObject) {
        console.log(sessionObject);
        setSession(sessionObject);
      }
    } else {
      console.log('test');
      handleNoSession('');
    }
  }, []);
  const {
    0: session,
    1: setSession
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL215LWZpcnN0LXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZU5vU2Vzc2lvbiIsInJvdXRlIiwicHVzaCIsInVzZUVmZmVjdCIsImxvY2FsU2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInNldFNlc3Npb24iLCJzZXNzaW9uIiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQ2pELFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsZUFBZSxHQUFJQyxLQUFELElBQW1CO0FBQ3ZDSCxVQUFNLENBQUNJLElBQVAsQ0FBYSxJQUFHRCxLQUFNLEVBQXRCO0FBQ0QsR0FGSDs7QUFJQUUsa0RBQVMsQ0FBQyxNQUFJO0FBQ1osUUFBSUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBbkI7O0FBQ0EsUUFBR0YsWUFBWSxJQUFHLElBQWxCLEVBQXdCO0FBQ3RCLFVBQUlHLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFlBQVgsQ0FBcEI7QUFDQU0sYUFBTyxDQUFDQyxHQUFSLENBQVlKLGFBQVo7O0FBQ0QsVUFBSUEsYUFBSixFQUFrQjtBQUNoQkcsZUFBTyxDQUFDQyxHQUFSLENBQVlKLGFBQVo7QUFDREssa0JBQVUsQ0FBQ0wsYUFBRCxDQUFWO0FBQ0E7QUFDSCxLQVBDLE1BT0s7QUFDTEcsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBWCxxQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUFvQjtBQUN2QixHQVpVLEVBWVIsRUFaUSxDQUFUO0FBY0EsUUFBTTtBQUFBLE9BQUNhLE9BQUQ7QUFBQSxPQUFVRDtBQUFWLE1BQXlCRSwrQ0FBUSxFQUF2QztBQUVBLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVqQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUNELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGhhbmRsZU5vU2Vzc2lvbiA9IChyb3V0ZTogc3RyaW5nKSA9PiB7XG4gICAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcbiAgICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcbiAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XG4gICAgICBsZXQgc2Vzc2lvbk9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTZXNzaW9uKVxuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbk9iamVjdClcbiAgICAgaWYgKHNlc3Npb25PYmplY3Qpe1xuICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25PYmplY3QpXG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXG4gICAgIH0gXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKSBcbiAgICBoYW5kbGVOb1Nlc3Npb24oJycpfVxufSwgW10pO1xuXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uIF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=