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
    review: any
};

const Review: React.FunctionComponent<Props> = ({
    review
}) => {
    return (
        <div style={ { width: '100%', height: '20%', borderBottom: '1px solid #f5f5f5', marginTop: '5%' } }>
            <div className="review-container2">
                <div className="review-container1" style={{ backgroundImage: `url('${review?.user?.avatar}')` }} />
                <div className="review-container3">
                    <div><span style={ { fontWeight: 'bold', fontSize: 12 } }>{ review?.user?.name }</span></div>
                    <div><span style={ { color: 'gray', fontSize: 12 } }>{ moment(_.replace(review?.createdAt, /"/g, '')).format('YYYY년 MM월') }</span></div>
                </div>
            </div>
            <div className="review-container4">
                { review?.review }
            </div>
        </div>
    );
}

export default Review;