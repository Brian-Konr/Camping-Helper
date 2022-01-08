import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, message, Modal } from "antd";
import axios from 'axios';
import instance from '../instance';

const Activation = () => {
    const navigate = useNavigate();
    const [isModalVisible, setIsModelVisible] = useState(false);
    const { uid, token } = useParams();
    const activate = async() => {
        try {
            let res = await instance.post('/auth/users/activation/', {
                uid: uid,
                token: token
            });
            if(res.response.status == 204) setIsModelVisible(true);
        } catch(error) {
            if(error.response.status == 403 || error.response.status == 400) console.log("activation failed!")
        }
    }
    activate();
    return(
        <div>
            <Modal 
                closable={false} 
                title="帳號驗證確認" 
                visible={isModalVisible}
                footer={[
                    <Button onClick={() => {navigate('/login')}}>
                        OK
                    </Button>
                ]}
            >
                <p>驗證成功!</p>
                <p>系統將導至登入頁面...</p>
            </Modal>
            <ul>
                <li>{`uid: ${uid}`}</li>
                <li>{`token: ${token}`}</li>
            </ul>
        </div>
    )
}

export default Activation;