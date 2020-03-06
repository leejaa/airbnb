import React, { useState } from "react";
import { useRouter } from 'next/router';
import Cookie from "js-cookie";
import Layout from "../components/Layout";
import '../assets/scss/room.scss';
import RoomList from "../components/RoomList";
import RoomdetailPicture from "../components/RoomdetailPicture";
import { useSelectRoomQuery } from "../generated/graphql";
const isServer = () => typeof window === "undefined";
const initialHeight = 800;
export default () => {
    const router: any = useRouter();
    const { data, loading } = useSelectRoomQuery({
        variables: {
            id: parseInt(router?.query?.id)
        }
    });
    if ( loading ) {
        return (
            <div>로딩중...</div>
        );
    }
    return (
        <div style={ { height: `${isServer() ? initialHeight : window.innerHeight}px` } }>
            <div className="roomdetail-container1">

            </div>
            <div className="roomdetail-container2">
                <RoomdetailPicture room={data?.selectRoom as any}/>
            </div>
        </div>
    );
};