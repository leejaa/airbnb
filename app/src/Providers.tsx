import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";
import { client } from "./lib/apolloClient";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ApolloProvider>
  );
};
