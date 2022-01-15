import { Layout, Menu, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import checkLogin from '../utility/checkLogin';
import { HomeOutlined, UserSwitchOutlined } from '@ant-design/icons';
import '../css/navBar.css';

const { Header } = Layout;
const { SubMenu } = Menu;
const BarStyle = {
    lineHeight: '64px',
    marginLeft: '7%',
    marginRight: '7%',
    display: "flex", 
    flexDirection: 'row',
    flexFlow: 'nonwrap',
    justifyContent: "space-between"
}
const leftBarStyle = {
    backgroundColor: '#FB8CB3',
    lineHeight: '64px',
    display: "flex", 
    flexDirection: 'row',
    flexFlow: 'nonwrap',
    flex: '2',
    justifyContent: "flex-start"
}
const rightBarStyle = {
    backgroundColor: '#FB8CB3',
    lineHeight: '64px',
    display: "flex", 
    flexDirection: 'row',
    flexFlow: 'nonwrap',
    flex: '1',
    justifyContent: "flex-end"
}
const leftBarStyle_lock = {
    backgroundColor: '#5CB7FF',
    lineHeight: '64px',
    display: "flex", 
    flexDirection: 'row',
    flexFlow: 'nonwrap',
    flex: '2',
    justifyContent: "flex-start"
}
const rightBarStyle_lock = {
    backgroundColor: '#5CB7FF',
    lineHeight: '64px',
    display: "flex", 
    flexDirection: 'row',
    flexFlow: 'nonwrap',
    flex: '1',
    justifyContent: "flex-end"
}


const Navbar = ({setLogin}) => {

    const navigate = useNavigate();

    console.log(setLogin);
    console.log(setLogin === undefined);
    console.log(setLogin === null);

    const [isLogin, setIsLogin] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [view, setView] = useState("");

    useEffect(async() => {
        let login = await checkLogin();
        setIsLogin(login);
        if(setLogin !== undefined) setLogin(login);
    }, [])

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
        if(setLogin !== undefined) setLogin(false);
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
                        <div style={BarStyle}>
                            <Menu style={leftBarStyle} onClick={handleOnClick} mode='horizontal'>
                                <Menu.Item className='navItem-signed' icon={<HomeOutlined />} key="home"><Link to='/'>主頁</Link></Menu.Item>
                                <Menu.Item className='navItem-signed' key="create"><Link to='/create'>刊登活動!</Link></Menu.Item>
                                <Menu.Item className='navItem-signed' key="search">
                                    <Input 
                                        onChange={(e) => setSearchName(e.target.value)} 
                                        placeholder='Search by activity name'
                                        value={searchName}
                                        onKeyDown={handleSearch}    
                                    />
                                </Menu.Item>
                            </Menu>
                            <Menu style={rightBarStyle} onClick={handleOnClick} mode='horizontal'>
                                <SubMenu className='navItem-signed' key="subMenu" title="我的帳戶">
                                    <Menu.Item key="join">我報名的活動</Menu.Item>
                                    <Menu.Item key="own">我舉辦的活動</Menu.Item>
                                </SubMenu>
                                <Menu.Item className='navItem-signed' onClick={handleLogOut} key="logout" icon={<UserSwitchOutlined />}>登出</Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                ) :        
                (
                    <Header style={{backgroundColor: '#5CB7FF'}}>
                        <div style={BarStyle}>
                            <Menu style={leftBarStyle_lock} onClick={handleOnClick} mode='horizontal'>
                                <Menu.Item className='navItem-signed' icon={<HomeOutlined />} key="home"><Link to='/'>主頁</Link></Menu.Item>
                                <Menu.Item className='navItem-signed' key="create"><Link to='/create'>刊登活動!</Link></Menu.Item>
                                <Menu.Item className='navItem-signed' key="search">
                                    <Input 
                                        className='search-input'
                                        onChange={(e) => setSearchName(e.target.value)} 
                                        placeholder='Search by activity name'
                                        value={searchName}
                                        onKeyDown={handleSearch}    
                                    />
                                </Menu.Item>
                            </Menu>
                            <Menu style={rightBarStyle_lock} onClick={handleOnClick} mode='horizontal'>
                                <Menu.Item key="login"><Link to='/login'>登入</Link></Menu.Item>
                                <Menu.Item key="register"><Link to='/signup'>註冊</Link></Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                )
            }
        </>
    )
}

export default Navbar;