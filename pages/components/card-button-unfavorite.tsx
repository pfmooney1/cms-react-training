import Script from 'next/script';
import cardstyles from '../../styles/card.module.css';

type Props = {
	comic: object;
	favoritesList: Array<{}>;
	removeFavorite: Function
}

export function Button_unfavorite({ comic, favoritesList, removeFavorite }: Props) {
	let arrayOfFavoriteIDs: Array<number> = [];
	favoritesList.forEach(fav => {
		if (fav.id !== undefined) {
			arrayOfFavoriteIDs.push(fav.id);
		};
	})
	let index = arrayOfFavoriteIDs.indexOf(comic.id);
	return (
		<button className={`${cardstyles.button_detail} ${cardstyles.favorite}`} onClick={() => removeFavorite(index)}>
			<i className="fas fa-bolt"></i>
			<Script src="https://kit.fontawesome.com/1ae435c4b3.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_unfavorite;