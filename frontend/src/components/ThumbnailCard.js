import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import '../css/card.css';

const {Meta} = Card;
const ThumbnailCard = ({name, keyVal, src, startDate, place}) => {
    const navigate = useNavigate();

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
                    height='180px'
                />
            }
            bodyStyle={{backgroundColor: '#d2f1ff', height: '120px', padding: '12px 18px'}}
        >
            <div className='detail-wrapper'>
                <p className="date">{startDate}</p>
                <Meta
                  title={name}
                  description={place}
                />
            </div>
        </Card>
    )
}

export default ThumbnailCard;