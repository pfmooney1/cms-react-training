import Detail from './card-detail';
import { useState } from 'react';
import Image from 'next/image';
import Button_favorite from './card-button-favorite';
import Button_unfavorite from './card-button-unfavorite';
import cardstyles from '../../styles/card.module.css';
import styles from '../../styles/App.module.css';


export function Card({ comic, favoritesList, addFavorite, removeFavorite }: any) {
	let altText = `Cover for '${comic.title}'`
	let arrayOfFavoriteIDs: any = [];
	favoritesList.forEach(fav => {
		if (fav.id !== undefined) {
			arrayOfFavoriteIDs.push(fav.id);
		};
	});
	function returnButton() {
		if (arrayOfFavoriteIDs.includes(comic.id)) {
			return <Button_unfavorite
				comic={comic}
				favoritesList={favoritesList}
				removeFavorite={removeFavorite}
			/>
		}
		else {
			return <Button_favorite
				comic={comic}
				addFavorite={addFavorite}
			/>
		}
	}

	
	// * Toggles the Overlay panel
	const [overlayVisible, updateOverlayVisible] = useState(false)
	function returnOverlay() {
		let imgSrc = comic.imageSrc;
		let altText = comic.title;
		if (!overlayVisible) return null;
		if (overlayVisible) return (<div className={styles.overlay} onClick={toggleOverlay}>
				<Image
					className={styles.overlayImage}
					src={imgSrc}
					alt={altText}
					width={600}
					height={800}
				/>
			</div>);
	}
	function toggleOverlay() {
		updateOverlayVisible(prev => !prev)
	}
	function showComicDetail(comicToUse) {
		returnOverlay(comicToUse);
		updateOverlayVisible(prev => !prev);
	}

	return (
		<div className={cardstyles.card}>
			<Image
				onClick={() => showComicDetail(comic)}
				className={cardstyles.image}
				src={comic.imageSrc}
				alt={altText}
				width={185}
				height={275}
			/>
			{returnButton()}
			<Detail comic={comic} />
			{returnOverlay()}
		</div>
	)
}

export default Card;