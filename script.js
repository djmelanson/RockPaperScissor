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


function playerChosePaper() {
    playerSelection = "paper";
}

function playerChoseScissor() {
    playerSelection = "scissor";
}


/*
Function to play the game
*/