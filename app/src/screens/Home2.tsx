import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Button } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import _ from 'lodash';
import { useSelectRoomsQuery, Room } from "../../generated/graphql";
import { RoomCard } from "../components/RoomCard";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20
  }
});

export const Home2: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const { data, loading, fetchMore, networkStatus, refetch } = useSelectRoomsQuery({
    variables: { skip: 0, take: 12 },
    notifyOnNetworkStatusChange: true,
  });
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
          data?.selectRooms.map( room => <RoomCard key={ room.id } room={ room as any } /> )
        }
      </View>
    </ScrollView>
  );
};