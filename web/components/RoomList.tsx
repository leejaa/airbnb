import React, { useEffect, useCallback, useState, useRef } from "react";
import RoomCard from "./RoomCard";
import RoomSlide from "./RoomSlide";
import { useSelectRoomsQuery, useSelectTopRoomsQuery } from "../generated/graphql";

type Props = {
};

const RoomList: React.FunctionComponent<Props> = ({

}) => {
    const { data, loading, fetchMore, networkStatus, refetch } = useSelectRoomsQuery({
        variables: { skip: 0, take: 12 },
        notifyOnNetworkStatusChange: true,
    });
    const { data : data2 } = useSelectTopRoomsQuery();
    if (!data || !data2) {
        return (
            <div>로딩중...</div>
        );
    }
    const onScroll = useCallback(() => {
        if (window.scrollY + document.documentElement?.clientHeight > document.documentElement?.scrollHeight - 10) {
            fetchMore({
                variables: {
                    skip: data.selectRooms.length,
                    take: data.selectRooms.length + 4
                },
                updateQuery: (pv, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return pv;
                    }
                    return {
                        // __typename: "Room",
                        selectRooms: [
                            ...pv.selectRooms,
                            ...fetchMoreResult.selectRooms
                        ]
                    };
                }
            });
        }
    }, [ data.selectRooms.length ]);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
    }, [data.selectRooms.length]);
    return (
        <div className="container mx-auto pb-10">
            <div className="rounded-xl -mx-40 h-50vh mb-24 bg-cover bg-center">
                <div className="mx-5 my-16 mb-10 mt-24">
                    <RoomSlide />
                    <div className="flex flex-wrap">
                        {
                            data.selectRooms.map((room, i) => (
                                <RoomCard room={room as any} key={ i } width={"1/4"}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomList;