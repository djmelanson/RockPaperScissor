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
        roundOutcome.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'paper') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        if (computerScore < 4) {
            computerScore.innerHTML ++;
        } else if (computerSelection == 4) {
            computerScore.innerHTML ++;
            gameOutcome.innerHTML = 'Oh no, you lost to the computer.';
        } else {
            gameOutcome.innerHTML = 'Oh no, you lost to the computer.';
        }
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        if (playerScore < 4) {
            playerScore.innerHTML ++;
        } else if (playerScore == 4) {
            playerScore.innerHTML ++;
            gameOutcome.innerHTML = 'Congratulations, you won against the computer!';
        } else {
            gameOutcome.innerHTML = 'Congratulations, you won against the computer!';
        }
    }
}
