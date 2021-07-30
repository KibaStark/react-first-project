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
    pseudo: 'Demed',
    image: '/images/Membre/Demed.png'
  }];
  var MemberEloriaBrasDroit = [{
    pseudo: 'Kiba',
    image: '/images/Membre/Kiba.png'
  }, {
    pseudo: 'Razmo',
    image: '/images/Membre/Razmo.jpg'
  }, {
    pseudo: 'Schlagen',
    image: '/images/Membre/Schlagen.jpg'
  }, {
    pseudo: 'Oscar',
    image: '/images/Membre/Oscar.png'
  }, {
    pseudo: 'Link',
    image: '/images/Membre/Link.jpg'
  }, {
    pseudo: 'Unknown',
    image: '/images/Membre/Unknown.jpg'
  }];
  var MemberEloriaCapitaine = [{
    pseudo: 'typher',
    image: '/images/Membre/Typher.png'
  }, {
    pseudo: 'Zhak',
    image: '/images/Membre/Zhak.jpg'
  }, {
    pseudo: 'FarAlex',
    image: '/images/Membre/FarAlex.png'
  }, {
    pseudo: 'Perlin',
    image: '/images/Membre/Perlin.png'
  }, {
    pseudo: 'Flo408',
    image: '/images/Membre/Flo.png'
  }, {
    pseudo: 'Djinsung',
    image: '/images/Membre/Djinsung.png'
  }];
  var MemberEloria = [{
    pseudo: 'Angenoir',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Samba93',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Wrath',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'sethart',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'SamZR',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Bahamut',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Pype',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Vexxy',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Tamouna22',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Miseru',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Grandcoeur',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Pikajon',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Lloyd',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Gina',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Garzeth',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Sherda',
    image: '/images/unnamed.jpg'
  }, {
    pseudo: 'Keille',
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
              return axios.get("http://localhost:8080/api/getUser/brasDroit");

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

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    getUsers();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_5__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Eloria"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chef"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaChefContainer),
        children: MemberEloriachef.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            pseudo: member.pseudo,
            grade: member.grade,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 53
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Bras droit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaBrasDroitContainer),
        children: [users.map(function (user, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            pseudo: user.pseudo,
            grade: user.grade,
            image: user.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 48
          }, _this);
        }), MemberEloriaBrasDroit.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            pseudo: member.pseudo,
            grade: member.grade,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 58
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Capitaine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaCapitaineContainer),
        children: MemberEloriaCapitaine.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            pseudo: member.pseudo,
            grade: member.grade,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 57
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Membre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaMemberContainer),
        children: MemberEloria.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            pseudo: member.pseudo,
            grade: member.grade,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(Home, "JadZszbqna06PpJs9hMo7Hl/LOY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWxvcmlhLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwiTWVtYmVyRWxvcmlhY2hlZiIsInBzZXVkbyIsImltYWdlIiwiTWVtYmVyRWxvcmlhQnJhc0Ryb2l0IiwiTWVtYmVyRWxvcmlhQ2FwaXRhaW5lIiwiTWVtYmVyRWxvcmlhIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlcnMiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwibWFwIiwibWVtYmVyIiwiaW5kZXgiLCJncmFkZSIsInVzZXIiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBRTNCLE1BQUlDLGdCQUFnQixHQUFDLENBQUM7QUFDcEJDLFVBQU0sRUFBQyxPQURhO0FBQ0pDLFNBQUssRUFBQztBQURGLEdBQUQsQ0FBckI7QUFJQSxNQUFJQyxxQkFBcUIsR0FBQyxDQUFDO0FBQ3pCRixVQUFNLEVBQUMsTUFEa0I7QUFDVkMsU0FBSyxFQUFDO0FBREksR0FBRCxFQUN3QjtBQUNoREQsVUFBTSxFQUFDLE9BRHlDO0FBQ2hDQyxTQUFLLEVBQUM7QUFEMEIsR0FEeEIsRUFFMEI7QUFDbERELFVBQU0sRUFBQyxVQUQyQztBQUMvQkMsU0FBSyxFQUFDO0FBRHlCLEdBRjFCLEVBR2dDO0FBQ3hERCxVQUFNLEVBQUMsT0FEaUQ7QUFDeENDLFNBQUssRUFBQztBQURrQyxHQUhoQyxFQUkwQjtBQUNsREQsVUFBTSxFQUFDLE1BRDJDO0FBQ25DQyxTQUFLLEVBQUM7QUFENkIsR0FKMUIsRUFLd0I7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SyxpQkFBUyxFQUFFSCw0RkFBaEI7QUFBQSxrQkFDR1gsWUFBWSxDQUFDWSxHQUFiLENBQWlCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDhCQUFtQiw4REFBQyxpRUFBRDtBQUFRLGtCQUFNLEVBQUVELE1BQU0sQ0FBQ2pCLE1BQXZCO0FBQStCLGlCQUFLLEVBQUVpQixNQUFNLENBQUNFLEtBQTdDO0FBQWdFLGlCQUFLLEVBQUVGLE1BQU0sQ0FBQ2hCO0FBQTlFLGFBQXlEaUIsS0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbkI7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFtQ0U7QUFBUSxlQUFTLEVBQUVILHVFQUFhTTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBMENEOztHQWpHdUJ2QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0Vsb3JpYS4yMGI3ODY3NDlmNzI5YWM3ZjY5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHsgTWVtYmVyLCBQcm9wcyBhcyBNZW1iZXJQcm9wcyB9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL01lbWJlci9NZW1iZXInXHJcbmltcG9ydCB7VXNlclVuaXRlLCBQcm9wcyBhcyBVc2VyUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJVbml0ZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFjaGVmPVt7XHJcbiAgICAgIHBzZXVkbzonRGVtZWQnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRGVtZWQucG5nJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhQnJhc0Ryb2l0PVt7XHJcbiAgICAgIHBzZXVkbzonS2liYScsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9LaWJhLnBuZyd9LHtcclxuICAgICAgcHNldWRvOidSYXptbycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9SYXptby5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonU2NobGFnZW4nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvU2NobGFnZW4uanBnJ30se1xyXG4gICAgICBwc2V1ZG86J09zY2FyJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL09zY2FyLnBuZyd9LHtcclxuICAgICAgcHNldWRvOidMaW5rJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0xpbmsuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1Vua25vd24nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvVW5rbm93bi5qcGcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFDYXBpdGFpbmU9W3tcclxuICAgICAgcHNldWRvOid0eXBoZXInLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvVHlwaGVyLnBuZyd9LHtcclxuICAgICAgcHNldWRvOidaaGFrJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1poYWsuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J0ZhckFsZXgnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRmFyQWxleC5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonUGVybGluJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Blcmxpbi5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonRmxvNDA4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0Zsby5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonRGppbnN1bmcnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRGppbnN1bmcucG5nJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhPVt7XHJcbiAgICAgIHBzZXVkbzonQW5nZW5vaXInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidTYW1iYTkzJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonV3JhdGgnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidzZXRoYXJ0JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonU2FtWlInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidCYWhhbXV0JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonUHlwZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1ZleHh5JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonVGFtb3VuYTIyJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonTWlzZXJ1JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonR3JhbmRjb2V1cicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1Bpa2Fqb24nLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidMbG95ZCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J0dpbmEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidHYXJ6ZXRoJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonU2hlcmRhJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonS2VpbGxlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxVc2VyUHJvcHNbXT4oW10pO1xyXG5cclxuICBjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVc2VyL2JyYXNEcm9pdGApO1xyXG4gICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICBzZXRVc2VycyhyZXNwb25zZS5kYXRhKTtcclxufVxyXG51c2VFZmZlY3QoKCkgPT57XHJcbiAgZ2V0VXNlcnMoKTtcclxufSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPFNpZGVCYXIvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDb250YWluZXJ9PlxyXG4gICAgICAgIDxoMj5FbG9yaWE8L2gyPlxyXG4gICAgICAgIDxoMz5DaGVmPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUNoZWZDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYWNoZWYubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoPE1lbWJlciBwc2V1ZG89e21lbWJlci5wc2V1ZG99IGdyYWRlPXttZW1iZXIuZ3JhZGV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPkJyYXMgZHJvaXQ8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQnJhc0Ryb2l0Q29udGFpbmVyfT5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyOlVzZXJQcm9wcywgaW5kZXgpID0+ICg8TWVtYmVyIHBzZXVkbz17dXNlci5wc2V1ZG99IGdyYWRlPXt1c2VyLmdyYWRlfSBrZXk9e2luZGV4fSBpbWFnZT17dXNlci5pbWFnZX0vPikpfVxyXG5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFCcmFzRHJvaXQubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoPE1lbWJlciBwc2V1ZG89e21lbWJlci5wc2V1ZG99IGdyYWRlPXttZW1iZXIuZ3JhZGV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPkNhcGl0YWluZTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDYXBpdGFpbmVDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYUNhcGl0YWluZS5tYXAoKG1lbWJlciwgaW5kZXgpID0+KDxNZW1iZXIgcHNldWRvPXttZW1iZXIucHNldWRvfSBncmFkZT17bWVtYmVyLmdyYWRlfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgzPk1lbWJyZTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFNZW1iZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYS5tYXAoKG1lbWJlciwgaW5kZXgpID0+KDxNZW1iZXIgcHNldWRvPXttZW1iZXIucHNldWRvfSBncmFkZT17bWVtYmVyLmdyYWRlfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==