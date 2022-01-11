import { Button } from "antd";

const StepController = ({current, setCurrent}) => {
    
    return (
        <>
            <div className="footer" style={{display: 'flex'}}>
                <Button disabled={current === 0} onClick={() => setCurrent(current - 1)}>上一步</Button>
                <Button disabled={current === 2} onClick={() => setCurrent(current + 1)} type="primary">下一步</Button>
            </div>
        </>
    )
}

export default StepController;