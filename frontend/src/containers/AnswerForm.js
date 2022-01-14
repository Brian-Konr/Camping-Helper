import { useState, useEffect } from "react";
import instance from "../instance";
import { useNavigate, useParams } from "react-router-dom";
import { Card, message, Divider } from "antd";
import checkLogin from "../utility/checkLogin";
import CompleteForm from "../components/CompleteForm";
import Navbar from '../components/Navbar';

const titleStyle = {
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '0.6vh'
}
const questionCard = {
    margin:'auto',
    width: '50vw',
    maxHeight: '10vh',
    position: 'relative',
    padding: '1vw',
    backgroundColor: '#fff',
    borderRadius: '24px',
    boxShadow: '1px 1px 5px 3px #4faaf5bd'
}

const questions = [1];
const AnswerForm = () => {
    const navigate = useNavigate();
    const {campId} = useParams();
    const [campName, setCampName] = useState("");

    useEffect(async () => {
        if(checkLogin()) {
            try {
                let {data} = await instance.get(`/camp/${campId}`);
                console.log(data);
                setCampName(data.name);
            } catch (error) {
                console.log(error);
            }
        }
        else {
            message.warn("請先登入後再報名", 1.2);
            navigate('/login');
        }
    }, [])

    const [name, setName] = useState("");

    return (
        <>
            <Navbar />
            <div style={{minHeight: '4vh', backgroundColor: '#fff'}}></div>
            <div style={questionCard}>
                <h1 style={titleStyle}>{`${campName}報名表單`}</h1>
            </div>
            <div style={{minHeight: '4vh', backgroundColor: '#fff'}}></div>
            <CompleteForm />
            {/* <FormInput value={name} setValue={setName} questionName={"姓名"} placeholder={"請輸入你的名字"} maxLength={10}/> */}
        
        </>
    )
}

export default AnswerForm;