webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        fragment test on Test {\n          test\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        fragment test on Test {\n          test\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query fragment {\n    test\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query dataQuery {\n    data {\n      id\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var query = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var fragment = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "This is the default title" : _ref$title;

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])(),
      data = _useMeQuery.data,
      loading = _useMeQuery.loading;

  var client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useApolloClient"])();

  var save = function save() {
    // client.writeQuery({
    //   query,
    //   data: {
    //     data: { 
    //       id: 1,
    //       __typename: "test",
    //       name: "test" 
    //     }
    //   }
    // });
    client.writeFragment({
      id: '5',
      fragment: graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject3()),
      data: {
        test: true
      }
    });
  };

  var get = function get() {
    // const data = client.readQuery({ query });
    var data = client.readFragment({
      id: '5',
      fragment: graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject4())
    });
    console.log('data', data);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uC5D0\uC5B4\uBE44\uC564\uBE44"), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/css/styles.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx("body", {
    className: "text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("header", {
    className: "container max-w-full inset-0 flex items-center justify-between px-6 h-20 border-b border-gray-400 fixed bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    href: "",
    className: "mr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("img", {
    className: "w-8",
    src: "data:image/png;base64,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",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx("form", {
    method: "get",
    action: "",
    className: "w-9/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("input", {
    className: "search-box border px-5 w-full font-medium text-gray-900 placeholder-gray-600 py-3 rounded-sm w-64 shadow-md hover:shadow-lg focus:ouline-none",
    name: "city",
    placeholder: "\uB3C4\uC2DC\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx("ul", {
    className: "flex items-center text-sm font-medium h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("li", {
    className: "nav_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\uD638\uC2A4\uD305\uC744 \uC2DC\uC791\uD558\uC138\uC694")), __jsx("li", {
    className: "nav_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("a", {
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "SAVE")), __jsx("li", {
    className: "nav_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("a", {
    onClick: get,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "GET")), data && data.me && __jsx("li", {
    className: "nav_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\uD504\uB85C\uD544"))), __jsx("li", {
    className: "nav_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, data && data.me ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "\uB85C\uADF8\uC778")))))), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.ffe31d1dbb02e2e8cebd.hot-update.js.map