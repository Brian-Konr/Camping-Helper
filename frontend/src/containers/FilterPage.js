import { Layout, Divider, Button } from 'antd';
import { useEffect } from 'react';
import Hotcard from './HotCard';
import Navbar from '../components/Navbar';
import { useSearchParams } from 'react-router-dom';
import '../css/homepage.css';
const { Content } = Layout;

const FilterPage = () => {

    const [searchParams] = useSearchParams();
    let view = searchParams.get('view');
    let name = searchParams.get('name_contains');

    console.log(view, name);

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
                            <h2>搜尋結果</h2>
                        </div>
                        <Divider style={{
                            marginBottom: '3vh',
                            height: '0.4vh',
                            width: '100%',
                            display: 'block',
                            backgroundColor: '#64A1D1'}}/>
                        <div className='filter'>
                            <Button className='filterbutton'>所有類別</Button>
                            <Button className='filterbutton'>文法類</Button>
                            <Button className='filterbutton'>財經類</Button>
                            <Button className='filterbutton'>理工類</Button>
                            <Button className='filterbutton'>醫護類</Button>
                            <Button className='filterbutton'>其他</Button>
                        </div>
                        <Hotcard params={{
                            view: view,
                            name__contains: name
                        }}/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default FilterPage;