// ==========
// Objective:
// 1. The objective for this video will be to keep track of the score and
// make use of the score <p> element we created earlier to display it
// 2. Also, once the game has ended and all squares are matched,
// we will handle this and let the user reset the game to play again
// ==========

const squaresContainer = document.querySelector("#squares");
const numberOfSquares = 16;
let i = 0;
let square1, square2;
let clickCount = 0;

// 1. Create a score variable
let score = 0;

// 2. Hide the score when the game first loads, we will show
// after the first match has occured:
document.querySelector("#score").style.visibility = "hidden";

// 7. Once them game is complete and we have all pairs matched up,
// select the play again button
const playAgainBtn = document.querySelector("button");
// 7.1 hide button on first load
playAgainBtn.style.visibility = "hidden";
// 7.2. trigger a function when called
playAgainBtn.addEventListener("click", playAgain);
// 7.3 Now since we hide the button above, we can display it when the game is over
// in checkGameEnded function...

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
		setTimeout(function () {
			noMatch();
		}, 500);
	} else {
		isMatch();
		// 6. Check for end of game after each match:
		checkGameEnded();
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
	// 3. Once we have a matching pair, we increase the score
	// and display it:
	score++;
	document.querySelector("#score").innerText = score;
	document.querySelector("#score").style.visibility = "visible";
	// end of step 3- test score

	square1.style.border = "none";
	square2.style.border = "none";
	square1.removeEventListener("click", squareClicked);
	square2.removeEventListener("click", squareClicked);
	clickCount = 0;
	console.log("is a match");
}

// 4. Create function to check if the game is complete:
function checkGameEnded() {
	const target = numberOfSquares / 2;
	const gameOver = score === target ? true : false;
	if (gameOver) {
		// leave inside here empty at first and come back to it
		// soon when we create a button to re-start the game

		// 8. show button if game is over
		playAgainBtn.style.visibility = "visible";
	}
}

// 5. Up to the checkMatch function where we can run this new function
// each time we have a match

// 9. Finally, the buttons event listener was calling a function called
// playAgain:
function playAgain() {
	window.location.reload();
}

// 10. test and done
