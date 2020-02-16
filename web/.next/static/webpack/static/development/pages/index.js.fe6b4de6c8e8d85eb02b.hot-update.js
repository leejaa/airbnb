webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RoomCard.tsx":
/*!*********************************!*\
  !*** ./components/RoomCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/RoomCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var RoomCard = function RoomCard(_ref) {
  var room = _ref.room,
      width = _ref.width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isShowArrow = _useState[0],
      setIsShowArrow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isHoverArrowLeft = _useState2[0],
      setIsHoverArrowLeft = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isHoverArrowRight = _useState3[0],
      setIsHoverArrowRight = _useState3[1];

  var carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var fnNextPrev = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (direction) {
    switch (direction) {
      case 'right':
        carouselRef.current.next();
        break;

      case 'left':
        carouselRef.current.prev();
        break;

      default:
        break;
    }
  }, []);
  return __jsx("div", {
    className: "w-full mb-10 px-2 overflow-hidden",
    style: {
      position: 'relative'
    },
    onMouseOver: function onMouseOver() {
      return setIsShowArrow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsShowArrow(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    ref: carouselRef,
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, room === null || room === void 0 ? void 0 : room.photoConnection.map(function (photo, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "w-full h-64 bg-cover bg-center rounded-lg mb-2 ",
      style: {
        backgroundImage: "url(\"".concat(room.photoConnection[index].file, "\")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  })), __jsx("div", {
    style: {
      borderWidth: 1,
      borderRadius: 30,
      width: 25,
      height: 25,
      backgroundColor: '#FFFFFF',
      zIndex: 1,
      position: 'absolute',
      top: 108,
      left: 15,
      paddingBottom: 8,
      paddingLeft: 3,
      display: "".concat(isShowArrow ? 'inline' : 'none'),
      cursor: 'pointer',
      boxShadow: "".concat(isHoverArrowLeft ? '1.5px 1.5px 1.5px 1.5px gray' : '')
    },
    onMouseOver: function onMouseOver() {
      return setIsHoverArrowLeft(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHoverArrowLeft(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    onClick: function onClick() {
      return fnNextPrev('left');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "left",
    style: {
      position: 'absolute',
      top: 5,
      fontSize: isHoverArrowLeft ? 18 : 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), __jsx("div", {
    style: {
      borderWidth: 1,
      borderRadius: 30,
      width: 25,
      height: 25,
      backgroundColor: '#FFFFFF',
      zIndex: 1,
      position: 'absolute',
      top: 108,
      right: 15,
      paddingBottom: 8,
      paddingLeft: 3,
      display: "".concat(isShowArrow ? 'inline' : 'none'),
      cursor: 'pointer',
      boxShadow: "".concat(isHoverArrowRight ? '1.5px 1.5px 1.5px 1.5px gray' : '')
    },
    onMouseOver: function onMouseOver() {
      return setIsHoverArrowRight(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHoverArrowRight(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    onClick: function onClick() {
      return fnNextPrev('right');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "right",
    style: {
      position: 'absolute',
      top: 5,
      fontSize: isHoverArrowRight ? 18 : 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), __jsx("div", {
    className: "flex justify-between mb-2 truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "w-4/5 overflow-hidden flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, room.name, __jsx("span", {
    className: "mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\uC9D1\uC8FC\uC778"), __jsx("span", {
    className: "text-sm text-gray-600 block truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "".concat(room.city, " ").concat(room.address))), __jsx("span", {
    className: "text-sm flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-star text-red-500 text-xs mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), " ", room.price)), __jsx("span", {
    className: "text-black w-11/12 block truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, room.description));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomCard);

/***/ })

})
//# sourceMappingURL=index.js.fe6b4de6c8e8d85eb02b.hot-update.js.map