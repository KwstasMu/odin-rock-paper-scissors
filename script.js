let humanScore = 0;
let computerScore = 0;
let round = 0;

const roundText = document.querySelector('#round');
const results = document.querySelector('#results');

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const input = prompt("rock, paper or scissors?");
  return input;
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
}


function checkWinner() {
  if (humanScore === 5) {
      results.textContent = `Congratulations you won ${humanScore} to ${computerScore}`;
      return;
    } else if (computerScore === 5) {
      results.textContent = `Sorry you lost ${computerScore} to ${humanScore}`;
      return;
    }
  }

const btns = document.querySelectorAll('.btn');
btns.forEach(btn  => {
  btn.addEventListener('click', (e) => playRound(e.target.value, getComputerChoice()))
})