import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { HomeStackNavProps, HomeParamList } from "./HomeStack";
import { StackNavigationState, TypedNavigator } from "@react-navigation/native";
import { Detail } from "./screens/Detail";
import { RoomDetail } from "./screens/RoomDetail";

export const addHomeRoutes = (
  Stack: TypedNavigator<
    HomeParamList,
    StackNavigationState,
    any,
    any,
    any
  >
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
      />
    </>
  );
};
