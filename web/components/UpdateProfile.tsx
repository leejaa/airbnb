import * as React from "react";
import { Room, useMeQuery, useSelectRoomsQuery } from "../generated/graphql";
import RoomCard from "./RoomCard";
import Link from "next/link";

type Props = {
};

const UpdateProfile: React.FunctionComponent<Props> = ({
}) => {
    const { data, loading }: any = useMeQuery();
    if ( loading || !data.me ) {
        return(
            <div>
                loading...
            </div>
        );
    }
    return (
        <div>
            UpdateProfile
        </div>
    );
}

export default UpdateProfile;