self["webpackHotUpdate_N_E"]("pages/Ice",{

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
              // getUnites();
              console.log('changeFinish');
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

              if (!_context.t0) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", alert('erreur'));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function changeUniteLevel() {
      return _ref2.apply(this, arguments);
    };
  }(); //   useEffect(()=>{
  //     var localSession = localStorage.getItem('session')
  //     if(localSession !=null) {
  //       let sessionObject = JSON.parse(localSession)
  //      if (sessionObject){
  //       setSession(sessionObject)
  //      }
  //   }
  // }, []);
  //   const [session, setSession ] = useState<UserProfileProps>();
  //   const getUnites = async () => {
  //     let response = await axios.get(`http://localhost:8080/api/getUnite/${session.id}`);
  //     (console.log(response));
  //     setUserUnitesFireUR(response.data);
  // }
  // const [userUnitesFireUR, setUserUnitesFireUR] = useState([]);


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

_s(Unite, "oSXdZiE2ZDOrqki0fgodh2okDSA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIlVuaXRlIiwiaWQiLCJuYW1lIiwibGV2ZWwiLCJlbGVtZW50IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImxldmVsVXAiLCJzZXRMZXZlbFVwIiwib25MZXZlbFVwQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlEIiwic2V0SWQiLCJvbklkQ2hhbmdlIiwiY2hhbmdlVW5pdGVMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicGFyc2VJbnQiLCJhbGVydCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0E7QUFXTyxJQUFNQyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLE9BQThEO0FBQUE7O0FBQUEsTUFBNURDLEVBQTRELFFBQTVEQSxFQUE0RDtBQUFBLE1BQXhEQyxJQUF3RCxRQUF4REEsSUFBd0Q7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLHdCQUFqQ0MsS0FBaUM7QUFBQSxNQUFqQ0EsS0FBaUMsMkJBQTNCLHFCQUEyQjs7QUFBQSxrQkFDNURDLCtDQUFRLENBQUNILEtBQUQsQ0FEb0Q7QUFBQSxNQUNwRkksT0FEb0Y7QUFBQSxNQUMzRUMsVUFEMkU7O0FBRTNGLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFlO0FBQUNGLGNBQVUsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBVjtBQUErQixHQUF2RTs7QUFGMkYsbUJBSXRFTiwrQ0FBUSxDQUFDTCxFQUFELENBSjhEO0FBQUEsTUFJcEZZLEVBSm9GO0FBQUEsTUFJaEZDLEtBSmdGOztBQUszRixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxLQUFELEVBQWU7QUFBQ0ksU0FBSyxDQUFDSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFMO0FBQTBCLEdBQTdEOztBQUVBLE1BQU1JLGdCQUFnQjtBQUFBLDhTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVyQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFGcUI7QUFBQSxxQkFHZnBCLEtBQUssQ0FBQ3FCLElBQU4sQ0FBVyw2Q0FBWCxFQUEwRDtBQUFDTixrQkFBRSxFQUFDTyxRQUFRLENBQUNQLEVBQUQsQ0FBWjtBQUFrQk4sdUJBQU8sRUFBQ2EsUUFBUSxDQUFDYixPQUFEO0FBQWxDLGVBQTFELENBSGU7O0FBQUE7QUFJckI7QUFDQVUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFMcUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRckJELHFCQUFPLENBQUNDLEdBQVI7O0FBUnFCO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQVVaRyxLQUFLLENBQUUsUUFBRixDQVZPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCTCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEIsQ0FQMkYsQ0FzQjdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFJRSxzQkFBTztBQUFLLGFBQVMsRUFBRU0seUVBQWhCO0FBQUEsMkJBQ0w7QUFBQSxpQkFDQ3BCLElBREQsb0JBQ087QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURQLG9CQUNhO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYixlQUVBLDhEQUFDLG1EQUFEO0FBQU8sY0FBTSxFQUFFLEdBQWY7QUFBb0IsYUFBSyxFQUFFLEdBQTNCO0FBQWlDLFdBQUcsRUFBRUcsS0FBdEM7QUFBNkMsV0FBRyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxvQkFFNEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUY1RSxjQUdTRixLQUhULFNBR21CRixFQUhuQixlQUlBO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FBRztBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBSSxFQUFDLElBQTFCO0FBQStCLHVCQUFXLEVBQUMsSUFBM0M7QUFBZ0QsaUJBQUssRUFBRVksRUFBdkQ7QUFBMkQsb0JBQVEsRUFBRUU7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGlDQUFHO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFJLEVBQUMsT0FBMUI7QUFBa0MsdUJBQVcsRUFBQyxPQUE5QztBQUFzRCxpQkFBSyxFQUFFUixPQUE3RDtBQUFzRSxvQkFBUSxFQUFFRTtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsaUNBQUc7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQUssRUFBQyxnQkFBM0I7QUFBNEMsbUJBQU8sRUFBRU87QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBWUQsQ0F6RE07O0dBQU1oQixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ljZS5kOGVlZmU0NzNmNDI2NzBiMWFlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlnIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvY29uZmlnLXNoYXJlZFwiXHJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge0VsZW1lbnR9IGZyb20gXCIuL0VsZW1lbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVc2VyUHJvZmlsZSwgUHJvcHMgYXMgVXNlclByb2ZpbGVQcm9wc30gZnJvbSAnLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZDpudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgZWxlbWVudDpzdHJpbmc7XHJcbiAgbGV2ZWw6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5pdGU6RkM8UHJvcHM+ID0gKHtpZCwgbmFtZSwgbGV2ZWwsICBlbGVtZW50LCBpbWFnZT0nL2ltYWdlcy91bm5hbWVkLmpwZyd9KSA9PiB7XHJcbiAgY29uc3QgW2xldmVsVXAsIHNldExldmVsVXAgXSA9IHVzZVN0YXRlKGxldmVsKTtcclxuICBjb25zdCBvbkxldmVsVXBDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0TGV2ZWxVcChldmVudC50YXJnZXQudmFsdWUpfTtcclxuXHJcbiAgY29uc3QgW2lELCBzZXRJZCBdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG9uSWRDaGFuZ2UgPSAoZXZlbnQ6YW55KSA9PiB7c2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVVuaXRlTGV2ZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VMZXZlbCcpXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvc2Vzc2lvblVuaXRlTGV2ZWwnLCB7aUQ6cGFyc2VJbnQoaUQpLCBsZXZlbFVwOnBhcnNlSW50KGxldmVsVXApfSk7XHJcbiAgICAgIC8vIGdldFVuaXRlcygpO1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlRmluaXNoJylcclxuICAgICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yKXtcclxuICAgICAgICByZXR1cm4gYWxlcnQgKCdlcnJldXInKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gICB1c2VFZmZlY3QoKCk9PntcclxuLy8gICAgIHZhciBsb2NhbFNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpXHJcbi8vICAgICBpZihsb2NhbFNlc3Npb24gIT1udWxsKSB7XHJcbi8vICAgICAgIGxldCBzZXNzaW9uT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFNlc3Npb24pXHJcbi8vICAgICAgaWYgKHNlc3Npb25PYmplY3Qpe1xyXG4vLyAgICAgICBzZXRTZXNzaW9uKHNlc3Npb25PYmplY3QpXHJcbi8vICAgICAgfVxyXG4gICAgXHJcbi8vICAgfVxyXG4vLyB9LCBbXSk7XHJcblxyXG4vLyAgIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uIF0gPSB1c2VTdGF0ZTxVc2VyUHJvZmlsZVByb3BzPigpO1xyXG5cclxuLy8gICBjb25zdCBnZXRVbml0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VW5pdGUvJHtzZXNzaW9uLmlkfWApO1xyXG4vLyAgICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbi8vICAgICBzZXRVc2VyVW5pdGVzRmlyZVVSKHJlc3BvbnNlLmRhdGEpO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcblxyXG4gIFxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdlVuaXRlfT5cclxuICAgIDxzcGFuPlxyXG4gICAge25hbWV9IDxici8+IDxici8+XHJcbiAgICA8SW1hZ2UgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9ICBzcmM9e2ltYWdlfSBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIiAvPiA8YnIvPlxyXG4gICAgbGV2ZWwgOiB7bGV2ZWx9IC0ge2lkfVxyXG4gICAgPGZvcm0+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9XCJpZFwiIHBsYWNlaG9sZGVyPVwiaWRcIiB2YWx1ZT17aUR9IG9uQ2hhbmdlPXtvbklkQ2hhbmdlfT48L2lucHV0PjwvcD5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9J251bWJlcicgbmFtZT1cImxldmVsXCIgcGxhY2Vob2xkZXI9XCJsZXZlbFwiIHZhbHVlPXtsZXZlbFVwfSBvbkNoYW5nZT17b25MZXZlbFVwQ2hhbmdlfS8+PC9wPlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiY2hhbmdlIC0gbGV2ZWxcIiBvbkNsaWNrPXtjaGFuZ2VVbml0ZUxldmVsfS8+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPC9zcGFuPiBcclxuPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9