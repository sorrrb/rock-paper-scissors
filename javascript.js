let game = () => {
  const HACK_CHAR = '&nbsp;';
  let playerWins = 0;
  let computerWins = 0;
  const MOVES = ['Rock', 'Paper', 'Scissors'];
  const tie = 'tie';

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
      playerMoveText.textContent = playerSelect;
      computerMoveText.textContent = computerSelect;
      scoreText.textContent = defineScore();
      mainText.textContent = '~ TIE ~';
    }
    else if (result === true) {
      ++playerWins;
      playerMoveText.textContent = playerSelect;
      computerMoveText.textContent = computerSelect;
      scoreText.textContent = defineScore();
      mainText.textContent = '~ WIN ~';
      checkEnd();
    }
    else {
      ++computerWins;
      playerMoveText.textContent = playerSelect;
      computerMoveText.textContent = computerSelect;
      scoreText.textContent = defineScore();
      mainText.textContent = '~ LOSS ~';
      checkEnd();
    }
  }

  let defineScore = () => {
    return playerWins + ' - ' + computerWins;
  }

  let checkEnd = () => {
    if (playerWins === 5) {
      mainText.textContent = 'YOU WIN!';
      moveBtns.forEach((button) => {
        button.removeEventListener('click', linkMove);
      });
      subText.textContent = 'Play again?';
      subText.classList.add('replay');
      subText.addEventListener('click', () => {
        location.reload();
      });
    }
    if (computerWins === 5) {
      mainText.textContent = 'YOU LOSE!';
      moveBtns.forEach((button) => {
        button.removeEventListener('click', linkMove);
      });
      subText.textContent = 'Play again?';
      subText.classList.add('replay');
      subText.addEventListener('click', () => {
        location.reload();
      });
    }
    else return;
  }

  const mainText = document.querySelector('.info--text');
  const subText = document.querySelector('.info--subtext');

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