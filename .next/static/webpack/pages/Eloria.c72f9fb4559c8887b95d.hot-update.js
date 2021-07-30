self["webpackHotUpdate_N_E"]("pages/Eloria",{

/***/ "./src/composants/Member/Member.tsx":
/*!******************************************!*\
  !*** ./src/composants/Member/Member.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": function() { return /* binding */ Member; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Member\\Member.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");


var Member = function Member(_ref) {
  _s();

  var id = _ref.id,
      pseudo = _ref.pseudo,
      grade = _ref.grade,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? '/images/unnamed.jpg' : _ref$image;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var boxUser = function boxUser(route) {
    router.push("/".concat(route));
  };

  var connexionBox = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('connexionBox');
              _context.prev = 1;
              boxUser('../../../pages/user/[id].tsx');
              _context.next = 5;
              return axios.get('http://localhost:8080/api/getUnite/{user_id}');

            case 5:
              response = _context.sent;
              localStorage.setItem('Box', JSON.stringify(response.data.data));
              console.log(response);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

              if (!(_context.t0 = 'code 500')) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", alert('Connexion à la box impossible'));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function connexionBox() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "button",
          value: pseudo,
          onClick: boxUser('../../../pages/user/[id].tsx')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 16
        }, _this), " ", id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 114
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
      height: 125,
      width: 200,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 87
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 16
  }, _this);
};

_s(Member, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Member;

var _c;

$RefreshReg$(_c, "Member");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlci50c3giXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiTWVtYmVyIiwiaWQiLCJwc2V1ZG8iLCJncmFkZSIsImltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYm94VXNlciIsInJvdXRlIiwicHVzaCIsImNvbm5leGlvbkJveCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBO0FBUU8sSUFBTUMsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsT0FBc0Q7QUFBQTs7QUFBQSxNQUFwREMsRUFBb0QsUUFBcERBLEVBQW9EO0FBQUEsTUFBaERDLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLE1BQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSx3QkFBakNDLEtBQWlDO0FBQUEsTUFBakNBLEtBQWlDLDJCQUEzQixxQkFBMkI7QUFFdEYsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQW1CO0FBQy9CSCxVQUFNLENBQUNJLElBQVAsWUFBZ0JELEtBQWhCO0FBQ0QsR0FGSDs7QUFJRSxNQUFNRSxZQUFZO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQURpQjtBQUdmTCxxQkFBTyxDQUFDLDhCQUFELENBQVA7QUFIZTtBQUFBLHFCQUlJVCxLQUFLLENBQUNlLEdBQU4sQ0FBVSw4Q0FBVixDQUpKOztBQUFBO0FBSWJDLHNCQUphO0FBS2pCQywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosUUFBUSxDQUFDSyxJQUFULENBQWNBLElBQTdCLENBQTVCO0FBQ0FSLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsUUFBWjtBQU5pQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNmSCxxQkFBTyxDQUFDQyxHQUFSOztBQVRlLG9CQVVYLGNBQVEsVUFWRztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FXTlEsS0FBSyxDQUFFLCtCQUFGLENBWEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlYsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFpQk0sc0JBQU87QUFBQSw0QkFFTDtBQUFBLDhCQUVFO0FBQUEsZ0NBQUc7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUVSLE1BQTVCO0FBQW9DLGlCQUFPLEVBQUVLLE9BQU8sQ0FBQyw4QkFBRDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILE9BQTZGTixFQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixvQkFFdUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZ2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSyxlQVFMLDhEQUFDLG1EQUFEO0FBQU8sWUFBTSxFQUFFLEdBQWY7QUFBb0IsV0FBSyxFQUFFLEdBQTNCO0FBQWlDLFNBQUcsRUFBRUcsS0FBdEM7QUFBNkMsU0FBRyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSyxvQkFRdUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJ2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQVdELENBbkNBOztHQUFNSixNO1VBRUVNLGtEOzs7S0FGRk4sTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9FbG9yaWEuYzcyZjlmYjQ1NTljODg4N2I5NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZUNvbmZpZyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2NvbmZpZy1zaGFyZWRcIlxyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOm51bWJlcjtcclxuICBwc2V1ZG86IHN0cmluZztcclxuICBncmFkZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1lbWJlcjpGQzxQcm9wcz4gPSAoe2lkLCBwc2V1ZG8sIGdyYWRlLCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcblxyXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5jb25zdCBib3hVc2VyID0gKHJvdXRlOiBzdHJpbmcpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvJHtyb3V0ZX1gKVxyXG4gIH1cclxuICBcclxuICBjb25zdCBjb25uZXhpb25Cb3ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZXhpb25Cb3gnKVxyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYm94VXNlcignLi4vLi4vLi4vcGFnZXMvdXNlci9baWRdLnRzeCcpO1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUve3VzZXJfaWR9Jyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdCb3gnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLmRhdGEpKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvciA9ICdjb2RlIDUwMCcpe1xyXG4gICAgICAgICAgcmV0dXJuIGFsZXJ0ICgnQ29ubmV4aW9uIMOgIGxhIGJveCBpbXBvc3NpYmxlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgIFxyXG4gICAgICAgICAgICA8cD48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPXtwc2V1ZG99IG9uQ2xpY2s9e2JveFVzZXIoJy4uLy4uLy4uL3BhZ2VzL3VzZXIvW2lkXS50c3gnKX0gLz4ge2lkfTwvcD4gPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezEyNX0gd2lkdGg9ezIwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+IDxici8+XHJcbiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfSJdLCJzb3VyY2VSb290IjoiIn0=