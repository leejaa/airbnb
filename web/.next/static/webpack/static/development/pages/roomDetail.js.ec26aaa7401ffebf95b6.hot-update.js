webpackHotUpdate("static/development/pages/roomDetail.js",{

/***/ "./components/RoomdetailPicture.tsx":
/*!******************************************!*\
  !*** ./components/RoomdetailPicture.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/RoomdetailPicture.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var RoomdetailPicture = function RoomdetailPicture(_ref) {
  var room = _ref.room;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    className: "d-block w-100",
    src: "http://post.phinf.naver.net/MjAxNzA4MDJfMjEy/MDAxNTAxNjAxNzcwNDEz.o_TRfvx1Lb5jaehAVZNMs3NCjL_DB3CmaA_mzxN6QJ4g.DivsPXGnEvHHMwvoK8E73AnBb1kOLz71rK4gZm1cn8Mg.JPEG/IrsAll7oTaSlD7V4LXa7_eVQdy8o.jpg",
    alt: "First slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"].Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "First slide label"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Nulla vitae elit libero, a pharetra augue mollis interdum."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    className: "d-block w-100",
    src: "http://imgnews.naver.net/image/5492/2019/06/13/0000086115_001_20190613162435470.jpg",
    alt: "Second slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"].Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Second slide label"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomdetailPicture);

/***/ })

})
//# sourceMappingURL=roomDetail.js.ec26aaa7401ffebf95b6.hot-update.js.map