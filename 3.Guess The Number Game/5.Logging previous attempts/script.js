let computerGuess;
let userGuesses = [];
let attempts = 0;

function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
  startGameView();
}

function hardMode() {
  startGameView();
}

function compareGuess() {
  const userGuess = Number(document.getElementById("inputBox").value);

  userGuesses.push(" " + userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  if (userGuess > computerGuess) {
    document.getElementById("textOutput").innerHTML = "Your guess is too high";
    document.getElementById("inputBox").value = "";
  } else if (userGuess < computerGuess) {
    document.getElementById("textOutput").innerHTML = "Your guess is too low";
    document.getElementById("inputBox").value = "";
  } else {
    document.getElementById("textOutput").innerHTML =
      "Correct! you got it in " + attempts + " attempts";
  }
}
