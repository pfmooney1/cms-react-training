import { useEffect, useState } from "react";
import { useApiFetch } from '../hooks/useApiFetch';
import useLocalStorage from '../hooks/useLocalStorageSave';
import ComicsFeed from "./comics-feed";
import FavoritesPanel from "./favorites-panel";
import styles from "../../styles/App.module.css";


export function Main(props : any) {
	const [favoritesList, setValue, addFavorite, removeFavorite, clearStorage] = useLocalStorage("favoritesList", []);
	let [userPreferences, updateUserPreferences] = useState({
		filterType: "",
		filterValue: 30,
		page: 1
	});
	let [comicsData, fetchAndHandleData] = useApiFetch(userPreferences);

	useEffect(() => {
		fetchAndHandleData();
	}, [userPreferences]);

	function characterSelect(value : any) {
		document.getElementById('creatorSelector').value = "";
		updateUserPreferences({
			filterType: "character",
			filterValue: value.target.value,
			page: 1
		})
	}
	function creatorSelect(value: any) {
		document.getElementById('characterSelector').value = "";
		updateUserPreferences({
			filterType: "creator",
			filterValue: value.target.value,
			page: 1
		})
	}

	return (
		<main className={styles.main}>
			<form className={styles.filters}>
				Filter by:
				<select id="characterSelector" onChange={characterSelect}>
					<option value="">Character</option>
					<option value="1009368">Iron Man</option>
					<option value="1009220">Captain America</option>
					<option value="1009664">Thor</option>
					<option value="1009268">Deadpool</option>
					<option value="1009562">Scarlet Witch</option>
					<option value="1009189">Black Widow</option>
					<option value="1009707">Wasp</option>
					<option value="1010763">Gamora</option>
					<option value="1017815">Silk</option>
				</select>
				<select id="creatorSelector" onChange={creatorSelect}>
					<option value="">Creator</option>
					<option value="12787">Kate Leth</option>
					<option value="24">Brian Michael Bendis</option>
					<option value="30">Stan Lee</option>
					<option value="32">Steve Ditko</option>
					<option value="196">Jack Kirby</option>
					<option value="14278">Test</option>
				</select>
			</form>
			<ComicsFeed
				comicsData={comicsData}
				favoritesList={favoritesList}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				userPreferences={userPreferences}
				updateUserPreferences={updateUserPreferences}
			/>
			<FavoritesPanel
				clearStorage={clearStorage}
				favoritesList={favoritesList}
				removeFavorite={removeFavorite}
			/>
		</main>
	)
}

export default Main;