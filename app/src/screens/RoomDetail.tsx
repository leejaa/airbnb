import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Modal, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import MapView, { Marker } from 'react-native-maps';
import _ from 'lodash';
import * as Device from 'expo-device';
import { Ionicons, Feather } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";
import { Avatar, Divider } from "react-native-elements";
import { useSelectRoomQuery } from "../../generated/graphql";
import moment from "moment";
import { HomeStackNavProps } from "../HomeStack";
import { AuthContext } from "../AuthProvider";
const { height: FULL_HEIGHT, width: FULL_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container1: {
    height: FULL_HEIGHT,
    paddingTop: Device.osName === 'Android' ? 20 : 0,
    position: 'relative'
  },
  container2: {
    height: FULL_HEIGHT / 12,
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  container3: {
    position: 'absolute',
    right: 10
  },
  container4: {
    height: FULL_HEIGHT / 3,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0
  },
  modalContainer: {
    borderTopWidth: 0.1,
    borderTopColor: 'gray',
    height: FULL_HEIGHT / 10,
    width: FULL_WIDTH,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  modalContainer2: {
    borderRadius: 5,
    backgroundColor: '#FA6D6D',
    width: '40%',
    height: '80%',
    position: 'absolute',
    right: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container5: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  container6: {
    width: '85%',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container7: {
    width: '90%',
    height: 70,
    position: 'relative',
    justifyContent: 'center'
  },
  avatarContainer: {
    position: 'absolute',
    right: 2,
    borderRadius: 40,
    height: '75%',
    width: '15%',
  },
  container8: {
    height: 200,
    width: '90%',
    marginLeft: '10%',
    marginRight: '5%'
  },
  container9: {
    marginTop: 10,
    width: '100%',
    height: 25,
    justifyContent: 'center',
    paddingLeft: 10
  },
  container10: {
    width: '100%',
    height: 100,
    marginTop: 30,
    paddingLeft: 10,
  },
  container11: {
    width: '90%',
    height: 150,
    marginTop: 30
  },
  container12: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarContainer2: {

  },
  container13: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    marginLeft: 10
  },
  container14: {
    width: '95%',
    height: '60%'
  },
  container15: {
    width: '100%',
    height: '20%',
    marginTop: 8
  },
  container16: {
    width: '100%',
    height: 200,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container17: {
    borderRadius: 15,
    backgroundColor: '#0F7652',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export function RoomDetail({ route, navigation }: HomeStackNavProps<"RoomDetail">) {
  const [state, dispatch] = useContext(AuthContext);
  const { data, loading } = useSelectRoomQuery({
    variables: {
      id: parseInt(route?.params?.id)
    }
  });
  useEffect(() => {
    dispatch({ type: 'setRoomId', value: route?.params?.id });
  }, []);
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View>
      <ScrollView style={styles.container1}>
        <View style={styles.container4}>
          <View style={styles.container2}>
            <View>
              <Ionicons name="ios-arrow-round-back" size={25} />
            </View>
            <View style={styles.container3}>
              <Ionicons name="md-heart-empty" size={25} />
            </View>
          </View>
          <View style={styles.image}>
            <Swiper
              loop
              controlsProps={{ prevTitle: '', nextTitle: '' }}
            >
              {
                data?.selectRoom?.photoConnection?.map(photo => (
                  <Image
                    key={photo.id}
                    source={{ uri: photo.file }}
                    style={{ width: '100%', height: '100%' }}
                  />
                ))
              }
            </Swiper>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{data?.selectRoom?.name}</Text>
          </View>
          <View style={styles.container7}>
            <Text style={{ color: 'gray', fontSize: 15 }}>{data?.selectRoom?.description}</Text>
            <Avatar
              rounded
              source={{
                uri:
                  data?.selectRoom?.user?.avatar,
              }}
              containerStyle={styles.avatarContainer}
            />
          </View>
          <View style={styles.container8}>
            <Text>{data?.selectRoom?.description}</Text>
          </View>
          <Divider style={{ borderColor: 'gray', width: '90%', borderWidth: 0.6 }} />
          <View style={styles.container9}>
            <Text style={{ color: '#0F7652', fontWeight: 'bold' }}>번역</Text>
          </View>
          <View style={styles.container10}>
            <Text>번역 번역 번역 번역 번역 번역</Text>
          </View>
          <Divider style={{ borderColor: 'gray', width: '90%', borderWidth: 0.6 }} />
          <View style={styles.container9}>
            <Text style={{ color: '#0F7652', fontWeight: 'bold' }}>숙소위치</Text>
          </View>
          {
            Device.osName === 'Android' && (
              <View style={styles.container16}>
                <MapView
                  style={{ width: '100%', height: '100%' }}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0421,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                    }}
                  >
                    <View style={ styles.container17 }>
                      <Feather name="home" size={20} color="white" />
                    </View>
                  </Marker>
                </MapView>
              </View>
            )
          }
          <Divider style={{ borderColor: 'gray', width: '90%', borderWidth: 0.6 }} />
          <View style={styles.container11}>
            <View style={styles.container12}>
              <Avatar
                rounded
                source={{
                  uri:
                    data?.selectRoom?.reviews[0]?.user?.avatar,
                }}
                containerStyle={styles.avatarContainer2}
              />
              <View style={styles.container13}>
                <Text style={{ fontWeight: 'bold' }}>{data?.selectRoom?.reviews[0]?.user?.name}</Text>
                <Text style={{ color: 'gray' }}>{moment(_.replace(data?.selectRoom?.reviews[0]?.createdAt, /"/g, '')).format('YYYY년 MM월')}</Text>
              </View>
            </View>
            <View style={styles.container14}>
              <Text>{data?.selectRoom?.reviews[0]?.review}</Text>
            </View>
            <TouchableOpacity style={styles.container15} onPress={() => navigation.navigate("Reviews", { id: data?.selectRoom?.id } as any)}>
              <Text style={{ color: '#0F7652', fontWeight: 'bold' }}>후기 {data?.selectRoom?.reviews.length}개 모두 읽기</Text>
            </TouchableOpacity>
            <Divider style={{ borderColor: 'gray', width: '100%', borderWidth: 0.6, marginTop: 30 }} />
          </View>
          <View style={{ height: 180 }} />
        </View>
      </ScrollView>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalContainer2}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>날짜 입력</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};