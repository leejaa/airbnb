import React, { useRef, useEffect, useCallback, useState, useContext, useMemo } from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Platform, FlatList, TouchableHighlight, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import _ from 'lodash';
import Swiper from 'react-native-web-swiper';
import { UserContext } from '../UserContext';
import { FULL_WIDTH, FULL_HEIGHT } from '../constants';
import { Room } from '../../generated/graphql';

interface Props {
    room : Room
}

const styles = StyleSheet.create({
    container: {
        width: FULL_WIDTH * 0.85,
        height: FULL_HEIGHT / 3,
        marginBottom: 15
    },
    container2: {
        height: '80%',
    },
    image: {
        width: '100%',
        flex: 1
    },
    DotComponent: {
        backgroundColor: 'gray',
        borderRadius: 30,
        width: 5,
        height: 5,
        marginLeft: 5
    },
    ActiveDotComponent: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: 7,
        height: 7,
        marginLeft: 5
    },
    LikeContainer: {
        borderRadius: 30,
        backgroundColor: 'white',
        width: 25,
        height: 25,
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container3: {
        borderWidth: 1,
        borderColor: 'black',
        width: '20%',
        height: 18,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container4: {
        paddingTop: 5
    },
    container5: {
        flexDirection: 'row',
        marginTop: 3,
    },
    container6: {
        width: '30%',
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    container7: {
        width: '25%',
        height: 18,
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        right: 0,
        flex: 1,
        flexDirection: 'row'
    },
});

export const RoomCard : React.FC<Props> = ({
    room
}) => {
    const DotComponent = useMemo(() => {
        return (
            <View style={ styles.DotComponent } />
        );
    }, []);
    const ActiveDotComponent = useMemo(() => {
        return (
            <View style={ styles.ActiveDotComponent } />
        );
    }, []);
    return (
        <View style={ styles.container }>
            <View style={ styles.LikeContainer }>
                <Ionicons name="md-heart-empty" size={20} color="black" />
            </View>
            <View style={ styles.container2 }>
                <Swiper
                    controlsProps={{
                        prevTitle: '',
                        nextTitle: '',
                        DotComponent: ({ index, isActive, onPress }) => isActive ? ActiveDotComponent : DotComponent
                    } as any}
                >
                    {
                        room?.photoConnection.map((item, index) => <Image key={index} resizeMode='stretch' style={styles.image} source={{ uri: room?.photoConnection[index]?.file }} />)
                    }
                </Swiper>
            </View>
            <View style={ styles.container4 }>
                <View style={ styles.container5 }>
                    <View style={ styles.container3 }>
                        <Text style={ { fontSize: 10, fontWeight: 'bold' } }>슈퍼 호스트</Text>
                    </View>
                    <View style={ styles.container6 }>
                        <Text style={ { fontSize: 14, color: 'gray', fontWeight: 'bold' } }>{ room?.name }</Text>
                    </View>
                    <View style={ styles.container7 }>
                        <Ionicons name="md-star" size={10} color="red" />
                        <Text style={ { fontSize: 10 } }>{ `${room?.score}` }</Text>
                        <Text style={ { fontSize: 10, color: 'gray' } }>{ `(${Math.floor(room?.price / 10000)})` }</Text>
                    </View>
                </View>
                <View style={ styles.container5 }>
                    <Text style={ { fontSize: 15 } }>{ room?.description }</Text>
                </View>
            </View>
        </View>
    );
}