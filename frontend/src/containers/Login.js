import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import instance from "../api";
import '../css/login.css'
const NormalLoginForm = () => {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    let email = "dodofkwork@gmail.com"
    let password = "atccintern1234";
    try {
      let res = await instance.post("/djoser/auth/jwt/create", {
        email: email,
        password: password
      })
      if(res.data) {
        localStorage.setItem("token", res.data.access);
      }
      let teamsRes = await instance.get("activity/1/teams");
      console.log(teamsRes.status);
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div className='wrapper'>
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
          name="username"
          rules={[
            {
              // required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              // required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
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
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm;