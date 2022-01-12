import React, { useState, useEffect } from 'react';
import { Layout, Pagination, Menu, Breadcrumb, Divider, Button, message } from 'antd';
import Hotcard from './HotCard';
import Appbar from '../components/Appbar';
import Navbar from '../components/Navbar';
import Generalcard from './Generalcard';
import '../css/homepage.css';
import instance from '../instance';
const { Header, Content, Sider } = Layout;

const Homepage = ({isLogin, setIsLogin}) => {

	// const [totalLen, setTotalLen] = useState(3);
	// const [nextPage, setNextPage] = useState(0);
	// useEffect(async () => {
	// 	let res = await fetchData(3, 0);
	// 	console.log(res.data);
	// 	setTotalLen(res.data.count);
	// }, [])

	// const fetchData = async (limit, nextPage) => {
	// 	try {
	// 		let res = await instance.get('/camp/', {
	// 			params: {
	// 				offset: nextPage * limit,
	// 				limit: limit
	// 			}
	// 		});
	// 		console.log(res.data);
	// 		setNextPage(nextPage => nextPage + 1);
	// 		return res;
	// 	} catch (error) {
	// 		console.log(error.response);
	// 	}
	// }
    return (
        <Layout 
            style={{
                backgroundColor: '#fff',
            }}>
            {/* <Appbar /> */}
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
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