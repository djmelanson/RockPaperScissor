const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundOutcome = document.querySelector('#roundOutcome');
const gameOutcome = document.querySelector('#gameOutcome');
const resetGame = document.querySelector('#resetGame');


/*
Have the computer choose rock, paper or scissor at random
*/
function computerPlay() {
    let randNumber = Math.random() * 3;

    if (randNumber >= 2) {
        computerSelection = "rock";
    } else if (randNumber >= 1) {
        computerSelection =  "paper";
    } else {
        computerSelection =  "scissor";
    }

    console.log(computerSelection);
}


/*
Based on player and computer selection, return the outcome
*/
function playGame() {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            roundOutcome.textContent("You both chose rock, it's a tie!");
        } else if (computerSelection == "paper") {
            roundOutcome.textContent("Paper beats rock, you lose!");
        } else {
            roundOutcome.textContent("Rock beats scissor, you win!");
        }
    }
}

/*
When the player clicks on a button, assign playerSelection
*/
function playerChoseRock() {
    computerPlay();
    let playerSelection = "rock"
    playGame();
}



/*
Function to play the game
*/