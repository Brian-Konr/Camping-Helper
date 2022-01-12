import { Card } from "antd";
import '../css/card.css';
const cardStyle = { 
    width: '330px',
    height: '300px',
    borderRadius: '16px',
    boxShadow: '2px 4px 6px 2px rgba(83, 83, 83, 0.3)',
    overflow: "hidden",
    margin: '0px 16px 0',
}

const {Meta} = Card;
const ThumbnailCard = ({name, keyVal, src, startDate, place}) => {
    

    return (
        <Card
            key={keyVal}
            onClick={() => console.log(`card ${keyVal}`)}
            hoverable={true}
            bordered={false}
            style={cardStyle}
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