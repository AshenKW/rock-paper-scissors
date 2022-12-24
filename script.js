let playerScore;
let computerScore;
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
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const beatsTo = {
    rock:"scissors",
    paper:"rock",
    scissors:"paper"
  }
  console.log(`Player: ${playerChoice}\nComputer: ${computerChoice}`)
  if (playerChoice === computerChoice) return "even"
  if (beatsTo[playerChoice] === computerChoice) {
    playerScore++
    return "Player wins"
  }
  computerScore++
  return "Computer wins"
};

const game = () => {
  
}