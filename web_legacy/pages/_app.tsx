import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
import { fire } from "../firebase";

class MyApp extends App<any> {
  constructor(props) {
    super(props);
    fire();
  }
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);