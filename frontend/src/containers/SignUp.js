import React, { useState } from 'react';
import { DatePicker, Form, Input, Select, Checkbox, Button, Layout } from 'antd';
import '../css/signup.css'
import { Link } from "react-router-dom";
import instance from '../instance';
const { Content } = Layout;

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const monthDayCheck = (month, day) => {
    let checkedMonth = month, checkedDay = day;
    if(month.length === 1) checkedMonth = `0${month}`;
    if(day.length === 1) checkedDay = `0${day}`;
    return {checkedMonth, checkedDay};
  }
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    let year = values.year;
    let {checkedMonth, checkedDay} = monthDayCheck(values.month, values.day);
    let date = `${year}-${checkedMonth}-${checkedDay}`;
    delete values.year;
    delete values.month;
    delete values.day;

    let finalForm = {...values, ...{birthday: date}};
    console.log(finalForm);
    // submit(finalForm);
  };

  const submit = async (request) => {
    try {
      let res = await instance.post('/auth/users/', request);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Layout className='page'>
      <Content className='wrapper'>
        <div className='Leftside-signup'>
          <div className='form-wrapper'>
            <h1>創建新帳號</h1>
            <Form
                {...formItemLayout}
                form={form}
                className='signup-form'
                name="register"
                onFinish={onFinish}
                initialValues={{}}
                scrollToFirstError
                >
                <Form.Item
                  name="name"
                  label="姓名"
                  rules={[
                  {
                      required: true,
                      message: 'Please input your name',
                  },
                  ]}
                >
                    <Input className='item'/>
                </Form.Item>

                <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
                    <Form.Item
                    name="year"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 6px)' }}
                    >
                    <Input minLength={4} maxLength={4} className='item' placeholder="西元年" />
                    </Form.Item>
                    <Form.Item
                    name="month"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(25% - 6px)', margin: '0 8px' }}
                    >
                    <Input maxLength={2} className='item' placeholder="月" />
                    </Form.Item>
                    <Form.Item
                    name="day"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(25% - 6px)' }}
                    >
                    <Input maxLength={2} className='item' placeholder="日" />
                    </Form.Item>
                </Form.Item>

                {/* <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input className='item' style={{ width: '100%' }} />
                </Form.Item> */}

                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                  {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                  },
                  {
                      required: true,
                      message: 'Please input your E-mail!',
                  },
                  ]}
                >
                    <Input className='item'/>
                </Form.Item>

                <Form.Item
                  name="username"
                  label="使用者名稱"
                  rules={[
                  {
                      required: true,
                      message: 'Please input your username!',
                      whitespace: true,
                  },
                  ]}
                >
                    <Input className='item'/>
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                  {
                      required: true,
                      message: 'Please input your password!',
                  },
                  ]}
                  hasFeedback
                >
                    <Input.Password className='item'/>
                </Form.Item>

                <Form.Item
                  name="re_password"
                  label="Confirm Password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                  {
                      required: true,
                      message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                      validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                      }

                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                  }),
                  ]}
                >
                    <Input.Password className='item' />
                </Form.Item>


                <Form.Item
                  name="if_agree"
                  valuePropName="checked"
                  rules={[
                  {
                      validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                  },
                  ]}
                  {...tailFormItemLayout}
                >
                    <Checkbox className='sign-up-check'>
                      我同意此網站的<a href="">《服務條款》、《資料政策》</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="SignUp-form-button">
                      註冊
                    </Button>
                    <div className='Login-alter'>
                      已經有帳號了？
                      <Button type="default" className="alter-button" shape='round'>
                        <Link to='/login'>登入</Link>
                      </Button>
                    </div>
                </Form.Item>
            </Form>
          </div>
        </div>
        <div className='Rightside-signup'>
          <div className='title'>
            歡迎加入!
          </div>
          <div className='intro'>
            介紹
          </div>
        </div>
      </Content>
    </Layout>
  );
};

// haha just for test
export default RegistrationForm;