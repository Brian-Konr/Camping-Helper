import { Button } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../instance";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
=======
import "../css/campIntro.css";

>>>>>>> 548a41ac6ecc5a9e807ab79cecb7e5884ce22257
const CampIntro = () => {

    const {campId} = useParams();
    const navigate = useNavigate();
    const [campName, setCampName] = useState("");

    useEffect(async () => {
        try {
            let {data} = await instance.get(`/camp/${campId}`);
            console.log(data);
            setCampName(data.name);
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
<<<<<<< HEAD
        <>
            <Navbar />
=======
        <div className="enterCamp-title">
>>>>>>> 548a41ac6ecc5a9e807ab79cecb7e5884ce22257
            <h1>{`You are viewing ${campName}`}</h1>
            <div style={{display: 'flex'}}>
                <Button onClick={() => {navigate('/')}}>回到主頁</Button>
                <Button onClick={() => {navigate(`/answer_form/${campId}`)}} type="primary">我要報名</Button>
            </div>
        </div>
    )
}

export default CampIntro;