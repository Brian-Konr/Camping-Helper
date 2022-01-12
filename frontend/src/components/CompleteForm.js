import { useState } from "react";
import moment from 'moment';
import { Form, Input, Select, Button, DatePicker } from "antd";

const { Option } = Select;
const questionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const dateFormat = "YYYY/MM/DD";
const CompleteForm = () => {

    const onFinish = (values) => {
        console.log(values);
        console.log(moment(values.birthday).format("YYYY-MM-DD"));
    }
    return (
        <Form onFinish={onFinish}>
            {questionArr.includes(1) && (
                <>
                    <h3>姓名</h3>
                    <Form.Item name="name">
                        {/* <h3>姓名</h3> */}
                        <Input
                            type="text"
                            placeholder="請輸入你的名字"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(2) && (
                <>
                    <h3>生理性別</h3>
                    <Form.Item name="sex">
                        <Select
                            placeholder="請選擇你的生理性別"
                        >
                            <Option value="male">生理男</Option>
                            <Option value="female">生理女</Option>   
                        </Select>
                    </Form.Item>
                </>
            )}

            {questionArr.includes(3) && (
                <>
                    <h3>你的國籍</h3>
                    <Form.Item name="nationality">
                        <Input 
                            type="text"
                            placeholder="請輸入你的國籍"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(4) && (
                <>
                    <h3>你的身分證字號 (開頭大寫)</h3>
                    <Form.Item name="id_number">
                        <Input 
                            placeholder="請輸入你的身分證字號"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(5) && (
                <>
                    <h3>出生年月日</h3>
                    <Form.Item name="birth_date">
                        <DatePicker />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(6) && (
                <>
                    <h3>學校名稱與年級</h3>
                    <Form.Item style={{display: 'flex'}}>
                        <Form.Item name="school">
                            <Input 
                                type="text"
                                placeholder="請輸入你的學校"
                            />
                        </Form.Item>
                        <Form.Item name="grade">
                            <Select
                                placeholder="年級"
                            >
                                <Option value={"一"}>一年級</Option>
                                <Option value={"二"}>二年級</Option>
                                <Option value={"三"}>三年級</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                </>
            )}
            
            {questionArr.includes(7) && (
                <>
                    <h3>特殊疾病</h3>
                    <Form.Item name="special_disease">
                        <Input 
                            placeholder="疾病史"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(8) && (
                <>
                    <h3>Facebook 連結</h3>
                    <Form.Item name="fb_link">
                        <Input
                            type="url"
                            placeholder="Facebook 連結"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(9) && (
                <>
                    <h3>飲食習慣</h3>
                    <Form.Item name="eating_habit">
                        <Select
                            placeholder="請選擇你的飲食習慣"
                        >
                            <Option value="meat">葷</Option>
                            <Option value="vegan">素</Option>   
                        </Select>
                    </Form.Item>
                </>
            )}

            {questionArr.includes(10) && (
                <>
                    <h3>電子信箱</h3>
                    <Form.Item name="email">
                        <Input 
                            type="email"
                            placeholder="請輸入你的電子信箱"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(11) && (
                <>
                    <h3>聯絡電話</h3>
                    <Form.Item name="contact_number">
                        <Input 
                            type="number"
                            placeholder="請輸入你的手機號碼或其他聯絡電話"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(12) && (
                <>
                    <h3>監護人姓名</h3>
                    <Form.Item name="guardian_name">
                        <Input 
                            type="text"
                            placeholder="請輸入監護人姓名"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(13) && (
                <>
                    <h3>與監護人之關係</h3>
                    <Form.Item name="guardian_relationship">
                        <Input 
                            type="text"
                            placeholder="請輸入你與監護人的關係"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(14) && (
                <>
                    <h3>監護人之聯絡電話</h3>
                    <Form.Item name="guardian_contact_number">
                        <Input 
                            type="number"
                            placeholder="請輸入監護人的手機號碼或其他聯絡電話"
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(15) && (
                <>
                    <h3>自我介紹</h3>
                    <Form.Item name="introduction">
                        <Input.TextArea 
                            placeholder="自我介紹 (限 500 字內)"
                            showCount={true}
                            maxLength={500}
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(16) && (
                <>
                    <h3>特殊經歷</h3>
                    <Form.Item name="special_experience">
                        <Input.TextArea 
                            placeholder="特殊經歷 (限 500 字內)"
                            showCount={true}
                            maxLength={500}
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(17) && (
                <>
                    <h3>報名動機</h3>
                    <Form.Item name="motivation">
                        <Input.TextArea 
                            placeholder="報名動機 (限 500 字內)"
                            showCount={true}
                            maxLength={500}
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(18) && (
                <>
                    <h3>對營隊的期許</h3>
                    <Form.Item name="camp_anticipation">
                        <Input.TextArea 
                            placeholder="對營隊的期許 (限 500 字內)"
                            showCount={true}
                            maxLength={500}
                        />
                    </Form.Item>
                </>
            )}

            {questionArr.includes(19) && (
                <>
                    <h3>其他意見</h3>
                    <Form.Item name="other">
                        <Input.TextArea 
                            placeholder="其他意見 (限 500 字內)"
                            showCount={true}
                            maxLength={500}
                        />
                    </Form.Item>
                </>
            )}
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>


        </Form>
    )
}

export default CompleteForm;