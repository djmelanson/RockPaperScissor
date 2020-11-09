/*
on click, have the computer choose rock, paper or scissor at random
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
based on player and computer choice, alert YOU WIN or YOU LOSE
*/
function playerChoseRock() {
    playerSelection = "rock";
    alert("You chose rock! Great choice.")
}

function playerChosePaper() {
    playerSelection = "paper";
    alert("You chose paper! Great choice.")
}

function playerChoseScissor() {
    playerSelection = "scissor";
    alert("You chose scissor! Great choice.")
}