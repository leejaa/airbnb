import React, { useState, useRef, useCallback, useMemo } from "react";
import { RightOutlined, LeftOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Calendar } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Room } from "../generated/graphql";
import '../assets/scss/room.scss';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import _ from "lodash";
import { getDates } from "../utils/utils"
let moment = extendMoment(Moment);
moment.locale('ko');
type Props = {
    room: Room,
    setCheckin: any,
    setCheckout: any
};
const DAY_LIST = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const Calendars2: React.FunctionComponent<Props> = ({
    room,
    setCheckin,
    setCheckout,
}) => {
    const [date, setDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState([]);
    const disableDate = useMemo(() => {
        let disableDate : any = getDates({ startDate: moment().startOf('month').format('YYYY-MM-DD'), endDate: moment().add(-1, 'day') });
        disableDate.push(room?.reservation.map(item => item.check_in));
        disableDate = _.uniq(_.flatten(disableDate));
        return disableDate;
    }, []);
    const dates = useMemo(() => {
        const dates = getDates({ startDate: date.startOf('month').format('YYYY-MM-DD'), endDate: date.endOf('month') });
        return dates;
    }, [date]);
    const onClickDate = useCallback((date) => {
        let startDate : any = '';
        let endDate : any = '';
        if ( _.isEmpty(selectedDate) || _.includes(selectedDate, date) ) {
            startDate = date;
            endDate = date;
        } else {
            startDate = _.minBy(selectedDate);
            endDate = _.maxBy(selectedDate);
            if (startDate > date) {
                endDate = _.clone(startDate);
                startDate = date;
            }
            if (endDate < date) {
                startDate = _.clone(endDate);
                endDate = date;
            }
        }
        const newSelectedDate : any = getDates({ startDate, endDate });
        setSelectedDate(newSelectedDate);
        setCheckin(startDate);
        setCheckout(endDate);
    }, [selectedDate]);
    const renderCell = useMemo(() => {
        let cnt = 0;
        return (
            <div className="calendar2-container6">
                <div className="calendar2-container8">
                    {
                        _.range(0, 7).map(index => {
                            const currentDate = moment(dates[cnt]).format('YYYY-MM-DD');
                            if (index < _.indexOf(DAY_LIST, moment(dates[0]).format('dddd'))) {
                                return (
                                    <div className="calendar2-container9"></div>
                                );
                            } else if ( _.includes(disableDate, moment(dates[cnt]).format('YYYY-MM-DD')) ) {
                                return (
                                    <div className="calendar2-container7">
                                        <span className="calendar2-span2">
                                            <del>{moment(dates[cnt++]).format('D')}</del>
                                        </span>
                                    </div>
                                );
                            } else if ( _.includes(selectedDate, moment(dates[cnt]).format('YYYY-MM-DD')) ) {
                                return (
                                    <div className="calendar2-container10" onClick={() => onClickDate(currentDate)}>
                                        <span className="calendar2-span3">
                                            {moment(dates[cnt++]).format('D')}
                                        </span>
                                    </div>
                                );
                            } else { 
                                return (
                                    <div className="calendar2-container7" onClick={() => onClickDate(currentDate)}>
                                        <span className="calendar2-span1">
                                            {moment(dates[cnt++]).format('D')}
                                        </span>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                {
                    _.range(1, 6).map(index => {
                        if (cnt < dates.length) {
                            return (
                                <div className="calendar2-container8">
                                    {
                                        _.range(0, 7).map(index => {
                                            const currentDate = moment(dates[cnt]).format('YYYY-MM-DD');
                                            if (cnt >= dates.length) {
                                                return (
                                                    <div className="calendar2-container9"></div>
                                                );
                                            } else if ( _.includes(disableDate, moment(dates[cnt]).format('YYYY-MM-DD')) ) {
                                                return (
                                                    <div className="calendar2-container7">
                                                        <span className="calendar2-span2">
                                                            <del>{moment(dates[cnt++]).format('D')}</del>
                                                        </span>
                                                    </div>
                                                );
                                            } else if ( _.includes(selectedDate, moment(dates[cnt]).format('YYYY-MM-DD')) ) {
                                                return (
                                                    <div className="calendar2-container10" onClick={() => onClickDate(currentDate)}>
                                                        <span className="calendar2-span3">
                                                            {moment(dates[cnt++]).format('D')}
                                                        </span>
                                                    </div>
                                                );
                                            }  else {
                                                return (
                                                    <div className="calendar2-container7" onClick={() => onClickDate(currentDate)}>
                                                        <span className="calendar2-span1">
                                                            {moment(dates[cnt++]).format('D')}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                        })
                                    }
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        );
    }, [date, selectedDate, disableDate]);
    const goLeft = useCallback(() => {
        const newDate : any = _.clone(date).add(-1, 'day');
        setDate(newDate);
    }, [date]);
    const goRight = useCallback(() => {
        const newDate : any = _.clone(date).add(1, 'day');
        setDate(newDate);
    }, [date]);
    return (
        <div className="calendar2-container1">
            <div className="calendar2-container2">
                <div className="calendar2-container3" onClick={goLeft}>
                    <ArrowLeftOutlined style={{ fontSize: '18px', color: '#9ca1a2' }} />
                </div>
                <div className="calendar2-container4">
                    <span style={{ fontWeight: 'bold', fontSize: '1em' }}>{`${date.format('YYYY')}년 ${date.format('M')}월`}</span>
                </div>
                <div className="calendar2-container3" onClick={goRight}>
                    <ArrowRightOutlined style={{ fontSize: '18px', color: '#9ca1a2' }} />
                </div>
            </div>
            <div className="calendar2-container5">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>
            {renderCell}
        </div>
    );
}

export default Calendars2;