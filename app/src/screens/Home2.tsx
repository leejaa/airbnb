import React, { useState, useContext, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Button } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import _ from 'lodash';
import { useSelectRoomsQuery, Room } from "../../generated/graphql";
import { RoomCard } from "../components/RoomCard";
import { UserContext } from "../UserContext";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20
  }
});

export const Home2: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const [state, dispatch] = useContext(UserContext);
  const { data, loading, fetchMore, networkStatus, refetch } = useSelectRoomsQuery({
    variables: { skip: 0, take: 12 },
    notifyOnNetworkStatusChange: true,
  });
  // const selectRooms = useMemo(() => data?.selectRooms, [ data ]);
  // useEffect(() => {
  //   if ( data?.selectRooms ) {
  //     dispatch({ type: 'setSelectRooms', value: selectRooms });
  //   }
  // }, [ data ]);
  if ( loading ) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={ styles.container }>
        {
          data.selectRooms?.map( room => <RoomCard key={ room.id } room={ room as any } /> )
        }
      </View>
    </ScrollView>
  );
};