import React, { useState, useRef, useCallback, useMemo } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Calendar } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Room } from "../generated/graphql";
import '../assets/scss/room.scss';
type Props = {
};

const Calendars: React.FunctionComponent<Props> = ({
}) => {
    const dateCellRender = useCallback((date) => {
        return (
            <div className="calendar-container2">

            </div>
        );
    }, []);
    const dateFullCellRender = useCallback((date) => {
        return(
            <div className="calendar-container1">

            </div>
        );
    }, []);
    return (
        <Calendar
            dateCellRender={dateCellRender}
            dateFullCellRender={dateFullCellRender}
        />
    );
}

export default Calendars;