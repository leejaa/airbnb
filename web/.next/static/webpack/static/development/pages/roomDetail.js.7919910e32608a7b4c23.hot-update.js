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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment()),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var disableDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var disableDate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getDates"])({
      startDate: moment().startOf('month').format('YYYY-MM-DD'),
      endDate: moment().add(-1, 'day')
    });
    disableDate.push(room === null || room === void 0 ? void 0 : room.reservation.map(function (item) {
      return item.check_in;
    }));
    disableDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_6___default.a.flatten(disableDate));
    return disableDate;
  }, []);
  var dates = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var dates = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getDates"])({
      startDate: date.startOf('month').format('YYYY-MM-DD'),
      endDate: date.endOf('month')
    });
    return dates;
  }, [date]);
  var onClickDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (date) {
    alert('1');
    var startDate = '';
    var endDate = '';

    if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(selectedDate)) {
      startDate = date;
      endDate = date;
    } else {
      startDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.minBy(selectedDate);
      endDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.maxBy(selectedDate);
      startDate = startDate < date ? startDate : date;
      endDate = endDate < date ? date : endDate;
    }

    var newSelectedDate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getDates"])({
      startDate: startDate,
      endDate: endDate
    });
    setSelectedDate(newSelectedDate);
  }, [selectedDate]);
  var renderCell = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var cnt = 0;
    return __jsx("div", {
      className: "calendar2-container6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: "calendar2-container8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(0, 7).map(function (index) {
      if (index < lodash__WEBPACK_IMPORTED_MODULE_6___default.a.indexOf(DAY_LIST, moment(dates[0]).format('dddd'))) {
        return __jsx("div", {
          className: "calendar2-container9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        });
      } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(disableDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
        return __jsx("div", {
          className: "calendar2-container7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("span", {
          className: "calendar2-span2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, __jsx("del", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, moment(dates[cnt++]).format('D'))));
      } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(selectedDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
        return __jsx("div", {
          className: "calendar2-container10",
          onClick: function onClick() {
            return onClickDate(moment(dates[cnt]).format('YYYY-MM-DD'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("span", {
          className: "calendar2-span3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("del", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, moment(dates[cnt++]).format('D'))));
      } else {
        return __jsx("div", {
          className: "calendar2-container7",
          onClick: function onClick() {
            return onClickDate(moment(dates[cnt]).format('YYYY-MM-DD'));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("span", {
          className: "calendar2-span1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, moment(dates[cnt++]).format('D')));
      }
    })), lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(1, 6).map(function (index) {
      if (cnt < dates.length) {
        return __jsx("div", {
          className: "calendar2-container8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(0, 7).map(function (index) {
          if (cnt >= dates.length) {
            return __jsx("div", {
              className: "calendar2-container9",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            });
          } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(disableDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
            return __jsx("div", {
              className: "calendar2-container7",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }, __jsx("span", {
              className: "calendar2-span2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, __jsx("del", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            }, moment(dates[cnt++]).format('D'))));
          } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(selectedDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
            return __jsx("div", {
              className: "calendar2-container10",
              onClick: function onClick() {
                return onClickDate(moment(dates[cnt]).format('YYYY-MM-DD'));
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, __jsx("span", {
              className: "calendar2-span3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            }, __jsx("del", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, moment(dates[cnt++]).format('D'))));
          } else {
            return __jsx("div", {
              className: "calendar2-container7",
              onClick: function onClick() {
                return onClickDate(moment(dates[cnt]).format('YYYY-MM-DD'));
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            }, __jsx("span", {
              className: "calendar2-span1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, moment(dates[cnt++]).format('D')));
          }
        }));
      } else {
        return null;
      }
    }));
  }, [date, selectedDate, disableDate]);
  var goLeft = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var newDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.clone(date).add(-1, 'day');

    setDate(newDate);
  }, [date]);
  var goRight = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var newDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.clone(date).add(1, 'day');

    setDate(newDate);
  }, [date]);
  return __jsx("div", {
    className: "calendar2-container1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    className: "calendar2-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "calendar2-container3",
    onClick: goLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowLeftOutlined"], {
    style: {
      fontSize: '18px',
      color: '#9ca1a2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("div", {
    className: "calendar2-container4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "".concat(date.format('YYYY'), "\uB144 ").concat(date.format('M'), "\uC6D4"))), __jsx("div", {
    className: "calendar2-container3",
    onClick: goRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowRightOutlined"], {
    style: {
      fontSize: '18px',
      color: '#9ca1a2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }))), __jsx("div", {
    className: "calendar2-container5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "\uC77C"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\uC6D4"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\uD654"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "\uC218"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "\uBAA9"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\uAE08"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "\uD1A0")), renderCell);
};

/* harmony default export */ __webpack_exports__["default"] = (Calendars2);

/***/ })

})
//# sourceMappingURL=roomDetail.js.7919910e32608a7b4c23.hot-update.js.map