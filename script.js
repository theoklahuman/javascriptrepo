console.log("copyright theoklahuman");

function computerPlay() { 
    let roll = Math.floor((Math.random() * 3)) + 1;
let value;
if (roll == 1) { value = "rock";
} else if (roll == 2) { 
    value = "paper";
} else { 
    value = "scissors";
};
    return value;
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

const result = document.querySelector(".result");
const playerScores = document.querySelector(".player-score");
const computerScores = document.querySelector(".computer-score");
const computerChoice = document.querySelector(".computer-choice");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
button.addEventListener("click", function(e) {
if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
        result.textContent = `Congratulations! you won by ${playerScore} points to ${computerScore}`;
} else if (playerScore < computerScore) {
    result.textContent = `lmao! you're a loser! you lost by ${computerScore} points to ${playerScore}`;
}
} else {
result.textContent = (playRound(button.id, computerPlay()));
playerScores.textContent = `Your Score: ${playerScore}`;
computerScores.textContent = `Computer Score: ${computerScore}`;
}
});
});
