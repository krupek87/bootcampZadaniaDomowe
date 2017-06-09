function getPage() {

	var regex = /zadanie(\d+)/,
		result = window.location.search.match(regex);

		return result && result[1] ? parseInt(result[1]) : null;
}