let playerPoints = 0;
let computerPoints = 0;

const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const playerPts = document.querySelector(".player-points");
const computerPts = document.querySelector(".computer-points");
const final = document.querySelector(".final");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    playerPoints++;
    return `You win: ${playerSelection.toLowerCase()} beats ${computerSelection}.`;
  } else if (playerSelection.toLowerCase() === computerSelection) {
    playerPoints++;
    computerPoints++;
    return "Tie!";
  } else {
    computerPoints++;
    return `Computer wins: ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
  }
}

function checkWinner() {
  if(playerPoints>=5 && computerPoints>=5){
    final.textContent = "Game over! The result is TIE."
  } else if(playerPoints>=5){
    final.textContent = "Game over! YOU WIN!"
  } else if(computerPoints>=5){
    final.textContent = "Game over! Computer wins."
  }
}

btns.forEach(btn => btn.addEventListener("click", ()=>{
  result.textContent = playRound(btn.value, getComputerChoice());
  playerPts.textContent = `Player: ${playerPoints}`;
  computerPts.textContent = `Computer: ${computerPoints}`;
  checkWinner();
}))
