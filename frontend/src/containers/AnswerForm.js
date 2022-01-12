import { useState, useEffect } from "react";
import instance from "../instance";
import { useParams } from "react-router-dom";

const AnswerForm = () => {
    const {campId} = useParams();
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
        <>
            <h1>{`Answering form of ${campName}`}</h1>
        </>
    )
}

export default AnswerForm;