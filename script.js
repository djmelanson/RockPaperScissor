/*   Link objects from HTML   */
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundOutcome = document.querySelector('#roundOutcome');
const computerOutcome = document.querySelector('#computerOutcome');
const resetBtn = document.querySelector('#resetBtn');


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


/*   When the player clicks on a button, 
        assign playerSelection and play game   */
function playerChoseRock() {
    let playerSelection = 'rock';
    computerPlay();
    if (computerSelection == 'rock') {
        roundOutcome.innerHTML = 'ROUND TIE';
        computerOutcome.innerHTML = 'COMPUTER CHOSE ROCK';
    } else if (computerSelection == 'paper') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerOutcome.innerHTML = 'COMPUTER CHOSE PAPER';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        computerOutcome.innerHTML = 'COMPUTER CHOSE SCISSOR';
        playerScore.innerHTML ++;
    }
}
        
function playerChosePaper() {
    let playerSelection = 'paper';
    computerPlay();
    if (computerSelection == 'paper') {
        roundResult = 'ROUND TIE';
        computerOutcome.innerHTML = 'COMPUTER CHOSE ' + computerSelection.toUpperCase() + ', ROUND TIE';
    } else if (computerSelection == 'scissor') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerOutcome.innerHTML = 'COMPUTER CHOSE SCISSOR';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        computerOutcome.innerHTML = 'COMPUTER CHOSE ROCK';
        playerScore.innerHTML ++;
    }
    roundOutcome.innerHTML = 'COMPUTER CHOSE ' + computerSelection.toUpperCase() + ', ' + roundResult;
}
        
function playerChoseScissor() {
    let playerSelection = 'scissor';
    computerPlay();
    if (computerSelection == 'scissor') {
        roundOutcome.innerHTML = 'ROUND TIE';
        computerOutcome.innerHTML = 'COMPUTER CHOSE SCISSOR';
    } else if (computerSelection == 'rock') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerOutcome.innerHTML = 'COMPUTER CHOSE ROCK';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        computerOutcome.innerHTML = 'COMPUTER CHOSE PAPER';
        playerScore.innerHTML ++;
    }
}


/*   button to reset the game   */
function resetGame() {
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    roundOutcome.innerHTML = '-------';
    gameOutcome.innerHTML = '-------';
}

