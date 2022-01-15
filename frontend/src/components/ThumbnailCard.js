import { useState } from 'react';
import { Card, Divider, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { TagOutlined } from '@ant-design/icons';

import '../css/card.css';

const {Meta} = Card;
const ThumbnailCard = ({name, keyVal, src, startDate, tag, info}) => {
    const datetimeFormat = 'YYYY-MM-DD HH:mm:ss';
    const navigate = useNavigate();
    const [tagName, setTagName] = useState('其他類別');

    return (
        <Card
            className="show-card"
            key={keyVal}
            onClick={() => {navigate(`/camping_info/${keyVal}`)}}
            hoverable={true}
            bordered={false}
            cover={
                <img 
                    alt="cover"
                    src={src}
                    width='100%'
                    height='210px'
                />
            }
            bodyStyle={{backgroundColor: '#d2f1ff', height: '180px', padding: '8px 12px'}}
        >
            <div className='detail-wrapper'>
                <p>{moment(startDate[0]).format(datetimeFormat)} ~ {moment(startDate[1]).format(datetimeFormat)}</p>
                <Meta
                  title={name}
                  description={info}
                />
                <div>
                    <Divider style={{
                        height: '0.1vh',
                        width: '100%',
                        display: 'block',
                        backgroundColor: '#64A1D1'}}/>
                    <Tag color="cyan" icon={<TagOutlined />} style={{fontSize: '14px', marginLeft: '0.5vw', marginBottom: '3vh', size: 'median'}}>
                        {tagName}
                    </Tag>
                </div>
            </div>
        </Card>
    )
}

export default ThumbnailCard;