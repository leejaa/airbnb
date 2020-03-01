import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "./AuthProvider";
import { addHomeRoutes } from "./addHomeRoutes";
import { RouteProp } from "@react-navigation/native";
import { Home } from "./screens/Home";

interface HomeStackProps {}

export type HomeParamList = {
  Home: undefined,
  Detail: undefined,
  RoomDetail: undefined,
  routes: any
  
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T> | any;
};

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Home"
    >
      {addHomeRoutes(Stack)}
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};
