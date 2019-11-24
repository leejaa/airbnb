import * as React from "react";
import RoomCard from "./RoomCard";

type Props = {
    title?: string;
};

const RoomList: React.FunctionComponent<Props> = ({

}) => (
        <div className="container mx-auto pb-10">
            <div className="rounded-xl -mx-40 h-50vh mb-24 bg-cover bg-center">
                <div className="flex flex-wrap mx-5 my-16 mb-10">
                    <RoomCard />
                </div>
            </div>
        </div>
    );

export default RoomList;