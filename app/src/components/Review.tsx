import React, { useRef, useEffect, useCallback, useState, useContext, useMemo } from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Platform, FlatList, TouchableHighlight, Image, Alert } from 'react-native';
import { SearchBar, Avatar, Divider } from 'react-native-elements';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import _ from 'lodash';
import moment from 'moment';

interface Props {
    review: any
}

const styles = StyleSheet.create({
    container11: {
        width: '100%',
        height: 150,
        marginTop: 30
    },
    container12: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5
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
    }
});

export const Review: React.FC<Props> = ({
    review
}) => {
    return (
        <View style={styles.container11}>
            <Divider style={{ borderColor: 'gray', width: '100%', borderWidth: 0.3, marginTop: 30 }} />
            <View style={styles.container12}>
                <Avatar
                    rounded
                    source={{
                        uri:
                        review?.user?.avatar,
                    }}
                    containerStyle={styles.avatarContainer2}
                />
                <View style={styles.container13}>
                    <Text style={{ fontWeight: 'bold' }}>{ review?.user?.name }</Text>
                    <Text style={{ color: 'gray' }}>{ moment(_.replace(review?.createdAt, /"/g, '')).format('YYYY년 MM월') }</Text>
                </View>
            </View>
            <View style={styles.container14}>
                <Text>{ review?.review }</Text>
            </View>
        </View>
    );
}