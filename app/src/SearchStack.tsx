import React, { useState } from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { Button, FlatList, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";

interface SearchStackProps {}

export type SearchParamList = {
  Search: undefined;
};

export type SearchStackNavProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>;
  route: RouteProp<SearchParamList, T>;
};


const Stack = createStackNavigator<SearchParamList>();

function Search({ navigation }) {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
