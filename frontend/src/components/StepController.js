import { Button } from "antd";
import '../css/createActivity.css'

const StepController = ({current, setCurrent, setSubmit}) => {

    const handleNext = () => {
        if(current < 2) setCurrent(current + 1);
        else if(current === 2) setSubmit(true);
    }
    
    return (
        <>
            <div className="question-footer">
                <Button id="button-form-1" disabled={current === 0} onClick={() => setCurrent(current - 1) }>上一步</Button>
                <Button id="button-form-2" onClick={handleNext} type="primary">{current === 2 ? "確認送出" : "下一步"}</Button>
            </div>
        </>
    )
}

export default StepController;