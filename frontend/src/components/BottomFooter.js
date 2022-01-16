import {Layout } from "antd";
import "../css/campManagement.css";
import Alison from '../icons/Alison.JPG';
import Ricky from '../icons/Ricky.JPG';
import Brain from '../icons/Brain.jpg';
import DevOpsGod from '../icons/DevOps_God.jpg';

const {Footer} = Layout;
const footerStyle = {
    minHeight: '10vh',
    marginTop: '5vh',
    backgroundColor: '#433a7a',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    placeItems: 'center'
}
const BottomFooter = () => {
    return (
        <Footer style={footerStyle}>
            <div style={{minWidth: '50px'}}></div>
            <p style={{color: '#fff'}}>Camping-Helper Copyright © 2021</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <a href="https://github.com/Cyalisonliu" target="_blank"><img src={Alison} style={{width:'3em', borderRadius: '50%', margin: '1vh'}} alt="a-button"></img></a>
                <a href="https://github.com/dodofk" target="_blank"><img src={Ricky} style={{width:'3em', borderRadius: '50%', margin: '1vh'}} alt="r-button"></img></a>
                <a href="https://github.com/Brian-Konr" target="_blank"><img src={Brain} style={{ width:'3em',borderRadius: '50%', margin: '1vh'}} alt="r-button"></img></a>
                <a href="https://github.com/fredred375" target="_blank"><img src={DevOpsGod} style={{ width:'3em',borderRadius: '50%', margin: '1vh'}} alt="r-button"></img></a>
            </div>
        </Footer>
    )
}
export default BottomFooter;