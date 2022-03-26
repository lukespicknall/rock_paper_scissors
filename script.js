const result = document.querySelector('#result');
const score = document.querySelector('#score');
const gameOver = document.querySelector('#gameOver');
const choice = document.querySelector('#choice');
const gameChoice = [ "Rock", "Paper", "Scissors"];
function computerPlay()  {
    return gameChoice [Math.floor(Math.random() * gameChoice.length)];
}
let computerSelection = computerPlay();

let playerScore = 0
let computerScore = 0
function playRound(playerSelection, computerSelection) {
    if(playerScore === 5){
        return
    }else if(computerScore === 5){
        return
    }
    if((playerSelection === "Rock" && computerSelection === "Scissors") |
        (playerSelection === "Paper" && computerSelection === "Rock") |
        (playerSelection === "Scissors" && computerSelection === "Paper")){
        ++playerScore
        result.textContent = "You win! " + playerSelection + " beats " + computerSelection.toLowerCase() + ".";
        score.textContent = "You : " + playerScore + " | Computer: " + computerScore;
    }else if((playerSelection === "Rock" && computerSelection === "Paper") |
        (playerSelection === "Paper" && computerSelection === "Scissors") |
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
        ++computerScore;
        result.textContent = "You lose! " + computerSelection  + " beats " + playerSelection.toLowerCase() + ".";
        score.textContent = "You : " + playerScore + " | Computer: " + computerScore;
    }else if((playerSelection === "Rock" && computerSelection === "Rock") |
        (playerSelection === "Paper" && computerSelection === "Paper") |         
        (playerSelection === "Scissors" && computerSelection === "Scissors")) {
        result.textContent = "Double " + playerSelection.toLowerCase() + ". It's a tie!"; 
        score.textContent = "You : " + playerScore + " | Computer: " + computerScore;
    }
    choice.textContent = "You Threw: " + playerSelection + " | Computer Threw: " + computerSelection;
}

//  **  Makes button equal playerSelection and run game as such   **  //
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        playRound(button.id, computerSelection);
        computerSelection = computerPlay();
        if(playerScore === 5){
            gameOver.textContent = "Game Over. You Win!"
            return
        }else if(computerScore === 5){
            gameOver.textContent = "Game Over. You Lose!"
            return
        }
    })
})




// **  A more verbose way to make button be plateSelection and run game  **  //
//const btnR = document.querySelector("#btnR");
//const btnP = document.querySelector('#btnP');
//const btnS = document.querySelector('#btnS');
//btnR.addEventListener('click', () => playRound("rock", computerSelection));
//btnP.addEventListener('click', () => playRound("paper", computerSelection));
//btnS.addEventListener('click', () => playRound("scissors", computerSelection));








//const playerSelection = prompt("rock paper scissors");
//console.log(playRound(playerSelection, computerSelection));


//function game () {
//for (let i = 0; i < 5; i++) {
//    playRound(playerSelection, computerPlay());
//}if(playerScore > computerScore) {  
//    alert("Player: " + playerScore + " Computer: " + computerScore + " You Win!");
//    }else if(playerScore < computerScore) {
//    alert("Player: " + playerScore + " Computer: " + computerScore + " You lost!");
//    }else {
//    alert("Player: " + playerScore + " Computer: " + computerScore + " Draw.");
//    }
//}


//console.log(game());
//console.log (computerScore, playerScore);