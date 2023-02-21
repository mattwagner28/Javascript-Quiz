var startButton = document.getElementById('button');
var time = document.getElementById('timer');
var firstQuestion = document.getElementById('first-question');
var correctAnswer = document.querySelector('.correct-answer');
var wrongAnswer = document.querySelectorAll('.wrong-answer');
var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');
var submitButton = document.getElementById('submit');
var inputName = document.getElementById('player-name');
var savedName = document.getElementById('saved-name');
var savedScore = document.getElementById('saved-score');
var nameForm = document.getElementById('name-form');
var scoreBoard = document.getElementById('score-board');
var clearButton = document.getElementById('clear-score');


// Creates countdown timer of 60 seconds
function countdown() {
  timeLeft = 60;
  var timeInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timeInterval);
    }

    //Triggers events when user clicks on correct answer
    correctAnswer.addEventListener("click", function() {
    correct.setAttribute("style", "display: block;");
    clearInterval(timeInterval);
    score = timeLeft;
    nameForm.setAttribute("style", "display: block;")
    
    })

    //After player enters their name and hits the submit button, it add's the player name and score to local storage and displays it.
    //Score == # of seconds left on clock



  }, 1000);


}

function addScores (event) {
  event.preventDefault();
  var scores = [];
  var highScore = {
    player: inputName.value,
    score: timeLeft
  } 
  scores.push(highScore);
  localStorage.setItem("player and score", JSON.stringify(scores));

  console.log(scores);
  
  scoreBoard.setAttribute("style", "display: block;" )
  var scores = JSON.parse(localStorage.getItem("player and score"));
  if (scores !== null) {
      document.getElementById("saved-name").innerHTML = highScore.player;
      document.getElementById("saved-score").innerHTML = highScore.score;
    } else {
      return;
    }

}

// Starts and displays game
startButton.addEventListener("click", function() {
countdown();
time.setAttribute("style", "display: block;");
startButton.setAttribute("style", "display: none;");
firstQuestion.setAttribute("style", "display: block;");
});

//Submit 
submitButton.addEventListener("click", addScores);

//Clears score
clearButton.addEventListener("click", function () {
  // localStorage.clear();
  location.reload();
  document.getElementById("saved-name").innerHTML = "";
  document.getElementById("saved-score").innerHTML = "";
});