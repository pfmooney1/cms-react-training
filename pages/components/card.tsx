import cardstyles from '../../styles/Card.module.css';
import Detail from './card-detail';
import Image from 'next/image';
import Button_favorite from './card-button-favorite';
import Button_unfavorite from './card-button-unfavorite';

export function Card({ comic, favoritesList, addFavorite, removeFavorite } : any) {
	let altText = `Cover for '${comic.title}'`
	let thisComicID = comic.id;
	let obj = favoritesList.find(item => item.id === thisComicID);
	// if (comic == obj) {
	// 	console.log("the same");
	// }
	return (
		<div className={cardstyles.card}>
			<Image
				src={comic.imageSrc}
				alt={altText}
				width={185}
				height={275}
			/>
			{comic == obj ? <Button_favorite
				comic={comic}
				addFavorite={addFavorite}
				favoritesList={favoritesList}
				removeFavorite={removeFavorite}
			/> :
			<Button_unfavorite
				comic={comic}
				addFavorite={addFavorite}
				favoritesList={favoritesList}
				removeFavorite={removeFavorite}
			/>
			}
			<Detail comic={comic} />
		</div>
	)
}

export default Card;