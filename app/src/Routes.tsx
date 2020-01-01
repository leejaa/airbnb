import React, { useState, useEffect, useReducer } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Home } from "./screens/Home";
import Header from './components/header'
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { AuthLoading } from "./screens/AuthLoading";
import { UserContext, AuthPayload } from "./UserContext";
import { SECURESTORAGE_JWT } from "./constants";
import decode from "jwt-decode";
import { client } from "./lib/apolloClient";
import { SearchBar } from "react-native-elements";
import { homeReducer, initialState } from "./reducer/HomeReducer";

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            headerTitle: () => <Header />
        }),
    }
});
const AuthStack = createSwitchNavigator(
    { Login, Register },
    {
        initialRouteName: "Register"
    }
);

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "AuthLoading"
        }
    )
);

interface Props { }

const persistenceKey = "persistenceKey1";
const persistNavigationState = async navState => {
    try {
        await SecureStore.setItemAsync(persistenceKey, JSON.stringify(navState));
    } catch (err) {
        // handle the error according to your needs
    }
};
const loadNavigationState = async () => {
    const jsonString = await SecureStore.getItemAsync(persistenceKey);
    return JSON.parse(jsonString);
};

function getPersistenceFunctions() {
    return __DEV__
        ? {
            persistNavigationState,
            loadNavigationState
        }
        : undefined;
}

export const Routes: React.FC<Props> = () => {
    const [ state, dispatch ] = useReducer( homeReducer, initialState );

    useEffect(() => {

    }, []);

    return (
        <ApolloProvider client={client}>
            <UserContext.Provider value={ [ state, dispatch ] }>
                <AppContainer />
            </UserContext.Provider>
        </ApolloProvider>
    );
};