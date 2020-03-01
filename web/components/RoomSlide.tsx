import React, { useState, useRef, useCallback, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelectTopRoomsQuery } from "../generated/graphql";
import RoomCard from "./RoomCard";
import { Icon } from "antd";

type Props = {
};

const RoomSlide: React.FunctionComponent<Props> = ({
}) => {
    const { data, loading } = useSelectTopRoomsQuery();
    const leftArrow = useMemo(() => <div style={ 
        { borderRadius: 30, width: 30, height: 30, backgroundColor: '#FFFFFF', borderColor: 'black', boxShadow: '1.5px 1.5px 1.5px 1.5px gray',
          zIndex: 1, position: 'absolute', left: 0, top: 110, cursor: 'pointer' }
     }><div style={{ position: 'relative' }}><Icon type="left" style={{ position: 'absolute', top: 8, left: 5, fontSize: 15 }} /></div></div>, []);
    const rightArrow = useMemo(() => <div style={ 
        { borderRadius: 30, width: 30, height: 30, backgroundColor: '#FFFFFF', borderColor: 'black', boxShadow: '1.5px 1.5px 1.5px 1.5px gray', 
          zIndex: 1, position: 'absolute', right: 3, top: 110, cursor: 'pointer' }
    }><div style={{ position: 'relative' }}><Icon type="right" style={{ position: 'absolute', top: 8, left: 5, fontSize: 15 }} /></div></div>, []);
    return (
        <Carousel
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            customLeftArrow={leftArrow}
            customRightArrow={rightArrow}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {
                data?.selectTopRooms?.map(item => (
                    <div key={ item.id }>
                        <RoomCard room={ item as any } width={"full"} />
                    </div>
                ))
            }
        </Carousel>
    );
}

export default RoomSlide;