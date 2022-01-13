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
                            <h2 className='class-name'>搜尋結果</h2>
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