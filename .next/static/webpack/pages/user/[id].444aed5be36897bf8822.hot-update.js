self["webpackHotUpdate_N_E"]("pages/user/[id]",{

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

  var isInputShown = _ref.isInputShown,
      id = _ref.id,
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
        lineNumber: 67,
        columnNumber: 12
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 18
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 81
      }, _this), "level : ", levelUp, " - ", id, isInputShown && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "id",
            placeholder: "id",
            value: iD,
            onChange: onIdChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "level",
            placeholder: "level",
            value: levelUp,
            onChange: onLevelUpChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlVuaXRlIiwiaXNJbnB1dFNob3duIiwiaWQiLCJuYW1lIiwibGV2ZWwiLCJlbGVtZW50IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicGFyc2VJbnQiLCJnZXRVbml0ZXMiLCJhbGVydCIsInVzZUVmZmVjdCIsImxvY2FsU2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJnZXQiLCJyZXNwb25zZSIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJkYXRhIiwidXNlclVuaXRlc0ZpcmVVUiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0E7QUFZTyxJQUFNQyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLE9BQTRFO0FBQUE7O0FBQUEsTUFBMUVDLFlBQTBFLFFBQTFFQSxZQUEwRTtBQUFBLE1BQTVEQyxFQUE0RCxRQUE1REEsRUFBNEQ7QUFBQSxNQUF4REMsSUFBd0QsUUFBeERBLElBQXdEO0FBQUEsTUFBbERDLEtBQWtELFFBQWxEQSxLQUFrRDtBQUFBLE1BQTFDQyxPQUEwQyxRQUExQ0EsT0FBMEM7QUFBQSx3QkFBakNDLEtBQWlDO0FBQUEsTUFBakNBLEtBQWlDLDJCQUEzQixxQkFBMkI7O0FBQUEsa0JBQzFFQywrQ0FBUSxDQUFDSCxLQUFELENBRGtFO0FBQUEsTUFDbEdJLE9BRGtHO0FBQUEsTUFDekZDLFVBRHlGOztBQUV6RyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBZTtBQUFDRixjQUFVLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVY7QUFBK0IsR0FBdkU7O0FBRnlHLG1CQUlwRk4sK0NBQVEsQ0FBQ0wsRUFBRCxDQUo0RTtBQUFBLE1BSWxHWSxFQUprRztBQUFBLE1BSTlGQyxLQUo4Rjs7QUFLekcsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0wsS0FBRCxFQUFlO0FBQUNJLFNBQUssQ0FBQ0osS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBTDtBQUEwQixHQUE3RDs7QUFHQSxNQUFNSSxnQkFBZ0I7QUFBQSw4U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBRnFCO0FBQUEscUJBR2ZyQixLQUFLLENBQUNzQixJQUFOLENBQVcsNkNBQVgsRUFBMEQ7QUFBQ04sa0JBQUUsRUFBQ08sUUFBUSxDQUFDUCxFQUFELENBQVo7QUFBa0JOLHVCQUFPLEVBQUNhLFFBQVEsQ0FBQ2IsT0FBRDtBQUFsQyxlQUExRCxDQUhlOztBQUFBO0FBSXJCYyx1QkFBUztBQUNUSixxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUxxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFyQkQscUJBQU8sQ0FBQ0MsR0FBUjs7QUFScUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBVVpJLEtBQUssQ0FBRSxRQUFGLENBVk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJOLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFlQU8sa0RBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBSUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBbkI7O0FBQ0EsUUFBR0YsWUFBWSxJQUFHLElBQWxCLEVBQXdCO0FBQ3RCLFVBQUlHLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFlBQVgsQ0FBcEI7O0FBQ0QsVUFBSUcsYUFBSixFQUFrQjtBQUNqQkcsa0JBQVUsQ0FBQ0gsYUFBRCxDQUFWO0FBQ0E7QUFFSDtBQUNGLEdBVFUsRUFTUixFQVRRLENBQVQ7O0FBdkJ5RyxtQkFrQzFFckIsK0NBQVEsRUFsQ2tFO0FBQUEsTUFrQ2xHeUIsT0FsQ2tHO0FBQUEsTUFrQ3pGRCxVQWxDeUY7O0FBb0N6RyxNQUFNVCxTQUFTO0FBQUEsOFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDS3hCLEtBQUssQ0FBQ21DLEdBQU4sOENBQWdERCxPQUFPLENBQUM5QixFQUF4RCxFQURMOztBQUFBO0FBQ1pnQyxzQkFEWTtBQUVmaEIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZZSxRQUFaLENBQUQ7QUFDQUMsaUNBQW1CLENBQUNELFFBQVEsQ0FBQ0UsSUFBVixDQUFuQjs7QUFIZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVGQsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQXBDeUcsbUJBMEMzRGYsK0NBQVEsQ0FBQyxFQUFELENBMUNtRDtBQUFBLE1BMENwRzhCLGdCQTFDb0c7QUFBQSxNQTBDbEZGLG1CQTFDa0Y7O0FBOEN6RyxzQkFBTztBQUFLLGFBQVMsRUFBRUcseUVBQWhCO0FBQUEsMkJBQ0w7QUFBQSxpQkFDQ25DLElBREQsb0JBQ087QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURQLG9CQUNhO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYixlQUVBLDhEQUFDLG1EQUFEO0FBQU8sY0FBTSxFQUFFLEdBQWY7QUFBb0IsYUFBSyxFQUFFLEdBQTNCO0FBQWlDLFdBQUcsRUFBRUcsS0FBdEM7QUFBNkMsV0FBRyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxvQkFFNEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUY1RSxjQUdTRSxPQUhULFNBR3FCTixFQUhyQixFQUtFRCxZQUFZLGlCQUNWO0FBQUEsZ0NBQ0E7QUFBQSxpQ0FBRztBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBSSxFQUFDLElBQTFCO0FBQStCLHVCQUFXLEVBQUMsSUFBM0M7QUFBZ0QsaUJBQUssRUFBRWEsRUFBdkQ7QUFBMkQsb0JBQVEsRUFBRUU7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFQTtBQUFBLGlDQUFHO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFJLEVBQUMsT0FBMUI7QUFBa0MsdUJBQVcsRUFBQyxPQUE5QztBQUFzRCxpQkFBSyxFQUFFUixPQUE3RDtBQUFzRSxvQkFBUSxFQUFFRTtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQUdBO0FBQUEsaUNBQUc7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQUssRUFBQyxnQkFBM0I7QUFBNEMsbUJBQU8sRUFBRU87QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBaUJELENBL0RNOztHQUFNakIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL1tpZF0uNDQ0YWVkNWJlMzY4OTdiZjg4MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZUNvbmZpZyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2NvbmZpZy1zaGFyZWRcIlxyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tIFwiLi9FbGVtZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VXNlclByb2ZpbGUsIFByb3BzIGFzIFVzZXJQcm9maWxlUHJvcHN9IGZyb20gJy4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNJbnB1dFNob3duOmJvb2xlYW47XHJcbiAgaWQ6bnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGVsZW1lbnQ6c3RyaW5nO1xyXG4gIGxldmVsOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVuaXRlOkZDPFByb3BzPiA9ICh7aXNJbnB1dFNob3duLCBpZCwgbmFtZSwgbGV2ZWwsICBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcbiAgY29uc3QgW2xldmVsVXAsIHNldExldmVsVXAgXSA9IHVzZVN0YXRlKGxldmVsKTtcclxuICBjb25zdCBvbkxldmVsVXBDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0TGV2ZWxVcChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcbiAgY29uc3QgW2lELCBzZXRJZCBdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG9uSWRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG5cclxuICBjb25zdCBjaGFuZ2VVbml0ZUxldmVsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlTGV2ZWwnKVxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Nlc3Npb25Vbml0ZUxldmVsJywge2lEOnBhcnNlSW50KGlEKSwgbGV2ZWxVcDpwYXJzZUludChsZXZlbFVwKX0pO1xyXG4gICAgICBnZXRVbml0ZXMoKTtcclxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZUZpbmlzaCcpXHJcbiAgICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmIChlcnJvcil7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0ICgnZXJyZXVyJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICB2YXIgbG9jYWxTZXNzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKVxyXG4gICAgaWYobG9jYWxTZXNzaW9uICE9bnVsbCkge1xyXG4gICAgICBsZXQgc2Vzc2lvbk9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTZXNzaW9uKVxyXG4gICAgIGlmIChzZXNzaW9uT2JqZWN0KXtcclxuICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uT2JqZWN0KVxyXG4gICAgIH1cclxuICAgIFxyXG4gIH1cclxufSwgW10pO1xyXG5cclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbiBdID0gdXNlU3RhdGU8VXNlclByb2ZpbGVQcm9wcz4oKTtcclxuXHJcbiAgY29uc3QgZ2V0VW5pdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlLyR7c2Vzc2lvbi5pZH1gKTtcclxuICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgc2V0VXNlclVuaXRlc0ZpcmVVUihyZXNwb25zZS5kYXRhKTtcclxufVxyXG5cclxuY29uc3QgW3VzZXJVbml0ZXNGaXJlVVIsIHNldFVzZXJVbml0ZXNGaXJlVVJdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2VW5pdGV9PlxyXG4gICAgPHNwYW4+XHJcbiAgICB7bmFtZX0gPGJyLz4gPGJyLz5cclxuICAgIDxJbWFnZSBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+IDxici8+XHJcbiAgICBsZXZlbCA6IHtsZXZlbFVwfSAtIHtpZH1cclxuICAgIHtcclxuICAgICAgaXNJbnB1dFNob3duICYmIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwiaWRcIiBwbGFjZWhvbGRlcj1cImlkXCIgdmFsdWU9e2lEfSBvbkNoYW5nZT17b25JZENoYW5nZX0+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgPHA+PGlucHV0IHR5cGU9J251bWJlcicgbmFtZT1cImxldmVsXCIgcGxhY2Vob2xkZXI9XCJsZXZlbFwiIHZhbHVlPXtsZXZlbFVwfSBvbkNoYW5nZT17b25MZXZlbFVwQ2hhbmdlfS8+PC9wPlxyXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJjaGFuZ2UgLSBsZXZlbFwiIG9uQ2xpY2s9e2NoYW5nZVVuaXRlTGV2ZWx9Lz48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIDwvc3Bhbj4gXHJcbjwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==