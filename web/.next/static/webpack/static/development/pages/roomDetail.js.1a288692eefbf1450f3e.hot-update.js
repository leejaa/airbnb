webpackHotUpdate("static/development/pages/roomDetail.js",{

/***/ "./components/Calendar2.tsx":
/*!**********************************!*\
  !*** ./components/Calendar2.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.ts");
var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/Calendar2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var moment = Object(moment_range__WEBPACK_IMPORTED_MODULE_5__["extendMoment"])(moment__WEBPACK_IMPORTED_MODULE_4__);
moment.locale('ko');
var DAY_LIST = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

var Calendars2 = function Calendars2(_ref) {
  var room = _ref.room;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment().add(1, 'month')),
      date = _useState[0],
      setDate = _useState[1];

  var dates = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    console.log('date', date);
    var dates = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getDates"])(date.startOf('month'), date.endOf('month'));
    return dates;
  }, [date]);
  console.log('dates', dates);
  var renderCell = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var day = moment().format('dddd');
    var cnt = 0;
    return __jsx("div", {
      className: "calendar2-container6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "calendar2-container8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(0, 7).map(function (index) {
      if (index < lodash__WEBPACK_IMPORTED_MODULE_6___default.a.indexOf(DAY_LIST, moment(dates[0]).format('dddd'))) {
        return __jsx("div", {
          className: "calendar2-container7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "no");
      } else {
        return __jsx("div", {
          className: "calendar2-container7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, moment(dates[cnt++]).format('DD'));
      }
    })));
  }, [date]);
  return __jsx("div", {
    className: "calendar2-container1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "calendar2-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "calendar2-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowLeftOutlined"], {
    style: {
      fontSize: '18px',
      color: '#9ca1a2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("div", {
    className: "calendar2-container4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "2020\uB144 3\uC6D4")), __jsx("div", {
    className: "calendar2-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowRightOutlined"], {
    style: {
      fontSize: '18px',
      color: '#9ca1a2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), __jsx("div", {
    className: "calendar2-container5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\uC77C"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\uC6D4"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\uD654"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uC218"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\uBAA9"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\uAE08"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\uD1A0")), renderCell);
};

/* harmony default export */ __webpack_exports__["default"] = (Calendars2);

/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! exports provided: getDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDates", function() { return getDates; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var moment = Object(moment_range__WEBPACK_IMPORTED_MODULE_1__["extendMoment"])(moment__WEBPACK_IMPORTED_MODULE_0__);
moment.locale('ko');
var getDates = function getDates(startDate, stopDate) {
  var dateArray = [];

  var currentDate = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.clone(startDate);

  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
    currentDate = moment(currentDate).add(1, 'days');
  }

  return dateArray;
};

/***/ })

})
//# sourceMappingURL=roomDetail.js.1a288692eefbf1450f3e.hot-update.js.map