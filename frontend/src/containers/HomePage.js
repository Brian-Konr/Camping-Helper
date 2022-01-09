import React, { useState, useEffect } from 'react';
import { Layout, Pagination, Menu, Breadcrumb, Divider, Button, message } from 'antd';
import Hotcard from './HotCard';
import Appbar from '../components/Appbar';
import Generalcard from './Generalcard';
import '../css/homepage.css';
const { Header, Content, Sider } = Layout;

const Homepage = ({isLogin}) => {
  console.log(isLogin);
  return (
    <Layout 
      style={{
        backgroundColor: '#fff',
      }}>
      <Appbar />
      <Layout className='layout-container'>
        <Content
          className="site-layout-background"
          style={{
            padding: 12,
            margin: 0,
          }}
        >
          <div className='hotwrapper'>
            <div className='classtitle'>
              <h2 className='class-name'>熱門推薦</h2>
            </div>
            <Divider style={{
              height: '7px',
              width: '100%',
              display: 'inline-block',
              backgroundColor: '#64A1D1'}}/>
            <Hotcard />
          </div>
          <div className='generalwrapper'>
            <div className='classtitle'>
              <h2 className='class-name'>活動資訊</h2>
            </div>
            <Divider style={{
              height: '7px',
              width: '100%',
              display: 'block',
              backgroundColor: '#64A1D1'}}/>
            <div className='filter'>
              <Button className='filterbutton'>現正可報名</Button>
              <Button className='filterbutton'>即將開放報名</Button>
            </div>
            <Generalcard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Homepage;