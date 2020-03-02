import React, { useState, useContext } from "react";
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
const { height: FULL_HEIGHT, width: FULL_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container1: {
    borderWidth: 1,
    borderColor: 'black',
    paddingTop: FULL_HEIGHT * 0.02,
    paddingLeft: FULL_WIDTH * 0.05,
    paddingRight: FULL_WIDTH * 0.05,
  },
  container2: {
    width: '100%',
    height: FULL_HEIGHT * 0.1,
    justifyContent: 'center'
  },
  container3: {
    width: '30%',
    height: FULL_HEIGHT * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container4: {
    width: '100%',
    height: FULL_HEIGHT * 0.2,
    marginTop: FULL_HEIGHT * 0.01
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%'
  }
});

export function Reviews({ route, navigation }: HomeStackNavProps<"Reviews">) {
  const { data, loading } = useSelectRoomQuery({
    variables: {
      id: parseInt(route?.params?.id)
    }
  });
  if ( loading ) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <ScrollView style={ styles.container1 }>
      <View style={ styles.container2 }>
        <Text style={ { fontWeight: 'bold', fontSize: 30 } }>후기</Text>
      </View>
      <View style={ styles.container3 }>
        <AntDesign name="star" size={18} color="#0F7652"/>
        <Text style={ { fontWeight: 'bold' } }>4.95</Text>
        <Text style={ { color: 'gray' } }>|</Text>
        <Text style={ { fontWeight: 'bold' } }>822개</Text>
      </View>
      <View style={ { borderBottomColor: 'gray', borderBottomWidth: 1, width: '100%', marginTop: FULL_HEIGHT * 0.01 } } />
      <View style={ styles.container4 }>
        <View style={ styles.container5 }>
          <Text>정확성</Text>
          <View style={ styles.container6 }>
            <View style={ { width: '50%', borderWidth: 2, borderColor: '#0F7652', backgroundColor: '#0F7652', marginRight: 10, borderRadius: 20 } }></View>
            <Text style={ { fontWeight: 'bold' } }>5.0</Text>
          </View>
        </View>
        <View style={ styles.container5 }>
          <Text>의사소통</Text>
          <View style={ styles.container6 }>
            <View style={ { width: '50%', borderWidth: 2, borderColor: '#0F7652', backgroundColor: '#0F7652', marginRight: 10, borderRadius: 20 } }></View>
            <Text style={ { fontWeight: 'bold' } }>5.0</Text>
          </View>
        </View>
        <View style={ styles.container5 }>
          <Text>체크인</Text>
          <View style={ styles.container6 }>
            <View style={ { width: '50%', borderWidth: 2, borderColor: '#0F7652', backgroundColor: '#0F7652', marginRight: 10, borderRadius: 20 } }></View>
            <Text style={ { fontWeight: 'bold' } }>4.9</Text>
          </View>
        </View>
        <View style={ styles.container5 }>
          <Text>청결도</Text>
          <View style={ styles.container6 }>
            <View style={ { width: '50%', borderWidth: 2, borderColor: '#0F7652', backgroundColor: '#0F7652', marginRight: 10, borderRadius: 20 } }></View>
            <Text style={ { fontWeight: 'bold' } }>4.9</Text>
          </View>
        </View>
        <View style={ styles.container5 }>
          <Text>위치</Text>
          <View style={ styles.container6 }>
            <View style={ { width: '50%', borderWidth: 2, borderColor: '#0F7652', backgroundColor: '#0F7652', marginRight: 10, borderRadius: 20 } }></View>
            <Text style={ { fontWeight: 'bold' } }>4.8</Text>
          </View>
        </View>
      </View>
      {
        data?.selectRoom?.reviews.map(review => <Review key={review.id} review={review}/>)
      }
    </ScrollView>
  );
};