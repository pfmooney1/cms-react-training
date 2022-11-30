import react, { useEffect, useState } from 'react';
import staticData from '../../staticData';
import comicstyles from '../../styles/Comic.module.css';
import Detail from './detail';
import Image from 'next/image';
import APIFetch from '../hooks/useApiFetch';

function Comic() {
	const [comicsData, getComicsData] = useState("Loading ...");

	useEffect(() => {
		const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=deeef1f1563086552c1c70bec9bad13c&hash=3907e3cae8ca9355f8ef1bced483e9ad";

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json);
				getComicsData(JSON.stringify(json));
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, []);




	// function renderComicsToPage() {
	// 	console.log("It should have ran.")
	// 	let mappedData = comicsData.data.map(element => {
	// 		return (
	// 			<div className={comicstyles.comic} >
	// 				<Image
	// 					src={element.thumbnail.path + "." + element.thumbnail.extension}
	// 					alt="comic"
	// 					width={250}
	// 					height={400}
	// 				/>
	// 				<Detail element={element} />
	// 			</div>
	// 		);
	// 	});
	// 	getComicsData(mappedData);
	// }


	return (
		<div className={comicstyles.comics} style={{display: "flex", flexWrap: "wrap",}}>
			{comicsData}
		</div>
	)
}

export default Comic;