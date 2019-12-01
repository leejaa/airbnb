import React, { useState } from "react";
import Layout from "../components/Layout";
import { useLoginMutation, MeQuery, MeDocument } from "../generated/graphql";
import { setAccessToken } from "../lib/accessToken";
import Router from "next/router";
import Login from "../components/Login";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  return (
    <Layout>
      <Login />
    </Layout>
  );
};