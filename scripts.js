function computerPlay() {
    const compOptions = ["rock", "paper", "scissors"];
    return compOptions[Math.floor(Math.random() * compOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerOptions = ["rock", "paper", "scissors"];

    if ((playerSelection == "rock" && computerPlay(computerSelection) == "scissors") || (playerSelection == "scissors" && computerPlay(computerSelection) == "paper") || (playerSelection == "paper") && computerPlay(computerSelection) == "rock")) {
    alert("You win!");
} else if (playerSelection == "rock") && computerPlay(computerSelection) == "paper") || (playerSelection == "scissors") && computerPlay(computerSelection) == "rock" || (playerSelection == "paper") && computerPlay(computerSelection) == "scissors")) {
    alert("You Lose.")
} else(playerSelection != "rock", "paper", "scissors") {
    alert("Entered invalid move.")
}
}


const playerSelection = "rock";
const computerSelection = computerPlay();