import React from "react";
import FavStyles from "../../styles/FavoritesPanel.module.css";
import Image from "next/image";

function FavoritesPanel(props : any) {
	let arrayOfFavorites = props.favorites;
	let arrayOfIDs = arrayOfFavorites.map((item: any, index: number) => <FavoritesLI item={item} index={index} removeFavorite={props.removeFavorite} />)
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
		let img: string;
		if (item.thumbnail.extension == "") {
			img = "/" + item.thumbnail.path;
		}
		else {
			img = item.thumbnail.path + "." + item.thumbnail.extension;
		}
		return (
			<li className={FavStyles.favoriteCard}
				onClick={() => removeFavorite(index)} 
				key={item.id}
			>
				<Image
					src={img}
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