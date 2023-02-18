const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
	if (event.target.value.length == input.getAttribute("data-length")) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else {
		input.classList.add("invalid");
		input.classList.remove("valid");
	}
});

console.log(input.getAttribute("data-length"));
