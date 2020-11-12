/*  Link objects from HTML  */
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundOutcome = document.querySelector('#roundOutcome');
const gameOutcome = document.querySelector('#gameOutcome');


/*
Have the computer choose rock, paper or scissor at random
*/
function computerPlay() {
    let randNumber = Math.random() * 3;

    if (randNumber >= 2) {
        computerSelection = 'rock';
    } else if (randNumber >= 1) {
        computerSelection =  'paper';
    } else {
        computerSelection =  'scissor';
    }
}


/*
When the player clicks on a button, assign playerSelection and play game
*/
function playerChoseRock() {
    computerPlay();
    let playerSelection = 'rock';
    if (computerSelection == 'rock') {
        roundOutcome.innerHTML = 'You tied';
        return;
    } else if (computerSelection == 'paper') {
        roundOutcome.innerHTML = 'You lost';
        computerScore.innerHTML ++;
        return;
    } else {
        roundOutcome.innerHTML = 'You won!';
        playerScore.innerHTML ++;
        return;
    }
}