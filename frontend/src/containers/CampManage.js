import { useState, useEffect } from "react";
import { Table } from "antd";
import { useParams } from "react-router-dom";

const CampManage = () => {

    const {campId} = useParams();

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        setColumns([]);
    }, [])

    return (
        <>
            <h1>hello camp manage</h1>
            <p>{`Welcome camp ${campId}`}</p>
        </>
    )
}

export default CampManage;