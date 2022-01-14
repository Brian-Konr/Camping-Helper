import { Button } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../instance";
import Navbar from "../components/Navbar";
import "../css/campIntro.css";

const CampIntro = () => {

    const {campId} = useParams();
    const navigate = useNavigate();
    const [campName, setCampName] = useState("");

    useEffect(async () => {
        try {
            let {data} = await instance.get(`/camp/${campId}`);
            console.log(data);
            // data 都在這 如果有不懂的可以看 https://campinghelper.temp.dodofk.xyz/api/schema/swagger-ui/#/camp/camp_create 的 get camp/{id}/ schema
            setCampName(data.name);
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