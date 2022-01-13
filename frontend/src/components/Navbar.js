import { Menu, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import checkLogin from '../utility/checkLogin';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HomeOutlined, UserSwitchOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {

    const [isLogin, setIsLogin] = useState(checkLogin());

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
                        <Menu.Item icon={<HomeOutlined />} key="home"><Link to='/'>Home</Link></Menu.Item>
                        <Menu.Item key="create"><Link to='/create'>Host an Event!</Link></Menu.Item>
                        <SubMenu key="subMenu" title="Me">
                            <Menu.Item key="joined">我報名的活動</Menu.Item>
                            <Menu.Item key="host">我舉辦的活動</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="search">
                            <Input placeholder='Search by activity name'/>
                        </Menu.Item>
                        <Menu.Item onClick={handleLogOut} key="logout" icon={<UserSwitchOutlined />}>登出</Menu.Item>
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