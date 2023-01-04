import ComicFeedStyles from '../../styles/ComicFeed.module.css';

import Card from '../components/card'

function ComicsFeed({comicsData, addFavorite, favoritesList, removeFavorite} : any) {
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