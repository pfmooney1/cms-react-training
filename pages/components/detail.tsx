import react from 'react';
import comicstyles from '../../styles/Comic.module.css';
import Button_detail from './button-detail';
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
export function Detail({ element }: any) {
	let ms = element.dates[0].date;
	let datething = new Date(ms);
	let x = datething.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" });
	return (
		<div className={comicstyles.detail}>
			<Button_detail />
			<h3 className={comicstyles.detail_label}>ID Number:</h3>
			<h3 className={comicstyles.detail_data}>{element.id}</h3>

			<h3 className={comicstyles.detail_label}>Title: </h3>
			<h3 className={comicstyles.detail_data}>{element.title}</h3>

			<h3 className={comicstyles.detail_label}>Issue:</h3>
			<h3 className={comicstyles.detail_data}>{element.issueNumber}</h3>

			<h3 className={comicstyles.detail_label}>Date Published:</h3>
			<h3 className={comicstyles.detail_data}>{ms}</h3>
		</div>
	)
}

export default Detail;