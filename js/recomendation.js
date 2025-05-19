const recomendationPage = document.querySelector(".recomendation-page");
const tableBody = recomendationPage.querySelector(".table__head");
const tableHead = recomendationPage.querySelector(".table__body");

let isSyncing = false;
let scrollTimeout;

function syncScroll(source, target) {
	if (isSyncing) return;
	isSyncing = true;

	const percent = source.scrollLeft / (source.scrollWidth - source.clientWidth);
	target.scrollLeft = percent * (target.scrollWidth - target.clientWidth);

	isSyncing = false;
}

function handleScroll(source, target) {
	if (scrollTimeout) {
		clearTimeout(scrollTimeout); // Сбрасываем предыдущий таймер
	}

	// Устанавливаем новый таймер для синхронизации после завершения скролла
	scrollTimeout = setTimeout(() => {
		syncScroll(source, target);
	}, 0); // Задержка в 100 мс
}

tableBody.addEventListener("scroll", () => handleScroll(tableBody, tableHead));
tableHead.addEventListener("scroll", () => handleScroll(tableHead, tableBody));
