function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  function getHumanChoice() {
    const userChoice = prompt("Enter your choice:");
    return userChoice;
  }
  
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return "You win! Rock beats scissors";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return "You win! Paper beats rock";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return "You win! Scissors beats paper";
    }
    else {
      computerScore++;
      return "You lose! " + computerChoice + ' beats ' + humanChoice;
    }
  }
  
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Round " + (i + 1) + ":");
    console.log(playRound(humanChoice, computerChoice));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
  
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! Computer wins the game!");
  } else {
    console.log("It's a tie! Nobody wins the game!");
  }
  