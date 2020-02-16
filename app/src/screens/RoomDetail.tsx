import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Modal } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import _ from 'lodash';
import * as Device from 'expo-device';
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";
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
    borderWidth: 1,
    borderColor: 'black',
    height: FULL_HEIGHT / 10,
    width: FULL_WIDTH,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  }
});

export const RoomDetail: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
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
              <Image
                source={{ uri: 'https://i0.wp.com/www.valuehome.ca/wp-content/uploads/2017/05/house.jpg?resize=810%2C430&ssl=1' }}
                style={{ width: '100%', height: '100%' }}
              />
              <Image
                source={{ uri: 'https://i0.wp.com/www.valuehome.ca/wp-content/uploads/2017/05/house.jpg?resize=810%2C430&ssl=1' }}
                style={{ width: '100%', height: '100%' }}
              />
              <Image
                source={{ uri: 'https://i0.wp.com/www.valuehome.ca/wp-content/uploads/2017/05/house.jpg?resize=810%2C430&ssl=1' }}
                style={{ width: '100%', height: '100%' }}
              />
            </Swiper>
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={true}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalContainer2}>
            <Text style={ { color: 'white', fontWeight: 'bold' } }>날짜 입력</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};