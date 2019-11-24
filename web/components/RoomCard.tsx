import * as React from "react";

type Props = {
    title?: string;
};

const RoomCard: React.FunctionComponent<Props> = ({

}) => (
        <div className="w-1/4 mb-10 px-2 overflow-hidden">
            <a href="{% url 'rooms:detail' room.pk %}">
                <div className="w-full h-64 bg-cover bg-center rounded-lg mb-2 " style={ { backgroundImage:'url("https://i0.wp.com/www.valuehome.ca/wp-content/uploads/2017/05/house.jpg?resize=810%2C430&ssl=1")' } }></div>
                <div className="flex justify-between mb-2 truncate">
                    <div className="w-4/5 overflow-hidden flex">
                        집주인
                    <span className="mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1">집주인</span>
                        <span className="text-sm text-gray-600 block truncate">수원, 대한민국</span>
                    </div>
                    <span className="text-sm flex items-center">
                        <i className="fas fa-star text-red-500 text-xs mr-1"></i> 20점
                    </span>
                </div>
                <span className="text-black w-11/12 block truncate">우리집</span>
            </a>
        </div>
    );

export default RoomCard;