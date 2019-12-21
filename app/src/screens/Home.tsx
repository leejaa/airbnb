import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import { SearchBar } from 'react-native-elements';
import Carousel from 'react-native-anchor-carousel';

// const styles = StyleSheet.create({
//   view1: {
//     width: 1000,
//     maxWidth: 1000,
//     overflow: 'hidden',
//     borderRadius: 0.25,
//     borderWidth: 1,
//     backgroundColor: '#fff',
//   },
//   view2: {
//     position: 'relative',
//   },
//   view3: {
//     height: 500,
//     alignItems: 'center',
//     width: 500
//   }
// });

const { width } = Dimensions.get('window');

const data = [
  {
    uri: 'https://i.imgur.com/GImvG4q.jpg',
    title: 'Lorem ipsum dolor sit amet',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum '
  },
  {
    uri: 'https://i.imgur.com/IGRuEAa.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor '
  }
];

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
    margin: 20,
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

  const renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
        // loadingIndicatorSource={loadingBlurImage}
        >
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <View>
        <SearchBar
          placeholder="'코스타데발렌시아'에 가보는건 어떠세요?"
          // onChangeText={this.updateSearch}
          value={""}
          containerStyle={{ backgroundColor: '#FFFFFF', borderTopColor: '#FFFFFF', borderBottomWidth: 0, shadowOffset: { width: 0, height: 4 }, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 2, elevation: 1 }}
          inputContainerStyle={{ borderRadius: 7, backgroundColor: '#FFFFFF' }}
        />
      </View>
      <View>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={renderItem}
          itemWidth={0.5 * width}
          inActiveOpacity={0.3}
          containerWidth={width - 10}
          ref={(c) => {
            // this.numberCarousel = c;
          }}
        />
      </View>
      <View>
        <View style={styles.CardContainer}>
          <Image source={{ uri: data[0].uri }} style={{ width: "100%", height: 200, borderRadius: 4 }} />
          <Text style={styles.CardTitle}>{data[0].title}</Text>
          <Text style={styles.CardContent}>{data[0].content}</Text>
        </View>
        <View style={styles.CardContainer}>
          <Image source={{ uri: data[0].uri }} style={{ width: "100%", height: 200, borderRadius: 4 }} />
          <Text style={styles.CardTitle}>{data[0].title}</Text>
          <Text style={styles.CardContent}>{data[0].content}</Text>
        </View>
        <View style={styles.CardContainer}>
          <Image source={{ uri: data[0].uri }} style={{ width: "100%", height: 200, borderRadius: 4 }} />
          <Text style={styles.CardTitle}>{data[0].title}</Text>
          <Text style={styles.CardContent}>{data[0].content}</Text>
        </View>
        <View style={styles.CardContainer}>
          <Image source={{ uri: data[0].uri }} style={{ width: "100%", height: 200, borderRadius: 4 }} />
          <Text style={styles.CardTitle}>{data[0].title}</Text>
          <Text style={styles.CardContent}>{data[0].content}</Text>
        </View>

      </View>
    </View>
  );
};