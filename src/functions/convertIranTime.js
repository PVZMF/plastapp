import moment from "jalali-moment";
import { toPersianNumber } from "./numbers";
export const toPersionDate=(date)=>{
    let justDate = new Date(date.slice(0,10));
    return toPersianNumber(moment(justDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'))
}