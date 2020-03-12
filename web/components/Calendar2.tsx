import React, { useState, useRef, useCallback, useMemo } from "react";
import { RightOutlined, LeftOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
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

const Calendars2: React.FunctionComponent<Props> = ({
    room
}) => {
    
    return (
        <div className="calendar2-container1">
            <div className="calendar2-container2">
                <div className="calendar2-container3">
                    <ArrowLeftOutlined style={{ fontSize: '20px', color: '#9ca1a2' }}/>
                </div>
                <div className="calendar2-container4">
                    <span style={ { fontWeight: 'bold', fontSize: '1em' } }>2020년 3월</span>
                </div>
                <div className="calendar2-container3">
                    <ArrowRightOutlined style={{ fontSize: '20px', color: '#9ca1a2' }}/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Calendars2;