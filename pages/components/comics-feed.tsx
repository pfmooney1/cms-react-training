import ComicFeedStyles from '../../styles/ComicFeed.module.css';

import Card from '../components/card'

function ComicsFeed(props) {

	var mappedData = props.comicsData.map(element => {
			return (
				<Card element={element} addFavorites={props.addFavorites} key={element.id} />
			);
		});
	return (
		<div id="comics-feed" className={ComicFeedStyles.comicsFeed} style={{display: "flex", flexWrap: "wrap",}}>
			{mappedData}
		</div>
	)
}

export default ComicsFeed;