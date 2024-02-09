function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  }
  
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "scissors"
      || playerSelection === "paper" && computerSelection === "rock"
      || playerSelection === "scissors" && computerSelection === "paper"){
      return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if (computerSelection === "rock" && playerSelection === "scissors"
      || computerSelection === "paper" && playerSelection === "rock"
      || computerSelection === "scissors" && playerSelection === "paper"){
          return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else{
      return "Tie!"
    }
  }