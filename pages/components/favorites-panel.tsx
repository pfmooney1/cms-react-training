import React from "react";
import FavStyles from "../../styles/FavoritesPanel.module.css";
import Image from "next/image";

function FavoritesPanel(props : any) {
	let arrayOfFavorites = props.favorites;
	let arrayOfIDs = arrayOfFavorites.map((item: any, index: number) => (
		<FavoritesLI 
			item={item}
			index={index}
			removeFavorite={props.removeFavorite}
			key={item.id}
		/>
	))
	return (
		<div className={FavStyles.favoritesPanel}>
			<h2>Favorites: {arrayOfFavorites.length}</h2>
			<ul>
				{arrayOfIDs}
			</ul>
			<button onClick={props.clearStorage}>Clear storage</button>
		</div>
	);
	function FavoritesLI({removeFavorite, item, index} : any) {
		return (
			<li className={FavStyles.favoriteCard}
				onClick={() => removeFavorite(index)} 
			>
				<Image
					src={item.imageSrc}
					alt="comic"
					width={60}
					height={80}
					className={FavStyles.image}
				/>
				<span className={FavStyles.title}>{item.title}</span>
				<span className={FavStyles.issue}>Issue: {item.issueNumber}</span>
			</li>
		)
	}
}
export default FavoritesPanel;