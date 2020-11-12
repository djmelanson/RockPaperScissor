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
When the player clicks on a button, assign playerSelection
*/
function playerChoseRock() {
    let playerSelection = "rock";
    console.log(playerSelection);
}

function playerChosePaper() {
    let playerSelection = "paper";
    console.log(playerSelection);
}

function playerChoseScissor() {
    let playerSelection = "scissor";
    console.log(playerSelection);
}

/*
Function to play the game
*/