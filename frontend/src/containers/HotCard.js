import React from 'react';
import { useState, useEffect } from 'react';
import '../css/card.css';
import ThumbnailCard from '../components/ThumbnailCard';
import PrevButton from "../icons/prev-button.png";
import NextButton from "../icons/next-button.png";
import instance from '../instance';

const numEachPage = 6;


const DisplayCard = ({params}) => {

	console.log(params);

	const [cardArr, setCardArr] = useState([]);
	const [totalLen, setTotalLen] = useState(3);
	const [curPage, setCurPage] = useState(0);
	const [curOffset, setCurOffset] = useState(0);
	const [queryParam, setQueryParm] = useState(params);



	useEffect(() => {
		setCardArr([])
		setCurPage(0)
		console.log('reset');
	}, [params])

	useEffect(() => {
		if (!cardArr.length)
		{
			console.log('em');
			fetchData(0)
		}
	}, [cardArr])


	const fetchData = async (offset) => {
		try {
			let originalParams = {
				offset: offset,
				limit: numEachPage
			}
			if(params) {
				Object.assign(originalParams, params);
				// check valid param filter
			}
			let res = await instance.get('/camp/', {
				params: originalParams
			});
			console.log(res.data);
			setCardArr(cardArr.concat(res.data.results));
			setTotalLen(res.data.count)
		} catch (error) {
			console.log(error.response);
		}
	}

	console.log("totalLen", totalLen);


	useEffect(() => {
		const allDefined = Array(numEachPage).fill().map((_, i) => curPage * numEachPage + i).filter(i => i < totalLen).reduce((acc, i) => cardArr[i] !== undefined && acc, true);
		if (!allDefined)
		{
			fetchData(curPage * numEachPage);
		}
	}, [curPage])

	const handleNext = () => {
		if((curPage + 1 ) < Math.ceil(totalLen * 1.0 / numEachPage)) setCurPage(prev => prev + 1);
	}

	const handlePrevious = () => {
		if(curPage > 0) setCurPage(prev => prev - 1);
	}

	return (
		<>
			<div style={{margin: '12px'}}>{`page: ${curPage+1} / ${Math.ceil(totalLen * 1.0 / numEachPage)}`}</div>
			<div className='allCard-wrapper'>
				<div style={{width: '100px'}} className='stepButton'>
					<img id="previous" src={PrevButton} style={{width: '100%'}} alt="prev-button" onClick={handlePrevious}/>
				</div>
				<div className="cardwrapper">
					{cardArr.slice(curPage*numEachPage, curPage*numEachPage + numEachPage).map((item) => ( 
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

export default DisplayCard
