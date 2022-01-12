import { useState } from "react";
import { Select } from "antd";

const OPTIONS = [
    {title: '姓名', key: 1},
    {title: '性別 (生理男 / 生理女)', key: 2},
    {title: '國籍', key: 3},
    {title: '身分證字號', key: 4},
    {title: '出生年月日', key: 5},
    {title: '學校名稱與年級', key: 6},
    {title: '特殊疾病', key: 7},
    {title: 'Facebook 連結', key: 8},
    {title: '用餐習慣 (葷 / 素)', key: 9},
    {title: '電子信箱', key: 10},
    {title: '聯絡電話', key: 11},
    {title: '監護人姓名', key: 12},
    {title: '與監護人之關係', key: 13},
    {title: '監護人之聯絡電話', key: 14},
    {title: '自我介紹', key: 15},
    {title: '特殊經歷', key: 16},
    {title: '報名動機', key: 17},
    {title: '自我期許', key: 18},
    {title: '其他意見', key: 19}
]

const EditFormQuestion = () => {
    
    const [selectedItems, setSelectedItems] = useState([]);

    const filteredOptions = OPTIONS.filter(option => !selectedItems.includes(option.title));

    const handleSelect = (items) => {
        console.log(items);
        setSelectedItems(items);
    }

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