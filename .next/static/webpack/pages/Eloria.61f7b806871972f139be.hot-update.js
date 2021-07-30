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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRWxvcmlhLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwiTWVtYmVyRWxvcmlhY2hlZiIsIm5hbWUiLCJpbWFnZSIsIk1lbWJlckVsb3JpYUJyYXNEcm9pdCIsInBzZXVkbyIsIk1lbWJlckVsb3JpYUNhcGl0YWluZSIsIk1lbWJlckVsb3JpYSIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VycyIsImdldFVzZXJzIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIm1hcCIsIm1lbWJlciIsImluZGV4IiwidXNlciIsImdyYWRlIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUUzQixNQUFJQyxnQkFBZ0IsR0FBQyxDQUFDO0FBQ3BCQyxRQUFJLEVBQUMsT0FEZTtBQUNOQyxTQUFLLEVBQUM7QUFEQSxHQUFELENBQXJCO0FBSUEsTUFBSUMscUJBQXFCLEdBQUMsQ0FBQztBQUN6QkMsVUFBTSxFQUFDLE1BRGtCO0FBQ1ZGLFNBQUssRUFBQztBQURJLEdBQUQsRUFDd0I7QUFDaERFLFVBQU0sRUFBQyxPQUR5QztBQUNoQ0YsU0FBSyxFQUFDO0FBRDBCLEdBRHhCLEVBRTBCO0FBQ2xERSxVQUFNLEVBQUMsVUFEMkM7QUFDL0JGLFNBQUssRUFBQztBQUR5QixHQUYxQixFQUdnQztBQUN4REUsVUFBTSxFQUFDLE9BRGlEO0FBQ3hDRixTQUFLLEVBQUM7QUFEa0MsR0FIaEMsRUFJMEI7QUFDbERFLFVBQU0sRUFBQyxNQUQyQztBQUNuQ0YsU0FBSyxFQUFDO0FBRDZCLEdBSjFC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USxrQkFBTSxFQUFFRCxNQUFNLENBQUNmLE1BQXZCO0FBQTJDLGlCQUFLLEVBQUVlLE1BQU0sQ0FBQ2pCO0FBQXpELGFBQW9Da0IsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbkI7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFtQ0U7QUFBUSxlQUFTLEVBQUVILHVFQUFhTTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBMENEOztHQWpHdUJ4QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0Vsb3JpYS42MWY3YjgwNjg3MTk3MmYxMzliZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHsgTWVtYmVyLCBQcm9wcyBhcyBNZW1iZXJQcm9wcyB9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL01lbWJlci9NZW1iZXInXHJcbmltcG9ydCB7VXNlclVuaXRlLCBQcm9wcyBhcyBVc2VyUHJvcHN9IGZyb20gJy4uL3NyYy9jb21wb3NhbnRzL1VzZXJQcm9maWxlL1VzZXJVbml0ZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIHZhciBNZW1iZXJFbG9yaWFjaGVmPVt7XHJcbiAgICAgIG5hbWU6J0RlbWVkJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RlbWVkLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYUJyYXNEcm9pdD1be1xyXG4gICAgICBwc2V1ZG86J0tpYmEnLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvS2liYS5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonUmF6bW8nLCBpbWFnZTonL2ltYWdlcy9NZW1icmUvUmF6bW8uanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1NjaGxhZ2VuJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1NjaGxhZ2VuLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidPc2NhcicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9Pc2Nhci5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonTGluaycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9MaW5rLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidVbmtub3duJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1Vua25vd24uanBnJ31cclxuICAgIF1cclxuXHJcbiAgICB2YXIgTWVtYmVyRWxvcmlhQ2FwaXRhaW5lPVt7XHJcbiAgICAgIHBzZXVkbzondHlwaGVyJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL1R5cGhlci5wbmcnfSx7XHJcbiAgICAgIHBzZXVkbzonWmhhaycsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9aaGFrLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidGYXJBbGV4JywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0ZhckFsZXgucG5nJ30se1xyXG4gICAgICBwc2V1ZG86J1BlcmxpbicsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9QZXJsaW4ucG5nJ30se1xyXG4gICAgICBwc2V1ZG86J0ZsbzQwOCcsIGltYWdlOicvaW1hZ2VzL01lbWJyZS9GbG8ucG5nJ30se1xyXG4gICAgICBwc2V1ZG86J0RqaW5zdW5nJywgaW1hZ2U6Jy9pbWFnZXMvTWVtYnJlL0RqaW5zdW5nLnBuZyd9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIE1lbWJlckVsb3JpYT1be1xyXG4gICAgICBwc2V1ZG86J0FuZ2Vub2lyJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonU2FtYmE5MycsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1dyYXRoJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonc2V0aGFydCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1NhbVpSJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonQmFoYW11dCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1B5cGUnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidWZXh4eScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1RhbW91bmEyMicsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J01pc2VydScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J0dyYW5kY29ldXInLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidQaWtham9uJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonTGxveWQnLCBpbWFnZTonL2ltYWdlcy91bm5hbWVkLmpwZyd9LHtcclxuICAgICAgcHNldWRvOidHaW5hJywgaW1hZ2U6Jy9pbWFnZXMvdW5uYW1lZC5qcGcnfSx7XHJcbiAgICAgIHBzZXVkbzonR2FyemV0aCcsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J1NoZXJkYScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ30se1xyXG4gICAgICBwc2V1ZG86J0tlaWxsZScsIGltYWdlOicvaW1hZ2VzL3VubmFtZWQuanBnJ31cclxuICAgIF1cclxuICAgIFxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlclByb3BzW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2V0VXNlci9icmFzRHJvaXRgKTtcclxuICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XHJcbn1cclxudXNlRWZmZWN0KCgpID0+e1xyXG4gIGdldFVzZXJzKCk7XHJcbn0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxTaWRlQmFyLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RWxvcmlhPC9oMj5cclxuICAgICAgICA8aDM+Q2hlZjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ndWlsZGVFbG9yaWFDaGVmQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFjaGVmLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgcHNldWRvPXttZW1iZXIucHNldWRvfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5CcmFzIGRyb2l0PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmd1aWxkZUVsb3JpYUJyYXNEcm9pdENvbnRhaW5lcn0+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcjpVc2VyUHJvcHMsIGluZGV4KSA9PiAoPE1lbWJlciBwc2V1ZG89e3VzZXIucHNldWRvfSBncmFkZT17dXNlci5ncmFkZX0ga2V5PXtpbmRleH0gaW1hZ2U9e3VzZXIuaW1hZ2V9Lz4pKX1cclxuXHJcbiAgICAgICAgICB7TWVtYmVyRWxvcmlhQnJhc0Ryb2l0Lm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKDxNZW1iZXIgcHNldWRvPXttZW1iZXIucHNldWRvfSBrZXk9e2luZGV4fSBpbWFnZT17bWVtYmVyLmltYWdlfS8+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5DYXBpdGFpbmU8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhQ2FwaXRhaW5lQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWFDYXBpdGFpbmUubWFwKChtZW1iZXIsIGluZGV4KSA9Pig8TWVtYmVyIHBzZXVkbz17bWVtYmVyLnBzZXVkb30ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxoMz5NZW1icmU8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpbGRlRWxvcmlhTWVtYmVyQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtNZW1iZXJFbG9yaWEubWFwKChtZW1iZXIsIGluZGV4KSA9Pig8TWVtYmVyIHBzZXVkbz17bWVtYmVyLnBzZXVkb30ga2V5PXtpbmRleH0gaW1hZ2U9e21lbWJlci5pbWFnZX0vPikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=