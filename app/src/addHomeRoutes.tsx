import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Text, Button, View } from "react-native";
import { HomeStackNavProps, HomeParamList } from "./HomeStack";
import { StackNavigationState, TypedNavigator } from "@react-navigation/native";
import { Detail } from "./screens/Detail";
import { RoomDetail } from "./screens/RoomDetail";
import { Reviews } from "./screens/Reviews";
import { HeaderRight, HeaderLeft } from "./components/Headers";

export const addHomeRoutes = (
  Stack: TypedNavigator<
    HomeParamList,
    StackNavigationState,
    any,
    any,
    any
  >,
  navigation: any
) => {
  return (
    <>
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
      <Stack.Screen
        name="RoomDetail"
        component={RoomDetail}
        options={{
          headers: () => null,
        }}
      />
      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerTitle: "",
          headerRight: () => HeaderRight({navigation}),
          headerLeft: () => HeaderLeft({navigation})
        }}
      />
    </>
  );
};
