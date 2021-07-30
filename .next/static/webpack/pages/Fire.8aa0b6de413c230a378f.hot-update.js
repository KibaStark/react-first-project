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
              _context.next = 3;
              return axios.post('http://localhost:8080/api/sessionUniteLevel', {
                iD: parseInt(iD),
                levelUp: parseInt(levelUp)
              });

            case 3:
              getUnites();
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);

              if (!_context.t0) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", alert('erreur'));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
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
              setUserUnitesFireUR(response.data);

            case 4:
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
        lineNumber: 63,
        columnNumber: 12
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 18
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        height: 100,
        width: 100,
        src: image,
        alt: "Picture of the author"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
            lineNumber: 69,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
            lineNumber: 70,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "change - level",
            onClick: changeUniteLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlVuaXRlIiwiaXNJbnB1dFNob3duIiwiaWQiLCJuYW1lIiwibGV2ZWwiLCJlbGVtZW50IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsInBvc3QiLCJwYXJzZUludCIsImdldFVuaXRlcyIsImFsZXJ0IiwidXNlRWZmZWN0IiwibG9jYWxTZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJKU09OIiwicGFyc2UiLCJzZXRTZXNzaW9uIiwic2Vzc2lvbiIsImdldCIsInJlc3BvbnNlIiwic2V0VXNlclVuaXRlc0ZpcmVVUiIsImRhdGEiLCJ1c2VyVW5pdGVzRmlyZVVSIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQTtBQVlPLElBQU1DLEtBQWUsR0FBRyxTQUFsQkEsS0FBa0IsT0FBaUY7QUFBQTs7QUFBQSwrQkFBL0VDLFlBQStFO0FBQUEsTUFBL0VBLFlBQStFLGtDQUFsRSxJQUFrRTtBQUFBLE1BQTVEQyxFQUE0RCxRQUE1REEsRUFBNEQ7QUFBQSxNQUF4REMsSUFBd0QsUUFBeERBLElBQXdEO0FBQUEsTUFBbERDLEtBQWtELFFBQWxEQSxLQUFrRDtBQUFBLE1BQTFDQyxPQUEwQyxRQUExQ0EsT0FBMEM7QUFBQSx3QkFBakNDLEtBQWlDO0FBQUEsTUFBakNBLEtBQWlDLDJCQUEzQixxQkFBMkI7O0FBQUEsa0JBQy9FQywrQ0FB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MUI7QUFBK0IsdUJBQVcsRUFBQyxJQUEzQztBQUFnRCxpQkFBSyxFQUFFYSxFQUF2RDtBQUEyRCxvQkFBUSxFQUFFRTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBO0FBQUEsaUNBQUc7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUksRUFBQyxPQUExQjtBQUFrQyx1QkFBVyxFQUFDLE9BQTlDO0FBQXNELGlCQUFLLEVBQUVSLE9BQTdEO0FBQXNFLG9CQUFRLEVBQUVFO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZBLGVBR0E7QUFBQSxpQ0FBRztBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBSyxFQUFDLGdCQUEzQjtBQUE0QyxtQkFBTyxFQUFFTztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFpQkQsQ0EzRE07O0dBQU1qQixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ZpcmUuOGFhMGI2ZGU0MTNjMjMwYTM3OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZUNvbmZpZyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2NvbmZpZy1zaGFyZWRcIlxyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHtFbGVtZW50fSBmcm9tIFwiLi9FbGVtZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VXNlclByb2ZpbGUsIFByb3BzIGFzIFVzZXJQcm9maWxlUHJvcHN9IGZyb20gJy4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNJbnB1dFNob3duOmJvb2xlYW47XHJcbiAgaWQ6bnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGVsZW1lbnQ6c3RyaW5nO1xyXG4gIGxldmVsOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVuaXRlOkZDPFByb3BzPiA9ICh7aXNJbnB1dFNob3duPXRydWUsIGlkLCBuYW1lLCBsZXZlbCwgIGVsZW1lbnQsIGltYWdlPScvaW1hZ2VzL3VubmFtZWQuanBnJ30pID0+IHtcclxuICBjb25zdCBbbGV2ZWxVcCwgc2V0TGV2ZWxVcCBdID0gdXNlU3RhdGUobGV2ZWwpO1xyXG4gIGNvbnN0IG9uTGV2ZWxVcENoYW5nZSA9IChldmVudDphbnkpID0+IHtzZXRMZXZlbFVwKGV2ZW50LnRhcmdldC52YWx1ZSl9O1xyXG5cclxuICBjb25zdCBbaUQsIHNldElkIF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3Qgb25JZENoYW5nZSA9IChldmVudDphbnkpID0+IHtzZXRJZChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcblxyXG4gIGNvbnN0IGNoYW5nZVVuaXRlTGV2ZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvc2Vzc2lvblVuaXRlTGV2ZWwnLCB7aUQ6cGFyc2VJbnQoaUQpLCBsZXZlbFVwOnBhcnNlSW50KGxldmVsVXApfSk7XHJcbiAgICAgIGdldFVuaXRlcygpO1xyXG4gICAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKXtcclxuICAgICAgICByZXR1cm4gYWxlcnQgKCdlcnJldXInKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHZhciBsb2NhbFNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpXHJcbiAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XHJcbiAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbiAgICAgaWYgKHNlc3Npb25PYmplY3Qpe1xyXG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgfVxyXG59LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uIF0gPSB1c2VTdGF0ZTxVc2VyUHJvZmlsZVByb3BzPigpO1xyXG5cclxuICBjb25zdCBnZXRVbml0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUvJHtzZXNzaW9uLmlkfWApO1xyXG4gICAgc2V0VXNlclVuaXRlc0ZpcmVVUihyZXNwb25zZS5kYXRhKTtcclxufVxyXG5cclxuY29uc3QgW3VzZXJVbml0ZXNGaXJlVVIsIHNldFVzZXJVbml0ZXNGaXJlVVJdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2VW5pdGV9PlxyXG4gICAgPHNwYW4+XHJcbiAgICB7bmFtZX0gPGJyLz4gPGJyLz5cclxuICAgIDxJbWFnZSBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gIHNyYz17aW1hZ2V9IGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiIC8+IDxici8+XHJcbiAgICBsZXZlbCA6IHtsZXZlbFVwfSAtIHtpZH1cclxuICAgIHtcclxuICAgICAgaXNJbnB1dFNob3duICYmIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPVwiaWRcIiBwbGFjZWhvbGRlcj1cImlkXCIgdmFsdWU9e2lEfSBvbkNoYW5nZT17b25JZENoYW5nZX0+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgPHA+PGlucHV0IHR5cGU9J251bWJlcicgbmFtZT1cImxldmVsXCIgcGxhY2Vob2xkZXI9XCJsZXZlbFwiIHZhbHVlPXtsZXZlbFVwfSBvbkNoYW5nZT17b25MZXZlbFVwQ2hhbmdlfS8+PC9wPlxyXG4gICAgICAgIDxwPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJjaGFuZ2UgLSBsZXZlbFwiIG9uQ2xpY2s9e2NoYW5nZVVuaXRlTGV2ZWx9Lz48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIDwvc3Bhbj4gXHJcbjwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==