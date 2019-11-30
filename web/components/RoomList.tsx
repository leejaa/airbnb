import { CircularProgress, List, ListItem, Paper } from "@material-ui/core";
import React, { useEffect, useCallback, useState, useRef } from "react";
import { Waypoint } from "react-waypoint";
import RoomCard from "./RoomCard";
import { useSelectRoomsQuery } from "../generated/graphql";

type Props = {
};

const RoomList: React.FunctionComponent<Props> = ({

}) => {
    const { data, loading, fetchMore, networkStatus, refetch } = useSelectRoomsQuery({
        variables: { first: 0, cursor: 12 },
        notifyOnNetworkStatusChange: true,
    });
    const countRef = useRef([]);
    const [ scrollHeight, setScrollHeight ] = useState(0);

    if ( !data ) {
        return (
            <div>로딩중...</div>
        );
    }

    const onScroll = useCallback(() => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 10) {
            setScrollHeight( document.documentElement.scrollHeight - 50 );
            const lastId = data.selectRooms[data.selectRooms.length - 1].id;
            if (!countRef.current.includes(lastId)) {
                fetchMore({
                    variables: {
                        first: 0,
                        cursor: data.selectRooms.length + 20
                    },
                    updateQuery: (pv, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                            return pv;
                        }
                        return {
                            __typename: "Room",
                            selectRooms: [
                                ...fetchMoreResult.selectRooms
                            ]
                        };
                    }
                });
              countRef.current.push(lastId);
            }
        }
      }, [data.selectRooms.length]);
    
      useEffect(() => {
        window.addEventListener('scroll', onScroll);
        window.scrollTo(0, scrollHeight);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
      }, [data.selectRooms.length]);

    return (
        <div className="container mx-auto pb-10">
            <div className="rounded-xl -mx-40 h-50vh mb-24 bg-cover bg-center">
                <div className="flex flex-wrap mx-5 my-16 mb-10 mt-24">
                    {
                        loading ? (
                            <div>로딩중...</div>
                        ) : (
                            data.selectRooms.map( ( room, i ) => (
                                <RoomCard key={ room.id } room={ room as any }/>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default RoomList;