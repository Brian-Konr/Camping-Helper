import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import '../css/appbar.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
    return (
      <div className='rightbar'>
          <Button id='signUp' className='sign-button'>註冊</Button>
          <Button id='signIn' className='sign-button'>登入</Button>
          <Button id='Upload' className='sign-button'>刊登活動</Button>
      </div>
    );
};
export default RightMenu;