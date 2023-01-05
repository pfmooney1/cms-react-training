import React from "react";
import FavStyles from "../../styles/FavoritesPanel.module.css";
import Image from "next/image";

function FavoritesPanel({ clearStorage, favoritesList, removeFavorite } : any) {
	let favoritesMapped = favoritesList.map((favItem: any, index: number) => (
		<FavoritesLI 
			favItem={favItem}
			index={index}
			removeFavorite={removeFavorite}
			key={favItem.id}
		/>
	))
	return (
		<div className={FavStyles.favoritesPanel}>
			<h2>Favorites: {favoritesList.length}</h2>
			<ul>
				{favoritesMapped}
			</ul>
			<button onClick={clearStorage}>Clear storage</button>
		</div>
	);


	function FavoritesLI({ removeFavorite, favItem, index} : any) {
		let altText = `Cover for '${favItem.title}'`
		return (
			<li 
				className={FavStyles.favoriteCard}
				onClick={() => removeFavorite(index)}
			>
				<Image
					src={favItem.imageSrc}
					alt={altText}
					width={60}
					height={80}
					className={FavStyles.image}
				/>
				<span className={FavStyles.title}>{favItem.title}</span>
				<span className={FavStyles.issue}>Issue: {favItem.issueNumber}</span>
			</li>
		)
	}
}
export default FavoritesPanel;