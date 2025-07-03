let humanScore = 0;
let computerScore = 0;

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
    console.log("It's a tie")
  } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
             humanChoice === 'paper' && computerChoice === 'scissors' ||
             humanChoice === 'scissors' && computerChoice === 'rock') {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++
             }
    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
}

function playGame() {

  for(let round = 1; round < 6; round++) {
    console.log(`Round ${round}`)
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  }

  if (humanScore > computerScore) {
    console.log(`Congratulations you won ${humanScore} to ${computerScore}`);
    return
  } else if (computerScore > humanScore) {
    console.log(`Sorry you lost ${computerScore} to ${humanScore}`);
    return
  }
  console.log(`It's a tie! ${humanScore} - ${computerScore}`)
}
