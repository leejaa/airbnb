import React, { useState } from "react";
import { useRouter } from 'next/router';
import Cookie from "js-cookie";
import Layout from "../components/Layout";
import '../assets/scss/room.scss';
import RoomList from "../components/RoomList";
import { useSelectRoomQuery } from "../generated/graphql";
const isServer = () => typeof window === "undefined";

export default () => {
    const [ height, setHeight ] = useState(0);
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
    if ( !isServer() && height === 0 ) {
        setHeight(window.innerHeight);
    }
    console.log('height', height);
    return (
        <div style={ { height: `${height}px` } }>
            <div className="roomdetail-container1">

            </div>
        </div>
    );
};