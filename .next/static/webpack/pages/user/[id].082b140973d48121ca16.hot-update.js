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

  var _ref$isInputShown = _ref.isInputShown,
      isInputShown = _ref$isInputShown === void 0 ? true : _ref$isInputShown,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlVuaXRlIiwiaXNJbnB1dFNob3duIiwiaWQiLCJuYW1lIiwibGV2ZWwiLCJlbGVtZW50IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicGFyc2VJbnQiLCJnZXRVbml0ZXMiLCJhbGVydCIsInVzZUVmZmVjdCIsImxvY2FsU2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJnZXQiLCJyZXNwb25zZSIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJkYXRhIiwidXNlclVuaXRlc0ZpcmVVUiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0E7QUFZTyxJQUFNQyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLE9BQWlGO0FBQUE7O0FBQUEsK0JBQS9FQyxZQUErRTtBQUFBLE1BQS9FQSxZQUErRSxrQ0FBbEUsSUFBa0U7QUFBQSxNQUE1REMsRUFBNEQsUUFBNURBLEVBQTREO0FBQUEsTUFBeERDLElBQXdELFFBQXhEQSxJQUF3RDtBQUFBLE1BQWxEQyxLQUFrRCxRQUFsREEsS0FBa0Q7QUFBQSxNQUExQ0MsT0FBMEMsUUFBMUNBLE9BQTBDO0FBQUEsd0JBQWpDQyxLQUFpQztBQUFBLE1BQWpDQSxLQUFpQywyQkFBM0IscUJBQTJCOztB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QTtBQUFBLGVBRkEsb0JBRTRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGNUUsY0FHU0UsT0FIVCxTQUdxQk4sRUFIckIsRUFLRUQsWUFBWSxpQkFDVjtBQUFBLGdDQUNBO0FBQUEsaUNBQUc7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUksRUFBQyxJQUExQjtBQUErQix1QkFBVyxFQUFDLElBQTNDO0FBQWdELGlCQUFLLEVBQUVhLEVBQXZEO0FBQTJELG9CQUFRLEVBQUVFO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBQSxpQ0FBRztBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBSSxFQUFDLE9BQTFCO0FBQWtDLHVCQUFXLEVBQUMsT0FBOUM7QUFBc0QsaUJBQUssRUFBRVIsT0FBN0Q7QUFBc0Usb0JBQVEsRUFBRUU7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkEsZUFHQTtBQUFBLGlDQUFHO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFLLEVBQUMsZ0JBQTNCO0FBQTRDLG1CQUFPLEVBQUVPO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWlCRCxDQS9ETTs7R0FBTWpCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjA4MmIxNDA5NzNkNDgxMjFjYTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSBcIi4vRWxlbWVudFwiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1VzZXJQcm9maWxlLCBQcm9wcyBhcyBVc2VyUHJvZmlsZVByb3BzfSBmcm9tICcuLi9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlzSW5wdXRTaG93bjpib29sZWFuO1xyXG4gIGlkOm51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBlbGVtZW50OnN0cmluZztcclxuICBsZXZlbDpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVbml0ZTpGQzxQcm9wcz4gPSAoe2lzSW5wdXRTaG93bj10cnVlLCBpZCwgbmFtZSwgbGV2ZWwsICBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcbiAgY29uc3QgW2xldmVsVXAsIHNldExldmVsVXAgXSA9IHVzZVN0YXRlKGxldmVsKTtcclxuICBjb25zdCBvbkxldmVsVXBDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0TGV2ZWxVcChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcbiAgY29uc3QgW2lELCBzZXRJZCBdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG9uSWRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG5cclxuICBjb25zdCBjaGFuZ2VVbml0ZUxldmVsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlTGV2ZWwnKVxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Nlc3Npb25Vbml0ZUxldmVsJywge2lEOnBhcnNlSW50KGlEKSwgbGV2ZWxVcDpwYXJzZUludChsZXZlbFVwKX0pO1xyXG4gICAgICBnZXRVbml0ZXMoKTtcclxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZUZpbmlzaCcpXHJcbiAgICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGlmIChlcnJvcil7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0ICgnZXJyZXVyJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICB2YXIgbG9jYWxTZXNzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKVxyXG4gICAgaWYobG9jYWxTZXNzaW9uICE9bnVsbCkge1xyXG4gICAgICBsZXQgc2Vzc2lvbk9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTZXNzaW9uKVxyXG4gICAgIGlmIChzZXNzaW9uT2JqZWN0KXtcclxuICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uT2JqZWN0KVxyXG4gICAgIH1cclxuICAgIFxyXG4gIH1cclxufSwgW10pO1xyXG5cclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbiBdID0gdXNlU3RhdGU8VXNlclByb2ZpbGVQcm9wcz4oKTtcclxuXHJcbiAgY29uc3QgZ2V0VW5pdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVuaXRlLyR7c2Vzc2lvbi5pZH1gKTtcclxuICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgc2V0VXNlclVuaXRlc0ZpcmVVUihyZXNwb25zZS5kYXRhKTtcclxufVxyXG5cclxuY29uc3QgW3VzZXJVbml0ZXNGaXJlVVIsIHNldFVzZXJVbml0ZXNGaXJlVVJdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2VW5pdGV9PlxyXG4gICAgPHNwYW4+XHJcbiAgICB7bmFtZX0gPGJyLz4gPGJyLz5cclxuICAgIDxJbWFnZSBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+IDxici8+XHJcbiAgICBsZXZlbCA6IHtsZXZlbFVwfSAtIHtpZH1cclxuICAgIHtcclxuICAgICAgaXNJbnB1dFNob3duICYmIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwiaWRcIiBwbGFjZWhvbGRlcj1cImlkXCIgdmFsdWU9e2lEfSBvbkNoYW5nZT17b25JZENoYW5nZX0+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgPHA+PGlucHV0IHR5cGU9J251bWJlcicgbmFtZT1cImxldmVsXCIgcGxhY2Vob2xkZXI9XCJsZXZlbFwiIHZhbHVlPXtsZXZlbFVwfSBvbkNoYW5nZT17b25MZXZlbFVwQ2hhbmdlfS8+PC9wPlxyXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJjaGFuZ2UgLSBsZXZlbFwiIG9uQ2xpY2s9e2NoYW5nZVVuaXRlTGV2ZWx9Lz48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIDwvc3Bhbj4gXHJcbjwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==