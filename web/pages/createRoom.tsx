import React, { useReducer, createContext } from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
import CreateRoom from "../components/CreateRoom";
import { roomReducer, initialState } from "../reducer/roomReducer";




export const CreateRoomContext = createContext(null);

export default () => {
  const [state, dispatch] = useReducer(roomReducer, initialState);
  return (
    <Layout>
      <CreateRoomContext.Provider value={ [ state, dispatch ] }>
        <CreateRoom />
      </CreateRoomContext.Provider>
    </Layout>
  );
};