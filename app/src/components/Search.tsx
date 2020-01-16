import React, { useRef, useEffect, useCallback, useState, useContext } from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Platform, FlatList, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import _ from 'lodash';
import { UserContext } from '../UserContext';

export const Search = (props) => {
    const [ state, dispatch ] = useContext( UserContext );
    const searchBarRef = useRef();
    const [ searchlist, setSearchlist ] = useState([]);
    const [ searchtext, setSearchtext ] = useState("");
    const onChangeSearch = useCallback( async( e ) => {
        const { nativeEvent: { text = "" } } = e;
        setSearchtext( text );
        const placeInfo = await axios.post(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${ encodeURI(text) }&inputtype=textquery&fields=formatted_address,name&key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc`
        );
        if ( placeInfo ) {
            const { data: { candidates = [] } = null } = placeInfo;
            const newSearchlist = _.map( candidates, ( item, index ) =>{
                const data = { id: index, value: item.formatted_address, };
                return data;
            });
            setSearchlist( newSearchlist );
        }
    }, [ searchlist ]);
    const onPressCancel = useCallback( () => {
        dispatch({ type: 'setIsModalOpen', value: !state.isModalOpen });
    },[ state ]);
    useEffect(() => {
        searchBarRef.current.focus();
    }, []);
    return (
        <View style={{ justifyContent: 'flex-start', flex: 1 }}>
            <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                <View style={ { position: 'absolute', width: '80%' } }>
                    <SearchBar
                        placeholder="'코스타데발렌시아'에 가보는건 어떠세요?"
                        value={ searchtext }
                        containerStyle={{ backgroundColor: '#FFFFFF', borderTopColor: '#FFFFFF', borderBottomWidth: 0, shadowOffset: { width: 0, height: 4 }, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 2, elevation: 1 }}
                        inputContainerStyle={{ borderRadius: 7, backgroundColor: '#FFFFFF' }}
                        ref={searchBarRef}
                        onChange={ onChangeSearch }
                    />
                </View>
                <TouchableOpacity style={ { position: 'absolute', width: '20%', right: 0, paddingTop: 15, paddingLeft: 20 } } onPress={ onPressCancel }>
                    <Text style={ { fontSize: 20 } }>취소</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={ searchlist }
                //data defined in constructor
                ItemSeparatorComponent={ () => <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/> }
                //Item Separator View
                renderItem={({ item }) => (
                    // Single Comes here which will be repeatative for the FlatListItems
                    <View style={ { flex:1, flexDirection: 'row', justifyContent: 'flex-start' } }>
                        <Entypo name="location-pin" size={25} color="black" style={ { marginTop: 10 } }/>
                        <Text
                            style={styles.item}
                            onPress={ null }>
                            {item.value}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});