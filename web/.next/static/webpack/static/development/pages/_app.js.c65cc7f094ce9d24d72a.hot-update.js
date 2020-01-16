webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/apollo.tsx":
/*!************************!*\
  !*** ./lib/apollo.tsx ***!
  \************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var apollo_link_token_refresh__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! apollo-link-token-refresh */ "./node_modules/apollo-link-token-refresh/lib/tokenRefreshLink.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _accessToken__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./accessToken */ "./lib/accessToken.ts");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../env */ "./env.ts");











var _jsxFileName = "/Users/leejahun/practice/airbnb/web/lib/apollo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }
















var isServer = function isServer() {
  return false;
};
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */


function withApollo(PageComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr;

  var WithApollo = function WithApollo(_ref2) {
    var apolloClient = _ref2.apolloClient,
        serverAccessToken = _ref2.serverAccessToken,
        apolloState = _ref2.apolloState,
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref2, ["apolloClient", "serverAccessToken", "apolloState"]);

    if (!isServer() && !Object(_accessToken__WEBPACK_IMPORTED_MODULE_20__["getAccessToken"])()) {
      console.log('1111');
      Object(_accessToken__WEBPACK_IMPORTED_MODULE_20__["setAccessToken"])(serverAccessToken);
    }

    var client = apolloClient || initApolloClient(apolloState);
    return __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, pageProps, {
      apolloClient: client,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  };

  if (true) {
    // Find correct display name
    var displayName = PageComponent.displayName || PageComponent.name || "Component"; // Warn if old way of installing apollo is used

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    } // Set correct display name for devtools


    WithApollo.displayName = "withApollo(".concat(displayName, ")");
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = function _callee(ctx) {
      var AppTree, _ctx$ctx, req, res, serverAccessToken, cookies, response, data, apolloClient, pageProps, _ref3, getDataFromTree, apolloState;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              AppTree = ctx.AppTree, _ctx$ctx = ctx.ctx, req = _ctx$ctx.req, res = _ctx$ctx.res;
              serverAccessToken = "";

              if (!isServer()) {
                _context.next = 12;
                break;
              }

              cookies = cookie__WEBPACK_IMPORTED_MODULE_23___default.a.parse("".concat(req.headers.cookie));

              if (!cookies.jid) {
                _context.next = 12;
                break;
              }

              _context.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17___default()(_env__WEBPACK_IMPORTED_MODULE_24__["IS_PRODUCTION"] ? "".concat(_env__WEBPACK_IMPORTED_MODULE_24__["API_PRODUCTION"], "/refresh_token") : "".concat(_env__WEBPACK_IMPORTED_MODULE_24__["API_DEVELOPMENT"], "/refresh_token"), {
                method: "POST",
                credentials: "include",
                headers: {
                  cookie: "jid=" + cookies.jid
                }
              }));

            case 7:
              response = _context.sent;
              _context.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(response.json());

            case 10:
              data = _context.sent;
              serverAccessToken = data.accessToken;

            case 12:
              // Run all GraphQL queries in the component tree
              // and extract the resulting data
              apolloClient = ctx.ctx.apolloClient = initApolloClient({}, serverAccessToken);

              if (!PageComponent.getInitialProps) {
                _context.next = 19;
                break;
              }

              _context.next = 16;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(PageComponent.getInitialProps(ctx));

            case 16:
              _context.t0 = _context.sent;
              _context.next = 20;
              break;

            case 19:
              _context.t0 = {};

            case 20:
              pageProps = _context.t0;

              if (true) {
                _context.next = 38;
                break;
              }

              if (!(res && res.finished)) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return", {});

            case 24:
              if (!ssr) {
                _context.next = 37;
                break;
              }

              _context.prev = 25;
              _context.next = 28;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js")));

            case 28:
              _ref3 = _context.sent;
              getDataFromTree = _ref3.getDataFromTree;
              _context.next = 32;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(getDataFromTree(__jsx(AppTree, {
                pageProps: _objectSpread({}, pageProps, {
                  apolloClient: apolloClient
                }),
                apolloClient: apolloClient,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                },
                __self: this
              })));

            case 32:
              _context.next = 37;
              break;

            case 34:
              _context.prev = 34;
              _context.t1 = _context["catch"](25);
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error("Error while running `getDataFromTree`", _context.t1);

            case 37:
              // getDataFromTree does not call componentWillUnmount
              // head side effect therefore need to be cleared manually
              next_head__WEBPACK_IMPORTED_MODULE_12___default.a.rewind();

            case 38:
              // Extract query data from the Apollo store
              apolloState = apolloClient.cache.extract();
              return _context.abrupt("return", _objectSpread({}, pageProps, {
                apolloState: apolloState,
                serverAccessToken: serverAccessToken
              }));

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[25, 34]]);
    };
  }

  return WithApollo;
}
var apolloClient = null;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

function initApolloClient(initState, serverAccessToken) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer()) {
    return createApolloClient(initState, serverAccessToken);
  } // Reuse client on the client-side


  if (!apolloClient) {
    // setAccessToken(cookie.parse(document.cookie).test);
    apolloClient = createApolloClient(initState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var serverAccessToken = arguments.length > 1 ? arguments[1] : undefined;
  var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_15__["HttpLink"]({
    uri: _env__WEBPACK_IMPORTED_MODULE_24__["IS_PRODUCTION"] ? "".concat(_env__WEBPACK_IMPORTED_MODULE_24__["API_PRODUCTION"], "/graphql") : "".concat(_env__WEBPACK_IMPORTED_MODULE_24__["API_DEVELOPMENT"], "/graphql"),
    credentials: "include",
    fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17___default.a
  });
  var refreshLink = new apollo_link_token_refresh__WEBPACK_IMPORTED_MODULE_18__["TokenRefreshLink"]({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: function isTokenValidOrUndefined() {
      var token = Object(_accessToken__WEBPACK_IMPORTED_MODULE_20__["getAccessToken"])();

      if (!token) {
        return true;
      }

      try {
        var _jwtDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_19___default()(token),
            exp = _jwtDecode.exp;

        if (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()() >= exp * 1000) {
          return false;
        } else {
          return true;
        }
      } catch (_unused) {
        return false;
      }
    },
    fetchAccessToken: function fetchAccessToken() {
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17___default()(_env__WEBPACK_IMPORTED_MODULE_24__["IS_PRODUCTION"] ? "".concat(_env__WEBPACK_IMPORTED_MODULE_24__["API_PRODUCTION"], "/refresh_token") : "".concat(_env__WEBPACK_IMPORTED_MODULE_24__["API_DEVELOPMENT"], "/refresh_token"), {
        method: "POST",
        credentials: "include"
      });
    },
    handleFetch: function handleFetch(accessToken) {
      Object(_accessToken__WEBPACK_IMPORTED_MODULE_20__["setAccessToken"])(accessToken);
    },
    handleError: function handleError(err) {
      console.warn("Your refresh token is invalid. Try to relogin");
      console.error(err);
    }
  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_16__["setContext"])(function (_request, _ref4) {
    var headers = _ref4.headers;
    var token = isServer() ? serverAccessToken : Object(_accessToken__WEBPACK_IMPORTED_MODULE_20__["getAccessToken"])();
    return {
      headers: _objectSpread({}, headers, {
        authorization: token ? "bearer ".concat(token) : ""
      })
    };
  });
  var errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_21__["onError"])(function (_ref5) {
    var graphQLErrors = _ref5.graphQLErrors,
        networkError = _ref5.networkError;
    console.log(graphQLErrors);
    console.log(networkError);
  });
  return new apollo_client__WEBPACK_IMPORTED_MODULE_13__["ApolloClient"]({
    ssrMode: false,
    // Disables forceFetch on the server (so queries are only run once)
    link: apollo_link__WEBPACK_IMPORTED_MODULE_22__["ApolloLink"].from([refreshLink, authLink, errorLink, httpLink]),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__["InMemoryCache"]().restore(initialState),
    connectToDevTools: true
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.c65cc7f094ce9d24d72a.hot-update.js.map