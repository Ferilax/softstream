function showModal(trigger, modal) {
	if (trigger) {
		document.body.classList.add("modal-opened");
		modal.classList.add("show");
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);

	document.body.classList.remove("modal-opened");
	modal.classList.remove("show");
}

function createModal(modalSelector, triggerSelector) {
	document.addEventListener("click", e => {
		// Показывать модалку
		const modal = document.querySelector(modalSelector);
		const trigger = e.target.closest(triggerSelector);
		showModal(trigger, modal);

		// Прятать модалку при клике вне
		const clickedModal = e.target.closest(".modal");
		const modalContent = e.target.closest(".modal__body");
		const closeButton = e.target.closest(".modal__close");
		const closeTrigger = e.target.closest(".modal .close");

		if (!clickedModal) return; // Если нет модалки то останавливать

		if (!modalContent || closeButton || closeTrigger) {
			clickedModal.classList.remove("show");
			document.body.classList.remove("modal-opened");
		}
	});
};

createModal("#modal-demo", ".modal-demo-trigger");
createModal("#modal-submit", ".modal-submit-trigger");

// Скрываем при удачном заполнении формы, для выведения последующей модалки 
const form = document.querySelector("#modal-demo form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	closeModal("#modal-demo");

	const inputs = form.querySelectorAll("input");
	inputs.forEach(input => {
		input.value = "";
	});
});