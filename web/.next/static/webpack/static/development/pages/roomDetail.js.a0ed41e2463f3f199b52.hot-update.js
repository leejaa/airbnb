webpackHotUpdate("static/development/pages/roomDetail.js",{

/***/ "./components/RoomImages.tsx":
/*!***********************************!*\
  !*** ./components/RoomImages.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/RoomImages.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var RoomImages = function RoomImages(_ref) {
  var _room$photoConnection, _room$photoConnection2, _room$photoConnection3, _room$photoConnection4, _room$photoConnection5;

  var room = _ref.room;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([1, 2, 3, 4, 5]),
      brightList = _useState[0],
      setBrightList = _useState[1];

  console.log('brightList', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(brightList));
  return __jsx("div", {
    className: "roomimages-container1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "roomimages-container2_2",
    style: {
      display: "".concat(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(brightList, 1) ? 'none' : 'inline')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container2",
    style: {
      backgroundImage: "url(\"".concat(room === null || room === void 0 ? void 0 : (_room$photoConnection = room.photoConnection[0]) === null || _room$photoConnection === void 0 ? void 0 : _room$photoConnection.file, "\")")
    },
    onMouseOver: function onMouseOver() {
      return setBrightList([1]);
    },
    onMouseLeave: function onMouseLeave() {
      return setBrightList([]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "roomimages-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "roomimages-container4",
    style: {
      backgroundImage: "url(\"".concat(room === null || room === void 0 ? void 0 : (_room$photoConnection2 = room.photoConnection[1]) === null || _room$photoConnection2 === void 0 ? void 0 : _room$photoConnection2.file, "\")")
    },
    onMouseOver: function onMouseOver() {
      return setBrightList([2]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container4",
    style: {
      backgroundImage: "url(\"".concat(room === null || room === void 0 ? void 0 : (_room$photoConnection3 = room.photoConnection[2]) === null || _room$photoConnection3 === void 0 ? void 0 : _room$photoConnection3.file, "\")")
    },
    onMouseOver: function onMouseOver() {
      return setBrightList([3]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container4_2",
    style: {
      display: "".concat(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(brightList, 2) ? 'none' : 'inline')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container4_3",
    style: {
      display: "".concat(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(brightList, 3) ? 'none' : 'inline')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "roomimages-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "roomimages-container4",
    style: {
      backgroundImage: "url(\"".concat(room === null || room === void 0 ? void 0 : (_room$photoConnection4 = room.photoConnection[1]) === null || _room$photoConnection4 === void 0 ? void 0 : _room$photoConnection4.file, "\")")
    },
    onMouseOver: function onMouseOver() {
      return setBrightList([4]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container4",
    style: {
      backgroundImage: "url(\"".concat(room === null || room === void 0 ? void 0 : (_room$photoConnection5 = room.photoConnection[2]) === null || _room$photoConnection5 === void 0 ? void 0 : _room$photoConnection5.file, "\")")
    },
    onMouseOver: function onMouseOver() {
      return setBrightList([5]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container4_2",
    style: {
      display: "".concat(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(brightList, 4) ? 'none' : 'inline')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "roomimages-container4_3",
    style: {
      display: "".concat(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(brightList, 5) ? 'none' : 'inline')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomImages);

/***/ })

})
//# sourceMappingURL=roomDetail.js.a0ed41e2463f3f199b52.hot-update.js.map