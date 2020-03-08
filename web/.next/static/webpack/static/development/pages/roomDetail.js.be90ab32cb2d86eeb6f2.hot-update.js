webpackHotUpdate("static/development/pages/roomDetail.js",{

/***/ "./components/Calendar.tsx":
/*!*********************************!*\
  !*** ./components/Calendar.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/Calendar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var moment = Object(moment_range__WEBPACK_IMPORTED_MODULE_7__["extendMoment"])(moment__WEBPACK_IMPORTED_MODULE_6__);
moment.locale('ko');

var Calendars = function Calendars(_ref) {
  var room = _ref.room;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(moment()),
      today = _useState[0],
      setToday = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(moment()),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(moment.range(moment(), moment())),
      dates = _useState3[0],
      setDates = _useState3[1];

  var dateFullCellRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (dateParam) {
    var classNameDiv = 'calendar-container2_1';
    var classNameSpan = 'calendar-span1_1';

    var check_in_list = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.map(room === null || room === void 0 ? void 0 : room.reservation, function (reservation) {
      return reservation.check_in;
    });

    if (dates.contains(dateParam)) {
      classNameDiv = 'calendar-container2_2';
      classNameSpan = 'calendar-span1_2';
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.includes(check_in_list, dateParam.format('YYYY-MM-DD')) || date.isAfter(dateParam)) {
      classNameDiv = 'calendar-container2_3';
      classNameSpan = 'calendar-span1_3';
    }

    return __jsx("div", {
      className: "calendar-container1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: classNameDiv,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("span", {
      className: classNameSpan,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(moment(dateParam).format('DD'), 10))));
  }, [date, dates]);
  var goLeft = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newDate = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.clone(date);

    newDate = newDate.add(-1, 'month');
    setDate(newDate);
  }, [date]);
  var goRight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newDate = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.clone(date);

    newDate = newDate.add(1, 'month');
    setDate(newDate);
  }, [date]);
  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (dateParam) {
    var check_in_list = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.map(room === null || room === void 0 ? void 0 : room.reservation, function (reservation) {
      return reservation.check_in;
    });

    if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(dates)) {
      if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.includes(check_in_list, dateParam.format('YYYY-MM-DD')) && !date.isAfter(dateParam)) {
        var newDate = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.clone(dateParam);

        var newDates = moment.range(newDate, newDate);
        setDate(newDate);
        setDates(newDates);
      }
    } else {
      var _newDates = moment.range(date, dateParam);

      setDates(_newDates);
    }
  }, [date, dates]);
  console.log('center', dates.center());
  return __jsx("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "calendar-container3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "calendar-container4",
    onClick: goLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LeftOutlined"], {
    style: {
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx("span", {
    className: "calendar-span2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "".concat(date.format('YYYY'), "\uB144 ").concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(date.format('MM'), 10), "\uC6D4")), __jsx("div", {
    className: "calendar-container5",
    onClick: goRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RightOutlined"], {
    style: {
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Calendar"], {
    dateFullCellRender: dateFullCellRender,
    value: date,
    onSelect: onSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Calendars);

/***/ })

})
//# sourceMappingURL=roomDetail.js.be90ab32cb2d86eeb6f2.hot-update.js.map