let game = () => {
  let playerWins = 0;
  let computerWins = 0;
  const MOVES = ['Rock', 'Paper', 'Scissors'];

  let computerPlay = () => MOVES[Math.round(Math.random() * 2)];

  let checkWin = (playerChoice, computerChoice) => {
    if (playerChoice !== computerChoice) {
      if (((playerChoice === MOVES[0]) && (computerChoice === MOVES[2])) ||
          ((playerChoice === MOVES[1]) && (computerChoice === MOVES[0])) ||
          ((playerChoice === MOVES[2]) && (computerChoice === MOVES[1]))) {
        return true; 
        }
      else return false;
    }
    else return null;
  }

  let playRound = (playerSelect, computerSelect) => {
    const result = checkWin(playerSelect, computerSelect);
    if (result === null) {
      return;
    }
    else if (result === true) {
      ++playerWins;
      playerMoveText.textContent = playerSelect;
      computerMoveText.textContent = computerSelect;
      scoreText.textContent = defineScore();
    }
    else {
      ++computerWins;
      playerMoveText.textContent = playerSelect;
      computerMoveText.textContent = computerSelect;
      scoreText.textContent = defineScore();
    }
  }

  let defineScore = () => {
    return playerWins + ' - ' + computerWins;
  }

  const mainText = document.querySelector('p.info--text');
  const subText = document.querySelector('p.info--subtext');

  const logicContainer = document.querySelector('.logic--wrapper');

  const playerContainer = logicContainer.firstElementChild;
  const playerMoveText = playerContainer.lastElementChild;
  const computerContainer = logicContainer.lastElementChild;
  const computerMoveText = computerContainer.lastElementChild;

  const scoreContainer = document.querySelector('.score--wrapper');
  const scoreText = scoreContainer.lastElementChild;

  const moveBtns = document.querySelectorAll('.media');

  let linkMove = (e) => {
    playRound(e.target.alt, computerPlay());
  }

  moveBtns.forEach((button) => {
    button.addEventListener('click', linkMove);
  });
}

game();