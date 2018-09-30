webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
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
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.js */ "./pages/about/style.js");
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








var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  _createClass(About, null, [{
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
                // const { query, res, store } = props.ctx
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

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, props));
    _this.delay = 0.4;
    return _this;
  }

  _createClass(About, [{
    key: "progressBarAnimte",
    value: function progressBarAnimte() {
      var _this2 = this;

      this.list = document.querySelectorAll('.progress-bar');
      this.arrList = [].slice.call(this.list);
      this.startParcent = {};
      this.parcent = [];

      for (var i = 0; i < this.arrList.length; i++) {
        this.startParcent[i] = {
          value: 0
        };
        this.parcent[i] = this.arrList[i].getAttribute('aria-valuenow');
      }

      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set(this.arrList, {
        width: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo(this.arrList, 1, {
        cycle: {
          width: function width(i) {
            var w = _this2.arrList[i].getAttribute('aria-valuenow') + '%';
            return w;
          }
        },
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Expo"].easeOut
      }, 0.1);

      var _loop = function _loop(_i) {
        gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(_this2.startParcent[_i], 0.3, {
          value: _this2.parcent[_i],
          onUpdate: function onUpdate() {
            _this2.arrList[_i].innerHTML = "<span className='font-muli'><small><strong>" + Math.floor(_this2.startParcent[_i].value) + '%</strong></small></span>';
          },
          ease: 'linear',
          delay: _i * 0.1
        });
      };

      for (var _i = 0; _i < this.arrList.length; _i++) {
        _loop(_i);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

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
      }, 0.15);
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].set('.fade, .technicalSkills .item', {
        y: 15,
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('.fade', 1, {
        y: 0,
        autoAlpha: 1,
        delay: this.delay + 0.3,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeOut
      }, 0.2);
      gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].staggerTo('.technicalSkills .item', 1, {
        y: 0,
        autoAlpha: 1,
        delay: this.delay + 0.3,
        ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeOut
      }, 0.05, function () {// this.progressBarAnimte()
      });
      setTimeout(function () {
        _this3.progressBarAnimte();
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_6__["AboutContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container pt-5 pt-sm-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row pb-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "pt-3 pt-sm-3 pt-md-0 title font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('title')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "borderLine"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "intro pt-3 fade",
        dangerouslySetInnerHTML: {
          __html: t('intro')
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row pb-5 fade"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "technicalSkills col-12",
        ref: function ref(e) {
          _this4.skills = e;
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "mb-2 title font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('subTitle_1'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_1')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "90",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_2')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "90",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_3')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "80",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_4')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "70",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_5')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_6')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "60",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_7')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_8')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "10",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_9')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_10')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "50",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('skill_11')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "10",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "font-muli"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "0%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1 item"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row pb-md-5 fade"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "experience pb-md-5 col-12 col-md-6 col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "mb-2 title font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('subTitle_2'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "pb-3 current"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0",
        dangerouslySetInnerHTML: {
          __html: t('exp_3')
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('exp_3_pos')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "pt-3 pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0",
        dangerouslySetInnerHTML: {
          __html: t('exp_2')
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('exp_2_pos')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "pt-3 pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0",
        dangerouslySetInnerHTML: {
          __html: t('exp_1')
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0 font-nixieone"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t('exp_1_pos')))))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(About, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])()(Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_5__["withI18next"])(['about', 'common'])(About)));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.6521f9df35c525e5a501.hot-update.js.map