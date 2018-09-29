webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/activeLink.js":
/*!**********************************!*\
  !*** ./components/activeLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "../routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);




var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href,
      params = _ref.params;
  var active = router.pathname.replace('/', '') === href.replace('/', '');
  var className = active ? 'active-link' : 'inactive-link';
  console.log(router.pathname);
  console.log(router.pathname.replace('/', ''));
  console.log(href.replace('/', ''));
  console.log(className); //   const style = {
  //     marginRight: 10,
  //     color: router.pathname === href ? 'red' : 'black'
  //   }
  //   const handleClick = (e) => {
  //     e.preventDefault()
  //     router.push(href)
  //   }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    prefetch: true,
    route: href,
    params: params
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: className
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

})
//# sourceMappingURL=_app.js.f3eb4c3569f875077793.hot-update.js.map