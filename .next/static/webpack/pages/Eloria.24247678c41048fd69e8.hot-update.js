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
  var id = _ref.id,
      pseudo = _ref.pseudo,
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

              return _context.abrupt("return", alert('Connexion ?? la box impossible'));

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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "button",
          value: pseudo,
          onClick: connexionBox
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 12
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 77
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
      height: 125,
      width: 200,
      src: image,
      alt: "Picture of the author"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 83
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlci50c3giXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiTWVtYmVyIiwiaWQiLCJwc2V1ZG8iLCJncmFkZSIsImltYWdlIiwiY29ubmV4aW9uQm94IiwiY29uc29sZSIsImxvZyIsImdldCIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBUU8sSUFBTUMsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsT0FBc0Q7QUFBQSxNQUFwREMsRUFBb0QsUUFBcERBLEVBQW9EO0FBQUEsTUFBaERDLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLE1BQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSx3QkFBakNDLEtBQWlDO0FBQUEsTUFBakNBLEtBQWlDLDJCQUEzQixxQkFBMkI7O0FBRXBGLE1BQU1DLFlBQVk7QUFBQSw4U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRGlCO0FBQUE7QUFBQSxxQkFHSVQsS0FBSyxDQUFDVSxHQUFOLENBQVUsOENBQVYsQ0FISjs7QUFBQTtBQUdiQyxzQkFIYTtBQUlqQkMsMEJBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQSxJQUE3QixDQUE1QjtBQUNBUixxQkFBTyxDQUFDQyxHQUFSLENBQVlFLFFBQVo7QUFMaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTZkgscUJBQU8sQ0FBQ0MsR0FBUjs7QUFUZSxvQkFVWCxjQUFRLFVBVkc7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBV05RLEtBQUssQ0FBRSwrQkFBRixDQVhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpWLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBa0JFLHNCQUFPO0FBQUEsNEJBRUw7QUFBQSw4QkFFRTtBQUFBLCtCQUFHO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFFSCxNQUE1QjtBQUFvQyxpQkFBTyxFQUFFRztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLG9CQUVzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRnRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLLGVBUUwsOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUUsR0FBZjtBQUFvQixXQUFLLEVBQUUsR0FBM0I7QUFBaUMsU0FBRyxFQUFFRCxLQUF0QztBQUE2QyxTQUFHLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJLLG9CQVF1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUnZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBV0QsQ0EvQkk7S0FBTUosTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9FbG9yaWEuMjQyNDc2NzhjNDEwNDhmZDY5ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZUNvbmZpZyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2NvbmZpZy1zaGFyZWRcIlxyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWQ6bnVtYmVyO1xyXG4gIHBzZXVkbzogc3RyaW5nO1xyXG4gIGdyYWRlOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgY29uc3QgTWVtYmVyOkZDPFByb3BzPiA9ICh7aWQsIHBzZXVkbywgZ3JhZGUsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuICBcclxuICBjb25zdCBjb25uZXhpb25Cb3ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZXhpb25Cb3gnKVxyXG4gICAgICB0cnl7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS97dXNlcl9pZH0nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0JveCcsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEuZGF0YSkpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvciA9ICdjb2RlIDUwMCcpe1xyXG4gICAgICAgICAgcmV0dXJuIGFsZXJ0ICgnQ29ubmV4aW9uIMOgIGxhIGJveCBpbXBvc3NpYmxlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG5cclxuICAgICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e3BzZXVkb30gb25DbGljaz17Y29ubmV4aW9uQm94fS8+PC9wPiA8YnIvPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8SW1hZ2UgaGVpZ2h0PXsxMjV9IHdpZHRoPXsyMDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPiA8YnIvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9