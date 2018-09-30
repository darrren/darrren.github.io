webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/withI18next */ "./lib/withI18next.js");
/* harmony import */ var _Fireflies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fireflies */ "./pages/home/Fireflies.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.js */ "./pages/home/style.js");
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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









var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props)); // console.log(props)

    _this.state = {
      h1Text1: _this.props.t('welcome')
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pageItem = document.querySelectorAll('.pageItem');
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set('.pageContainer', {
        width: window.innerWidth * pageItem.length,
        height: window.innerHeight
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set(pageItem, {
        width: window.innerWidth,
        height: window.innerHeight
      });

      for (var i = 0; i < pageItem.length; i++) {
        var active = false;

        for (var j = 0; j < pageItem[i].classList.length; j++) {
          if (pageItem[i].classList[j] === 'active') {
            active = true;
          }
        }

        if (!active) {
          gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set(pageItem[i], {
            left: -window.innerWidth
          });
        }
      }

      setTimeout(function () {
        gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to('.transition', 0.1, {
          width: window.innerWidth,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Expo"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to(pageItem[0], 2, {
          left: window.innerWidth,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power2"].out
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to(pageItem[1], 2, {
          left: 0,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power2"].out
        });
      }, 2000);
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set('.intro h1', {
        x: 20,
        y: -10,
        rotationX: 5,
        rotationY: -5,
        scale: 0.85,
        autoAlpha: 0,
        transformPerspective: 200,
        transformOrigin: '100% 100%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set('.intro h2, .intro h3', {
        y: 10,
        rotationX: -30,
        scale: 0.95,
        autoAlpha: 0,
        transformPerspective: 1000,
        transformOrigin: '50% 100%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].staggerTo('.intro h1', 1, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        autoAlpha: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power2"].easeOut,
        delay: 1
      }, 0.7);
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].staggerTo('.intro h2, .intro h3', 1, {
        y: 0,
        rotationX: 0,
        scale: 1,
        autoAlpha: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power2"].easeOut,
        delay: 2.2
      }, 0.3);
      var text = '';

      for (var _i = 0; _i < this.props.t('welcome').length; _i++) {
        var letter = this.props.t('welcome')[_i];

        text += '<span class="' + letter.toLowerCase() + _i + '">' + letter + '</span>';
      }

      this.setState({
        h1Text1: text
      }, function () {
        gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set('.intro h1 span', {
          x: -40,
          y: -40,
          rotationX: 40,
          autoAlpha: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].staggerTo('.intro h1 span', 1, {
          x: 0,
          y: 0,
          rotationX: 0,
          autoAlpha: 1,
          ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power2"].easeOut,
          delay: 1.2
        }, 0.1);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_6__["HomeContainer"], {
        className: "pageContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "transition"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pageItem active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "innerPage"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fireflies__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "intro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "font-raleway"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "welcome",
        dangerouslySetInnerHTML: {
          __html: this.state.h1Text1
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "font-ralewayBold"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: t('h2')
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "font-ralewayBold"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t('h3')))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pageItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "innerPage"
      }, "about")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Home, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any // static async getInitialProps ({ query, res }) {
  //   // await new Promise((resolve) => {
  //   //   setTimeout(resolve, 3000)
  //   // })
  //   return {}
  // }

});

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_4__["withI18next"])(['home', 'common'])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Home)));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d40ef7919e04cf8a091c.hot-update.js.map