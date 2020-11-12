const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playerScore = document.querySelector('#player-Score');
const computerScore = document.querySelector('#computer-Score');
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
}


/*
When the player clicks on a button, assign playerSelection and play game
*/
function playerChoseRock() {
    computerPlay();
    let playerSelection = "rock";
    if (computerSelection == "rock") {
        roundOutcome.innerHTML = "You both chose rock, it's a tie!";
        return;
    } else if (computerSelection == "paper") {
        roundOutcome.innerHTML = "Paper beats rock, you lose!";
        computerScore.innerHTML ++;
        return;
    } else {
        roundOutcome.innerHTML = "Rock beats scissor, you win!";
        playerScore.innerHTML ++;
        return;
    }
}

function playerChosePaper() {
    computerPlay();
    let playerSelection = "paper";
    if (computerSelection == "rock") {
        document.getElementById("roundOutcome").innerHTML = "Paper beats rock, you win!";
    } else if (computerSelection == "paper") {
        document.getElementById("roundOutcome").innerHTML = "You both chose paper, it's a tie!";
    } else {
        document.getElementById("roundOutcome").innerHTML = "Scissor beats paper, you lose!";
    }
}

function playerChoseScissor() {
    computerPlay();
    let playerSelection = "scissor";
    if (computerSelection == "rock") {
        document.getElementById("roundOutcome").innerHTML = "Rock beats scissor, you lose!";
    } else if (computerSelection == "paper") {
        document.getElementById("roundOutcome").innerHTML = "Scissor beats paper, you win!";
    } else {
        document.getElementById("roundOutcome").innerHTML = "You both chose scissor, it's a tie!";
    }
}


/*
Function to play the game
*/