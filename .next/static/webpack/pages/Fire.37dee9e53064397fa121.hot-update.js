self["webpackHotUpdate_N_E"]("pages/Fire",{

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

  if (changeUniteLevel()) {
    getUnites();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().divUnite),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: [name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 12
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 18
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 81
      }, _this), "level : ", level, " - ", id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
            lineNumber: 74,
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlVuaXRlIiwiaWQiLCJuYW1lIiwibGV2ZWwiLCJlbGVtZW50IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicGFyc2VJbnQiLCJnZXRVbml0ZXMiLCJhbGVydCIsInVzZUVmZmVjdCIsImxvY2FsU2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJnZXQiLCJyZXNwb25zZSIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJkYXRhIiwidXNlclVuaXRlc0ZpcmVVUiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0E7QUFXTyxJQUFNQyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLE9BQThEO0FBQUE7O0FBQUEsTUFBNURDLEVBQTRELFFBQTVEQSxFQUE0RDtBQUFBLE1BQXhEQyxJQUF3RCxRQUF4REEsSUFBd0Q7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLHdCQUFqQ0MsS0FBaUM7QUFBQSxNQUFqQ0EsS0FBaUMsMkJBQTNCLHFCQUEyQjs7QUFBQSxrQkFDNURDLCtDQUFRLENBQUNILEtBQUQsQ0FEb0Q7QUFBQSxNQUNwRkksT0FEb0Y7QUFBQSxNQUMzRUMs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RTRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGNUUsY0FHU0YsS0FIVCxTQUdtQkYsRUFIbkIsZUFJQTtBQUFBLGdDQUNFO0FBQUEsaUNBQUc7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUksRUFBQyxJQUExQjtBQUErQix1QkFBVyxFQUFDLElBQTNDO0FBQWdELGlCQUFLLEVBQUVZLEVBQXZEO0FBQTJELG9CQUFRLEVBQUVFO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxpQ0FBRztBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBSSxFQUFDLE9BQTFCO0FBQWtDLHVCQUFXLEVBQUMsT0FBOUM7QUFBc0QsaUJBQUssRUFBRVIsT0FBN0Q7QUFBc0Usb0JBQVEsRUFBRUU7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLGlDQUFHO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFLLEVBQUMsZ0JBQTNCO0FBQTRDLG1CQUFPLEVBQUVPO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQVlELENBN0RNOztHQUFNaEIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9GaXJlLjM3ZGVlOWU1MzA2NDM5N2ZhMTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3JtYWxpemVDb25maWcgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9jb25maWctc2hhcmVkXCJcclxuaW1wb3J0IHtGQ30gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSBcIi4vRWxlbWVudFwiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1VzZXJQcm9maWxlLCBQcm9wcyBhcyBVc2VyUHJvZmlsZVByb3BzfSBmcm9tICcuLi9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOm51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBlbGVtZW50OnN0cmluZztcclxuICBsZXZlbDpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVbml0ZTpGQzxQcm9wcz4gPSAoe2lkLCBuYW1lLCBsZXZlbCwgIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuICBjb25zdCBbbGV2ZWxVcCwgc2V0TGV2ZWxVcCBdID0gdXNlU3RhdGUobGV2ZWwpO1xyXG4gIGNvbnN0IG9uTGV2ZWxVcENoYW5nZSA9IChldmVudDphbnkpID0+IHtzZXRMZXZlbFVwKGV2ZW50LnRhcmdldC52YWx1ZSl9O1xyXG5cclxuICBjb25zdCBbaUQsIHNldElkIF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3Qgb25JZENoYW5nZSA9IChldmVudDphbnkpID0+IHtzZXRJZChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVW5pdGVMZXZlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZUxldmVsJylcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zZXNzaW9uVW5pdGVMZXZlbCcsIHtpRDpwYXJzZUludChpRCksIGxldmVsVXA6cGFyc2VJbnQobGV2ZWxVcCl9KTtcclxuICAgICAgZ2V0VW5pdGVzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VGaW5pc2gnKVxyXG4gICAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiBhbGVydCAoJ2VycmV1cicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICB9XHJcbiAgICBcclxuICB9XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcblxyXG4gIGNvbnN0IGdldFVuaXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke3Nlc3Npb24uaWR9YCk7XHJcbiAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIHNldFVzZXJVbml0ZXNGaXJlVVIocmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuXHJcbmNvbnN0IFt1c2VyVW5pdGVzRmlyZVVSLCBzZXRVc2VyVW5pdGVzRmlyZVVSXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbmlmIChjaGFuZ2VVbml0ZUxldmVsKCkpIHtcclxuICBnZXRVbml0ZXMoKTtcclxufVxyXG4gIFxyXG5cclxuICBcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZVbml0ZX0+XHJcbiAgICA8c3Bhbj5cclxuICAgIHtuYW1lfSA8YnIvPiA8YnIvPlxyXG4gICAgPEltYWdlIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSAgc3JjPXtpbWFnZX0gYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCIgLz4gPGJyLz5cclxuICAgIGxldmVsIDoge2xldmVsfSAtIHtpZH1cclxuICAgIDxmb3JtPlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwiaWRcIiBwbGFjZWhvbGRlcj1cImlkXCIgdmFsdWU9e2lEfSBvbkNoYW5nZT17b25JZENoYW5nZX0+PC9pbnB1dD48L3A+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9XCJsZXZlbFwiIHBsYWNlaG9sZGVyPVwibGV2ZWxcIiB2YWx1ZT17bGV2ZWxVcH0gb25DaGFuZ2U9e29uTGV2ZWxVcENoYW5nZX0vPjwvcD5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImNoYW5nZSAtIGxldmVsXCIgb25DbGljaz17Y2hhbmdlVW5pdGVMZXZlbH0vPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICAgIDwvc3Bhbj4gXHJcbjwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==