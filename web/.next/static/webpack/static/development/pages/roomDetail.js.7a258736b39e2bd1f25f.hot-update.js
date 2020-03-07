webpackHotUpdate("static/development/pages/roomDetail.js",{

/***/ "./pages/roomDetail.tsx":
/*!******************************!*\
  !*** ./pages/roomDetail.tsx ***!
  \******************************/
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
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RoomdetailPicture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RoomdetailPicture */ "./components/RoomdetailPicture.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/pages/roomDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var isServer = function isServer() {
  return false;
};

var initialHeight = 800;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _router$query, _data$selectRoom, _data$selectRoom2, _data$selectRoom3, _data$selectRoom3$use, _data$selectRoom4, _data$selectRoom5, _data$selectRoom6;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useSelectRoomQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useSelectRoomQuery"])({
    variables: {
      id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id)
    }
  }),
      data = _useSelectRoomQuery.data,
      loading = _useSelectRoomQuery.loading;

  if (loading) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "\uB85C\uB529\uC911...");
  }

  return __jsx("div", {
    style: {
      height: "".concat(isServer() ? initialHeight : window.innerHeight, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_RoomdetailPicture__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: data === null || data === void 0 ? void 0 : data.selectRoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom = data.selectRoom) === null || _data$selectRoom === void 0 ? void 0 : _data$selectRoom.name), __jsx("div", {
    className: "roomdetail-container8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom2 = data.selectRoom) === null || _data$selectRoom2 === void 0 ? void 0 : _data$selectRoom2.city), __jsx("div", {
    className: "roomdetail-container9",
    style: {
      backgroundImage: "url('".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom3 = data.selectRoom) === null || _data$selectRoom3 === void 0 ? void 0 : (_data$selectRoom3$use = _data$selectRoom3.user) === null || _data$selectRoom3$use === void 0 ? void 0 : _data$selectRoom3$use.avatar, "')")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\uC124\uBA85")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom4 = data.selectRoom) === null || _data$selectRoom4 === void 0 ? void 0 : _data$selectRoom4.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom5 = data.selectRoom) === null || _data$selectRoom5 === void 0 ? void 0 : _data$selectRoom5.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom6 = data.selectRoom) === null || _data$selectRoom6 === void 0 ? void 0 : _data$selectRoom6.description))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=roomDetail.js.7a258736b39e2bd1f25f.hot-update.js.map