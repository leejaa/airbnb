import React, { useState } from "react";
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
const isServer = () => typeof window === "undefined";
const initialHeight = 800;
export default () => {
    const router: any = useRouter();
    const { data, loading } = useSelectRoomQuery({
        variables: {
            id: parseInt(router?.query?.id)
        }
    });
    if (loading) {
        return (
            <div>로딩중...</div>
        );
    }
    return (
        <div style={{ height: `${isServer() ? initialHeight : window.innerHeight}px` }}>
            <div className="roomdetail-container1">

            </div>
            <div className="roomdetail-container2">
                <RoomdetailPicture room={data?.selectRoom as any} />
            </div>
            <div className="roomdetail-container7">
                <span className="roomdetail-span2">{data?.selectRoom?.name}</span>
                <div className="roomdetail-container8">
                    <span className="roomdetail-span3">{data?.selectRoom?.city}</span>
                    <div className="roomdetail-container9" style={{ backgroundImage: `url('${data?.selectRoom?.user?.avatar}')` }}>
                    </div>
                </div>
                <hr />
                <div className="roomdetail-container10">
                    <div>
                        <span style={{ fontWeight: 'bold' }}>설명</span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "lighter" }}>{data?.selectRoom?.description}</span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "lighter" }}>{data?.selectRoom?.description}</span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "lighter" }}>{data?.selectRoom?.description}</span>
                    </div>
                </div>
                <hr />
                <div className="roomdetail-container12">
                    <div className="roomdetail-container11">
                        <span>이 설명을 한국어로 번역하기</span>
                    </div>
                    <div style={{ marginTop: '5%' }}>
                        <span style={{ fontWeight: "lighter" }}>{data?.selectRoom?.description}</span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "lighter" }}>{data?.selectRoom?.description}</span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "lighter" }}>{data?.selectRoom?.description}</span>
                    </div>
                </div>
                <hr />
                <div className="roomdetail-container13">
                    <Calendars room={data?.selectRoom as any}/>
                </div>
            </div>
        </div>
    );
};