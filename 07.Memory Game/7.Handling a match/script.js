const squaresContainer = document.querySelector("#squares");
const numberOfSquares = 16;
let i = 0;
let square1, square2;
let clickCount = 0;

let colors = [
	"#33ff33",
	"#33ff33",
	"#ff944d",
	"#ff944d",
	"#80ccff",
	"#80ccff",
	"#ffff66",
	"#ffff66",
	"#ff4dff",
	"#ff4dff",
	"#ff1a1a",
	"#ff1a1a",
	"#dddddd",
	"#dddddd",
	"#000099",
	"#000099",
];

function selectColor() {
	const random = Math.floor(Math.random() * colors.length);
	const selected = colors[random];
	colors.splice(random, 1);
	return selected;
}

while (i < numberOfSquares) {
	const square = document.createElement("li");
	let color = selectColor();
	square.setAttribute("data-color", color);
	squaresContainer.appendChild(square);
	i++;
}

const squares = document.querySelectorAll("li");
for (const square of squares) {
	square.addEventListener("click", squareClicked);
}

function squareClicked() {
	if (square1 == this) return;
	clickCount++;
	if (clickCount > 2) return; // stop a third square being quickly clicked
	clickCount === 1 ? (square1 = this) : (square2 = this);
	if (clickCount === 1) {
		square1.style.background = square1.getAttribute("data-color");
	} else {
		square2.style.background = square2.getAttribute("data-color");
		checkMatch();
	}
}

function checkMatch() {
	let match =
		square1.getAttribute("data-color") === square2.getAttribute("data-color");
	if (!match) {
		setTimeout(function () {
			noMatch();
		}, 500);
	} else {
		isMatch();
	}
}

function noMatch() {
	square1.style.background = "";
	square2.style.background = "";
	square1 = "";
	square2 = "";
	clickCount = 0;
	console.log("no match");
}

function isMatch() {
	square1.style.border = "none";
	square2.style.border = "none";
	square1.removeEventListener("click", squareClicked);
	square2.removeEventListener("click", squareClicked);
	clickCount = 0;
	console.log("is a match");
}
