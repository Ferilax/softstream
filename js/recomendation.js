const recomendationPage = document.querySelector(".recomendation-page");
const tableBody = recomendationPage.querySelector(".table__head");
const tableHead = recomendationPage.querySelector(".table__body");

let isSyncing = false;

function syncScroll(source, target) {
	if (isSyncing) return;
	isSyncing = true;

	// Синхронизация скролла
	target.scrollLeft = source.scrollLeft;

	isSyncing = false;
}

// Обработчики событий
tableBody.addEventListener('scroll', () => {
	syncScroll(tableBody, tableHead);
});

tableHead.addEventListener('scroll', () => {
	syncScroll(tableHead, tableBody);
});
