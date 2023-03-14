// Get the buttons and result element from the HTML
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result');

// Set up a variable to keep track of the scores
let playerScore = 0;
let computerScore = 0;

// Set up a function to generate the computer's move
function computerPlay() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Set up a function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  // Generate the computer's move if it wasn't provided
  if (!computerSelection) {
    computerSelection = computerPlay();
  }

  // Determine the winner of the round
  if (playerSelection === computerSelection) {
    resultText.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  // Update the score on the page
  const playerScoreText = document.getElementById('player-score');
  const computerScoreText = document.getElementById('computer-score');
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  
  // Check if either player has won the game
  if (playerScore === 5) {
    alert("Congratulations, you've won the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Sorry, you've lost the game.");
    resetGame();
  }
}

// Set up a function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  const playerScoreText = document.getElementById('player-score');
  const computerScoreText = document.getElementById('computer-score');
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  resultText.textContent = "Choose your move to start the game!";
}

// Set up event listeners for the buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
