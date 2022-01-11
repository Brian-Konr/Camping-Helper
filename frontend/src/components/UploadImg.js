import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import {Button, Upload} from 'antd';

const UploadImg = ({setSrc}) => {
    const [disable, setDisable] = useState(false);
    
    const handleUpload = async (info) => {
        if(info.fileList.length == 0) setDisable(false);
        else {
            setDisable(true);
            setSrc(URL.createObjectURL(info.file));
        }
    }
    return (
        <>
            <Upload
                accept=".jpg, .jpeg, .png, .pdf"
                beforeUpload={() => false}
                // onPreview={(file) => console.log(file.url)}
                onChange={handleUpload}
            >
                <Button disabled={disable} icon={<UploadOutlined />}>上傳圖片</Button>
            </Upload>
        </>
    )
}

export default UploadImg;