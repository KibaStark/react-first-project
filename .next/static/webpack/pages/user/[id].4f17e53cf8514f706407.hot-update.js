self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/composants/Unite/Unite */ "./src/composants/Unite/Unite.tsx");
/* harmony import */ var _src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/composants/Unite/Element */ "./src/composants/Unite/Element.tsx");
/* harmony import */ var _src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/composants/Chimere/Chimere */ "./src/composants/Chimere/Chimere.tsx");
/* harmony import */ var _src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/composants/Header/Header */ "./src/composants/Header/Header.tsx");
/* harmony import */ var _src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/composants/SideBar/SideBar */ "./src/composants/SideBar/SideBar.tsx");
/* harmony import */ var _src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/composants/AV/AV */ "./src/composants/AV/AV.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jimmy\\Desktop\\dev\\react\\GuildeManager\\pages\\user\\[id].tsx",
    _s = $RefreshSig$();











var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");


function Home() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  var id = router.query.id;

  var connexionBox = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('connexionBox');
              _context.next = 3;
              return axios.get("http://localhost:8080/api/getUnite/".concat(id));

            case 3:
              response = _context.sent;
              localStorage.setItem('Box', JSON.stringify(response.data.data));
              console.log(response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function connexionBox() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    connexionBox();
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      userUnitesFireUR = _useState[0],
      setUserUnitesFireUR = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      unitesfireMR = _useState2[0],
      setUnitesfireMR = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    test2();
  }, []); // const [userunitesfireUR, setUserUnitesfireUR] = useState([]);
  // useEffect(() =>{
  //     test3()
  // }, [])
  // var unitesURFire=[{
  // name:'Delita', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/Delita.png'},{
  // name:'Eldo', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Eldo.png'},{
  // name:'King mont', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/King mont.png'},{
  // name:'Luartha', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Luartha.png'},{
  // name:'Machalie Hiver', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Machalie Hiver.png'},{
  // name:'Rain', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rain.png'},{
  // name:'Rhaldor', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/Rhaldor.png'}
  // ]
  // var unitesMRFire=[{
  // name:'Adelard', element:'fire', sniv:'/niv:', niv:99, image:'/images/Unite/MR/Adelard.png'},{
  // name:'Lilyth', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Lilyth.png'},{
  // name:'Margritte', element:'fire', sniv:'/niv:', niv:120, image:'/images/Unite/MR/Margritte.png'},{
  // name:'Seymore', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Seymore.png'},{
  // name:'Yshtola', element:'fire', sniv:'/niv:', niv:0, image:'/images/Unite/MR/Yshtola.png'}
  // ]

  var unitesSRFire = [{
    name: 'Naiah',
    element: 'fire',
    sniv: '/niv:',
    niv: 99,
    image: '/images/Unite/SR/Naiah.png'
  }];
  var unitesRFire = [{
    name: 'Michaé',
    element: 'fire',
    sniv: '/niv:',
    niv: 99,
    image: '/images/Unite/R/Michaé.png'
  }];
  var atvURFire = [{
    name: 'Guerriers des ténèbres',
    elem: 'fire',
    image: '/images/AV/Guerriers des ténèbres.png'
  }, {
    name: 'Ifrit',
    elem: 'fire',
    image: '/images/AV/Ifrit.png'
  }, {
    name: 'Les gardiens des cristaux',
    elem: 'fire',
    image: '/images/AV/Les gardiens des cristaux.png'
  }, {
    name: 'Mont Leonis, le roi des lions',
    elem: 'fire',
    image: '/images/AV/Mont Leonis, le roi des lions.png'
  }, {
    name: 'Phénix',
    elem: 'fire',
    image: '/images/AV/Phénix.png'
  }, {
    name: 'Rencontre héroïque',
    elem: 'fire',
    image: '/images/AV/Rencontre héroïque.png'
  }, {
    name: 'Sentinelle',
    elem: 'fire',
    image: '/images/AV/Sentinelle.png'
  }, {
    name: 'Un simple brin dherbe',
    elem: 'fire',
    image: '/images/AV/Un simple brin dherbe.png'
  }];
  var atvMRFire = [{
    name: 'Marilith',
    elem: 'fire',
    image: '/images/AV/MR/Marilith.png'
  }, {
    name: 'Mobius de lespoir et des illusions',
    elem: 'fire',
    image: '/images/AV/MR/Mobius de lespoir et des illusions.png'
  }, {
    name: 'Reine Lamia',
    elem: 'fire',
    image: '/images/AV/MR/Reine Lamia.png'
  }, {
    name: 'Une vie séveille',
    elem: 'fire',
    image: '/images/AV/MR/Une vie séveille.png'
  }, {
    name: 'Voix de la vengeance',
    elem: 'fire',
    image: '/images/AV/MR/Voix de la vengeance.png'
  }];
  var chimereURFire = [{
    name: 'Ifrit',
    elem: 'fire',
    image: '/images/Chimère/Ifrit.png'
  }, {
    name: 'Phénix',
    elem: 'fire',
    image: '/images/Chimère/Phénix.png'
  }, {
    name: 'Sentinelle',
    elem: 'fire',
    image: '/images/Chimère/Sentinelle.png'
  }];
  var chimereMRFire = [{
    name: 'Marilith',
    elem: 'Fire',
    image: '/images/Chimère/Marilith.png'
  }, {
    name: 'Reine lamia',
    elem: 'fire',
    image: '/images/Chimère/Reine lamia.png'
  }];
  var chimereSRFire = [{
    name: 'Bombo',
    elem: 'fire',
    image: '/images/Chimère/Bombo.png'
  }];

  var getUnites = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("http://localhost:8080/api/getUnite/".concat(id));

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
      return _ref2.apply(this, arguments);
    };
  }();

  var test2 = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var response;
      return C_Users_Jimmy_Desktop_dev_react_GuildeManager_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get('http://localhost:8080/api/Unites/fire/MR');

            case 2:
              response = _context3.sent;
              console.log(response);
              setUnitesfireMR(response.data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function test2() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    var localSession = localStorage.getItem('session');

    if (localSession != null) {
      var sessionObject = JSON.parse(localSession);

      if (sessionObject) {
        setSession(sessionObject);
      }
    }
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),
      session = _useState3[0],
      setSession = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    if (session != null) {
      getUnites();
    }
  }, [session]); // const [userUnitesFireUR, setUserUnitesFireUR ] = useState<UserUniteProps>([]);
  // useEffect(() =>{
  //     test3()
  // }, [])
  // const test3 = async () => {
  //     let response = await axios.get('http://localhost:8080/api/getUnite');
  //     (console.log(response));
  //     setUserUnitesfireUR(response.data);
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Header_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_8__.SideBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().uniteContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Element__WEBPACK_IMPORTED_MODULE_5__.Element, {
        elem: "fire",
        name: "fire"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().elemFireContainer),
        children: userUnitesFireUR.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            id: unite.id,
            element: unite.element,
            level: unite.level,
            image: unite.image,
            isInputShown: false
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 76
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().AV2),
        children: atvURFire.map(function (av, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_9__.AV, {
            name: av.name,
            element: av.elem,
            image: av.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 52
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re UR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().chimere),
        children: chimereURFire.map(function (chimere, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__.Chimere, {
            name: chimere.name,
            element: chimere.elem,
            image: chimere.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 61
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Unit\xE9s MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().elemFireContainer),
        children: unitesfireMR.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            element: unite.element,
            sniv: unite.sniv,
            niv: unite.niv,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 54
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Atout vision MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().AV2),
        children: atvMRFire.map(function (av, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_AV_AV__WEBPACK_IMPORTED_MODULE_9__.AV, {
            name: av.name,
            element: av.elem,
            image: av.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 52
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Chim\xE8re MR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().chimere),
        children: chimereMRFire.map(function (chimere, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__.Chimere, {
            name: chimere.name,
            element: chimere.elem,
            image: chimere.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 61
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE SR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().elemFireContainer),
        children: unitesSRFire.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            element: unite.element,
            sniv: unite.sniv,
            niv: unite.niv,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 54
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().chimere),
        children: chimereSRFire.map(function (chimere, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Chimere_Chimere__WEBPACK_IMPORTED_MODULE_6__.Chimere, {
            name: chimere.name,
            element: chimere.elem,
            image: chimere.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 61
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "FIRE R"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().elemFireContainer),
        children: unitesRFire.map(function (unite, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_composants_Unite_Unite__WEBPACK_IMPORTED_MODULE_4__.Unite, {
            name: unite.name,
            element: unite.element,
            sniv: unite.sniv,
            niv: unite.niv,
            image: unite.image
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 53
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 9
  }, this);
}

_s(Home, "ALaCaGwu3scGm2TduglEpCTL9uI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9baWRdLnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbm5leGlvbkJveCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlclVuaXRlc0ZpcmVVUiIsInNldFVzZXJVbml0ZXNGaXJlVVIiLCJ1bml0ZXNmaXJlTVIiLCJzZXRVbml0ZXNmaXJlTVIiLCJ0ZXN0MiIsInVuaXRlc1NSRmlyZSIsIm5hbWUiLCJlbGVtZW50Iiwic25pdiIsIm5pdiIsImltYWdlIiwidW5pdGVzUkZpcmUiLCJhdHZVUkZpcmUiLCJlbGVtIiwiYXR2TVJGaXJlIiwiY2hpbWVyZVVSRmlyZSIsImNoaW1lcmVNUkZpcmUiLCJjaGltZXJlU1JGaXJlIiwiZ2V0VW5pdGVzIiwibG9jYWxTZXNzaW9uIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJwYXJzZSIsInNldFNlc3Npb24iLCJzZXNzaW9uIiwic3R5bGVzIiwibWFwIiwidW5pdGUiLCJpbmRleCIsImxldmVsIiwiYXYiLCJjaGltZXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFHQTtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFFM0IsTUFBTUMsTUFBTSxHQUFHQyx1REFBUyxFQUF4QjtBQUYyQixNQUduQkMsRUFIbUIsR0FHWkYsTUFBTSxDQUFDRyxLQUhLLENBR25CRCxFQUhtQjs7QUFLM0Is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QUFBLG1CQUFyQjtBQUFBLFNBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDSixlQW9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDQSxlQXFDSTtBQUFLLGlCQUFTLEVBQUVILG1GQUFoQjtBQUFBLGtCQUNDZCxXQUFXLENBQUNlLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsOEJBQW1CLDhEQUFDLDhEQUFEO0FBQU8sZ0JBQUksRUFBRUQsS0FBSyxDQUFDckIsSUFBbkI7QUFBeUIsbUJBQU8sRUFBRXFCLEtBQUssQ0FBQ3BCLE9BQXhDO0FBQWlELGdCQUFJLEVBQUVvQixLQUFLLENBQUNuQixJQUE3RDtBQUFtRSxlQUFHLEVBQUVtQixLQUFLLENBQUNsQixHQUE5RTtBQUErRixpQkFBSyxFQUFFa0IsS0FBSyxDQUFDakI7QUFBNUcsYUFBd0ZrQixLQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFuQjtBQUFBLFNBQWhCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQXlETDs7R0ExTXVCN0MsSTtVQUVMRSxtRDs7O0tBRktGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjRmMTdlNTNjZjg1MTRmNzA2NDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHtVbml0ZSwgUHJvcHMgYXMgVW5pdGVQcm9wc30gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvVW5pdGUvVW5pdGUnXHJcbmltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvVW5pdGUvRWxlbWVudCdcclxuaW1wb3J0IHtDaGltZXJlfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9DaGltZXJlL0NoaW1lcmUnXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQge1NpZGVCYXJ9IGZyb20gJy4uLy4uL3NyYy9jb21wb3NhbnRzL1NpZGVCYXIvU2lkZUJhcidcclxuaW1wb3J0IHtBVn0gZnJvbSAnLi4vLi4vc3JjL2NvbXBvc2FudHMvQVYvQVYnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5pbXBvcnQge1VzZXJQcm9maWxlLCBQcm9wcyBhcyBVc2VyUHJvZmlsZVByb3BzfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZSdcclxuaW1wb3J0IHtVc2VyVW5pdGUsIFByb3BzIGFzIFVzZXJVbml0ZVByb3BzfSBmcm9tICcuLi8uLi9zcmMvY29tcG9zYW50cy9Vc2VyUHJvZmlsZS9Vc2VyVW5pdGUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgY29ubmV4aW9uQm94ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25uZXhpb25Cb3gnKVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke2lkfWApO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdCb3gnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLmRhdGEpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25uZXhpb25Cb3goKTtcclxuICAgIH0sW10pXHJcbiBcclxuXHJcbiAgICBjb25zdCBbdXNlclVuaXRlc0ZpcmVVUiwgc2V0VXNlclVuaXRlc0ZpcmVVUl0gPSB1c2VTdGF0ZTxVbml0ZVByb3BzW10+KFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgW3VuaXRlc2ZpcmVNUiwgc2V0VW5pdGVzZmlyZU1SXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICB0ZXN0MigpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvLyBjb25zdCBbdXNlcnVuaXRlc2ZpcmVVUiwgc2V0VXNlclVuaXRlc2ZpcmVVUl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAvLyAgICAgdGVzdDMoKVxyXG4gICAgLy8gfSwgW10pXHJcblxyXG4gICAgLy8gdmFyIHVuaXRlc1VSRmlyZT1be1xyXG4gICAgLy8gbmFtZTonRGVsaXRhJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9EZWxpdGEucG5nJ30se1xyXG4gICAgLy8gbmFtZTonRWxkbycsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9FbGRvLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J0tpbmcgbW9udCcsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjoxMjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL0tpbmcgbW9udC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidMdWFydGhhJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL0x1YXJ0aGEucG5nJ30se1xyXG4gICAgLy8gbmFtZTonTWFjaGFsaWUgSGl2ZXInLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTWFjaGFsaWUgSGl2ZXIucG5nJ30se1xyXG4gICAgLy8gbmFtZTonUmFpbicsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9SYWluLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1JoYWxkb3InLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvUmhhbGRvci5wbmcnfVxyXG4gICAgLy8gXVxyXG5cclxuICAgIC8vIHZhciB1bml0ZXNNUkZpcmU9W3tcclxuICAgIC8vIG5hbWU6J0FkZWxhcmQnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL0FkZWxhcmQucG5nJ30se1xyXG4gICAgLy8gbmFtZTonTGlseXRoJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2OjAsIGltYWdlOicvaW1hZ2VzL1VuaXRlL01SL0xpbHl0aC5wbmcnfSx7XHJcbiAgICAvLyBuYW1lOidNYXJncml0dGUnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MTIwLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9NYXJncml0dGUucG5nJ30se1xyXG4gICAgLy8gbmFtZTonU2V5bW9yZScsIGVsZW1lbnQ6J2ZpcmUnLCBzbml2Oicvbml2OicsIG5pdjowLCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9NUi9TZXltb3JlLnBuZyd9LHtcclxuICAgIC8vIG5hbWU6J1lzaHRvbGEnLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6MCwgaW1hZ2U6Jy9pbWFnZXMvVW5pdGUvTVIvWXNodG9sYS5wbmcnfVxyXG4gICAgLy8gXVxyXG5cclxuICAgIHZhciB1bml0ZXNTUkZpcmU9W3tcclxuICAgIG5hbWU6J05haWFoJywgZWxlbWVudDonZmlyZScsIHNuaXY6Jy9uaXY6Jywgbml2Ojk5LCBpbWFnZTonL2ltYWdlcy9Vbml0ZS9TUi9OYWlhaC5wbmcnfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICB2YXIgdW5pdGVzUkZpcmU9W3tcclxuICAgIG5hbWU6J01pY2hhw6knLCBlbGVtZW50OidmaXJlJywgc25pdjonL25pdjonLCBuaXY6OTksIGltYWdlOicvaW1hZ2VzL1VuaXRlL1IvTWljaGHDqS5wbmcnfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBhdHZVUkZpcmU9W3tcclxuICAgICAgICBuYW1lOidHdWVycmllcnMgZGVzIHTDqW7DqGJyZXMnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvR3VlcnJpZXJzIGRlcyB0w6luw6hicmVzLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidJZnJpdCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9JZnJpdC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTGVzIGdhcmRpZW5zIGRlcyBjcmlzdGF1eCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9MZXMgZ2FyZGllbnMgZGVzIGNyaXN0YXV4LnBuZyd9LHtcclxuICAgICAgICBuYW1lOidNb250IExlb25pcywgbGUgcm9pIGRlcyBsaW9ucycsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9Nb250IExlb25pcywgbGUgcm9pIGRlcyBsaW9ucy5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonUGjDqW5peCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9QaMOpbml4LnBuZyd9LHtcclxuICAgICAgICBuYW1lOidSZW5jb250cmUgaMOpcm/Dr3F1ZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9SZW5jb250cmUgaMOpcm/Dr3F1ZS5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonU2VudGluZWxsZScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9TZW50aW5lbGxlLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidVbiBzaW1wbGUgYnJpbiBkaGVyYmUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvVW4gc2ltcGxlIGJyaW4gZGhlcmJlLnBuZyd9XHJcbiAgICAgIF1cclxuXHJcbiAgICAgIHZhciBhdHZNUkZpcmU9W3tcclxuICAgICAgICBuYW1lOidNYXJpbGl0aCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9NYXJpbGl0aC5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonTW9iaXVzIGRlIGxlc3BvaXIgZXQgZGVzIGlsbHVzaW9ucycsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9Nb2JpdXMgZGUgbGVzcG9pciBldCBkZXMgaWxsdXNpb25zLnBuZyd9LHtcclxuICAgICAgICBuYW1lOidSZWluZSBMYW1pYScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9BVi9NUi9SZWluZSBMYW1pYS5wbmcnfSx7XHJcbiAgICAgICAgbmFtZTonVW5lIHZpZSBzw6l2ZWlsbGUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQVYvTVIvVW5lIHZpZSBzw6l2ZWlsbGUucG5nJ30se1xyXG4gICAgICAgIG5hbWU6J1ZvaXggZGUgbGEgdmVuZ2VhbmNlJywgZWxlbTonZmlyZScsIGltYWdlOicvaW1hZ2VzL0FWL01SL1ZvaXggZGUgbGEgdmVuZ2VhbmNlLnBuZyd9XHJcbiAgICAgIF1cclxuXHJcbiAgICB2YXIgY2hpbWVyZVVSRmlyZT1be1xyXG4gICAgbmFtZTonSWZyaXQnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvSWZyaXQucG5nJ30se1xyXG4gICAgbmFtZTonUGjDqW5peCcsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9QaMOpbml4LnBuZyd9LHtcclxuICAgIG5hbWU6J1NlbnRpbmVsbGUnLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvU2VudGluZWxsZS5wbmcnfVxyXG4gICAgICAgIF0gIFxyXG5cclxuICAgIHZhciBjaGltZXJlTVJGaXJlPVt7XHJcbiAgICBuYW1lOidNYXJpbGl0aCcsIGVsZW06J0ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9NYXJpbGl0aC5wbmcnfSx7XHJcbiAgICBuYW1lOidSZWluZSBsYW1pYScsIGVsZW06J2ZpcmUnLCBpbWFnZTonL2ltYWdlcy9DaGltw6hyZS9SZWluZSBsYW1pYS5wbmcnfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB2YXIgY2hpbWVyZVNSRmlyZT1be1xyXG4gICAgbmFtZTonQm9tYm8nLCBlbGVtOidmaXJlJywgaW1hZ2U6Jy9pbWFnZXMvQ2hpbcOocmUvQm9tYm8ucG5nJ31cclxuICAgICAgICBdXHJcblxyXG4gICAgY29uc3QgZ2V0VW5pdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZS8ke2lkfWApO1xyXG4gICAgICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgICAgIHNldFVzZXJVbml0ZXNGaXJlVVIocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGVzdDIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL1VuaXRlcy9maXJlL01SJyk7XHJcbiAgICAgICAgKGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgc2V0VW5pdGVzZmlyZU1SKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHZhciBsb2NhbFNlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpXHJcbiAgICAgICAgaWYobG9jYWxTZXNzaW9uICE9bnVsbCkge1xyXG4gICAgICAgICAgbGV0IHNlc3Npb25PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU2Vzc2lvbilcclxuICAgICAgICAgaWYgKHNlc3Npb25PYmplY3Qpe1xyXG4gICAgICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uT2JqZWN0KVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb24gXSA9IHVzZVN0YXRlPFVzZXJQcm9maWxlUHJvcHM+KCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHNlc3Npb24gIT1udWxsKXtcclxuICAgICAgICAgICAgZ2V0VW5pdGVzKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2Vzc2lvbl0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgW3VzZXJVbml0ZXNGaXJlVVIsIHNldFVzZXJVbml0ZXNGaXJlVVIgXSA9IHVzZVN0YXRlPFVzZXJVbml0ZVByb3BzPihbXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgLy8gICAgIHRlc3QzKClcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIC8vIGNvbnN0IHRlc3QzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXRVbml0ZScpO1xyXG4gICAgLy8gICAgIChjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgLy8gICAgIHNldFVzZXJVbml0ZXNmaXJlVVIocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8U2lkZUJhci8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVuaXRlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGg0PkZJUkUgVVI8L2g0PlxyXG4gICAgICAgICAgICA8RWxlbWVudCBlbGVtPSdmaXJlJyBuYW1lPSdmaXJlJyA+PC9FbGVtZW50PlxyXG4gICAgICAgICAgICA8aDU+VW5pdMOpcyBVUjwvaDU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUZpcmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3VzZXJVbml0ZXNGaXJlVVIubWFwKCh1bml0ZTpVbml0ZVByb3BzLCBpbmRleDpudW1iZXIpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gaWQ9e3VuaXRlLmlkfSBlbGVtZW50PXt1bml0ZS5lbGVtZW50fSBsZXZlbD17dW5pdGUubGV2ZWx9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0gaXNJbnB1dFNob3duPXtmYWxzZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT5BdG91dCB2aXNpb24gVVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BVjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdHZVUkZpcmUubWFwKChhdiwgaW5kZXgpID0+ICg8QVYgbmFtZT17YXYubmFtZX0gZWxlbWVudD17YXYuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2F2LmltYWdlfS8+KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1PkNoaW3DqHJlIFVSPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbWVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaW1lcmVVUkZpcmUubWFwKChjaGltZXJlLCBpbmRleCkgPT4gKDxDaGltZXJlIG5hbWU9e2NoaW1lcmUubmFtZX0gZWxlbWVudD17Y2hpbWVyZS5lbGVtfSBrZXk9e2luZGV4fSBpbWFnZT17Y2hpbWVyZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoND5GSVJFIE1SPC9oND5cclxuICAgICAgICAgICAgPGg1PlVuaXTDqXMgTVI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbGVtRmlyZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdGVzZmlyZU1SLm1hcCgodW5pdGUsIGluZGV4KSA9PiAoPFVuaXRlIG5hbWU9e3VuaXRlLm5hbWV9IGVsZW1lbnQ9e3VuaXRlLmVsZW1lbnR9IHNuaXY9e3VuaXRlLnNuaXZ9IG5pdj17dW5pdGUubml2fSBrZXk9e2luZGV4fSBpbWFnZT17dW5pdGUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+QXRvdXQgdmlzaW9uIE1SPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQVYyfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXR2TVJGaXJlLm1hcCgoYXYsIGluZGV4KSA9PiAoPEFWIG5hbWU9e2F2Lm5hbWV9IGVsZW1lbnQ9e2F2LmVsZW19IGtleT17aW5kZXh9IGltYWdlPXthdi5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT5DaGltw6hyZSBNUjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaW1lcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGltZXJlTVJGaXJlLm1hcCgoY2hpbWVyZSwgaW5kZXgpID0+ICg8Q2hpbWVyZSBuYW1lPXtjaGltZXJlLm5hbWV9IGVsZW1lbnQ9e2NoaW1lcmUuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2NoaW1lcmUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQ+RklSRSBTUjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1GaXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt1bml0ZXNTUkZpcmUubWFwKCh1bml0ZSwgaW5kZXgpID0+ICg8VW5pdGUgbmFtZT17dW5pdGUubmFtZX0gZWxlbWVudD17dW5pdGUuZWxlbWVudH0gc25pdj17dW5pdGUuc25pdn0gbml2PXt1bml0ZS5uaXZ9IGtleT17aW5kZXh9IGltYWdlPXt1bml0ZS5pbWFnZX0vPikpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaW1lcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGltZXJlU1JGaXJlLm1hcCgoY2hpbWVyZSwgaW5kZXgpID0+ICg8Q2hpbWVyZSBuYW1lPXtjaGltZXJlLm5hbWV9IGVsZW1lbnQ9e2NoaW1lcmUuZWxlbX0ga2V5PXtpbmRleH0gaW1hZ2U9e2NoaW1lcmUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQ+RklSRSBSPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbUZpcmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3VuaXRlc1JGaXJlLm1hcCgodW5pdGUsIGluZGV4KSA9PiAoPFVuaXRlIG5hbWU9e3VuaXRlLm5hbWV9IGVsZW1lbnQ9e3VuaXRlLmVsZW1lbnR9IHNuaXY9e3VuaXRlLnNuaXZ9IG5pdj17dW5pdGUubml2fSBrZXk9e2luZGV4fSBpbWFnZT17dW5pdGUuaW1hZ2V9Lz4pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9