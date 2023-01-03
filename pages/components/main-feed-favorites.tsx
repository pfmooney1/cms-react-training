import ComicsFeed from "./comics-feed";
import FavoritesPanel from "./favorites-panel";
import styles from "../../styles/App.module.css";
import { useApiFetch } from '../hooks/useApiFetch';
import useLocalStorage from '../hooks/useLocalStorageSave';
import { useState } from "react";


export function Card(props : any) {

	const [favorites, setFavorites, addFavorites, removeFavorite, clearStorage] = useLocalStorage("favoritesList", []);
	console.log(favorites);
	let [comicsData] = useApiFetch();
	type DataType = {
		"id": number,
		"title": string,
		"issueNumber": number,
		"description": string,
		"pageCount": number,
		"series": {
			"resourceURI": string,
			"name": string
		},
		"dates": [
			{ "type": string, "date": any },
			{ "type": string, "date": any }
		],
		"thumbnail": {
			"path": string,
			"extension": string
		},
		"creators": any,
		"characters": any,
		"events": any
	};

	return (
		<main className={styles.main}>
			<div className={styles.filters}>
				Filter by:
				<select>
					<option>Character</option>
					<option>Iron Man: 1009368</option>
					<option>Captain America: 1009220</option>
					<option>Thor: 1009664</option>
					<option>Deadpool: 1009268</option>
					<option>Scarlet Witch: 1009562</option>
					<option>Black Widow: 1009189</option>
					<option>Wasp: 1009707</option>
					<option>Gamora: 1010763</option>
				</select>
				<select>
					<option>Creator</option>
					<option>Kate Leth: 12787</option>
					<option>Brian Michael Bendis: 24</option>
					<option>Stan Lee: 30</option>
					<option>Steve Ditko: 32</option>
					<option>Jack Kirby: 196</option>
				</select>
			</div>
			<ComicsFeed
				comicsData={comicsData}
				favorites={favorites}
				addFavorites={addFavorites}
				/>
			<FavoritesPanel
				comicsData={comicsData}
				clearStorage={clearStorage}
				favorites={favorites}
				removeFavorite={removeFavorite}
			/>
		</main>
	)
}

export default Card;