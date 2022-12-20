import react from 'react';
import comicstyles from '../../styles/Comic.module.css';
import Script from 'next/script';

type Props = {
	addFavorites: Function;
	element: object;
}

export function Button_detail({ element, addFavorites } : Props) {
	function addToFavorites(element : any) {
		console.log(element);
		addFavorites(element);
	}
	return (
		<button className={comicstyles.button_detail} onClick={() => addToFavorites(element)}>
				<i className="fa-sharp fa-solid fa-book-open-reader"></i>
				<Script src="https://kit.fontawesome.com/1703951958.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_detail;