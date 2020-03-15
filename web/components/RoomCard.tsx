import React, { useState, useRef, useCallback } from "react"
import { Room } from "../generated/graphql";
import 'antd/dist/antd.css';
import { Carousel, Icon } from 'antd';
import '../assets/scss/room.scss';
import Router from 'next/router';
type Props = {
    room: Room,
    width: string
};

const RoomCard: React.FunctionComponent<Props> = ({
    room,
    width
}) => {
    const [isShowArrow, setIsShowArrow] = useState(false);
    const [isHoverArrowLeft, setIsHoverArrowLeft] = useState(false);
    const [isHoverArrowRight, setIsHoverArrowRight] = useState(false);
    const carouselRef : any = useRef();
    const fnNextPrev = useCallback(direction => {
        switch (direction) {
            case 'right':
                carouselRef.current.next();
                break;
            case 'left':
                carouselRef.current.prev();
                break;
            default:
                break;
        }
    }, []);
    const goDetail = useCallback(() => {
        Router.push({
            pathname: '/roomDetail',
            query: {
                id: room?.id
            }
        });
    }, []);
    return (
        <div
            className={`w-${width} mb-10 px-2 overflow-hidden`}
            style={{ position: 'relative' }} 
            onMouseOver={() => setIsShowArrow(true)} 
            onMouseLeave={() => setIsShowArrow(false)}
            onClick={goDetail}
            >
            <Carousel
                ref={carouselRef}
                autoplay={true}
            >
                {
                    room?.photoConnection.map((photo, index) => (
                        <div key={index}>
                            <div className="w-full h-64 bg-cover bg-center rounded-lg mb-2 " style={{ backgroundImage: `url("${room.photoConnection[index].file}")` }}></div>
                        </div>
                    ))
                }
            </Carousel>
            <div
                style={{
                    borderWidth: 1, borderRadius: 30, width: 25, height: 25, backgroundColor: '#FFFFFF', zIndex: 1, position: 'absolute',
                    top: 108, left: 15, paddingBottom: 8, paddingLeft: 3, display: `${isShowArrow ? 'inline' : 'none'}`, cursor: 'pointer',
                    boxShadow: `${isHoverArrowLeft ? '1.5px 1.5px 1.5px 1.5px gray' : ''}`
                }}
                onMouseOver={() => setIsHoverArrowLeft(true)}
                onMouseLeave={() => setIsHoverArrowLeft(false)}
            >
                <div style={{ position: 'relative' }} onClick={ () => fnNextPrev('left') }><Icon type="left" style={{ position: 'absolute', top: 5, fontSize: isHoverArrowLeft ? 18 : 15 }} /></div>
            </div>
            <div
                style={{
                    borderWidth: 1, borderRadius: 30, width: 25, height: 25, backgroundColor: '#FFFFFF', zIndex: 1, position: 'absolute',
                    top: 108, right: 15, paddingBottom: 8, paddingLeft: 3, display: `${isShowArrow ? 'inline' : 'none'}`, cursor: 'pointer',
                    boxShadow: `${isHoverArrowRight ? '1.5px 1.5px 1.5px 1.5px gray' : ''}`
                }}
                onMouseOver={() => setIsHoverArrowRight(true)}
                onMouseLeave={() => setIsHoverArrowRight(false)}

            >
                <div style={{ position: 'relative' }} onClick={ () => fnNextPrev('right') }><Icon type="right" style={{ position: 'absolute', top: 5, fontSize: isHoverArrowRight ? 18 : 15 }} /></div>
            </div>
            <div className="flex justify-between mb-2 truncate">
                <div className="w-4/5 overflow-hidden flex">
                    {room.name}
                    <span className="mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1">집주인</span>
                    <span className="text-sm text-gray-600 block truncate">{`${room.city} ${room.address}`}</span>
                </div>
                <span className="text-sm flex items-center">
                    <i className="fas fa-star text-red-500 text-xs mr-1"></i> {room.price}
                </span>
            </div>
            <span className="text-black w-11/12 block truncate">{room.description}</span>
        </div>
    );
}

export default RoomCard;