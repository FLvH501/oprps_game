function computerPlay() {
    const compOptions = ["rock", "paper", "scissors"];
    return compOptions[Math.floor(Math.random() * compOptions.length)];
}