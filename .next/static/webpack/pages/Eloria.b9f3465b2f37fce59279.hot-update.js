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
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_5__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Eloria"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chef"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaChefContainer),
        children: [users.map(function (UserUnite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserUnite, {
            user_id: UserUnite.user_id,
            id: UserUnite.id
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 65
          }, _this);
        }), MemberEloriachef.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 53
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Bras droit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaBrasDroitContainer),
        children: MemberEloriaBrasDroit.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 58
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Capitaine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaCapitaineContainer),
        children: MemberEloriaCapitaine.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 57
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Membre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().guildeEloriaMemberContainer),
        children: MemberEloria.map(function (member, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Member_Member__WEBPACK_IMPORTED_MODULE_6__.Member, {
            name: member.name,
            image: member.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWxvcmlhLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwidXNlU3RhdGUiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlcnMiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiTWVtYmVyRWxvcmlhY2hlZiIsIm5hbWUiLCJpbWFnZSIsIk1lbWJlckVsb3JpYUJyYXNEcm9pdCIsIk1lbWJlckVsb3JpYUNhcGl0YWluZSIsIk1lbWJlckVsb3JpYSIsInN0eWxlcyIsIm1hcCIsIlVzZXJVbml0ZSIsImluZGV4IiwidXNlcl9pZCIsImlkIiwibWVtYmVyIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUVIQywrQ0FBUSxDQUFtQixFQUFuQixDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFJN0IsTUFBTUMsUUFBUTtBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01OLEtBQUssQ0FBQ08sR0FBTiw2Q0FETjs7QUFBQTtBQUNYQyxzQkFEVztBQUVkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVosQ0FBRDtBQUNBSCxzQkFBUSxDQUFDRyxRQUFRLENBQUNHLElBQVYsQ0FBUjs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSTCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUUsTUFBSU0sZ0JBQWdCLEdBQUMsQ0FBQztBQUNwQkMsUUFBSSxFQUFDLE9BRGU7QUFDTkMsU0FBSyxF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QTtBQUFBO0FBQUE7QUFBQSxjQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQW1DRTtBQUFRLGVBQVMsRUFBRUgsdUVBQWFPO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUEwQ0Q7O0dBOUZ1QnZCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRWxvcmlhLmI5ZjM0NjViMmYzN2ZjZTU5Mjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL0hlYWRlci9IZWFkZXInXHJcbmltcG9ydCB7U2lkZUJhcn0gZnJvbSAnLi4vc3JjL2NvbXBvc2FudHMvU2lkZUJhci9TaWRlQmFyJ1xyXG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9NZW1iZXIvTWVtYmVyJ1xyXG5pbXBvcnQge1VzZXJVbml0ZSwgUHJvcHMgYXMgVXNlclVuaXRlUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJVbml0ZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPFVzZXJVbml0ZVByb3BzW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VXNlci97Z3JhZGV9YCk7XHJcbiAgICAoY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcbiAgICBcclxuICAgIHZhciBNZW1iZXJFbG9yaWFjaGVmPVt7XHJcbiAgICAgIG5hbWU6J0RlbWVkJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RlbWVkLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYUJyYXNEcm9pdD1be1xyXG4gICAgICBuYW1lOidLaWJhJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0tpYmEucG5nJ30se1xyXG4gICAgICBuYW1lOidSYXptbycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9SYXptby5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1NjaGxhZ2VuJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1NjaGxhZ2VuLmpwZyd9LHtcclxuICAgICAgbmFtZTonT3NjYXInLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvT3NjYXIucG5nJ30se1xyXG4gICAgICBuYW1lOidMaW5rJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0xpbmsuanBnJ30se1xyXG4gICAgICBuYW1lOidVbmtub3duJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Vua25vd24uanBnJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhQ2FwaXRhaW5lPVt7XHJcbiAgICAgIG5hbWU6J3R5cGhlcicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9UeXBoZXIucG5nJ30se1xyXG4gICAgICBuYW1lOidaaGFrJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1poYWsuanBnJ30se1xyXG4gICAgICBuYW1lOidGYXJBbGV4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0ZhckFsZXgucG5nJ30se1xyXG4gICAgICBuYW1lOidQZXJsaW4nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvUGVybGluLnBuZyd9LHtcclxuICAgICAgbmFtZTonRmxvNDA4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0Zsby5wbmcnfSx7XHJcbiAgICAgIG5hbWU6J0RqaW5zdW5nJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RqaW5zdW5nLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYT1be1xyXG4gICAgICBuYW1lOidBbmdlbm9pcicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTYW1iYTkzJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1dyYXRoJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J3NldGhhcnQnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonU2FtWlInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonQmFoYW11dCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidQeXBlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1ZleHh5JywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J1RhbW91bmEyMicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidNaXNlcnUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR3JhbmRjb2V1cicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidQaWtham9uJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0xsb3lkJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIG5hbWU6J0dpbmEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonR2FyemV0aCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBuYW1lOidTaGVyZGEnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgbmFtZTonS2VpbGxlJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfVxyXG4gICAgXVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RWxvcmlhPC9oMj5cclxuICAgICAgICA8aDM+Q2hlZjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyfT5cclxuICAgICAgICB7dXNlcnMubWFwKChVc2VyVW5pdGU6VXNlclVuaXRlUHJvcHMsIGluZGV4Om51bWJlcikgPT4gKDxVc2VyVW5pdGUgdXNlcl9pZD17VXNlclVuaXRlLnVzZXJfaWR9IGlkPXtVc2VyVW5pdGUuaWR9IGtleT17aW5kZXh9Lz4pKX1cclxuXHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhY2hlZi5tYXAoKG1lbWJlciwgaW5kZXgpID0+ICg8TWVtYmVyIG5hbWU9e21lbWJlci5uYW1lfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5CcmFzIGRyb2l0PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhQnJhc0Ryb2l0Lm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPkNhcGl0YWluZTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDYXBpdGFpbmVDb250YWluZXJ9PlxyXG4gICAgICAgICAge01lbWJlckVsb3JpYUNhcGl0YWluZS5tYXAoKG1lbWJlciwgaW5kZXgpID0+KDxNZW1iZXIgbmFtZT17bWVtYmVyLm5hbWV9IGtleT17aW5kZXh9IGltYWdlPXttZW1iZXIuaW1hZ2V9Lz4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDM+TWVtYnJlPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYU1lbWJlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhLm1hcCgobWVtYmVyLCBpbmRleCkgPT4oPE1lbWJlciBuYW1lPXttZW1iZXIubmFtZX0ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=