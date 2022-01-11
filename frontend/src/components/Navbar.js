import { Menu, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {

    const [isLogin, setIsLogin] = useState(localStorage.getItem("username"));

    const handleOnClick = (e) => {
        // setCurrent(e.key);
        console.log(e.key);
    }

    const handleLogOut = () => {
        localStorage.clear();
        setIsLogin(false);
    }

    return (
        <>
            {isLogin ? 
                (
                    <Menu style={{backgroundColor: '#FB8CB3', outerHeight: '20vh'}} onClick={handleOnClick} mode='horizontal'>
                        <Menu.Item key="create"><Link to='/create'>Host an Event!</Link></Menu.Item>
                        <SubMenu key="subMenu" title="Menu">
                            <Menu.Item key="joined">Joined Activities</Menu.Item>
                            <Menu.Item key="recent">Recent Activities</Menu.Item>
                            <Menu.Item key="profile">Profile</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="search">
                            <Input placeholder='Search by activity name'/>
                        </Menu.Item>
                        <Menu.Item onClick={handleLogOut} key="logout">Log Out</Menu.Item>
                    </Menu>
                ) :        
                (
                    <Menu style={{backgroundColor: '#5CB7FF'}} onClick={handleOnClick} mode='horizontal'>
                        <Menu.Item key="login"><Link to='/login'>Login</Link></Menu.Item>
                        <Menu.Item key="register"><Link to='/signup'>Register</Link></Menu.Item>
                    </Menu>
                )
            }
        </>
    )
}

export default Navbar;