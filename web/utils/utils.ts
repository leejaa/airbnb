import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import _ from "lodash";
let moment = extendMoment(Moment);
moment.locale('ko');

export const getDates = ({startDate, endDate} : any) => {
    const dateArray = [];
    let currentDate : any = moment(startDate);
    while (currentDate <= moment(endDate)) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}