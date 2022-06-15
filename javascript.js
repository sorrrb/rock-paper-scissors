let game = () => {
  const MOVES = ['Rock', 'Paper', 'Scissors'];
  let playWins = 0;
  let compWins = 0;

  function computerPlay() {
    return MOVES[Math.round(Math.random() * 2)];
  }

  function checkWinner(firstMove, secondMove) {
    if (firstMove !== secondMove) {
      if (((firstMove === MOVES[0]) && (secondMove === MOVES[2])) ||
          ((firstMove === MOVES[1]) && (secondMove === MOVES[0])) ||
          ((firstMove === MOVES[2]) && (secondMove === MOVES[1]))) {
        ++playWins;
        setScore();
        setResult(1, firstMove, secondMove);
        checkEnd(playWins, compWins);
        return;
      }
      else {
        ++compWins;
        setScore();
        setResult(0, firstMove, secondMove);
        checkEnd(playWins, compWins);
        return;
      }
    }
    else {
      setScore();
      setResult(2, firstMove, secondMove);
      return;
    }
  }

  function playRound(playerSelect, computerSelect) {
    checkWinner(playerSelect, computerSelect);
  }

  function setScore() {
    gameScore.textContent = playWins + ' - ' + compWins;
  }

  function setResult(condition, x, y) {
    if (condition === 1) {
      resultMessage.textContent = 'You won! ' + x + ' beats ' + y + '.';
    }
    else if (condition === 0) {
      resultMessage.textContent = 'You lost! ' + y + ' beats ' + x + '.';
    }
    else resultMessage.textContent = 'It\'s a tie! Both players chose ' + x + '.';
  }

  function checkEnd(playerWins, computerWins) {
    if ((playerWins !== 5) && (computerWins !== 5)) {
      return;
    }
    else {
      if (playerWins === 5) {
        endMessage.textContent = 'You win!';
        MOVE_CHOICES.forEach((choice) => {
          choice.removeEventListener('click', makeChoice, false);
        });
        gameScore.textContent = 'Final score: ' + playWins + ' - ' + compWins;
        scoreHead.textContent = '';
        resultMessage.textContent = '';
      }
      if (computerWins === 5) {
        endMessage.textContent = 'You lose!';
        MOVE_CHOICES.forEach((choice) => {
          choice.removeEventListener('click', makeChoice, false);
        });
        gameScore.textContent = 'Final score: ' + playWins + ' - ' + compWins;
        scoreHead.textContent = '';
        resultMessage.textContent = '';
      }
    }
  }

  function makeChoice(e) {
    playRound(this.textContent, computerPlay());
  }

  const MOVE_CHOICES = document.querySelectorAll('button.choice');
  MOVE_CHOICES.forEach((choice) => {
    choice.addEventListener('click', makeChoice);
  });

  const scoreHead = document.querySelector('.count')
  const gameScore = document.querySelector('.score');
  const resultMessage = document.querySelector('.result');
  const endMessage = document.querySelector('.end');
}

game();