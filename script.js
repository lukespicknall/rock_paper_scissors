function computerPlay(){
    let compInt = Math.floor(Math.random() *3 + 1);
    if(compInt === 1) {
        return ("Rock");
    }else if(compInt === 2) {
        return ("Paper")
    }else {
        return ("Scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return ("You win! Rock beats Scissors.");
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return ("You win! Paper beats Rock.");
    }else if(playerSelection.toLowerCase() === "Scissors" && computerSelection === "Paper") {
        return ("You win! Scissors beats Paper.");

    }else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return ("You lose! Paper beats Rock.");
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return ("You lose!Scissors beats Paper.");
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return ("You lose! Rock beats Scissors.");
    }

    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return ("Double Rock. It's a tie!");
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return ("Double Paper. It's a tie!");
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return ("Double Scissors. It's a tie!");
    }  
}
const computerSelection = computerPlay();
const playerSelection = prompt("Rock, Paper, Scisssors?");


console.log(playRound(playerSelection, computerSelection));