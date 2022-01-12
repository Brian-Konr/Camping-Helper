import { useState } from "react";
import { Upload, message, Card, Input, InputNumber, DatePicker, Button, Incon } from "antd";
import moment from 'moment';
import Loading from "./Loading";
import instance from '../instance';
import Modal from "antd/lib/modal/Modal";
import UploadImg from "./UploadImg";
import "../css/createInput.css"

const { RangePicker } = DatePicker;

const CreateInput = ({activityName, date, info, place, fee, quota, precaution, setActivityName, setDate, setInfo, setPlace, setFee, setQuota, setPrecaution, setSrc}) => {
    const dateFormat = 'YYYY-MM-DD';
    const [modalVisible, setModalVisible] = useState(false);


    const store = () => {
        // how to determine post and patch
    }

    const submit = () => {
        console.log('hello submit')
        // make it public
    }

    return (
        <>
            <div className="custom-card">
                <div>
                    <p id="top-describe">營隊封面圖片</p>
                    <UploadImg setSrc={setSrc}/>
                    <p>營隊名稱</p>
                    <Input placeholder="Activity Name" onChange={(e) => {setActivityName(e.target.value)}} value={activityName} style={{'border-radius': '8px'}}></Input>
                    <p>營隊日期</p>
                    <RangePicker 
                        onChange={(_, dateString) => {setDate(dateString)}}
                        value={[moment(date[0], dateFormat), moment(date[1]), dateFormat]}
                        style={{'border-radius': '8px'}}
                    />
                    <p>活動資訊</p>
                    <Input.TextArea
                        placeholder="輸入活動資訊"
                        showCount={true}
                        autoSize={{minRows: 2, maxRows: 10}}
                        maxLength={500}
                        onChange={(e) => {setInfo(e.target.value)}}
                    />
                    <p>活動地點</p>
                    <Input placeholder="Where to host the activity?" maxLength={100} onChange={(e) => {setPlace(e.target.value)}} style={{'border-radius': '8px'}}></Input>
                    <div style={{display: 'flex'}}>
                        <div>
                            <p>活動費用</p>
                            <InputNumber defaultValue={2500} min={0} onChange={(e) => {setFee(e)} } style={{'border-radius': '8px'}}/>
                        </div>
                        <div style={{marginLeft: '110px'}}>
                            <p>活動名額</p>
                            <InputNumber defaultValue={70} min={0} max={300} onChange={(e) => {setQuota(e)}} style={{'border-radius': '8px'}}/>
                        </div>
                    </div>
                    <p>注意事項</p>
                    <Input.TextArea
                        placeholder="輸入注意事項"
                        showCount={true}
                        autoSize={{minRows: 2, maxRows: 10}}
                        maxLength={500}
                        onChange={(e) => {setPrecaution(e.target.value)}}
                    />
                </div>
                
                <div style={{display: 'flex', marginBottom: '2vh'}}>
                    <Button onClick={store} style={{borderRadius: '12px', margin: '2vw'}}>暫時儲存</Button>
                    <Button type="primary" style={{borderRadius: '12px', margin: '2vw'}} onClick={() => setModalVisible(true)}>確認送出</Button>
                </div>
                <Modal
                    visible={modalVisible}
                    onOk={() => {
                        setModalVisible(false);
                        submit();
                    }}
                    onCancel={() => setModalVisible(false)}
                >
                    <p>請確認資料是否正確，一旦送出後即會將活動公開，並不得修改。</p>
                </Modal>
            </div>
        </>
    )
}

export default CreateInput;