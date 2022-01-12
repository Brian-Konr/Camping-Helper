import { useState, useEffect } from "react";
import { Select } from "antd";
import { OPTIONS } from "../utility/questions";

const EditFormQuestion = ({current}) => {
    
    const [selectedItems, setSelectedItems] = useState([]);

    //selectedKeys is used to post questions camp used
    const [selectedKeys, setSelectedKeys] = useState([]);

    const filteredOptions = OPTIONS.filter(option => !selectedItems.includes(option.title));

    const handleSelect = (items) => {
        setSelectedItems(items);
    }

    useEffect(() => {
        let filteredArr = OPTIONS.filter(option => selectedItems.includes(option.title));
        let keyArr = filteredArr.map(option => option.key);
        console.log(keyArr);
        setSelectedKeys(keyArr);
    }, [current])

    return (
        <Select
            mode="multiple"
            placeholder="請選擇表單的問題"
            value={selectedItems}
            onChange={handleSelect}
            style={{width: '40vw'}}
            size="large"
            maxTagCount={5}
        >
            {filteredOptions.map((curOption) => (
                <Select.Option style={{lineHeight: '40px'}} key={curOption.key} value={curOption.title}>
                    {curOption.title}
                </Select.Option>
            ))}
        </Select>

    )
}

export default EditFormQuestion;