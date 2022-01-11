import { useState, useEffect } from "react";
import { message, Steps, Button } from "antd";
import Appbar from "../components/Appbar";
import { useNavigate } from "react-router-dom";
import CreateInput from "../components/CreatInput";
import StepController from "../components/StepController";
import "../css/createActivity.css"
import EditFormQuestion from "../components/EditFormQuestion";
const {Step} = Steps;

const CreateActivity = () => {

    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);

    const [src, setSrc] = useState('https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    const [activityName, setActivityName] = useState("2022 台灣大學資管營");
    const [date, setDate] = useState(['2022-01-01', '2022-01-3']);
    const [info, setInfo] = useState("活動資訊");
    const [place, setPlace] = useState("活動地點");
    const [fee, setFee] = useState(2500);
    const [quota, setQuota] = useState(70);
    const [precaution, setPrecaution] = useState("注意事項");

    useEffect(() => {
        if(!localStorage.getItem("username")) {
            message.warn({content: "Please Login First!", duration: 1.2});
            navigate('/login');
        }
    }, [])

    return (
        <div>
            <Appbar />
            <Steps current={current}>
                <Step title="活動頁面設計" description="讓頁面豐富精彩&#127775;"/>
                <Step title="表單問題選擇" description="This is a description."/>
                <Step title="確認資訊與發佈" description="This is a description." />
            </Steps>
            <div className="wrapper" style={{display: current === 0 ? 'flex' : 'none'}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '67.3vw'}}>
                    <img src={src} width={'100%'} />
                    <h1>營隊名稱: {activityName}</h1>
                    <h2>From {date[0]} to {date[1]}</h2>
                    <p>活動資訊:</p>
                    {/*whiteSpace 可以讓 textarea 根據換行做輸出 */}
                    <p style={{whiteSpace: 'pre-line'}}> {info} </p>
                    <h2>活動地點: {place}</h2>
                    <h2>活動費用: {fee}</h2>
                    <h2>活動名額: {quota}</h2>
                    <p>注意事項:</p>
                    <p style={{whiteSpace: 'pre-line'}}> {precaution} </p>
                </div>
                <CreateInput
                    activityName={activityName}  
                    date={date}
                    info={info}
                    place={place}
                    fee={fee}
                    quota={quota}
                    precaution={precaution}
                    setActivityName={setActivityName}
                    setDate={setDate}
                    setInfo={setInfo}
                    setPlace={setPlace}
                    setFee={setFee}
                    setQuota={setQuota}
                    setPrecaution={setPrecaution}
                    setSrc={setSrc}
                />
            </div>
            <div className="form-question" style={{display: current === 1 ? 'block' : 'none'}}>
                <EditFormQuestion />
            </div>
            <StepController current={current} setCurrent={setCurrent}/>
        </div>
    )
}

export default CreateActivity;