/*
prompt user to choose rock, paper or scissor
*/

let playerSelection = prompt("Choose your weapon for Rock, Paper, Scissor!");
    if (playerSelection == ("Rock") || ("rock") || ("ROCK") {
        alert("Rock is a great choice.");
    } else if (playerSelection == "Paper") {
        alert("Paper is a great choice.");
    } else if (playerSelection == "Scissor") {
        alert("Scissor is a great choice.");
    } else {
        alert("That is not a valid weapon, please choose Rock, Paper, or Scissor.");
    }

/*
have the computer choose rock, paper or scissor at random
*/

function computerPlay () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
} 

/*
if the user chose rock...
    & computer chooses paper, alert YOU LOSE
    & computer chooses scissor, alert YOU WIN
*/


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