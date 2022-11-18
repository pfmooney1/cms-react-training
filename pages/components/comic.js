import react from 'react';
import staticData from '../../staticData';
import comicstyles from '../../styles/Comic.module.css';
import Detail from './detail';
import Image from 'next/image';

function Comic() {
	let mappedTitles = staticData.map(element => {
		return (
			<div className={comicstyles.comic} >
				<Image
					src={element.thumbnail}
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
			{mappedTitles}
		</div>
	)
}

export default Comic;