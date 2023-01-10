import Image from 'next/image';
import headerStyles from '../../styles/header.module.css';

export function Header({ favoritesList } : any) {
	return (
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
	)
}
export default Header;