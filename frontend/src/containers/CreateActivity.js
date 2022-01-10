import { useState } from "react";
import Appbar from "../components/Appbar";
import Intro from "../components/Intro";
import CreateInput from "../components/CreatInput";
const CreateActivity = () => {

    return (
        <div>
            <Appbar />
            <div className="wrapper">
                {/* <div className="headerPic">
                    <img src='https://images.unsplash.com/photo-1634913940785-c17c505a9c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'></img>
                </div> */}
                <Intro />
                <CreateInput />
            </div>
        </div>
    )
}

export default CreateActivity;