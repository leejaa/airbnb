import React, { useState, useContext, useCallback, useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, TouchableHighlight, Modal } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import _ from 'lodash';
import { UserContext } from "../UserContext";

const Header: React.FC<any> = ({ navigation }) => {
  const [state, dispatch] = useContext(UserContext);
  const searchBarRef = useRef();
  const onFocusSearch = useCallback(() => {
    if (!state.isModalOpen) {
      dispatch({ type: 'setIsModalOpen', value: !state.isModalOpen });
    }
  }, [state]);
  return (
    <TouchableOpacity style={{ width: '100%' }} onPress={onFocusSearch}>
      <View pointerEvents="none" style={{ flex: 1 }}>
        <SearchBar
          placeholder="'코스타데발렌시아'에 가보는건 어떠세요?"
          // onFocus={ onFocusSearch }
          value={""}
          containerStyle={{ backgroundColor: '#FFFFFF', borderTopColor: '#FFFFFF', borderBottomWidth: 0, shadowOffset: { width: 0, height: 4 }, shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 2, elevation: 1 }}
          inputContainerStyle={{ borderRadius: 7, backgroundColor: '#FFFFFF' }}
        />
      </View>
      <View style={{ flex: 1, marginTop: 20, marginBottom: 30 }}>
        <Button
          title="날짜"
          titleStyle={{ color: 'black' }}
          onPress={null}
          containerStyle={{ borderRadius: 30, width: '15%', height: 8, marginLeft: 10, marginTop: 10 }}
          buttonStyle={{ borderRadius: 30, backgroundColor: '#FFFFFF', borderColor: 'black', borderWidth: 1 }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={true}
      >
        <View style={{ marginTop: 22 }}>
          <Calendar
            // Specify style for calendar container element. Default = {}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 350
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Header;