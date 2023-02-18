let counterValue = 0;

const value = document.querySelector("#value");
const buttonMinus = document.querySelector("button[data-action='decrement']");
const buttonPlus = document.querySelector("button[data-action='increment']");

buttonMinus.addEventListener("click", () => {
	counterValue--;
	value.textContent = counterValue;
});

buttonPlus.addEventListener("click", () => {
	counterValue++;
	value.textContent = counterValue;
});
