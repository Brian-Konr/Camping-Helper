import { Button } from "antd";
import '../css/createActivity.css'

const StepController = ({current, setCurrent}) => {
    
    return (
        <>
            <div className="question-footer">
                <Button id="button-form-1" disabled={current === 0} onClick={() => setCurrent(current - 1) }>上一步</Button>
                <Button id="button-form-2" disabled={current === 2} onClick={() => setCurrent(current + 1)} type="primary">下一步</Button>
            </div>
        </>
    )
}

export default StepController;