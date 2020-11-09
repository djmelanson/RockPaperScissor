/*
on click, have the computer choose rock, paper or scissor at random
*/
function getComputerSelection() {
    let computerNumber = random(3);
    let computerGuess = '';

    switch (computerNumber) {
        case 1:
            computerGuess = 'Rock';
            break;
        case 2:
            computerGuess = 'Paper';
            break;
        case 3: 
        computerGuess = 'Scissor';
        break;
    }

    return computerGuess;
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