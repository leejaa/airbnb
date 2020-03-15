import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookie from "js-cookie";
import 'antd/dist/antd.css';
import { Carousel, Icon } from 'antd';
import Layout from "../components/Layout";
import '../assets/scss/room.scss';
import RoomList from "../components/RoomList";
import RoomdetailPicture from "../components/RoomdetailPicture";
import { useSelectRoomQuery } from "../generated/graphql";
import Calendars from "../components/Calendar";
import Calendars2 from "../components/Calendar2";
import { StarFilled, SearchOutlined, CloseOutlined, LeftOutlined, RightOutlined, HomeFilled, ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import Review from "../components/Review";
import _ from "lodash";
import RoomImages from "../components/RoomImages";
const isServer = () => typeof window === "undefined";
const initialHeight = 800;
declare var kakao: any
let map;
let marker;
export default () => {
    const router: any = useRouter();
    const { data, loading } = useSelectRoomQuery({
        variables: {
            id: parseInt(router?.query?.id)
        }
    });
    const [index, setIndex] = useState(0);
    const goLeft = useCallback(() => {
        let newIndex;
        if ( index <= 0 ) {
            newIndex = 4;
        } else {
            newIndex = index - 1;
        }
        setIndex(newIndex);
    }, [index]);
    const goRight = useCallback(() => {
        let newIndex;
        if ( index >= 4 ) {
            newIndex = 0;
        } else {
            newIndex = index + 1;
        }
        setIndex(newIndex);
    }, [index]);
    if (loading) {
        return (
            <div>
                로딩중
            </div>
        );
    }
    return (
        <div className="roomdetail2-container1" style={{ height: `${isServer() ? initialHeight : window.innerHeight}px` }}>
            <div className="roomdetail2-container2">
                <div className="roomdetail2-container10" onClick={goLeft}>
                    <LeftOutlined style={ { fontSize: '35px' } }/>
                </div>
                <div className="roomdetail2-container9" style={{ backgroundImage: `url("${data?.selectRoom?.photoConnection[index]?.file}")` }} />
                <div className="roomdetail2-container10" onClick={goRight}>
                    <RightOutlined style={ { fontSize: '35px' } }/>
                </div>
            </div>
            <div className="roomdetail2-container3">
                <div className="roomdetail2-container4">
                    <CloseOutlined style={{ fontSize: '30px', fontWeight: 'lighter', color: 'gray' }} />
                </div>
                <div className="roomdetail2-container5">
                    <div className="roomdetail2-container6" style={{ backgroundImage: `url("${data?.selectRoom?.photoConnection[1]?.file}")` }}/>
                    <div className="roomdetail2-container6" style={{ backgroundImage: `url("${data?.selectRoom?.photoConnection[2]?.file}")` }}/>
                    <div className="roomdetail2-container6" style={{ backgroundImage: `url("${data?.selectRoom?.photoConnection[3]?.file}")` }}/>
                    <div className="roomdetail2-container6" style={{ backgroundImage: `url("${data?.selectRoom?.photoConnection[4]?.file}")` }}/>
                </div><dfn></dfn>
                <div className="roomdetail2-container7">
                    <span style={{ fontWeight: 'normal', fontSize: '15px' }}>{`${index+1} / 5`}</span>
                </div>
                <div className="roomdetail2-container8">
                    {data?.selectRoom?.photoConnection[index].caption}
                </div>
            </div>
        </div>
    );
};