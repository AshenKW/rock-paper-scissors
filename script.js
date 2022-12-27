let playerScore = 0;
let computerScore = 0;
let computerChoice = "";
let playerChoice = "";
const choices = ["rock", "paper", "scissors"];

const getRandomNumber = (max) => {
  return Math.floor(Math.random(0) * max);
};

const getComputerChoice = () => {
  return choices[getRandomNumber(3)];
};

const getPlayerChoice = () => {
  while (true) {
    const playerChoice = prompt("Make a choice").toLowerCase();
    if (choices.includes(playerChoice)) return playerChoice;
    alert(`${playerChoice} is not a valid choice`);
  }
};

const playRound = () => {
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice();
  const beatsTo = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerChoice === computerChoice) return "Tie";

  if (beatsTo[playerChoice] === computerChoice) {
    playerScore++;
    return "You won the round";
  }
  computerScore++;
  return "Computer won the round";
};

const resetScore = () => {
  playerScore = 0;
  computerScore = 0;
};

const game = (rounds = 5) => {
  parseInt(rounds);
  for (let i = 0; i < rounds; ) {
    playRound();
    console.log(
      `Player used ${playerChoice} Score: ${playerScore}\nComputer used ${computerChoice} Score: ${computerScore}`
    );
    i++;
  }

  if (computerScore > playerScore) {
    resetScore();
    return "Computer won the game";
  }

  if (computerScore == playerScore) {
    resetScore();
    return "Tie";
  }
  resetScore();
  return "Player won the game";
};
