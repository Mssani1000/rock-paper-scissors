function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
    playRound("rock");
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
    playRound("paper");
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
    playRound("scissors");
});

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log("Human chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    let result;

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        result = "You lose! " + computerChoice + " beats " + humanChoice;
    }

    roundsPlayed++;
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    // Update HTML elements
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = result;

    if (roundsPlayed === 5) {
        declareWinner();
    }
}

function declareWinner() {
    let winner;
    if (humanScore > computerScore) {
        winner = "You win the game!";
    } else if (humanScore < computerScore) {
        winner = "Computer wins the game!";
    } else {
        winner = "It's a tie!";
    }
    document.getElementById("winner").textContent = winner;
}

 
