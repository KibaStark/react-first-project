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
    var _ref2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('connexionBox');
              _context.prev = 1;
              _context.next = 4;
              return axios.get('http://localhost:8080/api/getUnite/{user_id}');

            case 4:
              response = _context.sent;
              localStorage.setItem('Box', JSON.stringify(response.data.data));
              console.log(response);
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

              if (!(_context.t0 = 'code 500')) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", alert('Connexion à la box impossible'));

            case 14:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      style: {
        backgroundColor: "#ffffff"
      },
      children: [" ", pseudo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 59
      }, _this), " ", grade]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 80
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
      height: 125,
      width: 200,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 83
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlci50c3giXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiTWVtYmVyIiwicHNldWRvIiwiZ3JhZGUiLCJpbWFnZSIsImNvbm5leGlvbkJveCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImFsZXJ0IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQU9PLElBQU1DLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLE9BQWtEO0FBQUEsTUFBaERDLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLE1BQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSx3QkFBakNDLEtBQWlDO0FBQUEsTUFBakNBLEtBQWlDLDJCQUEzQixxQkFBMkI7O0FBRWhGLE1BQU1DLFlBQVk7QUFBQSw4U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRGlCO0FBQUE7QUFBQSxxQkFHSVIsS0FBSyxDQUFDUyxHQUFOLENBQVUsOENBQVYsQ0FISjs7QUFBQTtBQUdiQyxzQkFIYTtBQUlqQkMsMEJBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQSxJQUE3QixDQUE1QjtBQUNBUixxQkFBTyxDQUFDQyxHQUFSLENBQVlFLFFBQVo7QUFMaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTZkgscUJBQU8sQ0FBQ0MsR0FBUjs7QUFUZSxvQkFVWCxjQUFRLFVBVkc7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBV05RLEtBQUssQ0FBRSwrQkFBRixDQVhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpWLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBa0JFLHNCQUFPO0FBQUEsNEJBQ0w7QUFBTSxXQUFLLEVBQUU7QUFBQ1csdUJBQWUsRUFBQztBQUFqQixPQUFiO0FBQUEsc0JBQTRDZCxNQUE1QyxvQkFBb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFwRCxPQUEyREMsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssb0JBQ29FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEcEUsZUFFTCw4REFBQyxtREFBRDtBQUFPLFlBQU0sRUFBRSxHQUFmO0FBQW9CLFdBQUssRUFBRSxHQUEzQjtBQUFpQyxTQUFHLEVBQUVDLEtBQXRDO0FBQTZDLFNBQUcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkssb0JBRXVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGdkUsZUFHTDtBQUFBLDZCQUNFO0FBQUEsK0JBQUc7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFPRCxDQTNCSTtLQUFNSCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0Vsb3JpYS43MjIxMmY1NGRiNzhlMjg1NjU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBwc2V1ZG86IHN0cmluZztcclxuICBncmFkZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1lbWJlcjpGQzxQcm9wcz4gPSAoe3BzZXVkbywgZ3JhZGUsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuICBcclxuICBjb25zdCBjb25uZXhpb25Cb3ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZXhpb25Cb3gnKVxyXG4gICAgICB0cnl7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS97dXNlcl9pZH0nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0JveCcsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEuZGF0YSkpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvciA9ICdjb2RlIDUwMCcpe1xyXG4gICAgICAgICAgcmV0dXJuIGFsZXJ0ICgnQ29ubmV4aW9uIMOgIGxhIGJveCBpbXBvc3NpYmxlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZmZmZmZcIn19PiB7cHNldWRvfSA8YnIvPiB7Z3JhZGV9PC9zcGFuPiA8YnIvPlxyXG4gICAgICA8SW1hZ2UgaGVpZ2h0PXsxMjV9IHdpZHRoPXsyMDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPiA8YnIvPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTGFuY2VyIGxhIGJveFwiLz48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9