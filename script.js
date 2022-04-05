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

function playGame() {
    for (let i = 0; i < 5; i++) {
      console.log(playRound(prompt("enter your choice here!").toLowerCase(), computerPlay()));
    };
    if (playerScore > computerScore) {
        console.log(`Congratulations! you won by ${playerScore} points to ${computerScore}`);
        } else if (playerScore < computerScore) {
        console.log(`lmao! you're a loser! you lost by ${computerScore} points to ${playerScore}`);
        } else {
        console.log(`No winner this time. it's a tie! it's ${playerScore} points apiece`);
        }
    }