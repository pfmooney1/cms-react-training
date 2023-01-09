import { useEffect, useState } from "react";
import { useApiFetch } from './hooks/useApiFetch';
import useLocalStorage from './hooks/useLocalStorageSave';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../pages/components/footer';
import Main from '../pages/components/main-feed-favorites'
import appStyles from '../styles/App.module.css';
import welcomeStyles from '../styles/welcomePanel.module.css';
import headerStyles from '../styles/header.module.css';

export default function Home() {
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


	return (
		<div className={appStyles.appContainer}>
			<Head>
				<title>Mooney's Comic App</title>
				<meta name="description" content="Browse Marvel's collections of comics." />
				<link rel="icon" href="/bat-mask.png" sizes="any" />
				<link rel="icon" href="/bat-mask.svg" type="image/svg+xml" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Karla:wght@500&display=swap" rel="stylesheet"></link>
			</Head>
			<header className={headerStyles.header}>
				<Image
					src="/logo.svg"
					alt="Comic Closet logo"
					className={headerStyles.CCLogo}
					width={120}
					height={120}
				/>
				<div className={headerStyles.navBar}>
					<a href="#">Home</a>
					<a href="#">Shop</a>
					<a href="#">
						<i className="fas fa-bolt"></i>
						My Favorites
						<span className={headerStyles.favoritesCount}>   ({favoritesList.length})</span>
					</a>
					<button><i className="fas fa-bars"></i></button>
				</div>
				<Image
					src="/halftone.png"
					alt="Image fade"
					className={headerStyles.halftone}
					width={2880}
					height={352}
				/>
				<h1 className={headerStyles.pageTitle}>Comic Closet</h1>
			</header>
			<div className={welcomeStyles.welcomeHeader}>
				<h3>New Comics!</h3>
				<h2>Coming Out Daily</h2>
				<p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			</div>
			<Main 
				comicsData={comicsData}
				favoritesList={favoritesList}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				userPreferences={userPreferences}
				updateUserPreferences={updateUserPreferences}
				clearStorage={clearStorage}
			/>
			<Footer />
		</div>
	)
}
