import React, { useState } from "react";
import Layout from "../components/Layout";
import { useLoginMutation, MeQuery, MeDocument } from "../generated/graphql";
import { setAccessToken } from "../lib/accessToken";
import Router from "next/router";
import Login from "../components/Login";
import Join from "../components/Join";

export default () => {

  return (
    <Layout>
      <Join />
    </Layout>
  );
};