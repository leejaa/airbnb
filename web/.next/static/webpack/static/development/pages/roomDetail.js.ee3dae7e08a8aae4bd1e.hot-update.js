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
  var room = _ref.room,
      setCheckin = _ref.setCheckin,
      setCheckout = _ref.setCheckout;

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
    var startDate = '';
    var endDate = '';

    if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(selectedDate) || lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(selectedDate, date)) {
      startDate = date;
      endDate = date;
    } else {
      startDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.minBy(selectedDate);
      endDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.maxBy(selectedDate);

      if (startDate > date) {
        endDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.clone(startDate);
        startDate = date;
      }

      if (endDate < date) {
        startDate = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.clone(endDate);
        endDate = date;
      }
    }

    var newSelectedDate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["getDates"])({
      startDate: startDate,
      endDate: endDate
    });
    setSelectedDate(newSelectedDate);
    setCheckin(startDate);
    setCheckin(endDate);
  }, [selectedDate]);
  var renderCell = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var cnt = 0;
    return __jsx("div", {
      className: "calendar2-container6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "calendar2-container8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(0, 7).map(function (index) {
      var currentDate = moment(dates[cnt]).format('YYYY-MM-DD');

      if (index < lodash__WEBPACK_IMPORTED_MODULE_6___default.a.indexOf(DAY_LIST, moment(dates[0]).format('dddd'))) {
        return __jsx("div", {
          className: "calendar2-container9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        });
      } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(disableDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
        return __jsx("div", {
          className: "calendar2-container7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("span", {
          className: "calendar2-span2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx("del", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, moment(dates[cnt++]).format('D'))));
      } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(selectedDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
        return __jsx("div", {
          className: "calendar2-container10",
          onClick: function onClick() {
            return onClickDate(currentDate);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("span", {
          className: "calendar2-span3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, moment(dates[cnt++]).format('D')));
      } else {
        return __jsx("div", {
          className: "calendar2-container7",
          onClick: function onClick() {
            return onClickDate(currentDate);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("span", {
          className: "calendar2-span1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
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
            lineNumber: 103
          },
          __self: this
        }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(0, 7).map(function (index) {
          var currentDate = moment(dates[cnt]).format('YYYY-MM-DD');

          if (cnt >= dates.length) {
            return __jsx("div", {
              className: "calendar2-container9",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            });
          } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(disableDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
            return __jsx("div", {
              className: "calendar2-container7",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, __jsx("span", {
              className: "calendar2-span2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }, __jsx("del", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, moment(dates[cnt++]).format('D'))));
          } else if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.includes(selectedDate, moment(dates[cnt]).format('YYYY-MM-DD'))) {
            return __jsx("div", {
              className: "calendar2-container10",
              onClick: function onClick() {
                return onClickDate(currentDate);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }, __jsx("span", {
              className: "calendar2-span3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }, moment(dates[cnt++]).format('D')));
          } else {
            return __jsx("div", {
              className: "calendar2-container7",
              onClick: function onClick() {
                return onClickDate(currentDate);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }, __jsx("span", {
              className: "calendar2-span1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
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
      lineNumber: 157
    },
    __self: this
  }, __jsx("div", {
    className: "calendar2-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("div", {
    className: "calendar2-container3",
    onClick: goLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowLeftOutlined"], {
    style: {
      fontSize: '18px',
      color: '#9ca1a2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), __jsx("div", {
    className: "calendar2-container4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "".concat(date.format('YYYY'), "\uB144 ").concat(date.format('M'), "\uC6D4"))), __jsx("div", {
    className: "calendar2-container3",
    onClick: goRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowRightOutlined"], {
    style: {
      fontSize: '18px',
      color: '#9ca1a2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }))), __jsx("div", {
    className: "calendar2-container5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "\uC77C"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "\uC6D4"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "\uD654"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "\uC218"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "\uBAA9"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "\uAE08"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "\uD1A0")), renderCell);
};

/* harmony default export */ __webpack_exports__["default"] = (Calendars2);

/***/ }),

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
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/scss/room.scss */ "./assets/scss/room.scss");
/* harmony import */ var _assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_room_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_RoomdetailPicture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RoomdetailPicture */ "./components/RoomdetailPicture.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Calendar */ "./components/Calendar.tsx");
/* harmony import */ var _components_Calendar2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Calendar2 */ "./components/Calendar2.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Review */ "./components/Review.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/pages/roomDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var isServer = function isServer() {
  return false;
};

var initialHeight = 800;
var map;
var marker;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _router$query, _data$selectRoom4, _data$selectRoom5, _data$selectRoom6, _data$selectRoom6$use, _data$selectRoom7, _data$selectRoom8, _data$selectRoom9, _data$selectRoom10, _data$selectRoom11, _data$selectRoom12, _data$selectRoom13;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      startPage = _useState[0],
      setStartPge = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4),
      endPage = _useState2[0],
      setEndPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchword = _useState3[0],
      setSearchword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('체크인'),
      checkin = _useState4[0],
      setCheckin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('체크아웃'),
      checkout = _useState5[0],
      setCheckout = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useSelectRoomQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useSelectRoomQuery"])({
    variables: {
      id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id)
    }
  }),
      data = _useSelectRoomQuery.data,
      loading = _useSelectRoomQuery.loading;

  var initialReviews = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _data$selectRoom;

    var reviews = data === null || data === void 0 ? void 0 : (_data$selectRoom = data.selectRoom) === null || _data$selectRoom === void 0 ? void 0 : _data$selectRoom.reviews;
    return reviews;
  }, [data]);
  var customMarker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return "\n            <div class=\"roomdetail-custommarker\">\n                <div class=\"roomdetail-custommarker2\">\n                    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoiFf1b2LqQdkFWHTr1ASPdAfS6iXMh9rSYn5AAolenw1bP0K3\" class=\"roomdetail-custommarker3\" />\n                </div>\n            </div>\n        ";
  }, []);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialReviews || []),
      reviews = _useState6[0],
      setReviews = _useState6[1];

  var onChangeWord = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setSearchword(e.target.value);
  }, [searchword]);
  var onKeyPress = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (searchword === '') {
      var _data$selectRoom2;

      setReviews(data === null || data === void 0 ? void 0 : (_data$selectRoom2 = data.selectRoom) === null || _data$selectRoom2 === void 0 ? void 0 : _data$selectRoom2.reviews);
      return;
    }

    if (e.which == 13 && searchword !== '') {
      var _data$selectRoom3;

      var newReviews = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.clone(reviews);

      newReviews = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(data === null || data === void 0 ? void 0 : (_data$selectRoom3 = data.selectRoom) === null || _data$selectRoom3 === void 0 ? void 0 : _data$selectRoom3.reviews, function (o) {
        return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.includes(o.review, searchword);
      });
      setReviews(newReviews);
    }
  }, [searchword, reviews]);
  var pageLeft = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newStartPage = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.clone(startPage) - 5;
    var newEndPage = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.clone(endPage) - 5;
    setStartPge(newStartPage);
    setEndPage(newEndPage);
  }, [startPage, endPage]);
  var pageRight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newStartPage = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.clone(startPage) + 5;
    var newEndPage = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.clone(endPage) + 5;
    setStartPge(newStartPage);
    setEndPage(newEndPage);
  }, [startPage, endPage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var mapContainer = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    map = new kakao.maps.Map(mapContainer, options);
    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    marker = new kakao.maps.CustomOverlay({
      position: markerPosition,
      content: customMarker
    });
    marker.setMap(map);
  }, []);

  if (loading) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
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
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_components_RoomdetailPicture__WEBPACK_IMPORTED_MODULE_5__["default"], {
    room: data === null || data === void 0 ? void 0 : data.selectRoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom4 = data.selectRoom) === null || _data$selectRoom4 === void 0 ? void 0 : _data$selectRoom4.name), __jsx("div", {
    className: "roomdetail-container8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom5 = data.selectRoom) === null || _data$selectRoom5 === void 0 ? void 0 : _data$selectRoom5.city), __jsx("div", {
    className: "roomdetail-container9",
    style: {
      backgroundImage: "url('".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom6 = data.selectRoom) === null || _data$selectRoom6 === void 0 ? void 0 : (_data$selectRoom6$use = _data$selectRoom6.user) === null || _data$selectRoom6$use === void 0 ? void 0 : _data$selectRoom6$use.avatar, "')")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "\uC124\uBA85")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom7 = data.selectRoom) === null || _data$selectRoom7 === void 0 ? void 0 : _data$selectRoom7.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom8 = data.selectRoom) === null || _data$selectRoom8 === void 0 ? void 0 : _data$selectRoom8.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom9 = data.selectRoom) === null || _data$selectRoom9 === void 0 ? void 0 : _data$selectRoom9.description))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "\uC774 \uC124\uBA85\uC744 \uD55C\uAD6D\uC5B4\uB85C \uBC88\uC5ED\uD558\uAE30")), __jsx("div", {
    style: {
      marginTop: '5%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom10 = data.selectRoom) === null || _data$selectRoom10 === void 0 ? void 0 : _data$selectRoom10.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom11 = data.selectRoom) === null || _data$selectRoom11 === void 0 ? void 0 : _data$selectRoom11.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom12 = data.selectRoom) === null || _data$selectRoom12 === void 0 ? void 0 : _data$selectRoom12.description))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_components_Calendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    room: data === null || data === void 0 ? void 0 : data.selectRoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "\uD6C4\uAE30")), __jsx("div", {
    className: "roomdetail-container15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["StarFilled"], {
    style: {
      fontSize: '15px',
      color: '#008489',
      marginTop: '2%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("span", {
    style: {
      fontWeight: 'bold',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "4.85"), __jsx("span", {
    style: {
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "|"), __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "545 \uD6C4\uAE30")), __jsx("div", {
    className: "roomdetail-container16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "roomdetail-input",
    placeholder: "후기 검색",
    onChange: onChangeWord,
    onKeyPress: onKeyPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CloseOutlined"], {
    style: {
      fontSize: '20px',
      color: '#ebebeb'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["SearchOutlined"], {
    style: {
      fontSize: '20px',
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }))), __jsx("div", {
    className: "roomdetail-container19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, reviews.slice(startPage, endPage).map(function (review) {
    return __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: review.id,
      review: review,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    });
  }), __jsx("div", {
    className: "roomdetail-container20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, startPage !== 0 && __jsx("div", {
    className: "roomdetail-container21",
    onClick: pageLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LeftOutlined"], {
    style: {
      fontSize: '15px',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })), ((data === null || data === void 0 ? void 0 : (_data$selectRoom13 = data.selectRoom) === null || _data$selectRoom13 === void 0 ? void 0 : _data$selectRoom13.reviews.length) || 0) >= endPage && __jsx("div", {
    className: "roomdetail-container21",
    onClick: pageRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["RightOutlined"], {
    style: {
      fontSize: '15px',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }))))), __jsx("div", {
    className: "roomdetail-container22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "\uC9C0\uC5ED\uC815\uBCF4")), __jsx("div", {
    id: "map",
    className: "roomdetail-container23",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })))), __jsx("div", {
    className: "roomdetail-container26",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "\uC694\uAE08\uC744 \uD655\uC778\uD558\uB824\uBA74 \uB0A0\uC9DC\uB97C \uC785\uB825\uD558\uC138\uC694.")), __jsx("div", {
    className: "roomdetail-container28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["StarFilled"], {
    style: {
      fontSize: '10px',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), __jsx("span", {
    style: {
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "4.85"), __jsx("span", {
    style: {
      color: 'gray',
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "(\uD6C4\uAE30 231\uAC1C)"))), __jsx("div", {
    className: "roomdetail-container29",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "\uB0A0\uC9DC")), __jsx("div", {
    className: "roomdetail-container31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, checkin)), __jsx("div", {
    style: {
      alignItems: 'center',
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["ArrowRightOutlined"], {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, checkout))), __jsx("div", {
    className: "roomdetail-container30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "\uC778\uC6D0")), __jsx("div", {
    className: "roomdetail-container32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "\uAC8C\uC2A4\uD2B8 1\uBA85")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DownOutlined"], {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }))), __jsx("div", {
    className: "roomdetail-container33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "\uB0A0\uC9DC \uC785\uB825"))), __jsx("div", {
    className: "roomdetail-container34",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(_components_Calendar2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    room: data === null || data === void 0 ? void 0 : data.selectRoom,
    setCheckin: setCheckin,
    setCheckout: setCheckout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=roomDetail.js.ee3dae7e08a8aae4bd1e.hot-update.js.map