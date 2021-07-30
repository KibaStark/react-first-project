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
        children: [users.map(function (User, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(User, {
            user_id: User.user_id,
            id: User.id
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 55
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWxvcmlhLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlcnMiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiTWVtYmVyRWxvcmlhY2hlZiIsIm5hbWUiLCJpbWFnZSIsIk1lbWJlckVsb3JpYUJyYXNEcm9pdCIsIk1lbWJlckVsb3JpYUNhcGl0YWluZSIsIk1lbWJlckVsb3JpYSIsInN0eWxlcyIsIm1hcCIsIlVzZXIiLCJpbmRleCIsInVzZXJfaWQiLCJpZCIsIm1lbWJlciIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFSEMsK0NBQVEsQ0FBYyxFQUFkLENBRkw7QUFBQSxNQUV0QkMsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUk3QixNQUFNQyxRQUFRO0FBQUEsNlNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTU4sS0FBSyxDQUFDTyxHQUFOLDZDQUROOztBQUFBO0FBQ1hDLHNCQURXO0FBRWRDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixDQUFEO0FBQ0FILHNCQUFRLENBQUNHLFFBQVEsQ0FBQ0csSUFBVixDQUFSOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJMLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFLQUEsVUFBUTtBQUVOLE1BQUlNLGdCQUFnQixHQUFDLENBQUM7QUFDcEJDLFFBQUksRUFBQyxPQURlO0FBQ05DLFNB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFtQ0U7QUFBUSxlQUFTLEVBQUVILHVFQUFhTztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBMENEOztHQS9GdUJ2QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0Vsb3JpYS5kOGVjYmU4NzIwMDcwNDU0MDY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvTWVtYmVyL01lbWJlcidcclxuaW1wb3J0IHtVc2VyVW5pdGUsIFByb3BzIGFzIFVzZXJQcm9wc30gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvVXNlclByb2ZpbGUvVXNlclVuaXRlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlclByb3BzW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VXNlci97Z3JhZGV9YCk7XHJcbiAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcbiAgZ2V0VXNlcnMoKTtcclxuICAgIFxyXG4gICAgdmFyIE1lbWJlckVsb3JpYWNoZWY9W3tcclxuICAgICAgbmFtZTonRGVtZWQnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRGVtZWQucG5nJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhQnJhc0Ryb2l0PVt7XHJcbiAgICAgIG5hbWU6J0tpYmEnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvS2liYS5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J1Jhem1vJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Jhem1vLmpwZyd9LHtcclxuICAgICAgbmFtZTonU2NobGFnZW4nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvU2NobGFnZW4uanBnJ30se1xyXG4gICAgICBuYW1lOidPc2NhcicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Pc2Nhci5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J0xpbmsnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvTGluay5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1Vua25vd24nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvVW5rbm93bi5qcGcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFDYXBpdGFpbmU9W3tcclxuICAgICAgbmFtZTondHlwaGVyJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1R5cGhlci5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J1poYWsnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvWmhhay5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0ZhckFsZXgnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRmFyQWxleC5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J1BlcmxpbicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9QZXJsaW4ucG5nJ30se1xyXG4gICAgICBuYW1lOidGbG80MDgnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRmxvLnBuZyd9LHtcclxuICAgICAgbmFtZTonRGppbnN1bmcnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvRGppbnN1bmcucG5nJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhPVt7XHJcbiAgICAgIG5hbWU6J0FuZ2Vub2lyJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1NhbWJhOTMnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonV3JhdGgnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonc2V0aGFydCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTYW1aUicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidCYWhhbXV0JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1B5cGUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonVmV4eHknLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonVGFtb3VuYTIyJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J01pc2VydScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidHcmFuZGNvZXVyJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1Bpa2Fqb24nLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonTGxveWQnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR2luYScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidHYXJ6ZXRoJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1NoZXJkYScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidLZWlsbGUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9XHJcbiAgICBdXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyLz5cclxuICAgICAgPFNpZGVCYXIvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDb250YWluZXJ9PlxyXG4gICAgICAgIDxoMj5FbG9yaWE8L2gyPlxyXG4gICAgICAgIDxoMz5DaGVmPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUNoZWZDb250YWluZXJ9PlxyXG4gICAgICAgIHt1c2Vycy5tYXAoKFVzZXI6VXNlclByb3BzLCBpbmRleDpudW1iZXIpID0+ICg8VXNlciB1c2VyX2lkPXtVc2VyLnVzZXJfaWR9IGlkPXtVc2VyLmlkfSBrZXk9e2luZGV4fS8+KSl9XHJcblxyXG4gICAgICAgICAge01lbWJlckVsb3JpYWNoZWYubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoPE1lbWJlciBuYW1lPXttZW1iZXIubmFtZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDM+QnJhcyBkcm9pdDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFCcmFzRHJvaXRDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYUJyYXNEcm9pdC5tYXAoKG1lbWJlciwgaW5kZXgpID0+ICg8TWVtYmVyIG5hbWU9e21lbWJlci5uYW1lfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5DYXBpdGFpbmU8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ2FwaXRhaW5lQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFDYXBpdGFpbmUubWFwKChtZW1iZXIsIGluZGV4KSA9Pig8TWVtYmVyIG5hbWU9e21lbWJlci5uYW1lfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgzPk1lbWJyZTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFNZW1iZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYS5tYXAoKG1lbWJlciwgaW5kZXgpID0+KDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcblxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9