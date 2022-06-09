const CHOICES = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection !== computerSelection) {
		if (((playerSelection === CHOICES[0]) && (computerSelection === CHOICES[2])) ||
			((playerSelection === CHOICES[1]) && (computerSelection === CHOICES[0])) ||
			((playerSelection === CHOICES[2]) && (computerSelection === CHOICES[1]))) {
				return "win";
		}
		else {
			return "loss";
		}
	}
	else {
		return "tie";
	}
}

const roundPlay = (playerSelection, computerSelection) => {
	let playChoice = playerSelection;
	let compChoice = computerSelection;
	if (playChoice !== compChoice) {
		if (((playChoice === CHOICES[0]) && (compChoice === CHOICE[1])) ||
			((playerSelection === CHOICES[1]) && (computerSelection === CHOICES[0])) ||
			((playerSelection === CHOICES[2]) && (computerSelection === CHOICES[1]))) {
				return "win";
		}
		else return "loss";
	}
	else return "tie";
}

const divUI = document.querySelector('#ui');
const rockBtn = document.querySelector('.ui-rock');
const paperBtn = document.querySelector('.ui-paper');
const scissorsBtn = document.querySelector('.ui-scissors');

rockBtn.addEventListener('click', () => {
	
});