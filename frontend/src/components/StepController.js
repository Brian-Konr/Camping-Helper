import { Button, Modal } from "antd";
import { useState } from "react";
import '../css/createActivity.css'

const StepController = ({submit, current, setCurrent, setSubmit, setCheck}) => {

    const [visible, setVisible] = useState(false);

    const handleNext = () => {
        if(current === 0) {
            // on first page and is going to move to second page, thus need to check
            setCheck(true);
        }
        if(current < 2) setCurrent(current + 1);
        else if(current === 2) {
            setVisible(true);
        }
    }
    
    return (
        <>
            <div className="question-footer">
                <Button id="button-form-1" disabled={current === 0} onClick={() => setCurrent(current - 1) }>上一步</Button>
                <Button id="button-form-2" onClick={handleNext} type="primary">{current === 2 ? "確認送出" : "下一步"}</Button>
            </div>
            <Modal
                visible={visible}
                onOk={() => {setSubmit(true)}}
                onCancel={() => {setVisible(false)}}
            >
                <p>確定要發布活動了嗎？</p>
                <p>一旦發布後，活動頁面與表單將不能變動囉</p>
            </Modal>
        </>
    )
}

export default StepController;