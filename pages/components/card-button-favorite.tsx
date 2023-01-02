import react from 'react';
import cardstyles from '../../styles/Card.module.css';
import Script from 'next/script';

type Props = {
	addFavorites: Function;
	element: object;
}

export function Button_favorite({ element, addFavorites } : Props) {
	function addToFavorites(element : any) {
		console.log(element);
		addFavorites(element);
	}
	return (
		<button className={`${cardstyles.button_detail}`} onClick={() => addToFavorites(element)}>
				<i className="fas fa-bolt"></i>
				<Script src="https://kit.fontawesome.com/1ae435c4b3.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_favorite;