import nameCheck from "./checkNoRepeatName";
import moment from 'moment';

const dateFormat = "YYYY-MM-DD";
const totalCheck = async(activityName, startDate, signupDate) => {
    /* need to check:
        1. name required and no duplicate
        3. camp_start_date required and larger than above two dates
        6. join_user_count required
    */
    let result = true;

    // 1.
    if(!activityName.length || !await nameCheck(activityName)) result = false;
    
    // 3.
    let signupDue = moment(signupDate[1]).format(dateFormat);
    let startDay = moment(startDate[0]).format(dateFormat);
    if(moment(signupDue).isSameOrAfter(startDay)) result = false;

    return result;

   

}

export default totalCheck;