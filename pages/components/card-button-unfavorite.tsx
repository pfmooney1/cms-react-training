import react from 'react';
import cardstyles from '../../styles/Card.module.css';
import Script from 'next/script';

type Props = {
	comic: object;
	favoritesList: Array<{}>;
	addFavorite: Function;
	removeFavorite: Function
}
//   onClick={() => removeFavorite(index)}

export function Button_unfavorite({ comic, removeFavorite } : Props) {
	function removeFromFavorites(comic : any) {
		console.log(comic);
		removeFavorite(comic);
	}
	return (
		<button className={`${cardstyles.button_detail} ${cardstyles.favorite}`} onClick={() => removeFromFavorites(comic)}>
				<i className="fas fa-bolt"></i>
				<Script src="https://kit.fontawesome.com/1ae435c4b3.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_unfavorite;