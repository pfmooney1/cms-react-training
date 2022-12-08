import react, { useEffect, useState } from 'react';
import staticData from '../../staticData';
import comicstyles from '../../styles/Comic.module.css';
import Detail from './detail.tsx';
import Image from 'next/image';
import { useApiFetch } from '../hooks/useApiFetch.tsx';

function Comic() {
	const [comicsData] = useApiFetch();

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
						width={250}
						height={400}
					/>
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