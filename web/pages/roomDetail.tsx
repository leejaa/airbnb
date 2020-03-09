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
import { StarFilled, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import Review from "../components/Review";
const isServer = () => typeof window === "undefined";
const initialHeight = 800;
export default () => {
    const [startPage, setStartPge] = useState(0);
    const [endPage, setEndPage] = useState(4);
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
                <div className="roomdetail-container14">
                    <div>
                        <span className="roomdetail-span4">후기</span>
                    </div>
                    <div className="roomdetail-container15">
                        <StarFilled style={ { fontSize: '15px', color: '#008489', marginTop: '2%' } }/>
                        <span style={ { fontWeight: 'bold', color: '#008489' } }>4.85</span>
                        <span style={ { color: 'gray' } }>|</span>
                        <span style={ { fontWeight: 'bold' } }>545 후기</span>
                    </div>
                    <div className="roomdetail-container16">
                        <input type="text" className="roomdetail-input" placeholder={"후기 검색"}/>
                        <div className="roomdetail-container18">
                            <CloseOutlined style={ { fontSize: '20px', color: '#ebebeb' } }/>
                        </div>
                        <div className="roomdetail-container17">
                            <SearchOutlined style={ { fontSize: '20px', color: 'gray' } }/>
                        </div>
                    </div>
                    <div className="roomdetail-container19">
                        {
                            data?.selectRoom?.reviews.slice(startPage, endPage).map(review => (
                                <Review review={review as any}/>
                            ))
                        }
                        <div className="roomdetail-container20">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};