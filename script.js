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

