import cardstyles from '../../styles/Card.module.css';
import Detail from './card-detail';
import Image from 'next/image';
import Button_favorite from './card-button-favorite';
import Button_unfavorite from './card-button-unfavorite';

export function Card(props : any) {
	return (
		<div className={cardstyles.card}>
			<Image
				src={props.element.imageSrc}
				alt="comic"
				width={185}
				height={275}
			/>
			<Button_favorite element={props.element} addFavorites={props.addFavorites} />
			<Detail element={props.element} />
		</div>
	)
}

export default Card;