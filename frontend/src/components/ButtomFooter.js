import { Table, Button,Layout } from "antd";
import "../css/campManagement.css";
import { WarningOutlined } from '@ant-design/icons';

const {Footer} = Layout;
const footerStyle = {
    minHeight: '30vh',
    marginTop: '5vh',
    backgroundColor: '#433a7a'
}
const ButtomFooter = () => {
    return (
        <Footer style={footerStyle}>
            <p style={{color: '#fff'}}>Copyright © 2021 @dodofk Liu @Alison Liu @Brain Konr</p>
        </Footer>
    )
}
export default ButtomFooter;