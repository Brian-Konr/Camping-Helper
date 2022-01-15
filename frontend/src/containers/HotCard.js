import React from 'react';
import { useState, useEffect } from 'react';
import '../css/card.css';
import ThumbnailCard from '../components/ThumbnailCard';
import PrevButton from "../icons/angle-circle-left.png";
import NextButton from "../icons/angle-circle-right.png";
import instance from '../instance';
import { Spin } from 'antd';
import { COVERS } from '../utility/randomCover';
const numEachPage = 6;

const DisplayCard = ({params}) => {

	// TODO: when the data is empty, set icon

	const [cardArr, setCardArr] = useState([]);
	const [totalLen, setTotalLen] = useState(0);
	const [curPage, setCurPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const [empty, setEmpty] = useState(false);


	useEffect(() => {
		setCardArr([]);
		setCurPage(0);
		console.log('reset');
	}, [params])

	useEffect(() => {
		if (cardArr.length === 0)
		{
			fetchData(0);
		}
	}, [cardArr])


	const fetchData = async (offset) => {
		try {
			let originalParams = {
				offset: offset,
				limit: numEachPage
			}
			if(Object.keys(params).length !== 0) {
				Object.assign(originalParams, params);
				// check valid param filter
			}
			console.log(originalParams);
			setLoading(true)
			let res = await instance.get('/camp/', {
				params: originalParams
			});
			// let res = await instance.get('/camp/');
			setLoading(false);
			console.log(res.data);
			if(res.data.count > 0) {
				setCardArr(cardArr.concat(res.data.results));
				setEmpty(false);
			}
			else if(res.data.count === 0) setEmpty(true);
			setTotalLen(res.data.count)
		} catch (error) {
			console.log(error.response);
			setLoading(false);
		}
	}

	useEffect(() => {
		if(cardArr.length < totalLen && cardArr !== 0) {
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
			{empty?
				(<div>Empty!!!</div>)
				:
				(
					<div style={{margin: '12px'}}>{`page: ${curPage+1} / ${Math.ceil(totalLen * 1.0 / numEachPage)}`}</div>	
				)
			}
			<div className='allCard-wrapper'>
				<div className='stepButton'>
					<img id="previous" src={PrevButton} style={{width: '90%'}} alt="prev-button" onClick={handlePrevious}/>
				</div>
				{
					loading ?
					<div className='loadingwrapper'>
						<Spin />
					</div>
					:
					<div className="cardwrapper">
						{
								cardArr.slice(curPage*numEachPage, curPage*numEachPage + numEachPage).map((item) => ( 
								<ThumbnailCard
									name={item.name}
									key={item.id} 
									keyVal={item.id} 
									src={item.cover_photo === null ? COVERS[Math.floor(Math.random()*COVERS.length)] : item.cover_photo}
									place={item.place}
								/> 
						))}
					</div>
				}
				<div className='stepButton'>
					<img id="next"src={NextButton} style={{width: '90%'}} onClick={handleNext} alt="next-button"/>
				</div>
			</div>
		</>
    )
}

export default DisplayCard
