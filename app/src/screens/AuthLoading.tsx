import React, { useEffect, useContext } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationSwitchScreenProps } from "react-navigation";
import { ActivityIndicator } from "react-native-paper";
import _ from "lodash";
import { SECURESTORAGE_JWT } from "../constants";
import { UserContext } from "../UserContext";
import decode from "jwt-decode";

interface Props { }

export const AuthLoading: React.FC<Props & NavigationSwitchScreenProps> = ({
  navigation
}) => {
  const [state, dispatch] = useContext(UserContext);
  const initialAction = async () => {
    // const token = await AsyncStorage.getItem('token');
    // const user = await SecureStore.getItemAsync(token);
    // dispatch({ type: 'setUser', value: JSON.parse(user) });
    // if ( _.isEmpty(user) ) {
    //   navigation.navigate("Login");
    // } else {
    //   navigation.navigate("Home");
    // }
    navigation.navigate("RoomDetail")
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