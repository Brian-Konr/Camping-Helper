import React, { useState, useEffect } from 'react';
import { Layout, Pagination, Menu, Breadcrumb, Divider, Button, message } from 'antd';
import Hotcard from './HotCard';
import Appbar from '../components/Appbar';
import Navbar from '../components/Navbar';
import Generalcard from './Generalcard';
import '../css/homepage.css';
import instance from '../instance';
const { Header, Content, Footer } = Layout;

const Homepage = ({isLogin, setIsLogin}) => {

    /*
        TODO: Home page has to be styled, which have 6 (can be discussed later) cards in every page.
        And when click next or prev button, we can realize page switching
    */ 
    return (
        <Layout 
            style={{
                backgroundColor: '#fff',
            }}>
            {/* <Appbar /> */}
            <Navbar />
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
                            <h2 className='class-name'>所有活動</h2>
                        </div>
                        <Divider style={{
                            height: '0.7vh',
                            width: '100%',
                            display: 'block',
                            backgroundColor: '#64A1D1'}}/>
                        <div className='filter'>
                            <Button className='filterbutton'>現正可報名</Button>
                            <Button className='filterbutton'>即將開放報名</Button>
                        </div>
                        <Hotcard />
                    </div>
                </Content>
            </Layout>
            <Footer style={{ 
                borderTop: '1px solid #e8e8e8',
                position: 'relative',
                left: 0,
                bottom: 0,
                width: '100%',
                minHeight: '30vh',
                backgroundColor: 'black',
                textAlign: 'center'}} >
                    This is footer
            </Footer>
        </Layout>
    );
};

export default Homepage;