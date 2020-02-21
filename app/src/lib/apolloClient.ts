import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from "apollo-link";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { setContext } from "apollo-link-context";
import jwtDecode from "jwt-decode";
import * as Device from 'expo-device';
import { IS_PRODUCTION, API_DEVELOPMENT, API_PRODUCTION } from "../../env";

const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then(operation => {
          
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const authLink = setContext((_request, { headers }) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4MjE4MTE0OCwiZXhwIjoxNTgzOTA5MTQ4fQ.BP14nc4IbJmtPgIu39pnGSjtzgId2WqRhtZtKDX7b-E';
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    }
  };
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: "accessToken",
      isTokenValidOrUndefined: () => {
        return true;
      },
      fetchAccessToken: () => {
        return fetch(`${IS_PRODUCTION ? API_PRODUCTION : API_DEVELOPMENT}/refresh_token`, {
          method: "POST",
          credentials: "include"
        });
      },
      handleFetch: accessToken => {
      },
      handleError: err => {
        console.warn("Your refresh token is invalid. Try to relogin");
        console.error(err);
      }
    }),
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
    authLink,
    requestLink,
    new HttpLink({
      uri: `${IS_PRODUCTION ? API_PRODUCTION : API_DEVELOPMENT}/graphql`,
      credentials: "include"
    })
  ]),
  cache
});