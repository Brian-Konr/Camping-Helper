import { Layout, Divider, Button } from 'antd';
import { useEffect, useState } from 'react';
import Hotcard from './HotCard';
import Navbar from '../components/Navbar';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CategoryFilterBar from '../components/CategoryFilterBar';
import '../css/homepage.css';
const { Content } = Layout;

const FilterPage = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    
    let view = searchParams.get('view');
    let name = searchParams.get('name_contains');
    let category = searchParams.get('category')

    const params = {};
    console.log(view, name, category);
    if(view !== null && view !== undefined && view !== "undefined") {
        console.log("wtf");
        Object.assign(params, {view: view});
    }
    if(name !== null && name !== undefined && name !== "undefined") Object.assign(params, {name__contains: name});
    if(category !== null && category !== undefined && category !== "undefined") Object.assign(params, {category: category});
    
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
                            <h2>{view === "join" ? "我報名的活動" : view === "own" ? "我舉辦的活動" : "搜尋結果"}</h2>
                        </div>
                        <Divider style={{
                            marginBottom: '3vh',
                            height: '0.4vh',
                            width: '100%',
                            display: 'block',
                            backgroundColor: '#64A1D1'}}/>
                        <div className='filter'>
                            {/* <Button className='filterbutton' onClick={() => navigate('/')}>所有類別</Button>
                            <Button className='filterbutton'>文法類</Button>
                            <Button className='filterbutton'>財經類</Button>
                            <Button className='filterbutton'>理工類</Button>
                            <Button className='filterbutton'>醫護類</Button>
                            <Button className='filterbutton'>其他</Button> */}
                            <CategoryFilterBar home_or_filter={"filter"} view={view} name__contains={name}/>
                        </div>
                        <Hotcard params={params}/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default FilterPage;