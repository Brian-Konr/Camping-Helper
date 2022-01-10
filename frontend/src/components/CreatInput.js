import { Card, Input, DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;
const CreateInput = () => {
    
    return (
        <>
            <Card>
                <p>Your Activity Name</p>
                <Input placeholder="Activity Name"></Input>
                <p>營隊日期</p>
                <RangePicker />
                <p>活動資訊</p>
                <Input.TextArea 
                    placeholder="輸入活動資訊"
                    showCount={true}
                />
            </Card>
        </>
    )
}

export default CreateInput;