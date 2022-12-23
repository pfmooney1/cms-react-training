import comicstyles from '../../styles/Comic.module.css';
import Detail from './card-detail';
import Image from 'next/image';
import Button_favorite from './card-button-favorite';
import Button_unfavorite from './card-button-unfavorite';

export function Card(props : any) {
	let img: string;
	if (props.element.thumbnail.extension == "") {
		img = "/" + props.element.thumbnail.path;
	}
	else {
		img = props.element.thumbnail.path + "." + props.element.thumbnail.extension;
	}
	return (
		<div className={comicstyles.comic}>
			<Image
				src={img}
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