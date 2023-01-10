import Detail from './card-detail';
import Image from 'next/image';
import Button_favorite from './card-button-favorite';
import Button_unfavorite from './card-button-unfavorite';
import cardstyles from '../../styles/card.module.css';


export function Card({ comic, favoritesList, addFavorite, removeFavorite } : any) {
	let altText = `Cover for '${comic.title}'`
	let arrayOfFavoriteIDs : any = [];
	favoritesList.forEach(fav => {
		if (fav.id !== undefined) {
			arrayOfFavoriteIDs.push(fav.id);
		};
	});
	
	function returnButton() {
		if (arrayOfFavoriteIDs.includes(comic.id)) {
			return <Button_unfavorite
				comic={comic}
				favoritesList={favoritesList}
				removeFavorite={removeFavorite}
			/>
		}
		else {
			return <Button_favorite
				comic={comic}
				addFavorite={addFavorite}
			/>
		}
	}
	return (
		<div className={cardstyles.card}>
			<Image
				className={cardstyles.image}
				src={comic.imageSrc}
				alt={altText}
				width={185}
				height={275}
			/>
			{returnButton()}
			<Detail comic={comic} />
		</div>
	)
}

export default Card;