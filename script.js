const moveChoices = ['Rock', 'Paper', 'Scissors'];

const gameLogic = (() => {
  let computerPlay = () => {
    const computerMove = moveChoices[Math.floor(Math.random() * 3)];
    return computerMove;
  }

  let playRound = player => {
    const computer = computerPlay();
    if (player === computer) {
      displayController.updateScore(null, player, computer);
    }
    else if ((player === 'Rock' && computer === 'Scissors') || (player === 'Scissors' && computer === 'Paper') || (player === 'Paper' && computer === 'Rock')) {
      displayController.updateScore(true, player, computer);
    }
    else {
      displayController.updateScore(false, player, computer);
    }
  }

  return { computerPlay, playRound };
})();

const displayController = (() => {
  let playerWins = 0;
  let computerWins = 0;
  let isGameActive = false;

  const playerScore = document.querySelector('.player-score');
  const computerScore = document.querySelector('.computer-score');

  const playerContainer = document.querySelector('div.player');
  const computerContainer = document.querySelector('div.computer');

  const playerHead = document.querySelector('.player-head');
  const computerHead = document.querySelector('.computer-head');

  const infoMessage = document.querySelector('.info-message');
  const helpContainer = document.querySelector('.help-wrapper');

  const moveButtons = document.querySelectorAll('button');
  moveButtons.forEach((button) => {
    button.addEventListener('click', buttonCallback);
  })

  function buttonCallback() {
    gameLogic.playRound(this.dataset.id);
  }

  let resetGame = () => {
    playerWins = 0;
    computerWins = 0;
  }

  let updateScore = (result, playerMove, computerMove) => {
    if (result) playerWins++;
    else if (!result && typeof(result) === 'boolean') computerWins++;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    if (!isGameActive) {
      isGameActive = true;
      playerScore.style.visibility = 'visible';
      computerScore.style.visibility = 'visible';
      playerHead.style.visibility = 'visible';
      computerHead.style.visibility = 'visible';
      infoMessage.style.visibility = 'hidden';
      helpContainer.style.visibility = 'hidden';
    }
    else if (isGameActive) {
      const replacePlayer = playerContainer.lastElementChild;
      const replaceComputer = computerContainer.lastElementChild;
      replacePlayer.remove();
      replaceComputer.remove();
    }
    updateInterface(playerMove, computerMove);
    checkGameEnd();
  }

  let updateInterface = (playerMove, computerMove) => {
    switch (playerMove) {
      case 'Rock':
        const rockImage = document.createElement('img');
        rockImage.setAttribute('src', './resources/rock.png');
        playerContainer.appendChild(rockImage);
        break;
      case 'Paper':
        const paperImage = document.createElement('img');
        paperImage.setAttribute('src', './resources/paper.png');
        playerContainer.appendChild(paperImage);
        break;
      case 'Scissors':
        const scissorsImage = document.createElement('img');
        scissorsImage.setAttribute('src', './resources/scissors.png');
        playerContainer.appendChild(scissorsImage);
        break;
    }

    switch (computerMove) {
      case 'Rock':
        const rockImage = document.createElement('img');
        rockImage.setAttribute('src', './resources/rock.png');
        computerContainer.appendChild(rockImage);
        break;
      case 'Paper':
        const paperImage = document.createElement('img');
        paperImage.setAttribute('src', './resources/paper.png');
        computerContainer.appendChild(paperImage);
        break;
      case 'Scissors':
        const scissorsImage = document.createElement('img');
        scissorsImage.setAttribute('src', './resources/scissors.png');
        computerContainer.appendChild(scissorsImage);
        break;
    }
  }

  let checkGameEnd = () => {
    if (playerWins === 3) {
      infoMessage.textContent = 'You WIN!';
      infoMessage.style.visibility = 'visible';
      const refElement = helpContainer.firstElementChild;
      const newButton = document.createElement('button');
      newButton.classList.add('restart');
      newButton.textContent = 'Play Again?';
      helpContainer.replaceChild(newButton, refElement);
      helpContainer.style.visibility = 'visible';
      newButton.addEventListener('click', () => {
        location.reload();
      });
      moveButtons.forEach((button) => {
        button.removeEventListener('click', buttonCallback);
      })
    }
    else if (computerWins === 3) {
      infoMessage.textContent = 'You LOSE!';
      infoMessage.style.visibility = 'visible';
      const refElement = helpContainer.firstElementChild;
      const newButton = document.createElement('button');
      newButton.classList.add('restart');
      newButton.textContent = 'Play Again?';
      helpContainer.replaceChild(newButton, refElement);
      helpContainer.style.visibility = 'visible';
      newButton.addEventListener('click', () => {
        location.reload();
      });
      moveButtons.forEach((button) => {
        button.removeEventListener('click', buttonCallback);
      })
    }
    else return;
  }

  return { resetGame, updateScore };
})();