import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";

const styles = StyleSheet.create({
  view1: {
    width: 1000,
    maxWidth: 1000,
    overflow: 'hidden',
    borderRadius: 0.25,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  view2: {
    position: 'relative',
  },
  view3: {
    height: 500,
    alignItems: 'center',
    width: 500
  }
});

export const Home: React.FC<NavigationStackScreenProps> = ({ navigation }) => {

  return (
    <View style={ styles.view1 }>
      <View style={ styles.view2 }>
        <ImageBackground style={ styles.view3 } source={ { uri: "https://picsum.photos/245/245" } }>

        </ImageBackground>
        <View></View>
        <View></View>
      </View>
      <Text>홈</Text>
    </View>
  );
};