import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Text, Button, View } from "react-native";
import { HomeStackNavProps, HomeParamList } from "./HomeStack";
import { StackNavigationState, TypedNavigator } from "@react-navigation/native";
import { Detail } from "./screens/Detail";
import { RoomDetail } from "./screens/RoomDetail";
import { Reviews } from "./screens/Reviews";
import { HeaderRight, HeaderLeft } from "./components/Headers";
import { FindReviews } from "./screens/FindReviews";
import { FindMaps } from "./screens/FindMaps";

export const addHomeRoutes = (
  Stack: TypedNavigator<
    HomeParamList,
    StackNavigationState,
    any,
    any,
    any
  >,
  navigation: any,
  route: any
) => {
  return (
    <>
      <Stack.Screen
        name="RoomDetail"
        component={RoomDetail}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerTitle: "",
          headerRight: () => HeaderRight({ navigation, route }),
          headerLeft: () => HeaderLeft({ navigation, route })
        }}
      />
      <Stack.Screen
        name="FindReviews"
        component={FindReviews}
        options={{
          headerTitle: ""
        }}
      />
      <Stack.Screen
        name="FindMaps"
        component={FindMaps}
        options={{
          header: () => null,
        }}
      />
    </>
  );
};
