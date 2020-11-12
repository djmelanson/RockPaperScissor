/*   Link objects from HTML   */
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundOutcome = document.querySelector('#roundOutcome');
const gameOutcome = document.querySelector('#gameOutcome');


/*   Have the computer choose rock, paper or scissor at random   */
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

/*   function to play the game and give a result   */
function playGame() {
    if (computerSelection == 'rock') {
        roundOutcome.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'paper') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        playerScore.innerHTML ++;
    }
}

/*   When the player clicks on a button, 
        assign playerSelection and play game   */
function playerChoseRock() {
    let playerSelection = 'rock';
    computerPlay();
    playGame();
}
