import React, { useState, useContext } from "react";
import { Text, View, KeyboardAvoidingView, AsyncStorage } from "react-native";
import { NavigationSwitchScreenProps, SafeAreaView } from "react-navigation";
import { Headline, Button, TextInput } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useMutation } from "../utils/useMutation";
import { UserContext } from "../UserContext";
import { SECURESTORAGE_JWT } from "../constants";
import { useSelectRoomsQuery } from "../../generated/graphql";

export const test: React.FC<NavigationSwitchScreenProps> = ({
  navigation
}) => {
    const { data } = useSelectRoomsQuery({
        variables: {
            skip: 0,
            take: 12
        }
    });
    console.log('data', JSON.stringify(data));
  return (
    <View>
        <Text>test</Text>
    </View>
  );
};