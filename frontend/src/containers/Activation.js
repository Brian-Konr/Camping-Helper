import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import axios from 'axios';
import instance from '../instance';

const Activation = () => {
    const { uid, token } = useParams();

    const activate = async() => {
        try {
            let res = await instance.post('/auth/users/activation/', {
                uid: uid,
                token: token
            });
            console.log(res.data);
        } catch(error) {
            if(error.response.status == 403) console.log("The user has been activated");
        }
    }
    activate();
    return(
        <div>
            <ul>
                <li>{`uid: ${uid}`}</li>
                <li>{`token: ${token}`}</li>
            </ul>
        </div>
    )
}

export default Activation;