const recomendationPage = document.querySelector(".recomendation-page");
const tableBody = recomendationPage.querySelector(".table__head");
const tableHead = recomendationPage.querySelector(".table__body");

let isSyncing = false;

function syncScroll(source, target) {
	if (isSyncing) return;
	isSyncing = true;

	requestAnimationFrame(() => {
		const percent = source.scrollLeft / (source.scrollWidth - source.clientWidth);
		target.scrollLeft = percent * (target.scrollWidth - target.clientWidth);
		isSyncing = false;
	});
}

// Поддержка passive events
const scrollOptions = { passive: true };

tableBody.addEventListener("scroll", () => syncScroll(tableBody, tableHead), scrollOptions);
tableHead.addEventListener("scroll", () => syncScroll(tableHead, tableBody), scrollOptions);
