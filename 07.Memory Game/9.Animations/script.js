// ==========
// Objective:
// 1. To finish off the project I will now add some animation effects
//  There will be a shake animation if the match is incorrect, and for
// a correct match a pop effect, for this go over to the styles.css file...
// ==========

const squaresContainer = document.querySelector("#squares");
const numberOfSquares = 16;
let i = 0;
let square1, square2;
let clickCount = 0;
let score = 0;

document.querySelector("#score").style.visibility = "hidden";
const playAgainBtn = document.querySelector("button");
playAgainBtn.style.visibility = "hidden";
playAgainBtn.addEventListener("click", playAgain);

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
	if (clickCount > 2) return;
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
		// 3. for the shake class add this in the no match section
		// just before the timeout:
		square1.classList.add("shake");
		square2.classList.add("shake");
		// 3.1 this will add the shake effect, wait for half a second, then inside the
		// no match function we can remove the class...
		setTimeout(function () {
			noMatch();
		}, 500);
	} else {
		isMatch();
		checkGameEnded();
	}
}

function noMatch() {
	square1.style.background = "";
	square2.style.background = "";

	// 4. remove the shake effect
	// we remove the class becuase squares can be wrong multiple times,
	// so adding and removing the class will trigger the shake each time
	square1.classList.remove("shake");
	square2.classList.remove("shake");

	square1 = "";
	square2 = "";
	clickCount = 0;
	console.log("no match");
}

function isMatch() {
	score++;
	document.querySelector("#score").innerText = score;
	document.querySelector("#score").style.visibility = "visible";

	// 2.add pop class if there is a match:
	square1.classList.add("pop");
	square2.classList.add("pop");

	square1.style.border = "none";
	square2.style.border = "none";
	square1.removeEventListener("click", squareClicked);
	square2.removeEventListener("click", squareClicked);
	clickCount = 0;
	console.log("is a match");
}

function checkGameEnded() {
	const target = numberOfSquares / 2;
	const gameOver = score === target ? true : false;
	if (gameOver) {
		playAgainBtn.style.visibility = "visible";
	}
}

function playAgain() {
	window.location.reload();
}
