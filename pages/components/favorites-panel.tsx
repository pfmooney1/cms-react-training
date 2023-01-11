import React from "react";
import FavStyles from "../../styles/favorites-panel.module.css";
import Image from "next/image";

function FavoritesPanel({ clearStorage, favoritesList, removeFavorite, visible, toggleFavorites }: any) {
	let favoritesMapped = favoritesList.map((favItem: any, index: number) => (
		<FavoritesLI
			favItem={favItem}
			index={index}
			removeFavorite={removeFavorite}
			key={favItem.id}
		/>
	))

	return (
		<div className={visible}>
			<h2>Favorites</h2>
			<ul>
				{favoritesMapped}
			</ul>
			<button onClick={toggleFavorites} className={FavStyles.showFavoritesButton}>
				{visible ? "Hide " : "Show "}
				Favorites <i className="fas fa-bolt"></i>
			</button>
		</div>
	);



	function FavoritesLI({ removeFavorite, favItem, index }: any) {
		let altText = `Cover for '${favItem.title}'`

		return (
			<li
				className={FavStyles.favoriteCard}
			>
				<button className={FavStyles.deleteButton}
					onClick={() => removeFavorite(index)}
				>&#10006;</button>
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