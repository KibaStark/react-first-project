self["webpackHotUpdate_N_E"]("pages/Eloria",{

/***/ "./pages/Eloria.tsx":
/*!**************************!*\
  !*** ./pages/Eloria.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* harmony import */ var _src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/composants/Member/Member */ "./src/composants/Member/Member.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\Eloria.tsx",
    _s = $RefreshSig$();








var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function Home() {
  _s();

  var _this = this;

  var MemberEloriachef = [{
    name: 'Demed',
    image: '/images/Membre/Demed.png'
  }];
  var MemberEloriaBrasDroit = [{
    name: 'Kiba',
    image: '/images/Membre/Kiba.png'
  }, {
    name: 'Razmo',
    image: '/images/Membre/Razmo.jpg'
  }, {
    name: 'Schlagen',
    image: '/images/Membre/Schlagen.jpg'
  }, {
    name: 'Oscar',
    image: '/images/Membre/Oscar.png'
  }, {
    name: 'Link',
    image: '/images/Membre/Link.jpg'
  }, {
    name: 'Unknown',
    image: '/images/Membre/Unknown.jpg'
  }];
  var MemberEloriaCapitaine = [{
    name: 'typher',
    image: '/images/Membre/Typher.png'
  }, {
    name: 'Zhak',
    image: '/images/Membre/Zhak.jpg'
  }, {
    name: 'FarAlex',
    image: '/images/Membre/FarAlex.png'
  }, {
    name: 'Perlin',
    image: '/images/Membre/Perlin.png'
  }, {
    name: 'Flo408',
    image: '/images/Membre/Flo.png'
  }, {
    name: 'Djinsung',
    image: '/images/Membre/Djinsung.png'
  }];
  var MemberEloria = [{
    name: 'Angenoir',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Samba93',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Wrath',
    image: '/images/unnamed.jpg'
  }, {
    name: 'sethart',
    image: '/images/unnamed.jpg'
  }, {
    name: 'SamZR',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Bahamut',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Pype',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Vexxy',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Tamouna22',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Miseru',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Grandcoeur',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Pikajon',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Lloyd',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Gina',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Garzeth',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Sherda',
    image: '/images/unnamed.jpg'
  }, {
    name: 'Keille',
    image: '/images/unnamed.jpg'
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      users = _useState[0],
      setUsers = _useState[1];

  var getUsers = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get("http://localhost:8080/api/getUser/{grade}");

            case 2:
              response = _context.sent;
              console.log(response);
              setUsers(response.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  getUsers();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_5__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Eloria"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chef"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaChefContainer),
        children: [users.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: user.name,
            grade: user.grade,
            image: user.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 52
          }, _this);
        }), MemberEloriachef.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 53
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Bras droit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaBrasDroitContainer),
        children: MemberEloriaBrasDroit.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 58
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Capitaine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaCapitaineContainer),
        children: MemberEloriaCapitaine.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 57
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Membre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaMemberContainer),
        children: MemberEloria.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(Home, "gAXO2JN5F09+lSQAgkU4yvYNIT8=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWxvcmlhLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwiTWVtYmVyRWxvcmlhY2hlZiIsIm5hbWUiLCJpbWFnZSIsIk1lbWJlckVsb3JpYUJyYXNEcm9pdCIsIk1lbWJlckVsb3JpYUNhcGl0YWluZSIsIk1lbWJlckVsb3JpYSIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VycyIsImdldFVzZXJzIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0eWxlcyIsIm1hcCIsIm1lbWJlciIsImluZGV4IiwidXNlciIsImdyYWRlIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUUzQixNQUFJQyxnQkFBZ0IsR0FBQyxDQUFDO0FBQ3BCQyxRQUFJLEVBQUMsT0FEZTtBQUNOQyxTQUFLLEVBQUM7QUFEQSxHQUFELENBQXJCO0FBSUEsTUFBSUMscUJBQXFCLEdBQUMsQ0FBQztBQUN6QkYsUUFBSSxFQUFDLE1BRG9CO0FBQ1pDLFNBQUssRUFBQztBQURNLEdBQUQsRUFDc0I7QUFDOUNELFFBQUksRUFBQyxPQUR5QztBQUNoQ0MsU0FBSyxFQUFDO0FBRDBCLEdBRHRCLEVBRXdCO0FBQ2hERCxRQUFJLEVBQUMsVUFEMkM7QUFDL0JDLFNBQUssRUFBQztBQUR5QixHQUZ4QixFQUc4QjtBQUN0REQsUUFBSSxFQUFDLE9BRGlEO0FBQ3hDQyxTQUFLLEVBQUM7QUFEa0MsR0FIOUIsRUFJd0I7QUFDaERELFFBQUksRUFBQyxNQUQyQztBQUNuQ0MsU0FBSyxFQUFDO0FBRDZCLEdBSnhCLEVBS3NCO0FBQzlDRCxRQUFJLEVB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RCxhQUFnQ2dCLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW5CO0FBQUEsU0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBbUNFO0FBQVEsZUFBUyxFQUFFSCx1RUFBYU07QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQTBDRDs7R0EvRnVCdEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9FbG9yaWEuOTc2ZDQwY2ExOTYxMDhjM2VlOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHtTaWRlQmFyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9TaWRlQmFyL1NpZGVCYXInXHJcbmltcG9ydCB7IE1lbWJlciwgUHJvcHMgYXMgTWVtYmVyUHJvcHMgfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9NZW1iZXIvTWVtYmVyJ1xyXG5pbXBvcnQge1VzZXJVbml0ZSwgUHJvcHMgYXMgVXNlclByb3BzfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyVW5pdGUnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhY2hlZj1be1xyXG4gICAgICBuYW1lOidEZW1lZCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9EZW1lZC5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFCcmFzRHJvaXQ9W3tcclxuICAgICAgbmFtZTonS2liYScsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9LaWJhLnBuZyd9LHtcclxuICAgICAgbmFtZTonUmF6bW8nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvUmF6bW8uanBnJ30se1xyXG4gICAgICBuYW1lOidTY2hsYWdlbicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9TY2hsYWdlbi5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J09zY2FyJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL09zY2FyLnBuZyd9LHtcclxuICAgICAgbmFtZTonTGluaycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9MaW5rLmpwZyd9LHtcclxuICAgICAgbmFtZTonVW5rbm93bicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Vbmtub3duLmpwZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYUNhcGl0YWluZT1be1xyXG4gICAgICBuYW1lOid0eXBoZXInLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvVHlwaGVyLnBuZyd9LHtcclxuICAgICAgbmFtZTonWmhhaycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9aaGFrLmpwZyd9LHtcclxuICAgICAgbmFtZTonRmFyQWxleCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9GYXJBbGV4LnBuZyd9LHtcclxuICAgICAgbmFtZTonUGVybGluJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Blcmxpbi5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J0ZsbzQwOCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9GbG8ucG5nJ30se1xyXG4gICAgICBuYW1lOidEamluc3VuZycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Eamluc3VuZy5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWE9W3tcclxuICAgICAgbmFtZTonQW5nZW5vaXInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonU2FtYmE5MycsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidXcmF0aCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidzZXRoYXJ0JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1NhbVpSJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0JhaGFtdXQnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonUHlwZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidWZXh4eScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidUYW1vdW5hMjInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonTWlzZXJ1JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0dyYW5kY29ldXInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonUGlrYWpvbicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidMbG95ZCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidHaW5hJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0dhcnpldGgnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonU2hlcmRhJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0tlaWxsZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ31cclxuICAgIF1cclxuICAgIFxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlclByb3BzW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VXNlci97Z3JhZGV9YCk7XHJcbiAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcbiAgZ2V0VXNlcnMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIvPlxyXG4gICAgICA8U2lkZUJhci8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgyPkVsb3JpYTwvaDI+XHJcbiAgICAgICAgPGgzPkNoZWY8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ2hlZkNvbnRhaW5lcn0+XHJcbiAgICAgICAge3VzZXJzLm1hcCgobWVtYmVyOk1lbWJlclByb3BzLCBpbmRleCkgPT4gKDxNZW1iZXIgbmFtZT17dXNlci5uYW1lfSBncmFkZT17dXNlci5ncmFkZX0ga2V5PXtpbmRleH0gaW1hZ2U9e3VzZXIuaW1hZ2V9Lz4pKX1cclxuXHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhY2hlZi5tYXAoKG1lbWJlciwgaW5kZXgpID0+ICg8TWVtYmVyIG5hbWU9e21lbWJlci5uYW1lfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5CcmFzIGRyb2l0PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhQnJhc0Ryb2l0Lm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPkNhcGl0YWluZTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDYXBpdGFpbmVDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYUNhcGl0YWluZS5tYXAoKG1lbWJlciwgaW5kZXgpID0+KDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDM+TWVtYnJlPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhLm1hcCgobWVtYmVyLCBpbmRleCkgPT4oPE1lbWJlciBuYW1lPXttZW1iZXIubmFtZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=