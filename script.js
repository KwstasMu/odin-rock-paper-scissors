let humanScore = 0;
let computerScore = 0;
let round = 0;

const roundText = document.querySelector('#round');
const results = document.querySelector('#results');
const replay = document.querySelector('#replay');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', (e) => playRound(e.target.id, getComputerChoice())))

replay.addEventListener('click', () => playAgain())

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.textContent = `It's a tie!`
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }  
  roundText.textContent = `Round: ${++round}`
  checkWinner()
  if (checkWinner()) {
    btns.forEach(btn => btn.disabled = true)
    replay.style.display = 'block';
  }
}


function checkWinner() {
  if (humanScore === 5) {
      results.textContent = `Congratulations you won ${humanScore} to ${computerScore}`;
      return true;
    } else if (computerScore === 5) {
      results.textContent = `Sorry you lost ${computerScore} to ${humanScore}`;
      return true;
    }
  }

function playAgain() {
  btns.forEach(btn => btn.disabled = false);
  replay.style.display = 'none';
  humanScore = 0;
  computerScore = 0;
  round = 0;
  roundText.textContent = '';
  results.textContent = '';
}