import { useEffect, useState } from 'react';
import loadingSpinner from "../../public/loadingSpinner.gif";

export function useApiFetch() {
	// interface dataInterface {
	// 	"id": number,
	// 	"title": string,
	// 	"issueNumber": number,
	// 	"description": string,
	// 	"pageCount": number,
	// 	"series": {
	// 		"resourceURI": string,
	// 		"name": string
	// 	},
	// 	"dates": [
	// 		{ "type": string, "date": any },
	// 		{ "type": string, "date": any }
	// 	],
	// 	"thumbnail": {
	// 		"path": string,
	// 		"extension": string
	// 	},
	// 	"creators": any,
	// 	"characters": any,
	// 	"events": any
	// };
	let sampleData = [{
		"id": 0,
		"title": "Loading...",
		"issueNumber": 0,
		"description": "Loading...",
		"pageCount": "Loading...",
		"series": {
			"resourceURI": "Loading...",
			"name": "Loading..."
		},
		"dates": [
			{ "type": "onsaleDate", "date": "2099-10-30T00:00:00-0500" },
			{ "type": "focDate", "date": "2099-10-30T00:00:00-0500" }
		],
		"thumbnail": {
			"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
			"extension": "jpg"
		},
		"creators": { "available": 1, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/creators", "items": [{ "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021", "name": "Jim Nausedas", "role": "editor" }], "returned": 1 },
		"characters": { "available": 0, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/characters", "items": [], "returned": 0 }, "stories": { "available": 2, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/stories", "items": [{ "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698", "name": "cover from Marvel Previews (2017)", "type": "cover" }, { "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699", "name": "story from Marvel Previews (2017)", "type": "interiorStory" }], "returned": 2 },
		"events": { "available": 0, "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/events", "items": [], "returned": 0 }
	}];
	const [comicsData, getComicsData] = useState(sampleData);

	useEffect(() => {
		const url: string = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=deeef1f1563086552c1c70bec9bad13c&hash=3907e3cae8ca9355f8ef1bced483e9ad";
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
export default { useApiFetch };