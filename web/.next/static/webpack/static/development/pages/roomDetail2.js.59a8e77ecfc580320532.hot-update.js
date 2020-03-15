webpackHotUpdate("static/development/pages/roomDetail2.js",{

/***/ "./pages/roomDetail2.tsx":
/*!*******************************!*\
  !*** ./pages/roomDetail2.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/pages/roomDetail2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var isServer = function isServer() {
  return false;
};

var initialHeight = 800;
var map;
var marker;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _router$query, _data$selectRoom, _data$selectRoom$phot, _data$selectRoom2, _data$selectRoom2$pho, _data$selectRoom3, _data$selectRoom3$pho, _data$selectRoom4, _data$selectRoom4$pho, _data$selectRoom5, _data$selectRoom5$pho, _data$selectRoom6;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useSelectRoomQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useSelectRoomQuery"])({
    variables: {
      id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id)
    }
  }),
      data = _useSelectRoomQuery.data,
      loading = _useSelectRoomQuery.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var goLeft = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newIndex;

    if (index <= 4) {
      newIndex = 4;
    } else {
      newIndex = index - 1;
    }

    setIndex(newIndex);
  }, [index]);
  var goRight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newIndex;

    if (index >= 4) {
      newIndex = 0;
    } else {
      newIndex = index + 1;
    }

    setIndex(newIndex);
  }, [index]);

  if (loading) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\uB85C\uB529\uC911");
  }

  return __jsx("div", {
    className: "roomdetail2-container1",
    style: {
      height: "".concat(isServer() ? initialHeight : window.innerHeight, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail2-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail2-container10",
    onClick: goLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LeftOutlined"], {
    style: {
      fontSize: '35px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail2-container9",
    style: {
      backgroundImage: "url(\"".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom = data.selectRoom) === null || _data$selectRoom === void 0 ? void 0 : (_data$selectRoom$phot = _data$selectRoom.photoConnection[index]) === null || _data$selectRoom$phot === void 0 ? void 0 : _data$selectRoom$phot.file, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail2-container10",
    onClick: goRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["RightOutlined"], {
    style: {
      fontSize: '35px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), __jsx("div", {
    className: "roomdetail2-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail2-container4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CloseOutlined"], {
    style: {
      fontSize: '30px',
      fontWeight: 'lighter',
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail2-container5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail2-container6",
    style: {
      backgroundImage: "url(\"".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom2 = data.selectRoom) === null || _data$selectRoom2 === void 0 ? void 0 : (_data$selectRoom2$pho = _data$selectRoom2.photoConnection[1]) === null || _data$selectRoom2$pho === void 0 ? void 0 : _data$selectRoom2$pho.file, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail2-container6",
    style: {
      backgroundImage: "url(\"".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom3 = data.selectRoom) === null || _data$selectRoom3 === void 0 ? void 0 : (_data$selectRoom3$pho = _data$selectRoom3.photoConnection[2]) === null || _data$selectRoom3$pho === void 0 ? void 0 : _data$selectRoom3$pho.file, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail2-container6",
    style: {
      backgroundImage: "url(\"".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom4 = data.selectRoom) === null || _data$selectRoom4 === void 0 ? void 0 : (_data$selectRoom4$pho = _data$selectRoom4.photoConnection[3]) === null || _data$selectRoom4$pho === void 0 ? void 0 : _data$selectRoom4$pho.file, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail2-container6",
    style: {
      backgroundImage: "url(\"".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom5 = data.selectRoom) === null || _data$selectRoom5 === void 0 ? void 0 : (_data$selectRoom5$pho = _data$selectRoom5.photoConnection[4]) === null || _data$selectRoom5$pho === void 0 ? void 0 : _data$selectRoom5$pho.file, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("dfn", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail2-container7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'normal',
      fontSize: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "".concat(index + 1, " / 5"))), __jsx("div", {
    className: "roomdetail2-container8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom6 = data.selectRoom) === null || _data$selectRoom6 === void 0 ? void 0 : _data$selectRoom6.photoConnection[index].caption)));
});

/***/ })

})
//# sourceMappingURL=roomDetail2.js.59a8e77ecfc580320532.hot-update.js.map