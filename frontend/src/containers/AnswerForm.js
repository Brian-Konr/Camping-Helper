import { useState, useEffect } from "react";
import instance from "../instance";
import { useNavigate, useParams } from "react-router-dom";
import checkLogin from "../utility/checkLogin";

const AnswerForm = () => {
    const navigate = useNavigate();
    const {campId} = useParams();
    const [campName, setCampName] = useState("");

    useEffect(async () => {
        if(checkLogin() === true) {
            try {
                let {data} = await instance.get(`/camp/${campId}`);
                console.log(data);
                setCampName(data.name);
            } catch (error) {
                console.log(error);
            }
        }
        else navigate('/login');
    }, [])

    return (
        <>
            <h1>{`Answering form of ${campName}`}</h1>
        </>
    )
}

export default AnswerForm;