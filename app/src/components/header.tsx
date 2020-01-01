import React, { useState, useContext, useCallback } from "react";
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import { UserContext } from "../UserContext";

const Header: React.FC<any> = ({ navigation }) => {
  const [ state, dispatch ] = useContext( UserContext );
  const onFocusSearch = useCallback( () => {
    if ( !state.isModalOpen ) {
      dispatch({ type: 'setIsModalOpen', value: !state.isModalOpen });
    }
  },[ state ]);
  return (
      <View style={ { width: '100%' } }>
        <SearchBar
          placeholder="'코스타데발렌시아'에 가보는건 어떠세요?"
          onFocus={ onFocusSearch }
          value={""}
          containerStyle={{ backgroundColor: '#FFFFFF', borderTopColor: '#FFFFFF', borderBottomWidth: 0, shadowOffset: { width: 0, height: 4 }, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 2, elevation: 1 }}
          inputContainerStyle={{ borderRadius: 7, backgroundColor: '#FFFFFF' }}
        />
      </View>
  );
};

export default Header;