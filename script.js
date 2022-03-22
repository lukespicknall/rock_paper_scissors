const gameChoice = [ "Rock", "Paper", "Scissors"];
function computerPlay()  {
    return gameChoice [Math.floor(Math.random() * gameChoice.length)];
}
const playerSelection = prompt("Rock Paper Scissors. Best out of 5!");


let playerScore = 0
let computerScore = 0
function playRound(playerSelection, computerSelection) {
    if((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") |
        (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") |
        (playerSelection.toLowerCase() === "Scissors" && computerSelection === "Paper")){
        ++playerScore
        alert("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection + ".");
        //return playerScore;

    }else if((playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") |
            (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") |
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")) {
            ++computerScore;
        alert("You lose! " + computerSelection  + " beats " + playerSelection.toLowerCase() + ".");
        //return computerScore;
    
    }else if((playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") |
            (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") |         
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors")) {
            //computerScore += 1;
            //playerScore += 1;
        alert("Double " + playerSelection.toLowerCase() + ". It's a tie!"); 
        //return computerScore;
    }else {
        alert("you didnt actually do it . . . so now this will be boring. thanks.")
    }
}

//const computerSelection = computerPlay();
//const playerSelection = prompt("rock paper scissors");
//console.log(playRound(playerSelection, computerSelection));


function game () {
for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerPlay());
}if(playerScore > computerScore) {  
    alert("Player: " + playerScore + " Computer: " + computerScore + " You Win!");
    }else if(playerScore < computerScore) {
    alert("Player: " + playerScore + " Computer: " + computerScore + " You lost!");
    }else {
    alert("Player: " + playerScore + " Computer: " + computerScore + " Draw.");
    }
}


console.log(game());
console.log (computerScore, playerScore);