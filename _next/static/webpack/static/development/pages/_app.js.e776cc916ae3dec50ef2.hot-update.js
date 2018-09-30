webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "../routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _activeLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activeLink */ "./components/activeLink.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withI18next */ "./lib/withI18next.js");
/* harmony import */ var _static_ico_home_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/ico-home.png */ "./static/ico-home.png");
/* harmony import */ var _static_ico_home_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_ico_home_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_ico_about_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/ico-about.png */ "./static/ico-about.png");
/* harmony import */ var _static_ico_about_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_ico_about_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_ico_work_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/ico-work.png */ "./static/ico-work.png");
/* harmony import */ var _static_ico_work_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_ico_work_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_ico_contact_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/ico-contact.png */ "./static/ico-contact.png");
/* harmony import */ var _static_ico_contact_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_ico_contact_png__WEBPACK_IMPORTED_MODULE_10__);
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



 // import { Link, Router } from '../../routes'




 // import { Button } from 'reactstrap'




 // import icoFullscreen from '../static/ico-fullscreen.png'

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.menuBg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.menuContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.closeBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "toggleMenu",
    value: function toggleMenu(e) {
      if (!this.state.isOpen) {
        this.setState({
          isOpen: true
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set('html,body', {
          overflow: 'hidden'
        });
        var windowSize = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
        var radio = 1.45;
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuBg.current.childNodes[0], 0.6, {
          width: windowSize * radio,
          height: windowSize * radio,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuBg.current.childNodes[0].childNodes[0], 0.6, {
          width: windowSize * radio,
          height: windowSize * radio,
          delay: 0.15,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuBg.current.childNodes[0].childNodes[0].childNodes[0], 0.6, {
          width: windowSize * radio,
          height: windowSize * radio,
          delay: 0.3,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        var menuContentItem = document.querySelectorAll('.menuContent a');
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(this.menuContent.current, {
          display: 'block'
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(menuContentItem, {
          y: -10,
          autoAlpha: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuContent.current, 0.7, {
          autoAlpha: 1,
          delay: 0.3,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].staggerTo(menuContentItem, 0.7, {
          y: 0,
          autoAlpha: 1,
          delay: 0.3,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].out
        }, 0.1);
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(this.closeBtn.current, {
          y: -10,
          display: 'block',
          autoAlpha: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.closeBtn.current, 0.7, {
          y: 0,
          autoAlpha: 1,
          delay: 1.3,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power4"].out
        });
      } else {
        this.setState({
          isOpen: false
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set('html,body', {
          overflow: 'auto'
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuContent.current, 0.2, {
          display: 'none',
          autoAlpha: 0,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuBg.current.childNodes[0], 0.4, {
          width: 0,
          height: 0,
          delay: 0.1,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuBg.current.childNodes[0].childNodes[0], 0.4, {
          width: 0,
          height: 0,
          delay: 0.1,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.menuBg.current.childNodes[0].childNodes[0].childNodes[0], 0.4, {
          width: 0,
          height: 0,
          delay: 0.1,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.closeBtn.current, 0.4, {
          display: 'none',
          autoAlpha: 0,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].out
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          _this2.setState({
            isOpen: false
          });

          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set('html,body', {
            overflow: 'auto'
          });
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuBg.current.childNodes[0], {
            width: 0,
            height: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuBg.current.childNodes[0].childNodes[0], {
            width: 0,
            height: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuBg.current.childNodes[0].childNodes[0].childNodes[0], {
            width: 0,
            height: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuContent.current, {
            display: 'block',
            autoAlpha: 1
          });
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.closeBtn.current, {
            display: 'none',
            autoAlpha: 0
          });
        } else {
          if (!_this2.state.isOpen) {
            gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set('html,body', {
              overflow: 'auto'
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuContent.current, {
              display: 'none',
              autoAlpha: 0
            });
          }
        }
      });
      var menuContentItem = document.querySelectorAll('.menuContent a');

      for (var i = 0; i < menuContentItem.length; i++) {
        menuContentItem[i].addEventListener('click', function () {
          if (document.querySelectorAll('body .mobile').length) {
            _this2.setState({
              isOpen: false
            });

            setTimeout(function () {
              gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set('html,body', {
                overflow: 'auto'
              });
              gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuBg.current.childNodes[0], {
                width: 0,
                height: 0
              });
              gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuBg.current.childNodes[0].childNodes[0], {
                width: 0,
                height: 0
              });
              gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuBg.current.childNodes[0].childNodes[0].childNodes[0], {
                width: 0,
                height: 0
              });
              gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.menuContent.current, {
                display: 'none',
                autoAlpha: 0
              });
              gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].set(_this2.closeBtn.current, {
                display: 'none',
                autoAlpha: 0
              });
            }, 500);
          }
        }, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          i18n = _this$props.i18n;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navigation, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuContainer font-muli px-0 px-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "burger",
        onClick: this.toggleMenu
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuBg",
        ref: this.menuBg
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menuContent",
        ref: this.menuContent
      }, i18n.language ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activeLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_ico_home_png__WEBPACK_IMPORTED_MODULE_7___default.a
      }), t('nav_home'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activeLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
        href: "/",
        as: "/page2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_ico_home_png__WEBPACK_IMPORTED_MODULE_7___default.a
      }), t('nav_home'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ' / '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activeLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
        route: "about",
        params: {
          lng: i18n.language
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_ico_about_png__WEBPACK_IMPORTED_MODULE_8___default.a
      }), t('nav_about'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ' / '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activeLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
        route: "works",
        params: {
          lng: i18n.language
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_ico_work_png__WEBPACK_IMPORTED_MODULE_9___default.a
      }), t('nav_works'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ' / '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_ico_contact_png__WEBPACK_IMPORTED_MODULE_10___default.a
      }), t('nav_contact')))) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "closeBtn",
        ref: this.closeBtn,
        onClick: this.toggleMenu
      }, "close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copyright"
      }, t('nav_copyright'))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Nav, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav.withConfig({
  displayName: "nav__Navigation",
  componentId: "sc-1hk9i97-0"
})(["z-index:1;.menuContainer{position:fixed;bottom:0;left:0;width:100%;min-height:46px;background-color:rgba(0,0,0,0.5);z-index:1;font-size:12px;.burger{display:none;position:absolute;top:0;left:0;width:60px;height:50px;padding:10px 15px;z-index:1;span{display:block;width:100%;height:3px;background-color:rgba(255,255,255,1);border-radius:3px;margin-top:6px;}}.closeBtn{display:none;position:absolute;bottom:0;left:50%;transform:translate(-50%,0);color:#000;opacity:0;z-index:1;}.menuBg{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;div{position:absolute;top:0;left:0;background-color:#e45fc0;border-bottom-right-radius:100%;z-index:1;div{position:absolute;top:0;left:0;background-color:#5fe4e2;border-bottom-right-radius:100%;div{position:absolute;top:0;left:0;background-color:#fff;border-bottom-right-radius:100%;}}}}.menuContent{position:relative;float:right;color:#9d9d9d;z-index:1;a{position:relative;display:inline-block;color:#9d9d9d;text-decoration:none;padding:14px 20px;span{position:relative;display:inline-block;padding:0 0 0 20px;transition:0.5s;img{opacity:0.5;position:absolute;top:50%;left:0;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-o-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);transition:0.5s;}}}}.copyright{float:left;color:#fff;padding:14px 0;}}@media (min-width:769px){.menuContainer{.menuContent{a{&:hover{color:#fff;span{img{opacity:1;}}}&.active-link{color:#fff;font-weight:bold;&:before{content:'';position:absolute;top:0;left:20px;width:calc(100% - 40px);border-top:3px solid #5fe4e2;}img{opacity:1;}}}}}}@media (max-width:768px){.menuContainer{position:static;text-align:center;top:0;bottom:inherit;font-size:30px;background:none;min-height:auto;.burger{display:block;}.closeBtn{}.menuContent{display:none;float:none;opacity:0;position:absolute;top:50%;left:0;width:100%;transform:translate(0,-50%);a{display:block;padding-top:20px;padding-bottom:20px;&:active{color:#1a1d24;}span{transition:0.3s;padding-left:0;img{display:none;}}}span{display:none;}}.copyright{display:none;float:none;padding-top:0;}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_6__["withI18next"])(['common'])(Nav));

/***/ })

})
//# sourceMappingURL=_app.js.e776cc916ae3dec50ef2.hot-update.js.map