import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../instance";
import { OPTIONS } from "../utility/questions";

const numberPerPage = 8;

const CampManage = () => {

    const navigate = useNavigate();

    const {campId} = useParams();

    const [columns, setColumns] = useState([]);
    const [questionArr, setQuestionArr] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [next, setNext] = useState(true);
    const [offset, setOffset] = useState(0);
    const [current, setCurrent] = useState(1);
    const [totalLen, setTotalLen] = useState(0);
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        setOffset(0);
        setNext(true);
        setCurrent(1);
        setDataSource([]);
        getQuestionArr();
        fetchData();
    }, []);


    const getQuestionArr = async() => {
        try {
            let res = await instance.get(`/camp/${campId}`);
            setQuestionArr(res.data.questions);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(questionArr.length > 0) {
            let filterData = OPTIONS.filter((option) => questionArr.includes(option.key)).map((option) =>{
                return {
                    title: option.title,
                    dataIndex: option.dataIndex
                }
            });
            setColumns(filterData);
        }
        
    }, [questionArr])

    const fetchData = async() => {
        try {
            let res = await instance.get(`/camp/${campId}/registration/`, {
                params: {
                    limit: numberPerPage,
                    offset: offset,
                }
            })

            if(res.data.next === null) setNext(false);
            setTotalLen(res.data.count);

            if(res.data.count === 0) setEmpty(true);
            else setEmpty(false);

            setDataSource(dataSource.concat(res.data.results));

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(dataSource.length > 0) setOffset(dataSource.length);
    }, [dataSource]);

    useEffect(() => {
        if(offset < totalLen) fetchData();
    }, [current])

    const handleDownload = async() => {
        const config = {
            responseType: 'blob'
        }
        try {
            let res = await instance.get(`/camp/${campId}/download/`, config);
            let rawString;
            console.log(res.data);
            var reader = new FileReader();
            reader.onload = function() {
                let newData = '\ufeff' + reader.result;
                const url = window.URL.createObjectURL(new Blob([newData], {
                    type: 'text/csv,charset=UTF-8'
                }));
                const link = document.createElement('a');
                link.href = url;
                // const fileName = decodeURI(res.headers["content-disposition"].split(" ")[1].replace("filename*=UTF-8''", ""));
    
                link.setAttribute('download', 'registration.csv');
                document.body.appendChild(link);
                link.click();
            }
            reader.readAsText(res.data);
            // let newData = '\ufeff' + res.data;
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <h1>hello camp manage</h1>
            <p>{`Welcome camp ${campId}`}</p>
            {empty ? <div>Empty!!</div> :
                <>
                    <Table 
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{
                            defaultPageSize: numberPerPage,
                            current: current,
                            total: totalLen,
                            onChange: (page) => {setCurrent(page)}
                        }}
                    />
                    <Button onClick={handleDownload}>下載表單</Button>
                </>
            }
            <Button onClick={() => navigate('/')}>返回首頁</Button>
        </>
    )
}

export default CampManage;