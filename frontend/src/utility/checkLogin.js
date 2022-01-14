import instance from "../instance";

const checkLogin = async () => {
    // let storedToken = localStorage.getItem("token");
    // if(storedToken) {
    //     try {
    //         let res = await instance.post("/auth/jwt/verify/", {
    //             token: storedToken
    //         })
    //         console.log(res.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    if(!localStorage.getItem("username")) return false;
    return true;
}

export default checkLogin;