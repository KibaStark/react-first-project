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
          onClick: boxUser()
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
        columnNumber: 84
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlci50c3giXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiTWVtYmVyIiwiaWQiLCJwc2V1ZG8iLCJncmFkZSIsImltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYm94VXNlciIsInJvdXRlIiwicHVzaCIsImNvbm5leGlvbkJveCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBO0FBUU8sSUFBTUMsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsT0FBc0Q7QUFBQTs7QUFBQSxNQUFwREMsRUFBb0QsUUFBcERBLEVBQW9EO0FBQUEsTUFBaERDLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLE1BQXhDQyxLQUF3QyxRQUF4Q0EsS0FBd0M7QUFBQSx3QkFBakNDLEtBQWlDO0FBQUEsTUFBakNBLEtBQWlDLDJCQUEzQixxQkFBMkI7QUFFdEYsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQW1CO0FBQy9CSCxVQUFNLENBQUNJLElBQVAsWUFBZ0JELEtBQWhCO0FBQ0QsR0FGSDs7QUFJRSxNQUFNRSxZQUFZO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQURpQjtBQUdmTCxxQkFBTyxDQUFDLDhCQUFELENBQVA7QUFIZTtBQUFBLHFCQUlJVCxLQUFLLENBQUNlLEdBQU4sQ0FBVSw4Q0FBVixDQUpKOztBQUFBO0FBSWJDLHNCQUphO0FBS2pCQywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosUUFBUSxDQUFDSyxJQUFULENBQWNBLElBQTdCLENBQTVCO0FBQ0FSLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsUUFBWjtBQU5pQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNmSCxxQkFBTyxDQUFDQyxHQUFSOztBQVRlLG9CQVVYLGNBQVEsVUFWRztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FXTlEsS0FBSyxDQUFFLCtCQUFGLENBWEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlYsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFpQk0sc0JBQU87QUFBQSw0QkFFTDtBQUFBLDhCQUVFO0FBQUEsZ0NBQUc7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUVSLE1BQTVCO0FBQW9DLGlCQUFPLEVBQUVLLE9BQU87QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxPQUErRE4sRUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsb0JBRXlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkssZUFRTCw4REFBQyxtREFBRDtBQUFPLFlBQU0sRUFBRSxHQUFmO0FBQW9CLFdBQUssRUFBRSxHQUEzQjtBQUFpQyxTQUFHLEVBQUVHLEtBQXRDO0FBQTZDLFNBQUcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkssb0JBUXVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFXRCxDQW5DQTs7R0FBTUosTTtVQUVFTSxrRDs7O0tBRkZOLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRWxvcmlhLjkzZTNmNWMyZTI0YmI3MDBiOWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZDpudW1iZXI7XHJcbiAgcHNldWRvOiBzdHJpbmc7XHJcbiAgZ3JhZGU6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNZW1iZXI6RkM8UHJvcHM+ID0gKHtpZCwgcHNldWRvLCBncmFkZSwgaW1hZ2U9Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSkgPT4ge1xyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuY29uc3QgYm94VXNlciA9IChyb3V0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7cm91dGV9YClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY29ubmV4aW9uQm94ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmV4aW9uQm94JylcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGJveFVzZXIoJy4uLy4uLy4uL3BhZ2VzL3VzZXIvW2lkXS50c3gnKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlL3t1c2VyX2lkfScpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQm94JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS5kYXRhKSlcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBpZiAoZXJyb3IgPSAnY29kZSA1MDAnKXtcclxuICAgICAgICAgIHJldHVybiBhbGVydCAoJ0Nvbm5leGlvbiDDoCBsYSBib3ggaW1wb3NzaWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgIFxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICBcclxuICAgICAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT17cHNldWRvfSBvbkNsaWNrPXtib3hVc2VyKCl9IC8+IHtpZH08L3A+IDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsxMjV9IHdpZHRoPXsyMDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPiA8YnIvPlxyXG4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH0iXSwic291cmNlUm9vdCI6IiJ9