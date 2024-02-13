const buttons = document.querySelectorAll('button');

let playerPoints = 0;
let computerPoints = 0;
//playGame();
/*
function playGame(){
  for(let i=0; i<5; i++){
    let playerSelection = prompt("Rock, paper or scissors?");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(getWinner());
}
*/


buttons.forEach(button => button.addEventListener('click', ()=>{
 let x = playRound(button.value, getComputerChoice());
  console.log(x);
}))



function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);
  switch(choice){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"){
    playerPoints++;
    return `You win! ${playerSelection} beats ${computerSelection}.
    Player: ${playerPoints} - Computer: ${computerPoints}`
  } else if (computerSelection === "rock" && playerSelection === "scissors"
    || computerSelection === "paper" && playerSelection === "rock"
    || computerSelection === "scissors" && playerSelection === "paper"){
    computerPoints++;    
    return `You lose! ${computerSelection} beats ${playerSelection}.
    Player: ${playerPoints} - Computer: ${computerPoints}`
  } else{
    return "Tie!"
  }
}

function getWinner(){
  if(playerPoints>computerPoints){
    return "The final winner is the player!"
  } else if (computerPoints>playerPoints){
    return "The final winner is the computer!"
  } else{
    return "The final result is tie!"
  }
}
