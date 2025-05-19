// Для анимации height с 0 до auto -------------------------------------------------------------------------
const accordeonSection = document.querySelector(".accordeons");
const accordeons = document.querySelectorAll(".accordeon");

const accordeonAnswerClassName = ".accordeon__answer"

function setZeroHeight() {
	accordeons.forEach(el => {
		el.querySelector(accordeonAnswerClassName).style.height = "0px";
	})
}
setZeroHeight();

function accordeonClose(accordeon, accordeonAnswer) {
	accordeonAnswer.style.height = `${accordeonAnswer.scrollHeight}px`;
	//accordeonAnswer.style.pointerEvents = "unset";
	accordeon.classList.add("open");
}

function accordeonOpen(accordeon, accordeonAnswer) {
	accordeonAnswer.style.height = `${accordeonAnswer.scrollHeight}px`;
	window.getComputedStyle(accordeonAnswer, null).getPropertyValue("height");
	accordeonAnswer.style.height = "0";
	//accordeonAnswer.style.pointerEvents = "none";
	accordeon.classList.remove("open");
}

function accordeonToggle(accordeon, accordeonAnswer) {
	if (accordeonAnswer.style.height === "0px") {
		accordeonClose(accordeon, accordeonAnswer);
	} else {
		accordeonOpen(accordeon, accordeonAnswer)
	}

	accordeonAnswer.addEventListener("transitionend", () => {
		if (accordeonAnswer.style.height !== "0px") {
			accordeonAnswer.style.height = "auto"
		}
	});
}

document.addEventListener("click", (e) => {
	let accordeon = e.target.closest(".accordeon");
	let trigger = e.target.closest(".accordeon__trigger");

	if (!trigger) return;

	let accordeonAnswer = accordeon.querySelector(accordeonAnswerClassName);

	accordeonToggle(accordeon, accordeonAnswer)
})