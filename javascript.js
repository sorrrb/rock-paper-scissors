let game = () => {
  let computerWins = 0;
  let playerWins = 0;

  const scoreInterface = document.querySelector('.score');
  const resultInterface = document.querySelector('.result');
  const endMessage = document.querySelector('.end');
  
  const moveOptions = ['Rock', 'Paper', 'Scissors'];

  if (playerWins == 5) {
    endMessage.textContent = 'You win!';
  }
  else if (computerWins == 5) {
    endMessage.textContent = 'You lose!';
  }

  let computerPlay = () => {
    return moveOptions[Math.round(Math.random() * 2)];
  }

  let checkWinner = (x, y) => {
    if (((x === moveOptions[0]) && (y === moveOptions[2])) ||
        ((x === moveOptions[1]) && (y === moveOptions[0])) ||
        ((x === moveOptions[2]) && (y === moveOptions[1]))) {
          ++playerWins;
          resultInterface.textContent = 'You win! ' + x + ' beats ' + y;
          return;
        }
    else {
      ++computerWins;
      resultInterface.textContent = 'You lose. ' + y + ' beats ' + x;
      return;
    }
  }

  let playRound = (playerSelection, computerSelection) => {
    if (playerSelection !== computerSelection) {
      checkWinner(playerSelection, computerSelection);
      scoreInterface.textContent = playerWins + ' - ' + computerWins;
    }
    else {
      resultInterface.textContent = 'It\'s a tie! You both chose ' + playerSelection;
      return;
    }
  }

  const makeMove = (e) => { // named callback function to derive result from choices
    const playerChoice = e.target.textContent;
    const compChoice = computerPlay();
    playRound(playerChoice, compChoice);
  }

  const gameInterface = document.querySelector('#interface');
  const choices = document.querySelectorAll('button.choice');
  choices.forEach((choice) => { // iterate through each 'choice' button
    choice.addEventListener('click', makeMove); /* for each 'choice' button
    call playRound with the appropriate selections using function makeMove */
  });
}


game();

/*

loose
!=
==

strict
!==
===

let a = 5;
let b = 5;
let c = '5';
let d = "hello";
let hello = "hi!";

console.log("hello");
console.log(hello);


*/