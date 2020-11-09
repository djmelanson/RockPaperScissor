/*
on click, have the computer choose rock, paper or scissor at random
*/
function computerSelection() {
    return Math.random() * 3
}

if (computerSelection() >= 2) {
    computerSelection = "rock";
} else if (computerSelection() >= 1) {
    computerSelection = "paper";
} else {
    computerSelection = "scissor";
}

/*
based on player and computer choice, alert YOU WIN or YOU LOSE
    & computer chooses paper, alert YOU LOSE
    & computer chooses scissor, alert YOU WIN
*/
function playerChoseRock() {
    alert("You chose rock! Great choice.")
}

function playerChosePaper() {
    alert("You chose paper! Great choice.")
}

function playerChoseScissor() {
    alert("You chose scissor! Great choice.")
}
/*
if the user chooses paper...
    & computer chooses scissor, alert YOU LOSE
    & computer chooses rock, alert YOU WIN
*/


/*
if the user chooses scissor...
    & computer chooses rock, alert YOU LOSE
    & computer chooses paper, alert YOU WIN
*/