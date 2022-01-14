import { Layout, Menu, Input } from 'antd';
import { useState } from 'react';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import checkLogin from '../utility/checkLogin';
import { HomeOutlined, UserSwitchOutlined } from '@ant-design/icons';
import '../css/navBar.css';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(checkLogin());
    const [searchName, setSearchName] = useState("");
    const [view, setView] = useState("");

    const handleOnClick = (e) => {
        if(e.key === "join" || e.key === "own") {
            setView(e.key);
            const params = {
                view: e.key,
                
            }
            if(searchName !== "") Object.assign(params, {name_contains: searchName});
            navigate({
                pathname: '/search',
                search: `${createSearchParams(params)}`
            })
        }
    }

    const handleLogOut = () => {
        localStorage.clear();
        setIsLogin(false);
    }

    const handleSearch = (e) => {
        if(e.key === 'Enter') {
            const params = {
                name_contains: searchName,
            }
            if(view !== "") Object.assign(params, {view: view});
            navigate({
                pathname: '/search',
                search: `?${createSearchParams(params)}`,
            });
        }
    }

    return (
        <>
            {isLogin ? 
                (
                    <Header style={{backgroundColor: '#FB8CB3'}}>
                        <Menu style={{backgroundColor: '#FB8CB3', lineHeight: '64px'}} onClick={handleOnClick} mode='horizontal'>
                            <Menu.Item className='navItem-signed' icon={<HomeOutlined />} key="home"><Link to='/'>Home</Link></Menu.Item>
                            <Menu.Item className='navItem-signed' key="create"><Link to='/create'>Host an Event!</Link></Menu.Item>
                            <SubMenu className='navItem-signed' key="subMenu" title="Me">
                                <Menu.Item key="join">我報名的活動</Menu.Item>
                                <Menu.Item key="own">我舉辦的活動</Menu.Item>
                            </SubMenu>
                            <Menu.Item className='navItem-signed' key="search">
                                <Input 
                                    onChange={(e) => setSearchName(e.target.value)} 
                                    placeholder='Search by activity name'
                                    value={searchName}
                                    onKeyDown={handleSearch}    
                                />
                            </Menu.Item>
                            <Menu.Item className='navItem-signed' onClick={handleLogOut} key="logout" icon={<UserSwitchOutlined />}>登出</Menu.Item>
                        </Menu>
                    </Header>
                ) :        
                (
                    <Header style={{backgroundColor: '#5CB7FF'}}>
                        <Menu style={{backgroundColor: '#5CB7FF'}} onClick={handleOnClick} mode='horizontal'>
                            <Menu.Item key="login"><Link to='/login'>Login</Link></Menu.Item>
                            <Menu.Item key="register"><Link to='/signup'>Register</Link></Menu.Item>
                        </Menu>
                    </Header>
                )
            }
        </>
    )
}

export default Navbar;