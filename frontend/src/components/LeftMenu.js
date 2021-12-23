import React, { Component } from 'react';
import { Input, Icon} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../css/appbar.css';

const { Search } = Input;
const LeftMenu = () => {
  const onSearch = value => console.log(value);
  return (
    <div className='leftbar'>
      <MenuOutlined style={{fontStyle: 'bold', fontSize: '150%'}} className='menu' />
      <div className="logo" />
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200, display: 'flex', alignItems: 'center' }} enterButton  />
    </div>
  );
}
export default LeftMenu;