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
        roundOutcome.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'paper') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        playerScore.innerHTML ++;
    }
}
        
function playerChosePaper() {
    let playerSelection = 'paper';
    computerPlay();
    if (computerSelection == 'paper') {
        roundOutcome.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'scissor') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
        playerScore.innerHTML ++;
    }
}
        
function playerChoseScissor() {
    let playerSelection = 'scissor';
    computerPlay();
    if (computerSelection == 'scissor') {
        roundOutcome.innerHTML = 'ROUND TIE';
    } else if (computerSelection == 'rock') {
        roundOutcome.innerHTML = 'ROUND LOSS';
        computerScore.innerHTML ++;
    } else {
        roundOutcome.innerHTML = 'ROUND WIN';
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

