import React, { useRef, useEffect, useCallback, useState, useContext, useMemo } from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Platform, FlatList, TouchableHighlight, Image, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import _ from 'lodash';
import { useApolloClient } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import Swiper from 'react-native-web-swiper';
import { UserContext } from '../UserContext';
import { FULL_WIDTH, FULL_HEIGHT } from '../constants';
import { Room, useCreateLikeMutation, SelectRoomsDocument, useSelectRoomsQuery } from '../../generated/graphql';
import { AuthContext } from '../AuthProvider';

interface Props {
    room: Room,
    navigation: any
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

export const RoomCard: React.FC<Props> = ({
    room,
    navigation
}) => {
    const [state, dispatch] = useContext(AuthContext);
    const [createLike] = useCreateLikeMutation({
        // refetchQueries: SelectRoomsDocument
    });
    const { data } = useSelectRoomsQuery({
        variables: {
            skip: 0,
            take: 12
        }
    });
    const client = useApolloClient();
    const meData = client.readFragment({
        id: '1',
        fragment: gql`
        fragment me on Todo {
          id
          text
          me
        }
      `,
    });
    const initialIsLike = useMemo(() => {
        let isLike = false;
        const likeUsers = _.map(room?.likeUsers, likeUser => likeUser.user);
        if (_.some(likeUsers, { id: meData?.me?.id }) || _.some(likeUsers, { id: `${meData?.me?.id}` })) {
            isLike = true;
        }
        return isLike;
    }, [room]);
    const [like, setLike] = useState<boolean>(false);
    const DotComponent = useMemo(() => {
        return (
            <View style={styles.DotComponent} />
        );
    }, []);
    const ActiveDotComponent = useMemo(() => {
        return (
            <View style={styles.ActiveDotComponent} />
        );
    }, []);
    const onPressLike = useCallback(async () => {
        setLike(!like);
        createLike({
            variables: {
                roomId: parseInt(room?.id),
                userId: parseInt(meData?.me?.id)
            },
            update(cache) {
                // const newRoom = _.clone(room);
                // const likeUsers : any = newRoom?.likeUsers;
                // if ( initialIsLike ) {
                //     _.remove(likeUsers as any, (likeUser : any) => {
                //         return likeUser?.user?.id == meData?.me?.id;
                //     });
                // } else {
                //     likeUsers.push({
                //         user: meData?.me,
                //         __typename: 'Room'
                //     });
                // }
                // newRoom.likeUsers = likeUsers;
                // let newSelectRooms = data?.selectRooms;
                // const index = _.findIndex(newSelectRooms, (item : any) => item.id === room.id);
                // newSelectRooms[index] = newRoom;
                // cache.writeQuery({
                //     query: SelectRoomsDocument,
                //     data: {
                //         selectRooms: [],
                //         __typename: 'Query'
                //     },
                //     variables: {
                //         skip: 0,
                //         take: 12
                //     }
                // });
            },
            refetchQueries: [{
                query: SelectRoomsDocument,
                variables: {
                    skip: 0,
                    take: 12
                }
            }]
        });
    }, [room, like]);
    const onPressDetail = useCallback((id) => {
        navigation.navigate('RoomDetail', { id });
    }, []);
    useEffect(() => {
        setLike(initialIsLike);
    }, [initialIsLike]);
    return (
        <TouchableOpacity style={styles.container} onPress={ () => onPressDetail(room.id) }>
            <TouchableOpacity style={styles.LikeContainer} onPress={onPressLike}>
                {
                    like ? (
                        <Ionicons name="md-heart" size={20} color="red" />
                    ) : (
                            <Ionicons name="md-heart-empty" size={20} color="black" />
                        )
                }
            </TouchableOpacity>
            <View style={styles.container2}>
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
            <View style={styles.container4}>
                <View style={styles.container5}>
                    <View style={styles.container3}>
                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>슈퍼 호스트</Text>
                    </View>
                    <View style={styles.container6}>
                        <Text style={{ fontSize: 14, color: 'gray', fontWeight: 'bold' }}>{room?.name}</Text>
                    </View>
                    <View style={styles.container7}>
                        <Ionicons name="md-star" size={10} color="red" />
                        <Text style={{ fontSize: 10 }}>{`${room?.score}`}</Text>
                        <Text style={{ fontSize: 10, color: 'gray' }}>{`(${Math.floor(room?.price / 10000)})`}</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={{ fontSize: 15 }}>{room?.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}