webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RoomList.tsx":
/*!*********************************!*\
  !*** ./components/RoomList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RoomCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoomCard */ "./components/RoomCard.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");



var _jsxFileName = "/Users/leejahun/practice/airbnb/web/components/RoomList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var RoomList = function RoomList(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

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

  if (!data) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "\uB85C\uB529\uC911...");
  }

  console.log('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data));
  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 10) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [data.selectRooms.length]);
  return __jsx("div", {
    className: "container mx-auto pb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "rounded-xl -mx-40 h-50vh mb-24 bg-cover bg-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap mx-5 my-16 mb-10 mt-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, data.selectRooms.map(function (room, i) {
    return __jsx(_RoomCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      room: room,
      key: room.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomList);

/***/ })

})
//# sourceMappingURL=index.js.5de890de4c767c63092c.hot-update.js.map