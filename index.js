function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function runDice() {
  var randomNumber1 = getRandomInt(6);
  var randomNumber2 = getRandomInt(6);

  var image1 = document.querySelector(".img1");
  var image2 = document.querySelector(".img2");

  image1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  var player1Wins = "🚩 Player 1 Wins";
  var player2Wins = "Player 2 Wins 🚩";
  var draw = "Draw";

  var heading1 = document.querySelector("h1");

  if (randomNumber1 === randomNumber2) {
    heading1.innerHTML = draw;
  } else if (randomNumber1 > randomNumber2) {
    heading1.innerHTML = player1Wins;
  } else {
    heading1.innerHTML = player2Wins;
  }
}

var firstVisit = sessionStorage.getItem("firstVisit");

if (firstVisit !== undefined && firstVisit === "no") {
  runDice();
} else {
  sessionStorage.setItem("firstVisit", "no");
}
