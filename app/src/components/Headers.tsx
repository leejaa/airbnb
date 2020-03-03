import React, { useRef, useEffect, useCallback, useState, useContext, useMemo } from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Platform, FlatList, TouchableHighlight, Image, Alert } from 'react-native';
import _ from 'lodash';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeParamList } from '../HomeStack';
import { RouteProp } from '@react-navigation/native';

interface Props {
    navigation: StackNavigationProp<HomeParamList>;
    route: any
}

const styles = StyleSheet.create({
    
});

export const HeaderRight: React.FC<Props> = ({
    navigation,
    route
}) => {
    
    return (
        <TouchableOpacity style={ { marginRight: 10 } } onPress={ () => navigation.navigate("FindReviews") }>
            <AntDesign name="search1" size={20}/>
        </TouchableOpacity>
    );
}
export const HeaderLeft: React.FC<Props> = ({
    navigation,
    route
}) => {
    const onPress = () => {
        try {
            navigation.goBack();
        } catch (error) {
            console.log('error', error);
        }
    }
    return (
        <TouchableOpacity style={ { marginLeft: 10 } } onPress={ onPress }>
            <AntDesign name="arrowleft" size={20}/>
        </TouchableOpacity>
    );
}