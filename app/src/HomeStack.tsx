import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator, StackNavigationProp, CardStyleInterpolators } from "@react-navigation/stack";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "./AuthProvider";
import { addHomeRoutes } from "./addHomeRoutes";
import { RouteProp } from "@react-navigation/native";
import { Home } from "./screens/Home";

interface HomeStackProps {
  navigation: StackNavigationProp<HomeParamList>;
  route: any;
}

export type HomeParamList = {
  Home: undefined,
  Detail: undefined,
  RoomDetail: undefined,
  Reviews: undefined,
  FindReviews: undefined,
  routes: any,
  FindMaps: undefined,
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T> | any;
};

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({navigation, route}) => {
  if ( route.state && route.state.index > 0 ) {
    navigation.setOptions({tabBarVisible: false} as any);
  }
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
      }}
      initialRouteName="FindMaps"
    >
      {addHomeRoutes(Stack, navigation, route)}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  );
};
