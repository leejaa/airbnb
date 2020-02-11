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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





var RoomCard = function RoomCard(_ref) {
  var room = _ref.room;
  return __jsx("div", {
    className: "w-1/4 mb-10 px-2 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, room === null || room === void 0 ? void 0 : room.photoConnection.map(function (photo, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "w-full h-64 bg-cover bg-center rounded-lg mb-2 ",
      style: {
        backgroundImage: "url(\"".concat(room.photoConnection[index].file, "\")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  })), __jsx("div", {
    style: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 30,
      width: 30,
      height: 10,
      backgroundColor: '#FFFFFF',
      zIndex: 1,
      position: 'absolute'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "flex justify-between mb-2 truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "w-4/5 overflow-hidden flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, room.name, __jsx("span", {
    className: "mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\uC9D1\uC8FC\uC778"), __jsx("span", {
    className: "text-sm text-gray-600 block truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "".concat(room.city, " ").concat(room.address))), __jsx("span", {
    className: "text-sm flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-star text-red-500 text-xs mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), " ", room.price)), __jsx("span", {
    className: "text-black w-11/12 block truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, room.description));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomCard);

/***/ })

})
//# sourceMappingURL=index.js.302f9f547180f4adb0f4.hot-update.js.map