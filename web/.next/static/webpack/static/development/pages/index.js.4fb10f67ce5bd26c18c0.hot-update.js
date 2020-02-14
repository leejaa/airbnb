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
  var room = _ref.room;

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
    className: "w-1/4 mb-10 px-2 overflow-hidden",
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
      lineNumber: 31
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    ref: carouselRef,
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, room === null || room === void 0 ? void 0 : room.photoConnection.map(function (photo, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "w-full h-64 bg-cover bg-center rounded-lg mb-2 ",
      style: {
        backgroundImage: "url(\"".concat(room.photoConnection[index].file, "\")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
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
      lineNumber: 44
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
      lineNumber: 53
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
      lineNumber: 53
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
      lineNumber: 55
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
      lineNumber: 65
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
      lineNumber: 65
    },
    __self: this
  }))), __jsx("div", {
    className: "flex justify-between mb-2 truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "w-4/5 overflow-hidden flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, room.name, __jsx("span", {
    className: "mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\uC9D1\uC8FC\uC778"), __jsx("span", {
    className: "text-sm text-gray-600 block truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "".concat(room.city, " ").concat(room.address))), __jsx("span", {
    className: "text-sm flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-star text-red-500 text-xs mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), " ", room.price)), __jsx("span", {
    className: "text-black w-11/12 block truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, room.description));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomCard);

/***/ }),

/***/ "./components/RoomList.tsx":
/*!*********************************!*\
  !*** ./components/RoomList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RoomCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoomCard */ "./components/RoomCard.tsx");
/* harmony import */ var _RoomSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoomSlide */ "./components/RoomSlide.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");


var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/RoomList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var RoomList = function RoomList(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var _useSelectRoomsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useSelectRoomsQuery"])({
    variables: {
      skip: 0,
      take: 12
    },
    notifyOnNetworkStatusChange: true
  }),
      data = _useSelectRoomsQuery.data,
      loading = _useSelectRoomsQuery.loading,
      fetchMore = _useSelectRoomsQuery.fetchMore,
      networkStatus = _useSelectRoomsQuery.networkStatus,
      refetch = _useSelectRoomsQuery.refetch;

  var _useSelectTopRoomsQue = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useSelectTopRoomsQuery"])(),
      data2 = _useSelectTopRoomsQue.data;

  if (!data || !data2) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "\uB85C\uB529\uC911...");
  }

  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var _document$documentEle, _document$documentEle2;

    if (window.scrollY + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.clientHeight) > ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.scrollHeight) - 10) {
      fetchMore({
        variables: {
          skip: data.selectRooms.length,
          take: data.selectRooms.length + 4
        },
        updateQuery: function updateQuery(pv, _ref2) {
          var fetchMoreResult = _ref2.fetchMoreResult;

          if (!fetchMoreResult) {
            return pv;
          }

          return {
            // __typename: "Room",
            selectRooms: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pv.selectRooms), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.selectRooms))
          };
        }
      });
    }
  }, [data.selectRooms.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [data.selectRooms.length]);
  return __jsx("div", {
    className: "container mx-auto pb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "rounded-xl -mx-40 h-50vh mb-24 bg-cover bg-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "mx-5 my-16 mb-10 mt-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_RoomSlide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, data.selectRooms.map(function (room, i) {
    return __jsx(_RoomCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      room: room,
      key: i,
      width: "1/4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomList);

/***/ }),

/***/ "./components/RoomSlide.tsx":
/*!**********************************!*\
  !*** ./components/RoomSlide.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var _RoomCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoomCard */ "./components/RoomCard.tsx");

var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/RoomSlide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var RoomSlide = function RoomSlide(_ref) {
  var _data$selectTopRooms;

  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useSelectTopRoomsQue = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useSelectTopRoomsQuery"])(),
      data = _useSelectTopRoomsQue.data,
      loading = _useSelectTopRoomsQue.loading;

  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "container-with-dots",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    },
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectTopRooms = data.selectTopRooms) === null || _data$selectTopRooms === void 0 ? void 0 : _data$selectTopRooms.map(function (item) {
    return __jsx("div", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(_RoomCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      room: item,
      width: "full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomSlide);

/***/ })

})
//# sourceMappingURL=index.js.4fb10f67ce5bd26c18c0.hot-update.js.map