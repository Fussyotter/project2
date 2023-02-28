// redundant

// Added load so that the page has time to finish loading before it runs.

window.addEventListener('load', () => {
	const searchButton = document.getElementById('searchButton');
	const searchInput = document.getElementById('searchInput');
	// this is where the issue seems to be.  I can't get the searchValue to move into it
	searchButton.addEventListener('click', async () => {
		const searchValue = searchInput.value;
		const url = `/search?fish=${encodeURIComponent(searchValue)}`;
		window.location.href = url;
		console.log(url);
	});
});
