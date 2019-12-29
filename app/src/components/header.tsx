import React, { useState } from "react";
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

const Header: React.FC<any> = ({ navigation }) => {
  return (
      <View style={ { width: '100%' } }>
        <SearchBar
          placeholder="'코스타데발렌시아'에 가보는건 어떠세요?"
          // onChangeText={this.updateSearch}
          value={""}
          containerStyle={{ backgroundColor: '#FFFFFF', borderTopColor: '#FFFFFF', borderBottomWidth: 0, shadowOffset: { width: 0, height: 4 }, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 2, elevation: 1 }}
          inputContainerStyle={{ borderRadius: 7, backgroundColor: '#FFFFFF' }}
        />
      </View>
  );
};

export default Header;