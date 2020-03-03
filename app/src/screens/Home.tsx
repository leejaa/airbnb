import React, { useState, useContext, useEffect, useMemo, useCallback } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Button, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import _ from 'lodash';
import * as Device from 'expo-device';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { useSelectRoomsQuery, Room } from "../../generated/graphql";
import { RoomCard } from "../components/RoomCard";
import { UserContext } from "../UserContext";
import { HomeStackNavProps } from "../HomeStack";
import { AuthContext } from "../AuthProvider";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20
  }
});

export function Home({ navigation }: HomeStackNavProps<"Home">) {
  const { data, loading, fetchMore, networkStatus, refetch } = useSelectRoomsQuery({
    variables: { skip: 0, take: 12 },
    notifyOnNetworkStatusChange: true,
  });

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  useEffect(() => {
    if (Device.osName !== 'Android') {
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [data?.selectRooms]);

  // if ( loading ) {
  //   return (
  //     <View>
  //       <Text>로딩중...</Text>
  //     </View>
  //   );
  // }
  const onScroll = useCallback(() => {
    // if (Device.osName !== 'Android' && (window.scrollY + document.documentElement?.clientHeight > document.documentElement?.scrollHeight - 1)) {
    fetchMore({
      variables: {
        skip: 0,
        take: data?.selectRooms.length + 4
      },
      updateQuery: (pv, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return pv;
        }
        return {
          __typename: "Room",
          selectRooms: [
            ...fetchMoreResult.selectRooms
          ]
        }
      }
    });
  }, [data?.selectRooms]);

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          onScroll();
        }
      }}
      scrollEventThrottle={100}
    >
      <View style={styles.container}>
        {
          data?.selectRooms?.map(room => <RoomCard key={room.id} room={room as any} navigation={navigation} />)
        }
        {
          loading && (
            <View>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )
        }
      </View>
    </ScrollView>
  )
};