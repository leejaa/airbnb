import React, { useState, useRef, useCallback, useMemo } from "react";
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Calendar } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Room } from "../generated/graphql";
import '../assets/scss/room.scss';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import _ from "lodash";
let moment = extendMoment(Moment);
moment.locale('ko');
type Props = {
    room: Room
};

const Calendars: React.FunctionComponent<Props> = ({
    room
}) => {
    const [ today, setToday ] = useState(moment());
    const [ date, setDate ] : any = useState(moment());
    const [ dates, setDates ] = useState(moment.range(moment(), moment()));
    const dateFullCellRender = useCallback((dateParam) => {
        let classNameDiv = 'calendar-container2_1';
        let classNameSpan = 'calendar-span1_1';
        const check_in_list = _.map( room?.reservation, reservation => reservation.check_in );
        if ( dates.contains(dateParam) ) {
            classNameDiv = 'calendar-container2_2';
            classNameSpan = 'calendar-span1_2';
        }
        if ( _.includes( check_in_list, dateParam.format('YYYY-MM-DD') ) || date.isAfter(dateParam) ) {
            classNameDiv = 'calendar-container2_3';
            classNameSpan = 'calendar-span1_3';
        }

        return(
            <div className="calendar-container1">
                <div className={classNameDiv}>
                    <span className={classNameSpan}>{parseInt(moment(dateParam).format('DD'), 10)}</span>
                </div>
            </div>
        );
    }, [date, dates]);
    const goLeft = useCallback(() => {
        let newDate = _.clone(date);
        newDate = newDate.add(-1, 'month');
        setDate(newDate);
    }, [date]);
    const goRight = useCallback(() => {
        let newDate = _.clone(date);
        newDate = newDate.add(1, 'month');
        setDate(newDate);
    }, [date]);
    const onSelect = useCallback((dateParam) => {
        const check_in_list = _.map( room?.reservation, reservation => reservation.check_in );
        if ( dates.center().format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ) {
            if ( !_.includes( check_in_list, dateParam.format('YYYY-MM-DD') ) && !date.isAfter(dateParam) ) {
                const newDate = _.clone(dateParam);
                const newDates = moment.range(newDate, newDate);
                setDate(newDate);
                setDates(newDates);
            }
        } else {
            const newDates = moment.range(date, dateParam);
            setDates(newDates);
        }
    }, [date, dates]);
    return (
        <div style={ { width: '100%', height: '100%' } }>
            <div className="calendar-container3">
                <div className="calendar-container4" onClick={goLeft}>
                    <LeftOutlined  style={ { fontSize: '20px' } }/>
                </div>
                <span className="calendar-span2">{`${date.format('YYYY')}년 ${parseInt(date.format('MM'), 10)}월`}</span>
                <div className="calendar-container5" onClick={goRight}>
                    <RightOutlined  style={ { fontSize: '20px' } }/>
                </div>
            </div>
            <Calendar
                dateFullCellRender={dateFullCellRender}
                value={date}
                onSelect={onSelect}
            />
        </div>
    );
}

export default Calendars;