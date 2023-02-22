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
var playAgainButton = document.getElementById('play-again');
var endButtons = document.getElementById('end-buttons');
var firstAnswer = document.getElementById('first-correct-answer');
var secondQuestion = document.getElementById('second-question');

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
    nameForm.setAttribute("style", "display: block;");
    // endButtons.setAttribute("style", "display: inline;");
    })

  }, 1000);

  

//After player enters their name and hits the submit button, it add's the player name and score to local storage and displays it.
//Score == # of seconds left on clock
}
function addScores (event) {
  event.preventDefault();
 
  var getScores = JSON.parse(localStorage.getItem("player and score")) || [];
  
  var highScore = {
    player: inputName.value,
    score: timeLeft
  } 
  getScores.push(highScore);
  localStorage.setItem("player and score", JSON.stringify(getScores));
  
  scoreBoard.setAttribute("style", "display: block;" )
  nameForm.setAttribute("style", "display: none;")

    if (getScores !== null) {

    for (i = 0; i < getScores.length + 1; i++) {
      scoreDisplay = document.createElement("p");
      scoreDisplay.textContent = "Name: " + getScores[i].player + " Score: " + getScores[i].score;
      document.getElementById("score-board").appendChild(scoreDisplay);

      console.log(getScores[i].player, getScores[i].score);
    }
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

// Goes to next question after first question is answered corrected
firstAnswer.addEventListener("click", function () {
  firstQuestion.setAttribute("style", "display: none;");
  secondQuestion.setAttribute("style", "display: block;");
})

// // // Submit 
submitButton.addEventListener("click", function () {
  endButtons.setAttribute("style", "display: inline;");
  addScores(event);
})

//Clears score
clearButton.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
  document.getElementById("saved-name").innerHTML = "";
  document.getElementById("saved-score").innerHTML = "";
});

//Allows user to play again
playAgainButton.addEventListener("click", function () {
location.reload();

})