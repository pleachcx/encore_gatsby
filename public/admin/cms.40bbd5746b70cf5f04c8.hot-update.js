webpackHotUpdate("cms",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Nav.css */ "./src/components/Nav.css");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Nav_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/pl/encore_gatsby/src/components/Nav.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var Navigation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, _Component);

  function Navigation() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      active: false,
      activeSubNav: false,
      currentPath: false
    };

    _this.componentDidMount = function () {
      return _this.setState({
        currentPath: _this.props.location.pathname
      });
    };

    _this.handleMenuToggle = function () {
      return _this.setState({
        active: !_this.state.active
      });
    };

    _this.handleLinkClick = function () {
      return _this.state.active && _this.handleMenuToggle();
    };

    _this.handleLinkKeyDown = function (ev) {
      if (ev.keyCode === 13) {
        _this.state.active && _this.handleMenuToggle();
      }
    };

    _this.toggleSubNav = function (subNav) {
      return _this.setState({
        activeSubNav: _this.state.activeSubNav === subNav ? false : subNav
      });
    };

    _this.keyToggleSubNav = function (e, subNav) {
      // key o is for open so you can enter key to open
      if (e.keyCode === 79 || e.keyCode === 27) {
        _this.toggleSubNav(subNav);
      }
    };

    return _this;
  }

  var _proto = Navigation.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var active = this.state.active,
        subNav = this.props.subNav,
        NavLink = function NavLink(_ref) {
      var to = _ref.to,
          className = _ref.className,
          children = _ref.children,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["to", "className", "children"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], Object.assign({
        to: to,
        className: "NavLink " + (to === _this2.state.currentPath ? 'active' : '') + " " + className,
        onClick: _this2.handleLinkClick,
        onKeyDown: _this2.handleLinkKeyDown,
        tabIndex: 0,
        "aria-label": "Navigation",
        role: "button"
      }, props, {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }), children);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
      className: "Nav " + (active ? 'Nav-active' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Nav--Container container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      onClick: this.handleLinkClick,
      onKeyDown: this.handleLinkKeyDown,
      tabIndex: 0,
      "aria-label": "Navigation",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Nav--Links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLink, {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLink, {
      to: "/about/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Nav--Group " + (this.state.activeSubNav === 'posts' ? 'active' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "NavLink Nav--GroupParent " + (this.props.location.pathname.includes('posts') || this.props.location.pathname.includes('blog') || this.props.location.pathname.includes('post-categories') ? 'active' : ''),
      onClick: function onClick() {
        return _this2.toggleSubNav('posts');
      },
      onKeyDown: function onKeyDown(e) {
        return _this2.keyToggleSubNav(e, 'posts');
      },
      tabIndex: 0,
      "aria-label": "Navigation",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }, "Services", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Nav--GroupLinks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLink, {
      to: "/staging/",
      className: "Nav--GroupLink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, "Home Staging"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLink, {
      to: "/makeover/",
      className: "Nav--GroupLink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, "Home Makeovers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLink, {
      to: "/post-categories/our-work",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, "Our Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLink, {
      to: "/contact/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "Button-blank Nav--MenuButton",
      onClick: this.handleMenuToggle,
      tabIndex: 0,
      "aria-label": "Navigation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["X"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 23
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 31
      }
    }))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "/home/pl/encore_gatsby/src/components/Nav.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.40bbd5746b70cf5f04c8.hot-update.js.map