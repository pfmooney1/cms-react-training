import react from 'react';
import comicstyles from '../../styles/Comic.module.css';
import Button_detail from './button-detail';

export function Detail({ element }) {
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
			<h3 className={comicstyles.detail_data}>{element.publishDate}</h3>
		</div>
	)
}

export default Detail;