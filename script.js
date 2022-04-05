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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++; return "You lose this round! Paper covers rock!"
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++; return "You win this round! rock destroys scissors!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++; return "You win this round! Paper covers rock!"
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++; return "You lose this round! Scissors cut paper!"
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++; return "You lose this round! rock destroys scissors"
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++; return "You win this round! scissors cut paper"
        } else {
        return "No winner on this round! Please play again"
        }
}

function game() {
    console.log(playRound(prompt("enter your choice here!").toLowerCase(), computerPlay()));
    console.log(playRound(prompt("enter your choice here!").toLowerCase(), computerPlay()));
    console.log(playRound(prompt("enter your choice here!").toLowerCase(), computerPlay()));
    console.log(playRound(prompt("enter your choice here!").toLowerCase(), computerPlay()));
    console.log(playRound(prompt("enter your choice here!").toLowerCase(), computerPlay()));
    (playerScore > computerScore) ? console.log(`Congratulations! you won by ${playerScore} points to ${computerScore}`) : console.log(`lmao! you're a loser! you lost by ${computerScore} points to ${playerScore}`);
    };