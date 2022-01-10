import { useState } from "react";
import { Card, Input, InputNumber, DatePicker, Button } from "antd";
import moment from 'moment';
import Loading from "./Loading";
import instance from '../instance';
import Modal from "antd/lib/modal/Modal";
const { RangePicker } = DatePicker;
const CreateInput = ({activityName, date, info, place, fee, quota, precaution, setActivityName, setDate, setInfo, setPlace, setFee, setQuota, setPrecaution}) => {
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
            <Card>
                <p>營隊名稱</p>
                <Input placeholder="Activity Name" onChange={(e) => {setActivityName(e.target.value)}} value={activityName}></Input>
                <p>營隊日期</p>
                <RangePicker 
                    onChange={(_, dateString) => {setDate(dateString)}}
                    value={[moment(date[0], dateFormat), moment(date[1]), dateFormat]}
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
                <Input placeholder="Where to host the activity?" maxLength={100} onChange={(e) => {setPlace(e.target.value)}}></Input>
                <div style={{display: 'flex'}}>
                    <div>
                        <p>活動費用</p>
                        <InputNumber defaultValue={2500} min={0} onChange={(e) => {setFee(e)}}/>
                    </div>
                    <div style={{marginLeft: '110px'}}>
                        <p>活動名額</p>
                        <InputNumber defaultValue={70} min={0} max={300} onChange={(e) => {setQuota(e)}}/>
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
                <div style={{display: 'flex', marginTop: '50px'}}>
                    <Button onClick={store}>暫時儲存</Button>
                    <Button type="primary" style={{marginLeft: '110px'}} onClick={() => setModalVisible(true)}>確認送出</Button>
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
            </Card>
        </>
    )
}

export default CreateInput;