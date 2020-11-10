/*
Have the computer choose rock, paper or scissor at random
*/
function computerRandomNumber() {
    let randNumber = Math.random() * 3;

    if (randNumber >= 2) {
        computerSelection = "rock";
    } else if (randNumber >= 1) {
        computerSelection =  "paper";
    } else {
        computerSelection =  "scissor";
    }

    return computerSelection;
}

/*
When the player clicks on a button, assign playerSelection
*/
function playerChoseRock() {
    computerRandomNumber();
    let playerSelection = "rock";
    if (computerRandomNumber = "rock") {
        alert("You both chose rock, it's a tie!");
    } else if (computerRandomNumber = "paper") {
        alert("The computer chose paper, you lose!");
    } else {
        alert("The computer chose scissor, you win!");
    }
}

function playerChosePaper() {
    playerSelection = "paper";
}

function playerChoseScissor() {
    playerSelection = "scissor";
}


/*
Function to play the game
*/