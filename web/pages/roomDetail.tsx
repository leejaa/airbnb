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
const isServer = () => typeof window === "undefined";
const initialHeight = 800;
declare var kakao: any
let map;
let marker;
export default () => {
    const [startPage, setStartPge] = useState(0);
    const [endPage, setEndPage] = useState(4);
    const [searchword, setSearchword] = useState('');
    const router: any = useRouter();
    const { data, loading } = useSelectRoomQuery({
        variables: {
            id: parseInt(router?.query?.id)
        }
    });
    const initialReviews = useMemo(() => {
        const reviews = data?.selectRoom?.reviews;
        return reviews;
    }, [data]);
    const customMarker = useMemo(() => {
        return `
            <div class="roomdetail-custommarker">
                <div class="roomdetail-custommarker2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoiFf1b2LqQdkFWHTr1ASPdAfS6iXMh9rSYn5AAolenw1bP0K3" class="roomdetail-custommarker3" />
                </div>
            </div>
        `;
    }, []);
    const [reviews, setReviews] = useState(initialReviews || []);
    const onChangeWord = useCallback((e) => {
        setSearchword(e.target.value);
    }, [searchword]);
    const onKeyPress = useCallback((e) => {
        if (searchword === '') {
            setReviews(data?.selectRoom?.reviews as any);
            return;
        }
        if (e.which == 13 && searchword !== '') {
            let newReviews = _.clone(reviews);
            newReviews = _.filter(data?.selectRoom?.reviews, (o) => {
                return _.includes(o.review, searchword);
            });
            setReviews(newReviews);
        }
    }, [searchword, reviews]);
    const pageLeft = useCallback(() => {
        const newStartPage = _.clone(startPage) - 5;
        const newEndPage = _.clone(endPage) - 5;
        setStartPge(newStartPage);
        setEndPage(newEndPage);
    }, [startPage, endPage]);
    const pageRight = useCallback(() => {
        const newStartPage = _.clone(startPage) + 5;
        const newEndPage = _.clone(endPage) + 5;
        setStartPge(newStartPage);
        setEndPage(newEndPage);
    }, [startPage, endPage]);
    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        map = new kakao.maps.Map(mapContainer, options);
        const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
        marker = new kakao.maps.CustomOverlay({
            position: markerPosition,
            content: customMarker
        });
        marker.setMap(map);
    }, []);
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
            <div className="roomdetail-container25">
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
                        <Calendars room={data?.selectRoom as any} />
                    </div>
                    <div className="roomdetail-container14">
                        <div>
                            <span className="roomdetail-span4">후기</span>
                        </div>
                        <div className="roomdetail-container15">
                            <StarFilled style={{ fontSize: '15px', color: '#008489', marginTop: '2%' }} />
                            <span style={{ fontWeight: 'bold', color: '#008489' }}>4.85</span>
                            <span style={{ color: 'gray' }}>|</span>
                            <span style={{ fontWeight: 'bold' }}>545 후기</span>
                        </div>
                        <div className="roomdetail-container16">
                            <input type="text" className="roomdetail-input" placeholder={"후기 검색"} onChange={onChangeWord} onKeyPress={onKeyPress} />
                            <div className="roomdetail-container18">
                                <CloseOutlined style={{ fontSize: '20px', color: '#ebebeb' }} />
                            </div>
                            <div className="roomdetail-container17">
                                <SearchOutlined style={{ fontSize: '20px', color: 'gray' }} />
                            </div>
                        </div>
                        <div className="roomdetail-container19">
                            {
                                reviews.slice(startPage, endPage).map(review => (
                                    <Review key={review.id} review={review as any} />
                                ))
                            }
                            <div className="roomdetail-container20">
                                {
                                    startPage !== 0 && (
                                        <div className="roomdetail-container21" onClick={pageLeft}>
                                            <LeftOutlined style={{ fontSize: '15px', color: '#008489' }} />
                                        </div>
                                    )
                                }
                                {
                                    (data?.selectRoom?.reviews.length || 0) >= endPage && (
                                        <div className="roomdetail-container21" onClick={pageRight}>
                                            <RightOutlined style={{ fontSize: '15px', color: '#008489' }} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="roomdetail-container22">
                        <div>
                            <span className="roomdetail-span4">지역정보</span>
                        </div>
                        <div id="map" className="roomdetail-container23">
                            <div className="roomdetail-container24">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="roomdetail-container26">
                    <div className="roomdetail-container27">
                        <div>
                            <span className="roomdetail-span5">
                                요금을 확인하려면 날짜를 입력하세요.
                            </span>
                        </div>
                        <div className="roomdetail-container28">
                            <StarFilled style={{ fontSize: '10px', color: '#008489' }} />
                            <span style={ { fontSize: '12px' } }>4.85</span>
                            <span style={ { color: 'gray', fontSize: '12px' } }>(후기 231개)</span>
                        </div>
                    </div>
                    <div className="roomdetail-container29"/>
                    <div className="roomdetail-container30">
                        <span style={ { fontSize: '12px' } }>날짜</span>
                    </div>
                    <div className="roomdetail-container31">
                        <div>
                            <span style={ { color: 'gray' } }>체크인</span>
                        </div>
                        <div style={ { alignItems: 'center', display: 'flex' } }>
                            <ArrowRightOutlined style={{ fontSize: '16px' }}/>
                        </div>
                        <div>
                            <span style={ { color: 'gray' } }>체크아웃</span>
                        </div>
                    </div>
                    <div className="roomdetail-container30">
                        <span style={ { fontSize: '12px' } }>인원</span>
                    </div>
                    <div className="roomdetail-container32">
                        <div>
                            <span>게스트 1명</span>
                        </div>
                        <div>
                            <DownOutlined style={{ fontSize: '16px' }}/>
                        </div>
                    </div>
                    <div className="roomdetail-container33">
                        <span style={ { fontWeight: 'bold', color: 'white' } }>
                            날짜 입력
                        </span>
                    </div>
                </div>
                <div className="roomdetail-container34">
                    <Calendars2 room={data?.selectRoom as any} />
                </div>
            </div>
        </div>
    );
};