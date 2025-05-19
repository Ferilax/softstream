const recomendationPage = document.querySelector(".recomendation-page");
const tableBody = recomendationPage.querySelector(".table__head");
const tableHead = recomendationPage.querySelector(".table__body");

// Флаг для предотвращения рекурсии
let isSyncing = false;

function syncScroll(source, target) {

	if (isSyncing) return;
	isSyncing = true;

	// Рассчитываем процент прокрутки
	const percent = source.scrollLeft / (source.scrollWidth - source.clientWidth);

	// Применяем к целевому блоку
	target.scrollLeft = percent * (target.scrollWidth - target.clientWidth);

	isSyncing = false;
}

tableBody.addEventListener("scroll", () => syncScroll(tableBody, tableHead));
tableHead.addEventListener("scroll", () => syncScroll(tableHead, tableBody));

tableBody.addEventListener("touchmove", () => syncScroll(tableBody, tableHead));
tableHead.addEventListener("touchmove", () => syncScroll(tableHead, tableBody));