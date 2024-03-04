const buttons = document.querySelectorAll('button');
const lastRound = document.querySelector('.last-round');
const points = document.querySelector('.points');
const finalResult = document.querySelector('.final');

let playerPoints = 0;
let computerPoints = 0;

buttons.forEach(button => button.addEventListener('click', ()=>{ 
    playRound(button.value, getComputerChoice());
    checkWinner();
}))

function playRound(playerSelection, computerSelection){
  if(playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"){
    playerPoints++;
    refreshResult("win", playerSelection, computerSelection);
  } else if (computerSelection === "rock" && playerSelection === "scissors"
    || computerSelection === "paper" && playerSelection === "rock"
    || computerSelection === "scissors" && playerSelection === "paper"){
    computerPoints++;    
    refreshResult("lose", playerSelection, computerSelection);
  } else{
    refreshResult("Tie", playerSelection, computerSelection);
  }
}

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

function refreshResult(result, playerSelection, computerSelection){
  if(result==="Tie"){
    lastRound.textContent = "Tie."
  }else{
    lastRound.textContent = `You ${result}, ${playerSelection} beats ${computerSelection}.`;
  }
  points.textContent = `Player: ${playerPoints} - Computer: ${computerPoints}`;
}

function checkWinner(){
  if(playerPoints>=5 || computerPoints>=5){
    if(playerPoints>computerPoints){
      finalResult.textContent = "The final winner is the player!"
    } else if (computerPoints>playerPoints){
      finalResult.textContent = "The final winner is the computer!"
    } else{
      finalResult.textContent = "The final result is tie!"
    }
   }
}
