import React from 'react';
import { useState, useEffect } from 'react';
import '../css/card.css';
import { Row, Col, Divider, Card, Avatar, message, Pagination } from "antd";
import ThumbnailCard from '../components/ThumbnailCard';
import PrevButton from "../icons/prev-button.png";
import NextButton from "../icons/next-button.png";
import instance from '../instance';

const numEachPage = 6;


const HotCard = () => {

	const [cardArr, setCardArr] = useState([]);
	const [totalLen, setTotalLen] = useState(3);
	const [nextPage, setNextPage] = useState(0);
	const [curPage, setCurPage] = useState(0);
	const [curOffset, setCurOffset] = useState(0);
	useEffect(async () => {
		try {
			let res = await fetchData(curOffset);
			console.log(res.data);
			setTotalLen(res.data.count);
		} catch (error) {
			console.log(error);
		}
	}, [])

	const fetchData = async (offset) => {
		try {
			let res = await instance.get('/camp/', {
				params: {
					offset: offset,
					limit: numEachPage*2
				}
			});
			console.log(res.data);
			setCardArr(cardArr.concat(res.data.results));
			return res;
		} catch (error) {
			console.log(error.response);
		}
	}

	useEffect(() => {
		console.log("card updated: ", cardArr);
		setCurOffset(cardArr.length);
	}, [cardArr]);

	useEffect(() => {
		console.log("next page is: ", nextPage);
	}, [nextPage]);

	useEffect(() => {
		console.log("current page is: ", curPage);
	}, [curPage])

	const handleNext = () => {
		if(curOffset < totalLen) fetchData(curOffset);
		if(curPage < Math.floor(totalLen * 1.0 / numEachPage)) setCurPage(prev => prev + 1);
	}

	const handlePrevious = () => {
		if(curPage > 0) setCurPage(prev => prev - 1);
	}
    return (
		<>
			<div style={{margin: '12px'}}>{`current page: ${curPage+1}`}</div>
			<div className='allCard-wrapper'>
				<div style={{width: '100px'}} className='stepButton'>
					<img id="previous" src={PrevButton} style={{width: '100%'}} alt="prev-button" onClick={handlePrevious}/>
				</div>
				<div className="cardwrapper">
					{cardArr.slice(curPage*numEachPage, curPage*numEachPage + 3).map((item) => ( 
						<ThumbnailCard
							name={item.name}
							key={item.id} 
							keyVal={item.id} 
							src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
							place={item.place}
						/> 
					))}
				</div>
				<div className='stepButton' style={{width: '100px'}}>
					<img id="next"src={NextButton} style={{width: '100%'}} onClick={handleNext} alt="next-button"/>
				</div>
			</div>
		</>
    )
}

export default HotCard
