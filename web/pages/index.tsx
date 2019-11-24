import React from "react";
import { useUsersQuery } from "../generated/graphql";
import Layout from "../components/Layout";
import '../static/css/styles.css'
import RoomList from "../components/RoomList";

export default () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  return (
    <Layout>
      <RoomList />
    </Layout>
  );
};