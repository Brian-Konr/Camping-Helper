import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import '../css/card.css';
import '../css/homepage.css';
import { Row, Col, Divider, Card, Avatar, message, Pagination } from "antd";

const Hotcarddisplay = () => {
  const cardStyle = { 
    width: '330px',
    height: '300px',
    borderRadius: '16px',
    boxShadow: '2px 4px 6px 2px rgba(83, 83, 83, 0.3)',
    overflow: "hidden",
    margin: '0px 16px 0',
 }
  const { Meta } = Card

  let src = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
  let avatarSrc = "https://joeschmoe.io/api/v1/random";

  let info = {
    src: src,
    key: 1,
    avatarSrc: avatarSrc
  };
  let infoArr = [info, {...info, key: 2}, {...info, key: 3}, {...info, key: 4}, {...info, key: 5}, {...info, key: 6}, {...info, key: 7}, {...info, key: 8}];
  console.log(infoArr);

  const numEachPage = 3;
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1);

  const handlePagination = (value) => {
    setMinVal((value - 1) * numEachPage);
    setMaxVal(value * numEachPage);
  }

  return (
    <>
      <div className="site-card-border-less-wrapper">
        <div className="cardwrapper">
          {infoArr.slice(minVal, maxVal).map((item) => (
            <Card
              key={item.key}
              onClick={() => message.info(`You are clicking card ${item.key}`)}
              hoverable = {true}
              bordered={false}
              cover={
                <img
                  alt="example"
                  src= {item.src}
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
                  avatar={<Avatar src={item.avatarSrc} />}
                  title="Card title"
                  description="This is the description"
                />
              </div>
            </Card>
          ))}
          <Pagination
            defaultCurrent={1}
            defaultPageSize={numEachPage}
            onChange={handlePagination}
            total={infoArr.length}
          />
          {/* <Card
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
          </Card> */}
        </div>
      </div>
    </>
  )
}

export default Hotcarddisplay
