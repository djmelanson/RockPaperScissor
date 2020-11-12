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
        if (computerScore == 4) {
            roundOutcome.innerHTML = 'ROUND LOSS';
            computerScore.innerHTML ++;
            gameOutcome.innerHTML = 'Oh no, you lost to the computer.';
        } else if (computerSelection == 5) {
            roundOutcome.innerHTML = 'ROUND LOSS';
            gameOutcome.innerHTML = 'Oh no, you lost to the computer.';
        } else {
            roundOutcome.innerHTML = 'ROUND LOSS';
            computerScore.innerHTML ++;
        }
    } else {
        if (playerScore == 4) {
            roundOutcome.innerHTML = 'ROUND WIN';
            playerScore.innerHTML ++;
            gameOutcome.innerHTML = 'Congratulations, you won against the computer!';
        } else if (playerScore == 5) {
            roundOutcome.innerHTML = 'ROUND WIN';
            gameOutcome.innerHTML = 'Congratulations, you won against the computer!';
        } else {
            roundOutcome.innerHTML = 'ROUND WIN';
            playerScore.innerHTML ++ ;
        }
    }
}
