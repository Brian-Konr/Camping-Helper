import { useState } from "react";
import Appbar from "../components/Appbar";
import CreateInput from "../components/CreatInput";
const CreateActivity = () => {
    
    const [src, setSrc] = useState('https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    const [activityName, setActivityName] = useState("2022 台灣大學資管營");
    const [date, setDate] = useState(['2022-01-01', '2022-01-3']);
    const [info, setInfo] = useState("活動資訊");
    const [place, setPlace] = useState("活動地點");
    const [fee, setFee] = useState(2500);
    const [quota, setQuota] = useState(70);
    const [precaution, setPrecaution] = useState("注意事項");

    return (
        <div>
            <Appbar />
            <div className="wrapper">
                {/* <div className="headerPic">
                    <img src='https://images.unsplash.com/photo-1634913940785-c17c505a9c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'></img>
                </div> */}
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
        </div>
    )
}

export default CreateActivity;