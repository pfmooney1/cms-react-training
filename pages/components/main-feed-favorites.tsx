import ComicsFeed from "./comics-feed";
import FavoritesPanel from "./favorites-panel";
import styles from "../../styles/App.module.css";
import { useApiFetch } from '../hooks/useApiFetch';
import useLocalStorage from '../hooks/useLocalStorageSave';
import { useState } from "react";


export function Card(props : any) {

	const [favoritesList, setValue, addFavorite, removeFavorite, clearStorage] = useLocalStorage("favoritesList", []);
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
					<option value="">Character</option>
					<option value="1009368">Iron Man</option>
					<option value="1009220">Captain America</option>
					<option value="1009664">Thor</option>
					<option value="1009268">Deadpool</option>
					<option value="1009562">Scarlet Witch</option>
					<option value="1009189">Black Widow</option>
					<option value="1009707">Wasp</option>
					<option value="1010763">Gamora</option>
				</select>
				<select>
					<option value="">Creator</option>
					<option value="12787">Kate Leth</option>
					<option value="24">Brian Michael Bendis</option>
					<option value="30">Stan Lee</option>
					<option value="32">Steve Ditko</option>
					<option value="196">Jack Kirby</option>
				</select>
			</div>
			<ComicsFeed
				comicsData={comicsData}
				favoritesList={favoritesList}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
			/>
			<FavoritesPanel
				clearStorage={clearStorage}
				favoritesList={favoritesList}
				removeFavorite={removeFavorite}
			/>
		</main>
	)
}

export default Card;