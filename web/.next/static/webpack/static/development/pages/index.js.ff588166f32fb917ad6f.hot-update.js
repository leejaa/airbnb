webpackHotUpdate("static/development/pages/index.js",{

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

  var leftArrow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return __jsx("div", {
      style: {
        borderWidth: 2,
        borderColor: 'black',
        zIndex: 1,
        position: 'absolute',
        left: 3,
        top: 110
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "left");
  }, []);
  var rightArrow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return __jsx("div", {
      style: {
        borderWidth: 2,
        borderColor: 'black',
        zIndex: 1,
        position: 'absolute',
        right: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "right");
  }, []);
  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    additionalTransfrom: 0,
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
    customLeftArrow: leftArrow,
    customRightArrow: rightArrow,
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
      lineNumber: 16
    },
    __self: this
  }, data === null || data === void 0 ? void 0 : (_data$selectTopRooms = data.selectTopRooms) === null || _data$selectTopRooms === void 0 ? void 0 : _data$selectTopRooms.map(function (item) {
    return __jsx("div", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_RoomCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      room: item,
      width: "full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomSlide);

/***/ })

})
//# sourceMappingURL=index.js.ff588166f32fb917ad6f.hot-update.js.map