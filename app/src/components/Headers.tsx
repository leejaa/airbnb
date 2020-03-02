import React, { useRef, useEffect, useCallback, useState, useContext, useMemo } from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Platform, FlatList, TouchableHighlight, Image, Alert } from 'react-native';
import _ from 'lodash';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeParamList } from '../HomeStack';

interface Props {
    navigation: StackNavigationProp<HomeParamList>;
}

const styles = StyleSheet.create({
    
});

export const HeaderRight: React.FC<Props> = ({
    navigation
}) => {
    
    return (
        <View style={ { marginRight: 10 } }>
            <AntDesign name="search1" size={20}/>
        </View>
    );
}
export const HeaderLeft: React.FC<Props> = ({
    navigation
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