import React from "react";
import FavStyles from "../../styles/FavoritesPanel.module.css";

function FavoritesPanel(props : any) {
	let arrayOfFavorites = props.favorites;
	let arrayOfIDs = arrayOfFavorites.map((item : any, index : number) => <li onClick={() => props.removeFavorite(index)} key={item.id}>{item.title}</li>)
	return (
		<div className={FavStyles.favoritesPanel}>
			<h2>Favorites: {arrayOfFavorites.length}</h2>
			<ul>
				{arrayOfIDs}
			</ul>
			<button onClick={props.clearStorage}>Clear storage</button>
		</div>
	);
}
export default FavoritesPanel;