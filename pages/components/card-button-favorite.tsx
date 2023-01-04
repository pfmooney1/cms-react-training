import react from 'react';
import cardstyles from '../../styles/Card.module.css';
import Script from 'next/script';

type Props = {
	comic: object;
	favoritesList: Array<{}>;
	addFavorite: Function;
	removeFavorite: Function
}

export function Button_favorite({ comic, addFavorite } : Props) {
	function addToFavorites(comic : any) {
		console.log(comic);
		addFavorite(comic);
	}
	return (
		<button className={`${cardstyles.button_detail}`} onClick={() => addToFavorites(comic)} >
				<i className="fas fa-bolt"></i>
				<Script src="https://kit.fontawesome.com/1ae435c4b3.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_favorite;