import React from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/login.css'
import { Link, useNavigate} from "react-router-dom";
const { Content } = Layout;

const NormalLoginForm = ({setIsLogin}) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setIsLogin(true);
    navigate('/');
  };

  return (
    <Layout className='page'>
      <Content className='wrapper'>
        <div className='Leftside-login'>
          <div className='title'>
            歡迎回來!
          </div>
          <div className='intro'>
            介紹
          </div>
        </div>
        <div className='Rightside-login'>
          <div className='form-wrapper'>
            <h1>登入</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item 
                className='form-item'
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input 
                  className='item'
                  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  className='item'
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" href="">
                  忘記密碼？
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登入
                </Button>
                <div className='SignUp-alter'>
                  還沒有帳號嗎？ 
                  <Button type="default" className="alter-button" shape='round'>
                    <Link to = '/signup'>註冊</Link>
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default NormalLoginForm;