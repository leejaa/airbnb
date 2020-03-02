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
    if (Device.osName !== 'Android') {
      if (data?.selectRooms) {
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
      }
    }
  }, [data?.selectRooms]);

  if (Device.osName === 'Android') {
    return (
      <View style={styles.container}>
        {
          loading && (
            <View>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )
        }
        {
          <FlatList
            keyExtractor={item => item.id}
            data={data?.selectRooms}
            onEndReachedThreshold={1}
            onEndReached={() => {
              if (data?.selectRooms) {
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
              }
            }}
            renderItem={({ item }) => {
              return (
                <RoomCard key={item.id} room={item as any} navigation={navigation} />
              );
            }}
          />
        }
      </View>
    );
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            data?.selectRooms?.map(room => <RoomCard key={room.id} room={room as any} navigation={navigation} />)
          }
          {
            loading ? (
              <View>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              <TouchableOpacity onPress={ onScroll }>
                <AntDesign name="downcircleo" size={25} />
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>
    )
  }
};