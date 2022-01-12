import { message } from "antd";

const checkLogin = () => {
    if(!localStorage.getItem("username")) {
        message.warn({content: "Please Login First!", duration: 1.2});
        return false;
    }
    return true;
}

export default checkLogin;