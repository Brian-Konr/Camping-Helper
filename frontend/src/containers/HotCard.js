import React from 'react';
import 'antd/dist/antd.css';
import '../css/card.css';
import { Row, Col, Divider, Card, Avatar } from "antd";

const hotcarddisplay = () => {
  const cardStyle = { 
    width: '330px',
    height: '300px',
    borderRadius: '16px',
    boxShadow: '2px 4px 6px 2px rgba(83, 83, 83, 0.3)',
    overflow: "hidden",
    margin: '0px 16px 0',
 }
  const { Meta } = Card
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <div className="cardwrapper">
          <Card
            hoverable = {true}
            bordered={false}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                width='100%'
                height='180px'
              />
            }
            style={cardStyle}
            bodyStyle={{backgroundColor: '#d2f1ff', height: '120px', padding: '12px 18px'}}
          >
            <div className='detail-wrapper'>
              <p className="date">2021/12/22</p>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </div>
          </Card>
          <Card
            hoverable = {true}
            bordered={false}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                width='100%'
                height='180px'
              />
            }
            style={cardStyle}
            bodyStyle={{backgroundColor: '#d2f1ff', height: '120px', padding: '12px 18px' }}
          >
            <div className="date">2021/12/22</div>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Card
            hoverable = {true}
            bordered={false}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                width='100%'
                height='180px'
              />
            }
            style={cardStyle}
            bodyStyle={{backgroundColor: '#d2f1ff', height: '120px', padding: '12px 18px' }}
          >
            <div className="date">2021/12/22</div>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>
      </div>
    </>
  )
}

export default hotcarddisplay
