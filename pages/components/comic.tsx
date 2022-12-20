import react, { useEffect, useState } from 'react';
import comicstyles from '../../styles/Comic.module.css';
import Detail from './detail';
import Image from 'next/image';
import { useApiFetch } from '../hooks/useApiFetch';
import Button_detail from './button-detail';
import useLocalStorage from '../hooks/useLocalStorageSave';

function Comic() {
	const [favorites, setFavorites, addFavorites, clearStorage] = useLocalStorage("favoritesList", []);
	console.log(favorites);
	const [comicsData] = useApiFetch();
	type DataType = {
		"id": number,
		"title": string,
		"issueNumber": number,
		"description": string,
		"pageCount": number,
		"series": {
			"resourceURI": string,
			"name": string
		},
		"dates": [
			{ "type": string, "date": any },
			{ "type": string, "date": any }
		],
		"thumbnail": {
			"path": string,
			"extension": string
		},
		"creators": any,
		"characters": any,
		"events": any
	};
	var mappedData = comicsData.map(element => {
			let img : string;
			if (element.thumbnail.extension == "") {
				img = "/" + element.thumbnail.path;
			}
			else {
				img = element.thumbnail.path + "." + element.thumbnail.extension;
			}
			return (
				<div className={comicstyles.comic} key={element.id}>
					<Image
						src={img}
						alt="comic"
						width={185}
						height={275}
					/>
					<Button_detail element={element} addFavorites={addFavorites}/>
					<Detail element={element} />
				</div>
			);
		});
	return (
		<div className={comicstyles.comics} style={{display: "flex", flexWrap: "wrap",}}>
			{mappedData}
			<button onClick={clearStorage}>Clear storage</button>
		</div>
	)
}

export default Comic;