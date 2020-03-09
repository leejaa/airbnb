webpackHotUpdate("static/development/pages/roomDetail.js",{

/***/ "./components/Review.tsx":
/*!*******************************!*\
  !*** ./components/Review.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/Review.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var moment = Object(moment_range__WEBPACK_IMPORTED_MODULE_4__["extendMoment"])(moment__WEBPACK_IMPORTED_MODULE_3__);
moment.locale('ko');

var Review = function Review(_ref) {
  var _review$user, _review$user2;

  var review = _ref.review;
  return __jsx("div", {
    style: {
      width: '100%',
      height: '20%',
      borderBottom: '1px solid gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "review-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "review-container1",
    style: {
      backgroundImage: "url('".concat(review === null || review === void 0 ? void 0 : (_review$user = review.user) === null || _review$user === void 0 ? void 0 : _review$user.avatar, "')")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "review-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, review === null || review === void 0 ? void 0 : (_review$user2 = review.user) === null || _review$user2 === void 0 ? void 0 : _review$user2.name)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: 'gray',
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, moment(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.replace(review === null || review === void 0 ? void 0 : review.createdAt, /"/g, '')).format('YYYY년 MM월'))))), __jsx("div", {
    className: "review-container4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, review === null || review === void 0 ? void 0 : review.review));
};

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ })

})
//# sourceMappingURL=roomDetail.js.58d2248de4f445f08029.hot-update.js.map