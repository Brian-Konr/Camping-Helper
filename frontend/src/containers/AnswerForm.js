import { useState, useEffect } from "react";
import instance from "../instance";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import checkLogin from "../utility/checkLogin";
import CompleteForm from "../components/CompleteForm";

const titleStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: '500',
    padding: '16px',
    textAlign: 'center',
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
            <div style={titleStyle}>
                <h1>{`Answering form of ${campName}`}</h1>
            </div>
            <CompleteForm />
            {/* <FormInput value={name} setValue={setName} questionName={"姓名"} placeholder={"請輸入你的名字"} maxLength={10}/> */}
        
        </>
    )
}

export default AnswerForm;