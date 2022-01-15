import { Button } from "antd";
import { useEffect, useState } from "react";
import { Layout} from "antd";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../instance";
import DisplayPage from "./DisplayPage";
import Navbar from "../components/Navbar";
import "../css/campIntro.css";
import checkLogin from "../utility/checkLogin";
const CampIntro = () => {

    const {campId} = useParams();
    const navigate = useNavigate();
    const [campName, setCampName] = useState("");
    const [view, setView] = useState(""); // 3 views. Own, Joined, and Guest
    const [src, setSrc] = useState('https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    const [activityName, setActivityName] = useState("");
    const [startDate, setStartDate] = useState(['2022-03-28', '2022-03-30']);
    const [signupDate, setSignUpDate] = useState(['2022-01-17', '2022-03-05']);
    const [info, setInfo] = useState("");
    const [place, setPlace] = useState("");
    const [fee, setFee] = useState(2500);
    const [quota, setQuota] = useState(70);
    const [precaution, setPrecaution] = useState("");
    const [tag, setTag] = useState(5); // default 其他類別
	const [link, setLink] = useState("");

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
                    try {
                        let joinRes = await instance.get(`/camp/${campId}/registration/me/`);
                        if(joinRes.status === 200) setView("joined");
                        else setView("guest");
                    } catch (error) {
                        setView("guest");
                    }
                    
                }
            }
            else setView("guest");
            console.log("status", res.status);

            // data 都在這 如果有不懂的可以看 https://campinghelper.temp.dodofk.xyz/api/schema/swagger-ui/#/camp/camp_create 的 get camp/{id}/ schema
            setCampName(res.data.name);
            setSrc(res.data.cover_photo);
            setStartDate(res.data.camp_start_date);
            setSignUpDate(res.data.register_start_date);
            setInfo(res.data.information);
            setFee(res.data.fee);
            setQuota(res.data.quota);
            setPlace(res.data.place);
            setPrecaution(res.data.precaution);
            setLink(res.data.link);
            setFee(res.data.fee);
            setTag(res.data.category);
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            <Navbar />
            <Layout className='layout-container'>
                <DisplayPage 
                    activityName={activityName}
                    signupDate={signupDate}
                    startDate={startDate}
                    info={info}
                    place={place}
                    fee={fee}
                    quota={quota}
                    precaution={precaution}
                    src={src}
                    tag={tag}
                    link={link}
                    type='display'
                />
            </Layout>
            <div className="enterCamp-title">
                <div style={{display: 'flex'}}>
                    <Button onClick={() => {navigate('/')}}>回到主頁</Button>
                    {view === "guest" ? <Button onClick={() => {navigate(`/answer_form/${campId}`)}} type="primary">我要報名</Button> : <></>}
                    {view === "host" ? <Button onClick={() => {navigate(`/manage/${campId}`)}} type="primary">查看報名狀況</Button> : <></>}
                </div>
            </div>
        </>
    )
}

export default CampIntro;