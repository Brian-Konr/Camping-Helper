import React, { useState } from 'react';
import { Layout, Menu, Input, Space} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, AudioOutlined } from '@ant-design/icons';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import '../css/appbar.css';
const { Header, Content, Sider } = Layout;

const appbar = () => {
    
    return (
        <Layout>
            <Header style={{ position: 'relative', alignItems: 'center', backgroundColor: '#5CB7FF'}}>
                <div className='innerbar'>
                    <LeftMenu />
                    <RightMenu />
                </div>
            </Header>
        </Layout>
        
    );
};

export default appbar;