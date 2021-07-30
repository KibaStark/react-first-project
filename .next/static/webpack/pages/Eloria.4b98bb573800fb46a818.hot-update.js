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
        children: [users.map(function (Users, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            pseudo: _src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member.pseudo,
            grade: _src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member.grade
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 58
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWxvcmlhLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlcnMiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiTWVtYmVyRWxvcmlhY2hlZiIsIm5hbWUiLCJpbWFnZSIsIk1lbWJlckVsb3JpYUJyYXNEcm9pdCIsIk1lbWJlckVsb3JpYUNhcGl0YWluZSIsIk1lbWJlckVsb3JpYSIsInN0eWxlcyIsIm1hcCIsIlVzZXJzIiwiaW5kZXgiLCJNZW1iZXIiLCJncmFkZSIsIm1lbWJlciIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFSEMsK0NBQVEsQ0FBYyxFQUFkLENBRkw7QUFBQSxNQUV0QkMsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUk3QixNQUFNQyxRQUFRO0FBQUEsNlNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTU4sS0FBSyxDQUFDTyxHQUFOLDZDQUROOztBQUFBO0FBQ1hDLHNCQURXO0FBRWRDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixDQUFEO0FBQ0FILHNCQUFRLENBQUNHLFFBQVEsQ0FBQ0csSUFBVixDQUFSOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJMLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFLQUEsVUFBUTtBQUVOLE1BQUlNLGdCQUFnQixHQUFDLENBQUM7QUFDcEJDLFFBQUksRUFBQyxPQURlO0FBQ05D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QTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFtQ0U7QUFBUSxlQUFTLEVBQUVILHVFQUFhTztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBMENEOztHQS9GdUJ2QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0Vsb3JpYS40Yjk4YmI1NzM4MDBmYjQ2YTgxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHsgTWVtYmVyLCBQcm9wcyBhcyBNZW1iZXJQcm9wcyB9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL01lbWJlci9NZW1iZXInXHJcbmltcG9ydCB7VXNlclVuaXRlLCBQcm9wcyBhcyBVc2VyUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJVbml0ZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPFVzZXJQcm9wc1tdPihbXSk7XHJcblxyXG4gIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVzZXIve2dyYWRlfWApO1xyXG4gICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICBzZXRVc2VycyhyZXNwb25zZS5kYXRhKTtcclxufVxyXG4gIGdldFVzZXJzKCk7XHJcbiAgICBcclxuICAgIHZhciBNZW1iZXJFbG9yaWFjaGVmPVt7XHJcbiAgICAgIG5hbWU6J0RlbWVkJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RlbWVkLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYUJyYXNEcm9pdD1be1xyXG4gICAgICBuYW1lOidLaWJhJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0tpYmEucG5nJ30se1xyXG4gICAgICBuYW1lOidSYXptbycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9SYXptby5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1NjaGxhZ2VuJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1NjaGxhZ2VuLmpwZyd9LHtcclxuICAgICAgbmFtZTonT3NjYXInLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvT3NjYXIucG5nJ30se1xyXG4gICAgICBuYW1lOidMaW5rJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0xpbmsuanBnJ30se1xyXG4gICAgICBuYW1lOidVbmtub3duJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Vua25vd24uanBnJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhQ2FwaXRhaW5lPVt7XHJcbiAgICAgIG5hbWU6J3R5cGhlcicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9UeXBoZXIucG5nJ30se1xyXG4gICAgICBuYW1lOidaaGFrJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1poYWsuanBnJ30se1xyXG4gICAgICBuYW1lOidGYXJBbGV4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0ZhckFsZXgucG5nJ30se1xyXG4gICAgICBuYW1lOidQZXJsaW4nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvUGVybGluLnBuZyd9LHtcclxuICAgICAgbmFtZTonRmxvNDA4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0Zsby5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J0RqaW5zdW5nJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RqaW5zdW5nLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYT1be1xyXG4gICAgICBuYW1lOidBbmdlbm9pcicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTYW1iYTkzJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1dyYXRoJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J3NldGhhcnQnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonU2FtWlInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonQmFoYW11dCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidQeXBlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1ZleHh5JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1RhbW91bmEyMicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidNaXNlcnUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR3JhbmRjb2V1cicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidQaWtham9uJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0xsb3lkJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0dpbmEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR2FyemV0aCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTaGVyZGEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonS2VpbGxlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfVxyXG4gICAgXVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RWxvcmlhPC9oMj5cclxuICAgICAgICA8aDM+Q2hlZjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyfT5cclxuICAgICAgICB7dXNlcnMubWFwKChVc2VyczpNZW1iZXJQcm9wcywgaW5kZXg6bnVtYmVyKSA9PiAoPE1lbWJlciBwc2V1ZG89e01lbWJlci5wc2V1ZG99IGdyYWRlPXtNZW1iZXIuZ3JhZGV9IGtleT17aW5kZXh9Lz4pKX1cclxuXHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhY2hlZi5tYXAoKG1lbWJlciwgaW5kZXgpID0+ICg8TWVtYmVyIG5hbWU9e21lbWJlci5uYW1lfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5CcmFzIGRyb2l0PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhQnJhc0Ryb2l0Lm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPkNhcGl0YWluZTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDYXBpdGFpbmVDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYUNhcGl0YWluZS5tYXAoKG1lbWJlciwgaW5kZXgpID0+KDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDM+TWVtYnJlPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhLm1hcCgobWVtYmVyLCBpbmRleCkgPT4oPE1lbWJlciBuYW1lPXttZW1iZXIubmFtZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=