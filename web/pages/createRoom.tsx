import React, { useReducer, createContext } from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
import CreateRoom from "../components/CreateRoom";
import { roomReducer, initialState } from "../reducer/roomReducer";




export const CreateRoomContext : any = createContext(null);

export default () => {
  let savedInitialState = initialState;
  if ( typeof window !== 'undefined' ) {
    try {
      savedInitialState = JSON.parse( `${window.localStorage.getItem( 'state' )}` );
    } catch (error) {
      console.log( error );
    }
  }
  const [state, dispatch] = useReducer(roomReducer, savedInitialState);
  return (
    <Layout>
      <CreateRoomContext.Provider value={ [ state, dispatch ] }>
        <CreateRoom />
      </CreateRoomContext.Provider>
    </Layout>
  );
};