import * as React from "react";
import { Room } from "../generated/graphql";

type Props = {
    room: Room
};

const RoomCard: React.FunctionComponent<Props> = ({
    room
}) => {
    return (
        <div className="w-1/4 mb-10 px-2 overflow-hidden">
            <a href="">
                <div className="w-full h-64 bg-cover bg-center rounded-lg mb-2 " style={ { backgroundImage:`url("${room.photoConnection[0].file}")` } }></div>
                <div className="flex justify-between mb-2 truncate">
                    <div className="w-4/5 overflow-hidden flex">
                        { room.name }
                    <span className="mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1">집주인</span>
                        <span className="text-sm text-gray-600 block truncate">{ `${ room.city } ${ room.address }` }</span>
                    </div>
                    <span className="text-sm flex items-center">
                        <i className="fas fa-star text-red-500 text-xs mr-1"></i> { room.price }
                    </span>
                </div>
                <span className="text-black w-11/12 block truncate">{ room.description }</span>
            </a>
        </div>
    );
}

export default RoomCard;