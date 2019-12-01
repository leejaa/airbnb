import React, { useContext } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import SecureStore from "expo-secure-store";
import { UserContext } from "../UserContext";
import { Button } from "react-native-paper";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { useFetch } from "../utils/useFetch";
import { useSelectRoomsQuery } from "../../generated/graphql";

export const Home: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const { data, loading } = useSelectRoomsQuery();
  console.log('data', JSON.stringify(data));
  return (
    <View>
        <Text>홈</Text>
    </View>
  );
};