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
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\src\\composants\\Member\\Member.tsx",
    _this = undefined;



var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var Member = function Member(_ref) {
  var pseudo = _ref.pseudo,
      grade = _ref.grade,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? '/images/unnamed.jpg' : _ref$image;

  var connexionBox = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('connexionBox');
              _context.prev = 1;
              _context.next = 4;
              return axios.post('http://localhost:8080/api/getUnite/{user_id}');

            case 4:
              response = _context.sent;
              localStorage.setItem('Box', JSON.stringify(response.data.data));
              console.log(response);
              _context.next = 16;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

              if (!(_context.t0 = 'code 500')) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", alert('veuillez mettre un e-mail et mot de passe valide'));

            case 14:
              console.log(_context.t0);
              console.log(_context.t0.message);

            case 16:
              return _context.abrupt("return", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  style: {
                    backgroundColor: "#ffffff"
                  },
                  children: [" ", pseudo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 59
                  }, _this), " ", grade]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 7
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                  height: 125,
                  width: 200,
                  src: image,
                  alt: "Picture of the author"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 7
                }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 83
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                      type: "button",
                      value: "Lancer la box"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 9
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 7
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 12
              }, _this));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function connexionBox() {
      return _ref2.apply(this, arguments);
    };
  }();
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlci50c3giXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiTWVtYmVyIiwicHNldWRvIiwiZ3JhZGUiLCJpbWFnZSIsImNvbm5leGlvbkJveCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJhbGVydCIsIm1lc3NhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBT08sSUFBTUMsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsT0FBa0Q7QUFBQSxNQUFoREMsTUFBZ0QsUUFBaERBLE1BQWdEO0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLHdCQUFqQ0MsS0FBaUM7QUFBQSxNQUFqQ0EsS0FBaUMsMkJBQTNCLHFCQUEyQjs7QUFDaEYsTUFBTUMsWUFBWTtBQUFBLDhTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFEbUI7QUFBQTtBQUFBLHFCQUdFUixLQUFLLENBQUNTLElBQU4sQ0FBVyw4Q0FBWCxDQUhGOztBQUFBO0FBR2ZDLHNCQUhlO0FBSW5CQywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosUUFBUSxDQUFDSyxJQUFULENBQWNBLElBQTdCLENBQTVCO0FBQ0FSLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsUUFBWjtBQUxtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNqQkgscUJBQU8sQ0FBQ0MsR0FBUjs7QUFUaUIsb0JBVWIsY0FBUSxVQVZLO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQVdSUSxLQUFLLENBQUUsa0RBQUYsQ0FYRzs7QUFBQTtBQWFqQlQscUJBQU8sQ0FBQ0MsR0FBUjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBTVMsT0FBbEI7O0FBZGlCO0FBQUEsNERBbUJaO0FBQUEsd0NBQ0w7QUFBTSx1QkFBSyxFQUFFO0FBQUNDLG1DQUFlLEVBQUM7QUFBakIsbUJBQWI7QUFBQSxrQ0FBNENmLE1BQTVDLG9CQUFvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFwRCxPQUEyREMsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURLLGVBRUwsOERBQUMsbURBQUQ7QUFBTyx3QkFBTSxFQUFFLEdBQWY7QUFBb0IsdUJBQUssRUFBRSxHQUEzQjtBQUFpQyxxQkFBRyxFQUFFQyxLQUF0QztBQUE2QyxxQkFBRyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkssb0JBRXVFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRnZFLGVBR0w7QUFBQSx5Q0FDRTtBQUFBLDJDQUFHO0FBQU8sMEJBQUksRUFBQyxRQUFaO0FBQXFCLDJCQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkMsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjtBQTJCRCxDQTVCTTtLQUFNSixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0Vsb3JpYS5iMzE1ZTU1NmNiOTY4ZjcwMzMxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBwc2V1ZG86IHN0cmluZztcclxuICBncmFkZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1lbWJlcjpGQzxQcm9wcz4gPSAoe3BzZXVkbywgZ3JhZGUsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuICBjb25zdCBjb25uZXhpb25Cb3ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmV4aW9uQm94JylcclxuICAgIHRyeXtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUve3VzZXJfaWR9Jyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQm94JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS5kYXRhKSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yID0gJ2NvZGUgNTAwJyl7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0ICgndmV1aWxsZXogbWV0dHJlIHVuIGUtbWFpbCBldCBtb3QgZGUgcGFzc2UgdmFsaWRlJylcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmZmZmXCJ9fT4ge3BzZXVkb30gPGJyLz4ge2dyYWRlfTwvc3Bhbj5cclxuICAgICAgPEltYWdlIGhlaWdodD17MTI1fSB3aWR0aD17MjAwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz4gPGJyLz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkxhbmNlciBsYSBib3hcIi8+PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9