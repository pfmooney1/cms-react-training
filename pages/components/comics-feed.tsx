import comicstyles from '../../styles/Comic.module.css';
import { useApiFetch } from '../hooks/useApiFetch';
import useLocalStorage from '../hooks/useLocalStorageSave';
import Card from '../components/card'

function ComicsFeed() {
	const [favorites, setFavorites, addFavorites, clearStorage] = useLocalStorage("favoritesList", []);
	console.log(favorites);
	const [comicsData] = useApiFetch();
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
	var mappedData = comicsData.map(element => {
			return (
				<Card element={element} addFavorites={addFavorites} key={element.id} />
			);
		});
	return (
		<div id="comics-feed" className={comicstyles.comics} style={{display: "flex", flexWrap: "wrap",}}>
			{mappedData}
			<button onClick={clearStorage}>Clear storage</button>
		</div>
	)
}

export default ComicsFeed;