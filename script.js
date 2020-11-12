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


function playRound() {
    computerPlay();
}


/*
Function to play the game
*/