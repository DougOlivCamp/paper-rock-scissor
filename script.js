const resultDisplay = document.querySelector(".result");

const humanPlay = (humanChoice) => {
  // escolha do humano
  console.log("Human:", humanChoice);

  // escolha da IA
  const ai = aiChoice();
  console.log("AI:", ai);

  // calcula o resultado e exibe no parágrafo
  const result = playTheGame(humanChoice, ai);
  resultDisplay.innerHTML = result;
};

const aiChoice = () => {
  const choices = ["paper", "rock", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const playTheGame = (human, ai) => {
  if (human === ai) {
    return "It's a tie!";
  } else if (
    (human === "rock" && ai === "scissors") ||
    (human === "paper" && ai === "rock") ||
    (human === "scissors" && ai === "paper")
  ) {
    return "You win!";
  } else {
    return "AI wins!";
  }
};
