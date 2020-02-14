import React from "react";
import { useRouter } from 'next/router';
import Cookie from "js-cookie";
import Layout from "../components/Layout";
import '../static/css/styles.css';
import RoomList from "../components/RoomList";
import RoomSlide from "../components/RoomSlide";

export default () => {
  const router = useRouter();
  const { refreshToken = '' } = router.query;
  const prevRefreshToken = Cookie.get('jid');
  if ( refreshToken && prevRefreshToken !== refreshToken ) {
    Cookie.set('jid', refreshToken);
    const isServer = () => typeof window === "undefined";
    if ( !isServer() ) {
      window.location.reload();
    }
  }
  return (
    <Layout>
      <RoomList />
    </Layout>
  );
};