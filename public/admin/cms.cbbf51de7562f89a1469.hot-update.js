webpackHotUpdate("cms",{

/***/ "./src/components/Cookies.js":
/*!***********************************!*\
  !*** ./src/components/Cookies.js ***!
  \***********************************/
/*! exports provided: Cookie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookie", function() { return Cookie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/patrickleach/encore_gatsby/src/components/Cookies.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Cookie = function Cookie() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_cookie_consent__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      background: "#ffd60aff"
    } //debug={true}
    ,
    buttonStyle: {
      background: "white",
      color: "black"
    },
    location: "bottom",
    buttonText: "Accept",
    declineButtonText: "Decline",
    cookieName: "gatsby-gdpr-google-analytics",
    acceptOnScroll: true,
    acceptOnScrollPercentage: 30,
    onAccept: function onAccept() {
      react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__["Cookies"].set("gatsby-gdpr-google-analytics", "true");
      react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__["Cookies"].set("gatsby-gdpr-facebook-pixel", "true");
      react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__["Cookies"].set("gatsby-gdpr-google-tagmanager", "true");
    },
    hideOnAccept: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: "10px",
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners", " ")));
};
var _default = Cookie;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Cookie, "Cookie", "/Users/patrickleach/encore_gatsby/src/components/Cookies.js");
  reactHotLoader.register(_default, "default", "/Users/patrickleach/encore_gatsby/src/components/Cookies.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.cbbf51de7562f89a1469.hot-update.js.map