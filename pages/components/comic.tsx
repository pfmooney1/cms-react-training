import react, { useEffect, useState } from 'react';
import staticData from '../../staticData';
import comicstyles from '../../styles/Comic.module.css';
import Detail from './detail';
import Image from 'next/image';
import { useApiFetch } from '../hooks/useApiFetch';
import Button_detail from './button-detail';

function Comic() {
	const [comicsData] = useApiFetch();
	interface dataInterface {
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
	var mappedData = comicsData<dataInterface>.map(element => {
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
					<Button_detail />
					<Detail element={element} />
				</div>
			);
		});
	return (
		<div className={comicstyles.comics} style={{display: "flex", flexWrap: "wrap",}}>
			{mappedData}
		</div>
	)
}

export default Comic;