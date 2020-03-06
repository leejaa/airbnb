import React, { useState, useRef, useCallback } from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Room } from "../generated/graphql";
import '../assets/scss/room.scss';
type Props = {
    room: Room
};

const RoomdetailPicture: React.FunctionComponent<Props> = ({
    room
}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return (
        <div className="roomdetail-container4">
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                touch={true}
                indicators={false}
            >
                {
                    room?.photoConnection.map(photo => (
                        <Carousel.Item>
                            <div>
                                <div style={ { width: '100%', height: '260px' , backgroundImage: `url("${photo.file}")` } }></div>
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <div className="roomdetail-container5">
                <span className="roomdetail-span1">{`${index}/${room?.photoConnection.length}`}</span>
            </div>
        </div>
    );
}

export default RoomdetailPicture;