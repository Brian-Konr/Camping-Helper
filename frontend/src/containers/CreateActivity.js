import { useState, useEffect } from "react";
import { message, Steps, Button } from "antd";
import Appbar from "../components/Appbar";
import { useNavigate } from "react-router-dom";
import CreateInput from "../components/CreatInput";
import StepController from "../components/StepController";
import "../css/createActivity.css"
import EditFormQuestion from "../components/EditFormQuestion";
import checkLogin from "../utility/checkLogin";
import { ClockCircleOutlined, EnvironmentOutlined, DollarOutlined, TeamOutlined, TagOutlined, BulbOutlined, WarningOutlined } from '@ant-design/icons';

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
        if(checkLogin() === false) navigate('/login');
    }, [])

    return (
        <div>
            <Appbar />
            <Steps className="stepwrapper" current={current}>
                <Step title="活動頁面設計" description="讓頁面豐富精彩&#127775;"/>
                <Step title="表單問題選擇" description="This is a description."/>
                <Step title="確認資訊與發佈" description="This is a description." />
            </Steps>
            <div className="create-wrapper" style={{display: current === 0 ? 'flex' : 'none'}}>
                <div className="page-display"style={{display: 'flex', flexDirection: 'column', flex: 7}}>
                        <img src={src} style={{width: '100%', padding: '8px', borderRadius: '16px'}}/>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <h1>營隊名稱 : {activityName}</h1>
                        <div id="tag" style={{marginRight: '0.5em',}}>
                            <TagOutlined style={{fontSize: '25px', marginRight: '8px', color: '#eb2f96'}}/>
                            <Button type="dashed" style={{borderRadius: '6px', borderColor: '#eb2f96'}}>第一類組</Button>
                        </div>
                    </div>
                    <div className="general-information">
                        <div className="detail">
                            <ClockCircleOutlined id="create-icon"/>
                            <h2>活動時間 : {date[0]} ~ {date[1]}</h2>
                        </div>
                        <div className="detail">
                            <EnvironmentOutlined id="create-icon"/>
                            <h2>活動地點 : {place}</h2>
                        </div>
                        <div className="detail">
                            <DollarOutlined id="create-icon"/>
                            <h2>活動費用 : {fee} 元</h2>
                        </div>
                        <div className="detail">
                            <TeamOutlined id="create-icon"/>
                            <h2>活動名額 : {quota} 人</h2>
                        </div>
                    </div>
                    <div className="detail-info">
                        <div className="detail-in">
                            <BulbOutlined id="info-icon"/>
                            <h2>活動資訊 :</h2>                            
                        </div>
                        <p style={{whiteSpace: 'pre-line'}}> {info} </p>
                        <div className="detail-in">
                            <WarningOutlined id="info-icon"/>
                            <h2>注意事項 :</h2>
                        </div>
                        <p style={{whiteSpace: 'pre-line'}}> {precaution} </p>
                    </div>
                </div>
                <CreateInput
                    className='inputcontent'
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
                <EditFormQuestion current={current}/>
            </div>
            <StepController current={current} setCurrent={setCurrent}/>
        </div>
    )
}

export default CreateActivity;