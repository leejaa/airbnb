import React, { useState, useContext, useCallback, useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';
import Modal from "react-native-modal";
import { SearchBar, Button } from 'react-native-elements';
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars';
import _ from 'lodash';
import moment from 'moment';
import { UserContext } from "../UserContext";
import { Ionicons } from "@expo/vector-icons";

LocaleConfig.locales['kr'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['월', '화', '수', '목', '금', '토', '일'],
  dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
};
LocaleConfig.defaultLocale = 'kr';

const Header: React.FC<any> = ({ navigation }) => {
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [state, dispatch] = useContext(UserContext);
  const searchBarRef = useRef();
  const onFocusSearch = useCallback(() => {
    if (!state.isModalOpen) {
      dispatch({ type: 'setIsModalOpen', value: !state.isModalOpen });
    }
  }, [state]);
  const onDayPress = useCallback((day) => {
    let newMarkedDates = {};
    if (_.isEmpty(markedDates)) {
      newMarkedDates[day.dateString] = { startingDay: true, color: 'black', textColor: 'white' };
      // const dates = {
      //   '2020-01-21': { startingDay: true, color: 'black', textColor: 'white' },
      //   '2020-01-22': { color: 'black', endingDay: true, textColor: 'white' }
      // };
    } else {
      let key = '';
      let beforeDate = moment(day.dateString).isBefore(Object.keys(markedDates)[0]) ? day.dateString : Object.keys(markedDates)[0];
      const afterDate = moment(day.dateString).isBefore(Object.keys(markedDates)[0]) ? Object.keys(markedDates)[0] : day.dateString;
      newMarkedDates[beforeDate] = { startingDay: true, color: 'black', textColor: 'white' };
      do {
        beforeDate = moment(beforeDate).add(1, 'd').format('YYYY-MM-DD');
        newMarkedDates[beforeDate] = { color: 'black', textColor: 'white' };
      } while (moment(beforeDate).isBefore(afterDate));
      newMarkedDates[afterDate] = { endingDay: true, color: 'black', textColor: 'white' };
    }
    setMarkedDates(newMarkedDates);
  }, [markedDates]);
  console.log('markedDates', JSON.stringify(markedDates));
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
        <View style={{ marginTop: 0, height: 500, marginBottom: 80 }}>
          <Button
            buttonStyle={{ backgroundColor: 'white', height: 50, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            title="체크인"
            titleStyle={{ color: 'black' }}
          >
          </Button>
          <TouchableOpacity
            style={{ position: 'absolute', left: 5, marginLeft: 5, marginTop: 5 }}
            onPress={() => setIsCalenderVisible(false)}
          >
            <Ionicons name="md-close" size={30} color="black" />
          </TouchableOpacity>
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
            onDayPress={onDayPress}
            monthFormat={'yyyy년 MM월'}
            // Collection of dates that have to be colored in a special way. Default = {}
            // markedDates={{
            //   '2020-01-21': { startingDay: true, color: 'black', textColor: 'white' },
            //   '2020-01-22': { color: 'black', endingDay: true, textColor: 'white' }
            // }}
            markedDates={markedDates}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={'period'}
          />
          <TouchableOpacity
            style={{ backgroundColor: 'white', height: 70, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <Button
              title="결과보기"
              titleStyle={{ color: 'white' }}
              containerStyle={{ borderRadius: 10, width: '25%', height: 8, marginLeft: 10, marginTop: 10 , position: 'absolute', right: 10 }}
              buttonStyle={{ borderRadius: 10, backgroundColor: 'black', borderColor: 'black', borderWidth: 1, }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Header;