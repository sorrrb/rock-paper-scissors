let game = () => {
	const CHOICES = ['Rock', 'Paper', 'Scissors'];
	let playerWins = 0;
	let computerWins = 0;

	let computerPlay = () => CHOICES[Math.round((Math.random() * 2))];

	let playRound = (playerSelection, computerSelection) => {
		if (playerSelection !== computerSelection) {
			if (((playerSelection === CHOICES[0]) && (computerSelection === CHOICES[2])) ||
				((playerSelection === CHOICES[1]) && (computerSelection === CHOICES[0])) ||
				((playerSelection === CHOICES[2]) && (computerSelection === CHOICES[1]))) {
					++playerWins;
					scoreDiv.textContent = playerWins + '-' + computerWins;
					resultDiv.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection;
					checkWin();
					return;
			}
			++computerWins;
			scoreDiv.textContent = playerWins + '-' + computerWins;
			resultDiv.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
			checkWin();
			return;
		}
		else {
			resultDiv.textContent = 'It\'s a tie! Both players chose ' + playerSelection;
			return;
		}
	};

	const container = document.querySelector('#ui');
	const scoreDiv = document.createElement('div');
	const resultDiv = document.createElement('div');

	const rockChoice = document.querySelector('.ui-rock');
	rockChoice.textContent = 'Rock';
	let rockSelect = () => playRound(CHOICES[0], computerPlay());
	rockChoice.addEventListener('click', rockSelect);

	const paperChoice = document.querySelector('.ui-paper');
	paperChoice.textContent = 'Paper';
	let paperSelect = () => playRound(CHOICES[1], computerPlay());
	paperChoice.addEventListener('click', paperSelect);

	const scissorsChoice = document.querySelector('.ui-scissors');
	scissorsChoice.textContent = 'Scissors';
	let scissorsSelect = () => playRound(CHOICES[2], computerPlay());
	scissorsChoice.addEventListener('click', scissorsSelect);
	
	container.appendChild(scoreDiv);
	container.appendChild(resultDiv);
	scoreDiv.textContent = playerWins + '-' + computerWins;

	let checkWin = () => {
		if (playerWins === 5) {
			resultDiv.textContent = 'YOU WIN!';
		}
		else if (computerWins === 5) {
			resultDiv.textContent = 'YOU LOSE!';
		}
	}
}

game();