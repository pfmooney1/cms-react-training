import cardstyles from '../../styles/card.module.css';
import Script from 'next/script';

type Props = {
	comic: object;
	addFavorite: Function;
}

export function Button_favorite({ comic, addFavorite }: Props) {
	return (
		<button className={`${cardstyles.button_detail}`} onClick={() => addFavorite(comic)}>
			<i className="fas fa-bolt"></i>
			<Script src="https://kit.fontawesome.com/1ae435c4b3.js" crossOrigin="anonymous" />
		</button>
	)
};

export default Button_favorite;