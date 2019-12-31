import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';
const uuidv1 = require('uuid/v1');
import Carousel from '../components/Carousel';
import { data } from "../constants";

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white'
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    margin: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  contentText: {
    marginTop: 10,
    fontSize: 12
  },
  CardContainer: {
    elevation: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: '45%',
    marginLeft: 15,
  },
  CardTitle: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 3
  },
  CardContent: {
    width: '100%',
    fontSize: 12,
    padding: 3
  },
});

export const Home: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const [list, setList] = useState(data);
  const [page, setPage] = useState(5);

  return (
    <View>
      <Carousel />
      <View>
        {
          <FlatList
            keyExtractor={item => item.id}
            data={list.slice(0, page)}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              setPage(page + 5);
            }}
            renderItem={({ item }) => {
              return (
                <View style={ { flex: 1, flexDirection: 'row', marginTop: 20 } }>
                  <View style={styles.CardContainer}>
                    <View style={ { position: 'absolute', right: 0, zIndex: 1 } }>
                      <Ionicons name="md-heart-empty" size={16} color="red" />
                    </View>
                    <Image source={{ uri: item.uri }} style={{ width: "100%", height: 200, borderRadius: 4 }} />
                    <Text style={styles.CardTitle}>{item.title}</Text>
                    <Text style={styles.CardContent}>{item.content}</Text>
                  </View>

                  <View style={styles.CardContainer}>
                    <View style={ { position: 'absolute', right: 0, zIndex: 1 } }>
                      <Ionicons name="md-heart-empty" size={16} color="red" />
                    </View>
                    <Image source={{ uri: item.uri }} style={{ width: "100%", height: 200, borderRadius: 4 }} />
                    <Text style={styles.CardTitle}>{item.title}</Text>
                    <Text style={styles.CardContent}>{item.content}</Text>
                  </View>
                </View>
                );
            }}
          />
        }
      </View>
    </View>
  );
};