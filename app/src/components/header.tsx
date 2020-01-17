import React, { useState, useContext, useCallback, useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';
import Modal from "react-native-modal";
import { SearchBar, Button } from 'react-native-elements';
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars';
import _ from 'lodash';
import { UserContext } from "../UserContext";

LocaleConfig.locales['kr'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  dayNames: ['월','화','수','목','금','토','일'],
  dayNamesShort: ['월','화','수','목','금','토','일'],
};
LocaleConfig.defaultLocale = 'kr';

const Header: React.FC<any> = ({ navigation }) => {
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
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
          onPress={() => setIsCalenderVisible(!isCalenderVisible)}
          containerStyle={{ borderRadius: 30, width: '15%', height: 8, marginLeft: 10, marginTop: 10 }}
          buttonStyle={{ borderRadius: 30, backgroundColor: '#FFFFFF', borderColor: 'black', borderWidth: 1 }}
        />
      </View>
      <Modal
        isVisible={isCalenderVisible}
        backdropOpacity={0.7}
        backdropColor="black"
      >
        <View style={{ marginTop: 0, height: 600 }}>
          <Button
            title="close"
            onPress={() => setIsCalenderVisible(false)}
          >
          </Button>
            <CalendarList
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={10}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={10}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              calendarWidth={370}
            />
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Header;