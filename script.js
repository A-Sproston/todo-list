const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const btnDelete = document.querySelectorAll(".btn-del");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addToggle(li);
	let newButton = document.createElement("button");
	newButton.innerHTML = "Delete";
	li.appendChild(newButton);
	addDelete(newButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDelete(btnDelete) {
	btnDelete.addEventListener("click", function () {
		let liDelete = this.parentNode
		liDelete.remove();
	})
}

function addToggle(li) {
	li.addEventListener("click", function () {
		li.classList.toggle("done")
	})
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(addToggle);

btnDelete.forEach(addDelete);

