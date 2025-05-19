const recomendationPage = document.querySelector(".recomendation-page");
const tableBody = recomendationPage.querySelector(".table__head");
const tableHead = recomendationPage.querySelector(".table__body");

let isSyncing = false;

function syncScroll(source, target) {
	if (isSyncing) return;
	isSyncing = true;

	requestAnimationFrame(() => {
		target.scrollLeft = source.scrollLeft;
		isSyncing = false;
	});
}

// События для мгновенной синхронизации во время свайпа
tableBody.addEventListener("touchmove", () => syncScroll(tableBody, tableHead));
tableHead.addEventListener("touchmove", () => syncScroll(tableHead, tableBody));

// События для синхронизации после завершения инерции
tableBody.addEventListener("touchend", () => syncScroll(tableBody, tableHead));
tableHead.addEventListener("touchend", () => syncScroll(tableHead, tableBody));

// События для синхронизации во время обычного скролла
tableBody.addEventListener("scroll", () => syncScroll(tableBody, tableHead));
tableHead.addEventListener("scroll", () => syncScroll(tableHead, tableBody));