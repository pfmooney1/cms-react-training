import ComicFeedStyles from '../../styles/ComicFeed.module.css';

function PageSelector({userPreferences, updateUserPreferences} : any) {
	function prevPage() {
		if (userPreferences.page <= 1) return;
		updateUserPreferences(prevState => ({
			...prevState,
			page: prevState.page - 1
		}))
	}
	function nextPage() {
		// if (userPreferences.page <= 1) return;
		updateUserPreferences(prevState => ({
			...prevState,
			page: prevState.page + 1
		}))
	}

	function formatPages() {
		let a = ((userPreferences.page - 1) * 20) + 1;
		let b = a + 19;
		let c = "###"
		return `${a}-${b} of ${c}`
	};
	let pagesFormatted = formatPages();
	return (
		<div className={ComicFeedStyles.pageSelector}>
			<button onClick={prevPage}><i className="fas fa-angle-left"></i></button>
			<p>{pagesFormatted}</p>
			<button onClick={nextPage}><i className="fas fa-angle-right"></i></button>
		</div>
	)
}

export default PageSelector;