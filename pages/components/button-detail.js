import react from 'react';
import comicstyles from '../../styles/Comic.module.css';
import Script from 'next/script';

export function Button_detail({ element }) {
	return (
			<button className={comicstyles.button_detail}>
				<i className="fa-sharp fa-solid fa-book-open-reader"></i>
				<Script src="https://kit.fontawesome.com/1703951958.js" crossorigin="anonymous" />
			</button>
	)
}

export default Button_detail;