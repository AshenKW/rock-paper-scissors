let playerScore = 0;
let computerScore = 0;
let computerSelection = "";
let playerSelection = "";
let doGameEnd = false;

const winnerText = document.querySelector(".winner")
const printComputerScore = document.querySelector(".computer-score")
const printPlayerScore = document.querySelector(".player-score")
const playerInput = document.querySelectorAll("input[name=choice]")
const choices = ["rock", "paper", "scissors"];

const getRandomNumber = (max) => {
  return Math.floor(Math.random(0) * max);
};

const getComputerSelection = () => {
  return choices[getRandomNumber(3)];
};


const playRound = (playerSelect) => {
  computerSelection = getComputerChoice();
  
  const beatsTo = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerChoice === computerChoice) return "Tie";

  if (beatsTo[playerChoice] === computerChoice) {
    playerScore++;
    printPlayerScore.textContent = playerScore
    return "You won the round 🥁";
  }
  computerScore++;
  printComputerScore.textContent = computerScore
  return "Computer won the round 🤖";
};

const resetScore = () => {
  playerScore = 0;
  computerScore = 0;

  printComputerScore.textContent = computerScore
  printPlayerScore.textContent = playerScore
};

for (const input of playerInput) {
  input.addEventListener("click", (e) => {
    const choice = e.target.id
    
    if (doGameEnd) {resetScore()} 

    winnerText.textContent = playRound(choice)
    
    if (playerScore === 5 || computerScore === 5) {
      const winner = playerScore === 5 ? "Player won the <strong>game</strong> 🥁" : "Computer won the game 🤖";
      winnerText.innerHTML = winner;
      doGameEnd = true
    }
  })
}