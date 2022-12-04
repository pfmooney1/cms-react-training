import { useEffect, useState } from 'react';
import loadingSpinner from "../../public/loadingSpinner.gif";

export function useApiFetch() {
	let sampleData = [{
		"id": "Loading...",
		"title": "Loading...",
		"issueNumber": "Loading...",
		"description": "Loading...",
		"pageCount": "Loading...",
		"series": {
			"resourceURI": "Loading...",
			"name": "Loading..."
		},
		"collections": [],
		"collectedIssues": [],
		"dates": [
			{ "type": "onsaleDate", "date": "Loading..." },
			{ "type": "focDate", "date": "Loading..." }
		],
		"prices": [{ "type": "Loading...", "price": "Loading..." }],
		"thumbnail": {
			"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
			"extension": "jpg"
		},
		"images": [],
		"creators": { "available": 1, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/creators", "items": [{ "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021", "name": "Jim Nausedas", "role": "editor" }], "returned": 1 },
		"characters": { "available": 0, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/characters", "items": [], "returned": 0 }, "stories": { "available": 2, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/stories", "items": [{ "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698", "name": "cover from Marvel Previews (2017)", "type": "cover" }, { "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699", "name": "story from Marvel Previews (2017)", "type": "interiorStory" }], "returned": 2 },
		"events": { "available": 0, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/events", "items": [], "returned": 0 }
	}];
	const [comicsData, getComicsData] = useState(sampleData);

	useEffect(() => {
		const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=deeef1f1563086552c1c70bec9bad13c&hash=3907e3cae8ca9355f8ef1bced483e9ad";
		console.log("Loading...");
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json);
				console.log("Successfully loaded! ");
				getComicsData(json.data.results);
			} catch (error) {
				console.log("Error: ", error);
			}
		};
		fetchData();
	}, []);
	return [comicsData];
}
export default {useApiFetch};