// First I created my variables for the computer and user
// Scores, giving them each a value of 0

let userScore = 0;
let computerScore = 0;

// Then I referenced my "score" elements and did the same as
// Values to variables I created,
// I did this do lay the groundwork to get my scoreboard
// Up and running

// const computerChoiceDisplay = document.getElementById
const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const scoreboard = document.getElementById("scoreboard");
const resultsElement = document.getElementById("resultsDisplay");

// Next I basically did the same as the previous step
// , just referencing my elements containing 
// the user choice buttons + my reset button & set them as
// the values for my variables, to be used later

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resetButton = document.getElementById("resetButton");


// Then I created a function so the computer could make 
// A choice. I created my computerChoices variable
// And gave it a value of an array with three strings:
// rock, paper, scissors, and I want the function to return
// those choices randomly.
// & since I have 3 choices
// I used math.random() and math.floor() methods
// To generate a random, whole number between 1-3

function getComputerChoice () {
    const computerChoices = ["rock", "paper", "scissors"];
    const randomizeChoice = Math.floor(Math.random() * 3);
    return (computerChoices[randomizeChoice]);
};

// Then I created my functions that would output whether
// The user or the computer wins, loses, or if there's a tie
// Starting off with a function w/ the condition where
// The user wins. I used "userChoice" & "computerChoice"
// As my parameters, and then
// Took my userScore variable & used an incrementor to 
// Symbolize that the user's score
// Was increased

function winningCondition (userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultsDisplay.innerHTML = "Congrats! You win!"; 

  }

// Next, I created my user lose condition

function losingCondition (userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultsDisplay.innerHTML = "You lost! The computer wins.";
}

// Then my condition where the user & the computer tie

function tie (userChoice, computerChoice) {
    resultsDisplay.innerHTML = "It's a tie! Try again!";
 
}

// Then I created a function that is essentially the core
// Of the game and compares the choices
// Between the computer and the user
// I used a switch statement because it's more concise IMO
// And the logic behind it is that the switch values will
// Produce one string
// Which is why the case value is together as if they're
// One word
// For the case values I just followed the rules of the game
// Where paper beats rock, rock beats scissors, and scissors
// Beats paper, and so on.

function theGame(userChoice) {
    const computerChoice = getComputerChoice();
  
    switch (userChoice + computerChoice) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        winningCondition(userChoice, computerChoice);
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        losingCondition(userChoice, computerChoice);
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        tie(userChoice, computerChoice);
        break;
    }
  };

  // After that I created the function that was for
  // My reset button and will reset the scores
  
  const resetGameScores = () => {
    userScore = 0;
    userScoreSpan.innerHTML = userScore
    computerScore = 0;
    computerScoreSpan.innerHTML = computerScore;
  }


// I took my button variables that I created earlier and 
// Added an event listener to each of them, so that the click
// Event would take place
// And then I placed them all in a function & called
// The function at the end

function gameButtons () {

rockButton.addEventListener("click", () => theGame("rock"));

paperButton.addEventListener("click", () => theGame
("paper"));

scissorsButton.addEventListener("click", () => theGame
("scissors"));

resetButton.addEventListener("click", () => 
    resetGameScores ());

};
gameButtons();