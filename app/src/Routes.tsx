import React, { useEffect, useReducer } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import * as SecureStore from "expo-secure-store";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import decode from "jwt-decode";
import * as Network from 'expo-network';
import publicIP from 'react-native-public-ip';
import { Home } from "./screens/Home";
import { Detail } from "./screens/Detail";
import Header from './components/header'
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { AuthLoading } from "./screens/AuthLoading";
import { UserContext, AuthPayload } from "./UserContext";
import { client } from "./lib/apolloClient";
import { homeReducer, initialState } from "./reducer/HomeReducer";
import { SECURESTORAGE_JWT } from "./constants";
import { AsyncStorage, View, Dimensions } from "react-native";
import { useMutation } from "./utils/useMutation";
import { RoomDetail } from "./screens/RoomDetail";
import { Home2 } from "./screens/Home2";
const { height: FULL_HEIGHT, width: FULL_WIDTH } = Dimensions.get('window');

const AppStack = createStackNavigator({
    // Home: {
    //     screen: Home,
    //     navigationOptions: () => ({
    //         headerTitle: () => <Header />,
    //         headerStyle: {
    //             height: 100
    //         }
    //     }),
    // },
    Home2: {
        screen: Home2,
        navigationOptions: () => ({
            headerTitle: () => <View />,
            headerStyle: {
                height: FULL_HEIGHT / 10
            }
        }),
    },
    Detail: {
        screen: Detail,
        navigationOptions: () => ({
            headerTitle: () => <Header />,
            headerStyle: {
                height: 100
            }
        }),
    },
    RoomDetail: {
        screen: RoomDetail,
        navigationOptions: () => ({
            header: null
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
    const [state, dispatch] = useReducer(homeReducer, initialState);
    const initialAction = async () => {
        // const ipAddress = await Network.getIpAddressAsync();
        // console.log('ipAddress', ipAddress);
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
        <ApolloProvider client={client}>
            <UserContext.Provider value={[state, dispatch]}>
                <AppContainer />
            </UserContext.Provider>
        </ApolloProvider>
    );
};