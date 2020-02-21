import React, { useEffect, useContext } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationSwitchScreenProps } from "react-navigation";
import { ActivityIndicator } from "react-native-paper";
import _ from "lodash";
import gql from 'graphql-tag';
import { SECURESTORAGE_JWT } from "../constants";
import { UserContext } from "../UserContext";
import decode from "jwt-decode";
import { useApolloClient } from "@apollo/react-hooks";

interface Props { }

export const AuthLoading: React.FC<Props & NavigationSwitchScreenProps> = ({
  navigation
}) => {
  const [state, dispatch] = useContext(UserContext);
  const client = useApolloClient();
  const initialAction = async () => {
    // clinet.writeData({
    //   data: {
    //     me: {
    //       id: 1,
    //       name: 'Groopster',
    //       email: 'Groopster@hanmail.net'
    //     }
    //   }
    // });
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
    const token = await AsyncStorage.getItem('token');
    if ( _.isEmpty(token) ) {
      navigation.navigate("Home2");
      return false;
    }
    const user = await SecureStore.getItemAsync(token);
    if ( _.isEmpty(user) ) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("Home2");
    }
  }
  useEffect(() => {
    initialAction();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};