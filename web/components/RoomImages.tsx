import React, { useState, useRef, useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelectTopRoomsQuery, Room } from "../generated/graphql";
import RoomCard from "./RoomCard";
import { Icon } from "antd";
import _ from "lodash";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Router from 'next/router';

type Props = {
    room: Room
};

const RoomImages: React.FunctionComponent<Props> = ({
    room
}) => {
    const [brightList, setBrightList] = useState([1, 2, 3, 4, 5]);
    const [isSaved, setIsSaved] = useState(false);
    const saveRoom = useCallback(() => {
        setIsSaved(!isSaved);
    }, [isSaved]);
    const goDetail = useCallback(() => {
        Router.push({
            pathname: '/roomDetail2',
            query: {
                id: room?.id
            }
        });
    }, []);
    return (
        <div className="roomimages-container1" onMouseOut={() => setBrightList([1, 2, 3, 4, 5])}>
            <div className="roomimages-container5" onClick={saveRoom}>
                {
                    isSaved ? (
                        <HeartFilled style={{ fontSize: '15px', display: 'flex', alignItems: 'center', color: 'red' }} />
                    ) : (
                        <HeartOutlined style={{ fontSize: '15px', display: 'flex', alignItems: 'center' }} />
                    )
                }
                <span style={{ fontSize: '13px' }}>{isSaved ? '저장됨' : '저장'}</span>
            </div>
            <div className="roomimages-container6"><span style={{ fontSize: '13px' }} onClick={goDetail}>사진보기</span></div>
            <div className="roomimages-container2_2" style={{ display: `${_.includes(brightList, 1) ? 'none' : 'inline'}` }} />
            <div className="roomimages-container2" style={{ backgroundImage: `url("${room?.photoConnection[0]?.file}")` }} onMouseEnter={() => setBrightList([1])} />
            <div className="roomimages-container2">
                <div className="roomimages-container3">
                    <div className="roomimages-container4" style={{ backgroundImage: `url("${room?.photoConnection[1]?.file}")` }} onMouseEnter={() => setBrightList([2])} />
                    <div className="roomimages-container4" style={{ backgroundImage: `url("${room?.photoConnection[2]?.file}")` }} onMouseEnter={() => setBrightList([3])} />
                    <div className="roomimages-container4_2" style={{ display: `${_.includes(brightList, 2) ? 'none' : 'inline'}` }} />
                    <div className="roomimages-container4_3" style={{ display: `${_.includes(brightList, 3) ? 'none' : 'inline'}` }} />
                </div>
                <div className="roomimages-container3">
                    <div className="roomimages-container4" style={{ backgroundImage: `url("${room?.photoConnection[1]?.file}")` }} onMouseEnter={() => setBrightList([4])} />
                    <div className="roomimages-container4" style={{ backgroundImage: `url("${room?.photoConnection[2]?.file}")` }} onMouseEnter={() => setBrightList([5])} />
                    <div className="roomimages-container4_2" style={{ display: `${_.includes(brightList, 4) ? 'none' : 'inline'}` }} />
                    <div className="roomimages-container4_3" style={{ display: `${_.includes(brightList, 5) ? 'none' : 'inline'}` }} />
                </div>
            </div>
        </div>
    );
}

export default RoomImages;