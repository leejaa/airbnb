import React, { useState, useContext, useCallback, useMemo } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Modal, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import _ from 'lodash';
import * as Device from 'expo-device';
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";
import { Avatar, Divider } from "react-native-elements";
import { useSelectRoomQuery } from "../../generated/graphql";
import moment from "moment";
import { HomeStackNavProps } from "../HomeStack";
import { Review } from "../components/Review";
import { AuthContext } from "../AuthProvider";
const { height: FULL_HEIGHT, width: FULL_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: FULL_HEIGHT * 0.1,
  },
  container2: {
    width: '100%',
    height: '100%',
    fontSize: 35,
    color: '#18A776',
  }
});

export function FindReviews({ route, navigation }: HomeStackNavProps<"FindReviews">) {
  
  const [ state, dispatch ] = useContext(AuthContext);
  const [ searchword, setSearchword ] = useState('');
  const [ changedword, setChangedword ] = useState('');
  const { data, loading } = useSelectRoomQuery({
    variables: {
      id: parseInt(state?.roomId)
    }
  });
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const onChangeText = useCallback((value) => {
    setChangedword(value);
  }, [changedword]);
  const onEndEditing = useCallback(() => {
    const newChangedword = _.clone(changedword);
    setSearchword(newChangedword);
  }, [changedword]);
  const reviews = useMemo(() => {
    let reviews = [];
    if ( searchword !== '' ) {
      reviews = _.filter( data?.selectRoom?.reviews, (o) => {
        return _.includes(o.review, searchword);
      });
    }
    return reviews;
  }, [data, searchword]);
  return (
    <ScrollView>
      <View style={ styles.container1 }>
        <TextInput
          style={ styles.container2 }
          placeholder="후기검색"
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onBlur={onEndEditing}
        >
        </TextInput>
      </View>
      <View style={ { marginTop: 20 } }>
        {
          reviews.map(review => <Review key={review.id} review={review}/>)
        }
      </View>
    </ScrollView>
  );
};