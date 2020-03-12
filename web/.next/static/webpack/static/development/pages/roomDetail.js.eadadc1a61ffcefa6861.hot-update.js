webpackHotUpdate("static/development/pages/roomDetail.js",{

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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Review__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Review */ "./components/Review.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialReviews || []),
      reviews = _useState4[0],
      setReviews = _useState4[1];

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

      var newReviews = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.clone(reviews);

      newReviews = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.filter(data === null || data === void 0 ? void 0 : (_data$selectRoom3 = data.selectRoom) === null || _data$selectRoom3 === void 0 ? void 0 : _data$selectRoom3.reviews, function (o) {
        return lodash__WEBPACK_IMPORTED_MODULE_10___default.a.includes(o.review, searchword);
      });
      setReviews(newReviews);
    }
  }, [searchword, reviews]);
  var pageLeft = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newStartPage = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.clone(startPage) - 5;
    var newEndPage = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.clone(endPage) - 5;
    setStartPge(newStartPage);
    setEndPage(newEndPage);
  }, [startPage, endPage]);
  var pageRight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newStartPage = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.clone(startPage) + 5;
    var newEndPage = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.clone(endPage) + 5;
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
        lineNumber: 88
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
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_components_RoomdetailPicture__WEBPACK_IMPORTED_MODULE_5__["default"], {
    room: data === null || data === void 0 ? void 0 : data.selectRoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom4 = data.selectRoom) === null || _data$selectRoom4 === void 0 ? void 0 : _data$selectRoom4.name), __jsx("div", {
    className: "roomdetail-container8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom5 = data.selectRoom) === null || _data$selectRoom5 === void 0 ? void 0 : _data$selectRoom5.city), __jsx("div", {
    className: "roomdetail-container9",
    style: {
      backgroundImage: "url('".concat(data === null || data === void 0 ? void 0 : (_data$selectRoom6 = data.selectRoom) === null || _data$selectRoom6 === void 0 ? void 0 : (_data$selectRoom6$use = _data$selectRoom6.user) === null || _data$selectRoom6$use === void 0 ? void 0 : _data$selectRoom6$use.avatar, "')")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\uC124\uBA85")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom7 = data.selectRoom) === null || _data$selectRoom7 === void 0 ? void 0 : _data$selectRoom7.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom8 = data.selectRoom) === null || _data$selectRoom8 === void 0 ? void 0 : _data$selectRoom8.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom9 = data.selectRoom) === null || _data$selectRoom9 === void 0 ? void 0 : _data$selectRoom9.description))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "\uC774 \uC124\uBA85\uC744 \uD55C\uAD6D\uC5B4\uB85C \uBC88\uC5ED\uD558\uAE30")), __jsx("div", {
    style: {
      marginTop: '5%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom10 = data.selectRoom) === null || _data$selectRoom10 === void 0 ? void 0 : _data$selectRoom10.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom11 = data.selectRoom) === null || _data$selectRoom11 === void 0 ? void 0 : _data$selectRoom11.description)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: "lighter"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectRoom12 = data.selectRoom) === null || _data$selectRoom12 === void 0 ? void 0 : _data$selectRoom12.description))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_components_Calendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    room: data === null || data === void 0 ? void 0 : data.selectRoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\uD6C4\uAE30")), __jsx("div", {
    className: "roomdetail-container15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarFilled"], {
    style: {
      fontSize: '15px',
      color: '#008489',
      marginTop: '2%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("span", {
    style: {
      fontWeight: 'bold',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "4.85"), __jsx("span", {
    style: {
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "|"), __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "545 \uD6C4\uAE30")), __jsx("div", {
    className: "roomdetail-container16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
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
      lineNumber: 151
    },
    __self: this
  }), __jsx("div", {
    className: "roomdetail-container18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["CloseOutlined"], {
    style: {
      fontSize: '20px',
      color: '#ebebeb'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx("div", {
    className: "roomdetail-container17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SearchOutlined"], {
    style: {
      fontSize: '20px',
      color: 'gray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))), __jsx("div", {
    className: "roomdetail-container19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, reviews.slice(startPage, endPage).map(function (review) {
    return __jsx(_components_Review__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: review.id,
      review: review,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    });
  }), __jsx("div", {
    className: "roomdetail-container20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, startPage !== 0 && __jsx("div", {
    className: "roomdetail-container21",
    onClick: pageLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LeftOutlined"], {
    style: {
      fontSize: '15px',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), ((data === null || data === void 0 ? void 0 : (_data$selectRoom13 = data.selectRoom) === null || _data$selectRoom13 === void 0 ? void 0 : _data$selectRoom13.reviews.length) || 0) >= endPage && __jsx("div", {
    className: "roomdetail-container21",
    onClick: pageRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["RightOutlined"], {
    style: {
      fontSize: '15px',
      color: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }))))), __jsx("div", {
    className: "roomdetail-container22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("span", {
    className: "roomdetail-span4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "\uC9C0\uC5ED\uC815\uBCF4")), __jsx("div", {
    id: "map",
    className: "roomdetail-container23",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("div", {
    className: "roomdetail-container24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=roomDetail.js.eadadc1a61ffcefa6861.hot-update.js.map