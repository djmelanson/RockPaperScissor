/*   Link objects from HTML   */
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundOutcome = document.querySelector('#roundOutcome');
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
        roundResult.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'paper') {
        roundResult.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundResult.innerHTML = 'ROUND WIN';
        playerScore.innerHTML ++;
    }
    roundOutcome.innerHTML = 'COMPUTER CHOSE ' + computerSelection.toUpperCase() + ', ' + roundResult;
}
        
function playerChosePaper() {
    let playerSelection = 'paper';
    computerPlay();
    if (computerSelection == 'paper') {
        roundResult = 'ROUND TIE';
    } else if (computerSelection == 'scissor') {
        roundResult.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundResult.innerHTML = 'ROUND WIN';
        playerScore.innerHTML ++;
    }
    roundOutcome.innerHTML = 'COMPUTER CHOSE ' + computerSelection.toUpperCase() + ', ' + roundResult;
}
        
function playerChoseScissor() {
    let playerSelection = 'scissor';
    computerPlay();
    if (computerSelection == 'scissor') {
        roundResult.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'rock') {
        roundResult.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundResult.innerHTML = 'ROUND WIN';
        playerScore.innerHTML ++;
    }
    roundOutcome.innerHTML = 'COMPUTER CHOSE ' + computerSelection.toUpperCase() + ', ' + roundResult;
}


/*   button to reset the game   */
function resetGame() {
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    roundOutcome.innerHTML = '-------';
    gameOutcome.innerHTML = '-------';
}

