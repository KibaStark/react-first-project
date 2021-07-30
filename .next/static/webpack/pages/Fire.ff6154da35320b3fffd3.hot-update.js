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
                iD: parseInt('iD'),
                levelUp: parseInt('levelUp')
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
        lineNumber: 65,
        columnNumber: 12
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 18
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
            lineNumber: 69,
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
            lineNumber: 70,
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 10
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlVuaXRlIiwiaWQiLCJuYW1lIiwibGV2ZWwiLCJlbGVtZW50IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicGFyc2VJbnQiLCJnZXRVbml0ZXMiLCJhbGVydCIsInVzZUVmZmVjdCIsImxvY2FsU2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXNzaW9uT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJnZXQiLCJyZXNwb25zZSIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJkYXRhIiwidXNlclVuaXRlc0ZpcmVVUiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0E7QUFXTyxJQUFNQyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLE9BQThEO0FBQUE7O0FBQUEsTUFBNURDLEVBQTRELFFBQTVEQSxFQUE0RDtBQUFBLE1BQXhEQyxJQUF3RCxRQUF4REEsSUFBd0Q7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLHdCQUFqQ0MsS0FBaUM7QUFBQSxNQUFqQ0EsS0FBaUMsMkJBQTNCLHFCQUEyQjs7QUFBQSxrQkFDNURDLCtDQUFRLENBQUNILEtBQUQsQ0FEb0Q7QUFBQSxNQUNwRkksT0FEb0Y7QUFBQSxNQUMzRUMs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QixlQUlBO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FBRztBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBSSxFQUFDLElBQTFCO0FBQStCLHVCQUFXLEVBQUMsSUFBM0M7QUFBZ0QsaUJBQUssRUFBRVksRUFBdkQ7QUFBMkQsb0JBQVEsRUFBRUU7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGlDQUFHO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFJLEVBQUMsT0FBMUI7QUFBa0MsdUJBQVcsRUFBQyxPQUE5QztBQUFzRCxpQkFBSyxFQUFFUixPQUE3RDtBQUFzRSxvQkFBUSxFQUFFRTtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsaUNBQUc7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQUssRUFBQyxnQkFBM0I7QUFBNEMsbUJBQU8sRUFBRU87QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBWUQsQ0F6RE07O0dBQU1oQixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ZpcmUuZmY2MTU0ZGEzNTMyMGIzZmZmZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZUNvbmZpZyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2NvbmZpZy1zaGFyZWRcIlxyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tIFwiLi9FbGVtZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VXNlclByb2ZpbGUsIFByb3BzIGFzIFVzZXJQcm9maWxlUHJvcHN9IGZyb20gJy4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWQ6bnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGVsZW1lbnQ6c3RyaW5nO1xyXG4gIGxldmVsOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVuaXRlOkZDPFByb3BzPiA9ICh7aWQsIG5hbWUsIGxldmVsLCAgZWxlbWVudCwgaW1hZ2U9Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSkgPT4ge1xyXG4gIGNvbnN0IFtsZXZlbFVwLCBzZXRMZXZlbFVwIF0gPSB1c2VTdGF0ZShsZXZlbCk7XHJcbiAgY29uc3Qgb25MZXZlbFVwQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge3NldExldmVsVXAoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG4gIGNvbnN0IFtpRCwgc2V0SWQgXSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBvbklkQ2hhbmdlID0gKGV2ZW50OmFueSkgPT4ge3NldElkKGV2ZW50LnRhcmdldC52YWx1ZSl9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VVbml0ZUxldmVsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlTGV2ZWwnKVxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Nlc3Npb25Vbml0ZUxldmVsJywge2lEOnBhcnNlSW50KCdpRCcpLCBsZXZlbFVwOnBhcnNlSW50KCdsZXZlbFVwJyl9KTtcclxuICAgICAgZ2V0VW5pdGVzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VGaW5pc2gnKVxyXG4gICAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiBhbGVydCAoJ2VycmV1cicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgdmFyIGxvY2FsU2Vzc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJylcclxuICAgIGlmKGxvY2FsU2Vzc2lvbiAhPW51bGwpIHtcclxuICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICBpZiAoc2Vzc2lvbk9iamVjdCl7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbk9iamVjdClcclxuICAgICB9XHJcbiAgICBcclxuICB9XHJcbn0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcblxyXG4gIGNvbnN0IGdldFVuaXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke3Nlc3Npb24uaWR9YCk7XHJcbiAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIHNldFVzZXJVbml0ZXNGaXJlVVIocmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuXHJcbmNvbnN0IFt1c2VyVW5pdGVzRmlyZVVSLCBzZXRVc2VyVW5pdGVzRmlyZVVSXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2VW5pdGV9PlxyXG4gICAgPHNwYW4+XHJcbiAgICB7bmFtZX0gPGJyLz4gPGJyLz5cclxuICAgIDxJbWFnZSBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+IDxici8+XHJcbiAgICBsZXZlbCA6IHtsZXZlbH0gLSB7aWR9XHJcbiAgICA8Zm9ybT5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9J251bWJlcicgbmFtZT1cImlkXCIgcGxhY2Vob2xkZXI9XCJpZFwiIHZhbHVlPXtpRH0gb25DaGFuZ2U9e29uSWRDaGFuZ2V9PjwvaW5wdXQ+PC9wPlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwibGV2ZWxcIiBwbGFjZWhvbGRlcj1cImxldmVsXCIgdmFsdWU9e2xldmVsVXB9IG9uQ2hhbmdlPXtvbkxldmVsVXBDaGFuZ2V9Lz48L3A+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJjaGFuZ2UgLSBsZXZlbFwiIG9uQ2xpY2s9e2NoYW5nZVVuaXRlTGV2ZWx9Lz48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8L3NwYW4+IFxyXG48L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=