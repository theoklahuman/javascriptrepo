console.log("hello world!");

function computerPlay() { 
    let roll = Math.floor((Math.random() * 3)) + 1;
let value;
if (roll == 1) { value = "rock";
} else if (roll == 2) { 
    value = "paper";
} else { 
    value = "scissors";
};
    return value 
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper covers rock!"
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! rock destroys scissors!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper covers rock!"
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors cut paper!"
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! rock destroys scissors"
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! scissors cut paper"
        } else {
        return "No winner! Please play again"
        }
}