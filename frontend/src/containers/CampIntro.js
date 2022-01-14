import { Button } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../instance";
import Navbar from "../components/Navbar";
import "../css/campIntro.css";
import checkLogin from "../utility/checkLogin";
const CampIntro = () => {

    const {campId} = useParams();
    const navigate = useNavigate();
    const [campName, setCampName] = useState("");
    const [view, setView] = useState(""); // 3 views. Own, Joined, and Guest

    useEffect(async () => {

        try {
            let res = await instance.get(`/camp/${campId}/`);
            const loginCheck = await checkLogin();
            if(loginCheck) {
                console.log(res.data);
                if(res.data.host === parseInt(localStorage.getItem("userId"))) {
                    // host is entering this page, so he / she is not going to see the signup button. In contrast, they need to view current signup form
                    setView("host");
                    console.log("host");
                }
                else {
                    // need to check if the user has joined or not
                }
            }
            else setView("guest");
            console.log("status", res.status);

            // data 都在這 如果有不懂的可以看 https://campinghelper.temp.dodofk.xyz/api/schema/swagger-ui/#/camp/camp_create 的 get camp/{id}/ schema
            setCampName(res.data.name);
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            <Navbar />
            <div className="enterCamp-title">
                <h1>{`You are viewing ${campName}`}</h1>
                <div style={{display: 'flex'}}>
                    <Button onClick={() => {navigate('/')}}>回到主頁</Button>
                    <Button onClick={() => {navigate(`/answer_form/${campId}`)}} type="primary">我要報名</Button>
                </div>
            </div>
        </>
    )
}

export default CampIntro;