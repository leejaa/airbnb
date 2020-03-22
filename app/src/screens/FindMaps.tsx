import React, { useState, useContext, useCallback, useMemo, useRef, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Modal, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from "react-navigation-stack";
import axios from 'axios';
import _ from 'lodash';
import styled from "styled-components/native";
import { HomeStackNavProps } from "../HomeStack";
import { Review } from "../components/Review";
import { AuthContext } from "../AuthProvider";
import MapView, { Marker } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useSelectRoomsQuery } from "../../generated/graphql";
const { height: FULL_HEIGHT, width: FULL_WIDTH } = Dimensions.get('window');

const Container1 = styled.View`
    width: ${FULL_WIDTH}px;
    height: ${FULL_HEIGHT}px;
`;
const Container2 = styled.View`
    border: 1px solid black;
    width: 100%;
    height: 50%;
`;
const Container3 = styled.View`
    border: 1px solid black;
    width: 100%;
    height: 50%;
`;
const Container4 = styled.View`
    border-radius: 15px;
    background-color: ${props => props.isFocused ? '#0F7652' : 'white'};
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`;
const Container5 = styled.View`
    width: ${FULL_WIDTH * 0.65}px;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Container6 = styled.View`
    width: 100%;
    height: 70%;
`;
const Container7 = styled.View`
    width: 100%;
    height: 30%;
`;

const LATITUDELISTDATA = [
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
    37 + parseFloat(Math.random().toFixed(5)),
];
const LONGITUDELISTDATA = [
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
    - (122 + parseFloat(Math.random().toFixed(4))),
];

export function FindMaps({ route, navigation }: HomeStackNavProps<"FindMaps">) {
    const { data, loading, fetchMore, networkStatus, refetch } = useSelectRoomsQuery({
        variables: { skip: 0, take: 10 },
        notifyOnNetworkStatusChange: true,
      });
    const mapRef : any = useRef();
    const [LATITUDELIST] = useState(LATITUDELISTDATA);
    const [LONGITUDELIST] = useState(LONGITUDELISTDATA);
    const [page, setPage] = useState(0);
    const [region, setRegion] = useState({
        latitude: LATITUDELIST[0],
        longitude: LONGITUDELIST[0],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const onScroll = useCallback((event) => {
        const newPage = _.round( event.nativeEvent.contentOffset.x / ( FULL_WIDTH * 0.65 ) );
        setPage(newPage);
        const newRegion = {
            latitude: LATITUDELIST[newPage],
            longitude: LONGITUDELIST[newPage],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        mapRef.current.animateToRegion(
            newRegion, 100
        );
    }, [page, region]);
    const initialAction = async() => {
        const placeInfo = await axios.post(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LATITUDELIST[0]},${LONGITUDELIST[0]}&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc`
        );
    }
    useEffect(() => {
        // initialAction();
    }, []);
    if ( loading ) {
        return (
            <View>
                <Text>로딩중...</Text>
            </View>
        );
    }
    return (
        <Container1>
            <Container2>
                <MapView
                    ref={mapRef}
                    style={{ width: '100%', height: '100%' }}
                    initialRegion={region}
                    region={region}
                    maxZoomLevel={10}
                >
                    {
                        _.range(0, 10).map(index => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: LATITUDELIST[index],
                                    longitude: LONGITUDELIST[index],
                                }}
                            >
                                <Container4
                                    isFocused={page === index}
                                >
                                    <Feather name="home" size={20} color={page === index ? 'white' : 'green'} />
                                </Container4>
                            </Marker>
                        ))
                    }
                </MapView>
            </Container2>
            <Container3>
                <ScrollView
                    style={ { width: '100%', height: '100%', padding: '4%' } }
                    horizontal
                    pagingEnabled
                    decelerationRate={0}
                    snapToInterval={FULL_WIDTH * 0.65}
                    snapToAlignment={"start"}
                    onScroll={onScroll}
                >
                    {
                        data?.selectRooms.map(room => (
                            <Container5 key={room.id}>
                                <Container6>
                                    <ImageBackground 
                                        resizeMode={"stretch"} 
                                        style={ { width: '100%', height: '100%' }} 
                                        source={{ uri: room?.photoConnection[0]?.file }} 
                                    />
                                </Container6>
                                <Container7>
                                    <Text>
                                        {room.description}
                                    </Text>
                                </Container7>
                            </Container5>
                        ))
                    }
                </ScrollView>
            </Container3>
        </Container1>
    );
};