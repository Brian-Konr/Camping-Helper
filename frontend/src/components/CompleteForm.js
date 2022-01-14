import { useState } from "react";
import moment from 'moment';
import { Form, Input, Select, Button, DatePicker, message } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import "../css/completeForm.css"

const { Option } = Select;
const questionArr = [3, 4, 5, 6, 7, 8, 9, 10];
const dateFormat = "YYYY/MM/DD";
const rule = [
    {
        required: true,
        message: "這是必填項目!"
    }
]

const CompleteForm = () => {

    // TODO: Need to add temporary save, which involved in the communication with backend endpoint
    const onFinish = (values) => {
        console.log(values);
        console.log(moment(values.birthday).format("YYYY-MM-DD"));
    }
    return (
        <Layout className="answer-wrapper">
            <Form onFinish={onFinish} style={{margin: '2vw'}}>
                <div id='q-form'>
                    {questionArr.includes(1) && (
                        <>
                            <h3>姓名</h3>
                            <Form.Item name="name" rules={rule}>
                                {/* <h3>姓名</h3> */}
                                <Input
                                    size="large"
                                    className='ind-item'
                                    type="text"
                                    placeholder="請輸入你的名字"
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(2) && (
                        <>
                            <h3>生理性別</h3>
                            <Form.Item name="sex" rules={rule}>
                                <Select
                                    size="large"
                                    placeholder="請選擇你的生理性別"
                                    className='ind-item'
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
                            <Form.Item name="nationality" rules={rule}>
                                <Input 
                                    size="large"
                                    className='ind-item'
                                    type="text"
                                    placeholder="請輸入你的國籍"
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(4) && (
                        <>
                            <h3>你的身分證字號 (開頭大寫)</h3>
                            <Form.Item name="id_number" rules={rule}>
                                <Input 
                                    size="large"
                                    placeholder="請輸入你的身分證字號"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(5) && (
                        <>
                            <h3>出生年月日</h3>
                            <Form.Item name="birth_date" rules={rule}>
                                <DatePicker size="large" className='ind-item'/>
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(6) && (
                        <>
                            <h3>學校名稱與年級</h3>
                            <Form.Item style={{display: 'flex'}}>
                                <Form.Item name="school"  rules={rule}>
                                    <Input 
                                        size="large"
                                        type="text"
                                        placeholder="請輸入你的學校"
                                        className='ind-item'
                                    />
                                </Form.Item>
                                <Form.Item name="grade" rules={rule}>
                                    <Select
                                        size="large"
                                        placeholder="年級"
                                        className='ind-item'
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
                            <Form.Item name="special_disease" rules={rule}>
                                <Input 
                                    size="large"
                                    placeholder="疾病史"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(8) && (
                        <>
                            <h3>Facebook 連結</h3>
                            <Form.Item name="fb_link" rules={rule}>
                                <Input
                                    size="large"
                                    type="url"
                                    placeholder="Facebook 連結"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(9) && (
                        <>
                            <h3>飲食習慣</h3>
                            <Form.Item name="eatingm_habit" rules={rule}>
                                <Select
                                    size="large"
                                    placeholder="請選擇你的飲食習慣"
                                    className='ind-item'
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
                            <Form.Item name="email" rules={rule}>
                                <Input 
                                    type="email"
                                    placeholder="請輸入你的電子信箱"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(11) && (
                        <>
                            <h3>聯絡電話</h3>
                            <Form.Item name="contact_number" rules={rule}>
                                <Input 
                                    type="number"
                                    placeholder="請輸入你的手機號碼或其他聯絡電話"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(12) && (
                        <>
                            <h3>監護人姓名</h3>
                            <Form.Item name="guardian_name" rules={rule}>
                                <Input 
                                    type="text"
                                    placeholder="請輸入監護人姓名"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(13) && (
                        <>
                            <h3>與監護人之關係</h3>
                            <Form.Item name="guardian_relationship" rules={rule}>
                                <Input 
                                    type="text"
                                    placeholder="請輸入你與監護人的關係"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(14) && (
                        <>
                            <h3>監護人之聯絡電話</h3>
                            <Form.Item name="guardian_contact_number" rules={rule}>
                                <Input 
                                    type="number"
                                    placeholder="請輸入監護人的手機號碼或其他聯絡電話"
                                    className='ind-item'
                                />
                            </Form.Item>
                        </>
                    )}

                    {questionArr.includes(15) && (
                        <>
                            <h3>自我介紹</h3>
                            <Form.Item name="introduction" rules={rule}>
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
                            <Form.Item name="special_experience" rules={rule}>
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
                            <Form.Item name="motivation" rules={rule}>
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
                            <Form.Item name="camp_anticipation" rules={rule}>
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
                            <Form.Item name="other" rules={rule}>
                                <Input.TextArea 
                                    placeholder="其他意見 (限 500 字內)"
                                    showCount={true}
                                    maxLength={500}
                                />
                            </Form.Item>
                        </>
                    )}
                </div>
                <div id='button-form'>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" id='ind-button'>Submit</Button>
                    </Form.Item>
                </div>
                
            </Form>
        </Layout>
        
    )
}

export default CompleteForm;