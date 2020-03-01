import React, { useState, useEffect, useContext } from "react";
import {
    createStackNavigator,
    StackNavigationProp
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator, AsyncStorage } from "react-native";
import * as Device from 'expo-device';
import gql from 'graphql-tag';
import { Center } from "./screens/Center";
import { AuthContext } from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack";
import { useApolloClient } from "@apollo/react-hooks";

interface RoutesProps { }

export const Routes: React.FC<RoutesProps> = ({ }) => {
    const client = useApolloClient();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Device.osName !== 'Android') {
            client.writeFragment({
                id: '1',
                fragment: gql`
                    fragment me on Me {
                      me
                    }
                  `,
                data: {
                    me: {
                        id: 1,
                        name: 'Groopster',
                        email: 'Groopster@hanmail.net'
                    },
                    __typename: 'me'
                },
            });
        }
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }

    return (
        <NavigationContainer>
            {true ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
    );
};
