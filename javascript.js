function computerPlay() {
	const CHOICES = ['Rock', 'Paper', 'Scissors'];
	const RAND_CHOICE = Math.floor(Math.random() * 3)
	return CHOICES[RAND_CHOICE];
}

function playRound(playerSelection, computerSelection) {
	let playerSelectionLower = playerSelection.toLowerCase();
	let firstCharUpper = playerSelectionLower[0].toUpperCase();
	let playerSelectionSubstr = playerSelectionLower.slice(1);
	playerSelection = firstCharUpper + playerSelectionSubstr;

	if (playerSelection === computerSelection) {
		return "It's a tie!";
	}
	else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
		return "You Win! " + playerSelection + " beats " + computerSelection;
	}
	else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
		return "You Win! " + playerSelection + " beats " + computerSelection;
	}
	else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
		return "You Win! " + playerSelection + " beats " + computerSelection;
	}
	else {
		return "You Lose! " + computerSelection + " beats " + playerSelection;
	}
}

console.log(playRound(computerPlay(), "Rock"));