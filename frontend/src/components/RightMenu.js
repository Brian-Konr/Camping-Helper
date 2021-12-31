import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import '../css/appbar.css'
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
    return (
      <div className='rightbar'>
          <Button id='signUp' className='sign-button'><Link to="/signup">註冊</Link></Button>
          <Button id='signIn' className='sign-button'><Link to="/login">登入</Link></Button>
          <Button id='Upload' className='sign-button'>刊登活動</Button>
      </div>
    );
};
export default RightMenu;