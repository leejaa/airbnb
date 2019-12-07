import * as React from "react";
import { Room, useMeQuery, useSelectRoomsQuery } from "../generated/graphql";
import RoomCard from "./RoomCard";

type Props = {
    room: Room
};

const Profile: React.FunctionComponent<Props> = ({
    room
}) => {
    const { data, loading } = useMeQuery();
    const { data: data2, loading: loading2 } = useSelectRoomsQuery({
        variables: {
            skip: 0,
            take: 10
        }
    });
    if ( loading || !data.me ) {
        return(
            <div>
                loading...
            </div>
        );
    }
    console.log('data2', JSON.stringify(data2));
    return (
        <div className="min-h-75vh">
            <div className="container lg:w-5/12 md:w-1/2 xl:w-1/4 mx-auto my-10 flex flex-col items-center border p-6 border-gray-400">

                <div className="{{h_and_w|default:'h-20 w-20'}} rounded-full bg-cover" style={{ backgroundImage: `url("http://www.okiz.co.kr/shopimages/mizpark/mobile/6/330186_represent")` }}>
                </div>

                <div className="flex items-center">
                    <span className="text-3xl mt-1">{ data.me.name }</span>
                    <i className="fas fa-check-circle text-teal-400 ml-1"></i>
                </div>

                <span className="text-lg mb-5">{ data.me.email }</span>

                <a href="{% url 'users:update' %}" className="btn-link">프로필 수정</a>

            </div>
            <h3 className="mb-12 text-2xl text-center">{ data.me.name }'s Rooms</h3>
            {
                room && (
                    <div className="container mx-auto pb-10 ">
                        <div className="flex flex-wrap -mx-40 mb-10">
                            <RoomCard room={room} />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Profile;