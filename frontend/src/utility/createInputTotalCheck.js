import nameCheck from "./checkNoRepeatName";


const totalCheck = async(activityName) => {
    /* need to check:
        1. name required and no duplicate
        2. register_start_date, register_end_date required
        3. camp_start_date required and larger than above two dates
        4. place required
        5. fee required
        6. join_user_count required 
    */
    let result = true;
    if(!activityName.length || !await nameCheck(activityName)) result = false; // 1.


    return result;

   

}

export default totalCheck;