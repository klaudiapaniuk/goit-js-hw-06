function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
	const elementsToAdd = [];
	for (let i = 0; i < amount; i++) {
		const div = document.createElement("div");
		div.style.height = `${30 + 10 * i}px`;
		div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor();
		elementsToAdd.push(div);
	}
	return elementsToAdd;
}

function destroyBoxes() {
	boxes.innerHTML = "";
}

btnCreate.addEventListener("click", (e) => {
	let boxesToAdd = createBoxes(input.value);
	boxes.append(...boxesToAdd);
});

btnDestroy.addEventListener("click", () => {
	destroyBoxes.call();
});
