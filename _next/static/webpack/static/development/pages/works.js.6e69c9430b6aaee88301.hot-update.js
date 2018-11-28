webpackHotUpdate("static\\development\\pages\\works.js",{

/***/ "./pages/works/index.js":
/*!******************************!*\
  !*** ./pages/works/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/withI18next */ "./lib/withI18next.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.js */ "./pages/works/style.js");
/* harmony import */ var _static_am_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/am.png */ "./static/am.png");
/* harmony import */ var _static_am_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_am_png__WEBPACK_IMPORTED_MODULE_7__);
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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









var Works =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Works, _React$Component);

  _createClass(Works, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var store, state;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = props.ctx.store;
                state = store.getState();
                _context.next = 4;
                return new Promise(function (resolve) {
                  setTimeout(resolve, 700);
                });

              case 4:
                return _context.abrupt("return", {
                  state: state
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Works(props) {
    var _this;

    _classCallCheck(this, Works);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Works).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Works, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('h2 strong', {
        x: -10,
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to('h2 strong', 1, {
        x: 0,
        autoAlpha: 1,
        delay: this.delay,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeOut
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('h2 .borderLine, h2 .borderLine span', {
        width: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('h2 .borderLine, h2 .borderLine span', 1, {
        width: '100%',
        delay: this.delay + 0.1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Expo"].easeOut
      }, 0.15); // TweenMax.set('.workItem', { y:10, autoAlpha:0 })
      // TweenMax.staggerTo('.workItem', 2, { y:0, autoAlpha:1, ease:Expo.easeOut }, 0.1)

      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('.workItem .innerContent', {
        width: 0,
        autoAlpha: 0,
        scale: 0.6
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('.workItem .thumbnail', {
        scale: 0.95,
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('.workItem .date', {
        x: -10,
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('.workItem .textContent p', {
        x: -10,
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('.workItem .innerContent', 1, {
        width: '100%',
        autoAlpha: 1,
        scale: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Expo"].easeOut
      }, 0.1);
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('.workItem .thumbnail', 1, {
        scale: 1,
        autoAlpha: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Expo"].easeOut,
        delay: 0.3
      }, 0.1);
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('.workItem .date', 1, {
        x: 0,
        autoAlpha: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Expo"].easeOut,
        delay: 0.4
      }, 0.1);
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('.workItem .textContent p', 1, {
        x: 0,
        autoAlpha: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Expo"].easeOut,
        delay: 0.7
      }, 0.05);
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_6__["WorksContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container pt-5 pt-sm-5 pb-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row pb-0 pb-sm-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-12 pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "pt-3 pt-sm-3 pt-md-0 title font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('title')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "borderLine"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem",
        href: "https://www.asiamiles.com",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "DEC"), " 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Asia Miles Website Revamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "reactjs, redux, scss, tweenmax, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "JUL"), " 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Towngas eshop Website Revamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html5, jquery, scss, tweenmax, gulp, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "APR"), " 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Langham 1865 Privilege Website Revamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html5, jquery, scss, gulp, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "DEC"), " 2016"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "H Queen's Website Revamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html5, jquery, scss, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "AUG"), " 2016"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Givenchy Campaign"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html5, jquery, scss, tweenmax, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "JUN"), " 2015"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Loccitane Mens Care Campaign"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html, jquery, css, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "NOV"), " 2013"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Aswatson GOB Catalog Website Revamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html, jquery, css, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 col-sm-6 col-md-4 col-lg-3 workItem"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "innerContent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thumbnail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_am_png__WEBPACK_IMPORTED_MODULE_7___default.a
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "date"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "highlight"
      }, "SEP"), " 2013"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "textContent font-ptsans p-2"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "workTitle"
      }, "Regal Hotel Website Revamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "tech"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "html, jquery, css, responsive"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detailBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Details")))))));
    }
  }]);

  return Works;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Works, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_5__["withI18next"])(['works', 'common'])(Works));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/works\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=works.js.6e69c9430b6aaee88301.hot-update.js.map