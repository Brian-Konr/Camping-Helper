import { useState, useEffect } from "react";
import { message, Steps, Button, Divider, Tag, Input, Radio, Layout, Modal } from "antd";
import moment from 'moment';
// import Appbar from "../components/Appbar";
import { Content } from "antd/lib/layout/layout";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import CreateInput from "../components/CreatInput";
import StepController from "../components/StepController";
import "../css/createActivity.css"
import EditFormQuestion from "../components/EditFormQuestion";
import checkLogin from "../utility/checkLogin";
import totalCheck from "../utility/createInputTotalCheck";
import axios from 'axios';
import instance from "../instance";
import { ClockCircleOutlined, EnvironmentOutlined, DollarOutlined, TeamOutlined, TagOutlined, BulbOutlined, WarningOutlined } from '@ant-design/icons';

const {Step} = Steps;
const dateFormat = "YYYY-MM-DD";
const dateTimeFormat = "YYYY-MM-DD HH:mm:ss"
const CreateActivity = () => {

    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);
	const [success, setSuccess] = useState(false); // true when post succeeds

    const [src, setSrc] = useState('https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
	const [file, setFile] = useState({}); // set image file
    const [activityName, setActivityName] = useState("");
    const [startDate, setStartDate] = useState(['2022-03-28', '2022-03-30']);
    const [signupDate, setSignUpDate] = useState(['2022-01-17', '2022-03-05']);
    const [info, setInfo] = useState("");
    const [place, setPlace] = useState("");
    const [fee, setFee] = useState(2500);
    const [quota, setQuota] = useState(70);
    const [precaution, setPrecaution] = useState("");
	const [link, setLink] = useState("");

    const [questionArr, setQuestionArr] = useState([]);

    const [submit, setSubmit] = useState(false);
	const [btnDisable, setBtnDisable] = useState(false);

    const [check, setCheck] = useState(false);

	const [tag, setTag] = useState(5); // default 其他類別
	const [shortDescription, setShortDescription] = useState("");
    

    useEffect(async() => {
		let loginCheck = await checkLogin();
        if(!loginCheck) {
            message.warn("請先登入再創辦活動!", 1.2);
            navigate('/login')
        };
    }, [])

    useEffect(async() => {
        if(submit) {
			let formData = new FormData();
			formData.append('name', activityName);
			if(info.length !== 0) formData.append('information', info);
			console.log(Object.keys(file).length);
			if(Object.keys(file).length !== 0) formData.append('cover_photo', file);
			formData.append("camp_start_date", moment(startDate[0]).format(dateFormat));
			formData.append("camp_end_date", moment(startDate[1]).format(dateFormat));
			formData.append("register_start_date", moment(signupDate[0]).format(dateTimeFormat));
			formData.append("register_end_date", moment(signupDate[1]).format(dateTimeFormat));
			formData.append("place", place);
			if(link.length !== 0) formData.append("link", link);
			formData.append("fee", fee);
			formData.append("quota", quota);
			if(precaution.length !== 0) formData.append("precaution", precaution);
			console.log(questionArr);
			if(questionArr.length !== 0) {
                console.log(JSON.stringify(questionArr));
				formData.append('questions', JSON.stringify(questionArr));
			}
			if(shortDescription.length !== 0) formData.append("short_description", shortDescription);
			formData.append("category", tag);

			submitForm(formData);
        }
    }, [submit])

	const submitForm = async(form) => {
		const config = {
			headers:{
				'Content-Type': 'multipart/form-data'
			}
		}
		console.log(form);
		try {
			let res = await instance.post('/camp/', form, config);
			console.log(res.data);
			if(res.status === 201) {
				setBtnDisable(true);
				setSuccess(true);
			}
		} catch (error) {
			console.log(error);
            if(error.response.status === 413) message.warn("圖片檔過大，請重新挑選圖片!", 1.5);
			setBtnDisable(false);
		}
	}

	useEffect(() => {
		console.log(file);
	}, [file])

    useEffect(async () => {
        if(check) {

            let pass = await totalCheck(activityName, startDate, signupDate, place);
            if(pass) setCurrent(prev => prev + 1);
        }
    }, [check])

    useEffect(() => {
        console.log("startDateArr", startDate);
    }, [startDate])

    return (
        <div>
            <Navbar />
            <Layout className='layout-container'>
                <Steps className="stepwrapper" current={current}>
                    <Step title="活動頁面設計" description="讓頁面豐富精彩&#127775;"/>
                    <Step title="表單問題選擇" description="想問學員甚麼問題呢~"/>
                    <Step title="確認資訊與送出" description="加點標籤讓活動更吸睛" />
                </Steps>
                <div className="create-wrapper" style={{display: current === 0 ? 'flex' : 'none'}}>
                    <div className="page-display"style={{display: 'flex', flexDirection: 'column', flex: 7}}>
                        <div id="img-container" style={{maxHeight: '70vh', overflowY: 'hidden', borderRadius: '16px'}}>
                            <img src={src} style={{width: '100%', padding: '0px', borderRadius: '16px'}}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <h1>營隊名稱 : {activityName}</h1>
                            <div id="tag" style={{marginRight: '0.5em',}}>
                                <TagOutlined style={{fontSize: '25px', marginRight: '8px', color: '#eb2f96'}}/>
                                <Button type="dashed" style={{borderRadius: '6px', borderColor: '#eb2f96'}}>第一類組</Button>
                            </div>
                        </div>
                        <div>
                            <Tag icon={<ClockCircleOutlined />} color="warning" style={{fontSize: '16px', margin: '1vw', size: 'large'}}>
                                報名期間 : {moment(signupDate[0]).format(dateFormat)} ~ {moment(signupDate[1]).format(dateFormat)}
                            </Tag>
                        </div>
                        <div className="general-information">
                            <div className="detail">
                                <ClockCircleOutlined id="create-icon"/>
                                <h2>活動時間 : {moment(startDate[0]).format(dateFormat)} ~ {moment(startDate[1]).format(dateFormat)}</h2>
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
                            <Divider id="info-divider" style={{
                                height: '2px',
                                width: '100%',
                                display: 'block',
                                backgroundColor: 'hsl(214, 30%, 67%)'}}/>
                            <Content className="content-container">
                                <p style={{whiteSpace: 'pre-line'}}> {info} </p>
                            </Content>
                            <div className="detail-in">
                                <WarningOutlined id="info-icon"/>
                                <h2>注意事項 :</h2>
                            </div>
                            <Divider id="info-divider" style={{
                                height: '2px',
                                width: '100%',
                                display: 'block',
                                backgroundColor: 'hsl(214, 30%, 67%)'}}/>
                            <Content className="content-container">
                                <p style={{whiteSpace: 'pre-line'}}> {precaution} </p>
                            </Content>
                        </div>
                    </div>
                    <CreateInput
                        className='inputcontent'
                        activityName={activityName}
                        signupDate={signupDate}
                        startDate={startDate}
                        info={info}
                        place={place}
                        fee={fee}
                        quota={quota}
                        precaution={precaution}
                        setActivityName={setActivityName}
                        setStartDate={setStartDate}
                        setInfo={setInfo}
                        setPlace={setPlace}
                        setFee={setFee}
                        setQuota={setQuota}
                        setPrecaution={setPrecaution}
                        setSrc={setSrc}
                        setSignUpDate={setSignUpDate}
						setFile={setFile}
                    />
                </div>

                <div className="form-question" style={{display: current === 1 ? 'block' : 'none'}}>
                    <EditFormQuestion current={current} setQuestionArr={setQuestionArr}/>
                </div>

				<div style={{display: current === 2 ? 'flex': 'none'}}>
					<Input 
						placeholder="請簡短地敘述您的營隊!"
						value={shortDescription}
						onChange={(e) => {setShortDescription(e.target.value)}}
						maxLength={20}
					/>
					<Radio.Group onChange={(e) => {setTag(e.target.value)}} value={tag}>
						<Radio value={1}>文法類</Radio>
						<Radio value={2}>財經類</Radio>
						<Radio value={3}>理工類</Radio>
						<Radio value={4}>醫護類</Radio>
						<Radio value={5}>其他</Radio>
					</Radio.Group>
					<Input 
						type="url"
						placeholder="相關資訊連結"
						onChange={(e) => setLink(e.target.value)}
						value={link}
					/>
				</div>

				<StepController
					setCheck={setCheck}
					current={current} 
					setCurrent={setCurrent} 
					submit={submit}
					setSubmit={setSubmit}
					setCheck={setCheck}
					btnDisable={btnDisable}
				/>

				<Modal
					visible={success}
					footer={[
                    <Button onClick={() => {
						navigate('/');
					}}>
                        知道了!
                    </Button>
                	]}
				>
					<p>活動創建成功!</p>
					<p>即將為您導回首頁...</p>
				</Modal>
            </Layout>
        </div>
    )
}

export default CreateActivity;