import ComicFeedStyles from '../../styles/ComicFeed.module.css';

function PageSelector({ userPreferences, updateUserPreferences, totalFromThisSet } : any) {
	let firstComicOnPage = ((userPreferences.page - 1) * 20) + 1;
	let lastComicOnPage = firstComicOnPage + 19;
	if (lastComicOnPage > totalFromThisSet){
		lastComicOnPage = totalFromThisSet;
	}

	function prevPage() {
		if (userPreferences.page <= 1) return;
		updateUserPreferences(prevState => ({
			...prevState,
			page: prevState.page - 1
		}))
	}

	function nextPage() {
		if (lastComicOnPage == totalFromThisSet) return;
		updateUserPreferences(prevState => ({
			...prevState,
			page: prevState.page + 1
		}))
	}

	let pagesFormatted = `${firstComicOnPage}-${lastComicOnPage} of ${totalFromThisSet}`
	return (
		<div className={ComicFeedStyles.pageSelector}>
			<button onClick={prevPage}><i className="fas fa-angle-left"></i></button>
			<p>{pagesFormatted}</p>
			<button onClick={nextPage}><i className="fas fa-angle-right"></i></button>
		</div>
	)
}

export default PageSelector;