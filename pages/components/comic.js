import react from 'react';
import staticData from '../../staticData';
import comicstyles from '../../styles/Comic.module.css';

function Comic() {
	let mappedTitles = staticData.map(element => {
		return (
			<div className={comicstyles.comic} >
				<img src={element.thumbnail} />
				<div className={comicstyles.detail}>
					<h3 className={comicstyles.detail_label}>ID Number:</h3>
					<h3 className={comicstyles.detail_data}>{element.id}</h3>

					<h3 className={comicstyles.detail_label}>Title: </h3>
					<h3 className={comicstyles.detail_data}>{element.title}</h3>

					<h3 className={comicstyles.detail_label}>Issue:</h3>
					<h3 className={comicstyles.detail_data}>{element.issueNumber}</h3>

					<h3 className={comicstyles.detail_label}>Date Published:</h3>
					<h3 className={comicstyles.detail_data}>{element.publishDate}</h3>
				</div>
			</div>
		);
	});
	return (
		<div className='comics'>
			{mappedTitles}
		</div>
	)
}

export default Comic;