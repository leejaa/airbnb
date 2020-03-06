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
    className: "roomdetail-container4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeIndex: index,
    onSelect: handleSelect,
    interval: null,
    touch: true,
    indicators: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, room === null || room === void 0 ? void 0 : room.photoConnection.map(function (photo) {
    return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '100%',
        height: '260px',
        backgroundImage: "url(\"".concat(photo.file, "\")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "roomdetail-container5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "".concat(index, "/").concat(room === null || room === void 0 ? void 0 : room.photoConnection.length))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomdetailPicture);

/***/ })

})
//# sourceMappingURL=roomDetail.js.5abe832b000770fdd5aa.hot-update.js.map