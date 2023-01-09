import { useEffect, useState } from "react";
import { useApiFetch } from './hooks/useApiFetch';
import useLocalStorage from './hooks/useLocalStorageSave';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../pages/components/footer';
import Main from '../pages/components/main-feed-favorites'
import styles from '../styles/App.module.css';

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
		<div className={styles.appContainer}>
			<Head>
				<title>Mooney's Comic App</title>
				<meta name="description" content="Browse Marvel's collections of comics." />
				<link rel="icon" href="/bat-mask.png" sizes="any" />
				<link rel="icon" href="/bat-mask.svg" type="image/svg+xml" />
			</Head>
			<header className={styles.header}>
				<Image
					src="/logo.svg"
					alt="Comic Closet logo"
					className={styles.CCLogo}
					width={120}
					height={120}
				/>
				<div className={styles.navBar}>
					<a href="#">Home</a>
					<a href="#">Shop</a>
					<a href="#">
						<i className="fas fa-bolt"></i>
						My Favorites
						<span className={styles.favoritesCount}>   ({favoritesList.length})</span>
					</a>
				</div>
				<Image
					src="/halftone.png"
					alt="Image fade"
					className={styles.halftone}
					width={2880}
					height={352}
				/>
				<h1 className={styles.pageTitle}>Comic Closet</h1>
			</header>
			<div className={styles.welcomeHeader}>
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
