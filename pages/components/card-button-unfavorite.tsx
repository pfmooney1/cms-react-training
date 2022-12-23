import react from 'react';
import comicstyles from '../../styles/Comic.module.css';
import Script from 'next/script';

type Props = {
	addFavorites: Function;
	element: object;
}

export function Button_unfavorite({ element, addFavorites } : Props) {
	function addToFavorites(element : any) {
		console.log(element);
		addFavorites(element);
	}
	return (
		<button className={`${comicstyles.button_detail} ${comicstyles.favorite}`} onClick={() => addToFavorites(element)}>
				<i className="fas fa-bolt"></i>
				<Script src="https://kit.fontawesome.com/1ae435c4b3.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_unfavorite;