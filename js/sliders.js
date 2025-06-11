document.addEventListener("DOMContentLoaded", function () {
	Splide.defaults = {
		arrows: false,
		pagination: false,
		mediaQuery: "min",
	}

	function createSwiper(swiperSelector, options) {
		const hasSwiper = !!document.querySelector(swiperSelector);
		if (hasSwiper) {
			let splide = new Splide(swiperSelector, options);
			splide.mount();

			return splide;
		}
	}

	function createNavigation(splide, prevSelector, nextSelector) {
		const prevButton = document.querySelector(prevSelector);
		const nextButton = document.querySelector(nextSelector);

		prevButton?.addEventListener('click', () => {
			if (splide.index > 0) {
				splide.go('-1');
			}
		});
		nextButton?.addEventListener('click', () => {
			if (splide.index < splide.length - 1) {
				splide.go('+1');
			}
		});
		splide?.on('move', (newIndex) => {
			prevButton.disabled = newIndex === 0;
			nextButton.disabled = newIndex === splide.length - 1;
		});
	}

	// ---------------------------------------------------------------------------------------------------

	let startSplide = createSwiper("#start-splide", {
		perPage: 1,
		autoHeight: true,
		pagination: true,
	});
	createNavigation(startSplide, "#start-splide-prev", "#start-splide-next");

	let advantageSplide = createSwiper("#advantage-splide", {
		padding: "calc((100vw - 100%) / 2)",
		perPage: 1,
		gap: 8,

		breakpoints: {
			425: {
				gap: 20,
			},
			768: {
				perPage: 2,
			},
			1440: {
				perPage: 1,
				autoWidth: true,
			}
		}
	});
	createNavigation(advantageSplide, "#advantage-splide-prev", "#advantage-splide-next");

	createSwiper("#other-article-splide", {
		padding: "var(--container-padding)",
		perPage: 1,
		gap: 8,

		breakpoints: {
			768: {
				perPage: 2,
				gap: 12,
			},
		}
	});

	createSwiper("#admin-panel-splide", {
		padding: "calc((100vw - 100%) / 2)",
		perPage: 1,
		gap: 8,

		breakpoints: {
			768: {
				perPage: 2,
				gap: 12,
			},
			1024: {
				perPage: 3,
				gap: 20,
			}
		}
	});

	createSwiper("#certificates-splide", {
		padding: "calc((100vw - 100%) / 2)",
		perPage: 1,
		gap: 8,

		breakpoints: {
			768: {
				perPage: 2,
				gap: 12,
			},
			1024: {
				perPage: 3,
				gap: 20,
			}
		}
	});
});