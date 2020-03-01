import React, { useState, useReducer, useEffect, createContext } from "react";
import { AsyncStorage } from "react-native";
import publicIP from 'react-native-public-ip';
import { homeReducer, initialState } from "./reducer/HomeReducer";
import { useApolloClient } from "@apollo/react-hooks";

type User = null | { username: string };

export const AuthContext = createContext<any>(null);

interface AuthProviderProps { }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  const initialAction = async () => {
    publicIP()
      .then(ip => {
        console.log(ip);
        // '47.122.71.234'
      })
      .catch(error => {
        console.log(error);
        // 'Unable to get IP address.'
      });
  };
  useEffect(() => {
    initialAction();
  }, []);
  return (
    <AuthContext.Provider
      value={[state, dispatch]}
    >
      {children}
    </AuthContext.Provider>
  );
};
