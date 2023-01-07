import Head from 'next/head';
import Image from 'next/image';
import Footer from '../pages/components/footer';
import Main from '../pages/components/main-feed-favorites'
import styles from '../styles/App.module.css';

export default function Home() {
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
				<Image
					src="/halftone@2x.png"
					alt="Image fade"
					className={styles.halftone}
					width={2880}
					height={352}
				/>
				<h1 className={styles.pageTitle}>Comic Closet</h1>
			</header>
			<Main />
			<Footer />
		</div>
	)
}
