import ComicFeedStyles from '../../styles/ComicFeed.module.css';

import Card from '../components/card'

function ComicsFeed({comicsData, addFavorite, favoritesList, removeFavorite} : any) {
	const errorMessage = (
		<div className={ComicFeedStyles.errorMessage}>
			<i className="fas fa-search"></i>
			<h2>Sorry, could not find comics.</h2>
			<h3>Please adjust your search.</h3>
		</div>
	)
	if (comicsData.length < 1) return errorMessage;
	var mappedData = comicsData.map(comic => {
			return (
				<Card 
					comic={comic}
					key={comic.id}
					addFavorite={addFavorite}
					favoritesList={favoritesList}
					removeFavorite={removeFavorite}
				/>
			);
		});
	return (
		<div id="comics-feed" className={ComicFeedStyles.comicsFeed} style={{display: "flex", flexWrap: "wrap",}}>
			{mappedData}
		</div>
	)
}

export default ComicsFeed;