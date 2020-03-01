import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';
import Swiper from 'react-native-web-swiper';
import { UserContext } from "../UserContext";
import { useSelectRoomsQuery, useSelectAllRoomsQuery } from "../../generated/graphql";
import { HomeStackNavProps } from "../HomeStack";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  wrapper: {
    borderWidth: 0,
    borderColor: '#010000',
    width: '80%',
    marginLeft: 40,
    height: 250,
    marginTop: 30,
  },

  wrapper2: {
    borderWidth: 0.5,
    borderColor: '#010000',
    width: '80%',
    marginLeft: 40,
    height: 250,
    marginTop: 50
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width: '100%',
    flex: 1
  }
});

export function Detail({ route, navigation }: HomeStackNavProps<"Detail">) {
  // const [list, setList] = useState(data);
  const [page, setPage] = useState(5);
  const [state, dispatch] = useContext(UserContext);
  const { data, loading, error } = useSelectAllRoomsQuery();
  console.log('loading', loading);
  return (
    <ScrollView style={styles.container}>
      {
        data?.selectAllRooms?.slice(0, 10).map(item => {
          return (
            <View style={styles.wrapper} key={item.id}>
              <Swiper>
                <View style={styles.slide}>
                  <View style={{ position: 'absolute', right: 0, zIndex: 1, top: 0 }}>
                    <View style={{ position: 'absolute', right: 3, zIndex: 1, top: 3 }}>
                      <Ionicons name="md-heart" size={22} color="red" />
                    </View>
                    <Ionicons name="md-heart-empty" size={30} color="white" />
                  </View>
                  <Image resizeMode='stretch' style={styles.image} source={{ uri: item?.photoConnection[0]?.file }} />
                </View>
                <View style={styles.slide}>
                  <View style={{ position: 'absolute', right: 0, zIndex: 1, top: 0 }}>
                    <View style={{ position: 'absolute', right: 3, zIndex: 1, top: 3 }}>
                      <Ionicons name="md-heart" size={22} color="red" />
                    </View>
                    <Ionicons name="md-heart-empty" size={30} color="white" />
                  </View>
                  <Image resizeMode='stretch' style={styles.image} source={{ uri: item?.photoConnection[0]?.file }} />
                </View>
                <View style={styles.slide}>
                  <View style={{ position: 'absolute', right: 0, zIndex: 1, top: 0 }}>
                    <View style={{ position: 'absolute', right: 3, zIndex: 1, top: 3 }}>
                      <Ionicons name="md-heart" size={22} color="red" />
                    </View>
                    <Ionicons name="md-heart-empty" size={30} color="white" />
                  </View>
                  <Image resizeMode='stretch' style={styles.image} source={{ uri: item?.photoConnection[0]?.file }} />
                </View>
              </Swiper>
              <View style={ { marginBottom: 25 } }>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                  <Button
                    title="슈퍼호스트"
                    titleStyle={{ color: 'black' }}
                    containerStyle={{ borderRadius: 3, width: '30%' }}
                    buttonStyle={{ borderRadius: 3, backgroundColor: '#FFFFFF', borderColor: 'black', borderWidth: 1, height: 25 }}
                  />
                  <View style={ { marginLeft: 5 } }>
                    <Text style={ { color: 'gray' } }>{ item.name }</Text>
                  </View>
                  <View style={ { position: 'absolute', right: 0, flexDirection: 'row' } }>
                    <Ionicons name="md-star" size={15} color="red" />
                    <Text>4.8 (215)</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text>{ item.description }</Text>
              </View>
            </View>
          )
        })
      }
    </ScrollView>
  );
};