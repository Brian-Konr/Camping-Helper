const checkLogin = () => {
    if(!localStorage.getItem("username")) return false;
    return true;
}

export default checkLogin;