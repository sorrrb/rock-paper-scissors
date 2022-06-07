const CHOICES = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * 3)];
}

function userPlay() {
	const userChoice = prompt("Make a move: ");
	const rawInput = userChoice.toLowerCase();
	return (rawInput[0].toUpperCase() + rawInput.slice(1));
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		console.log("It's a Tie! You both chose " + playerSelection);
		return "tie";
	}
	else if (playerSelection === CHOICES[0] && computerSelection === CHOICES[2]) {
		console.log("You Win! " + CHOICES[0] + " beats " + CHOICES[2]);
		return "win";
	}
	else if (playerSelection === CHOICES[1] && computerSelection === CHOICES[0]) {
		console.log("You Win! " + CHOICES[1] + " beats " + CHOICES[0]);
		return "win";
	}
	else if (playerSelection === CHOICES[2] && computerSelection === CHOICES[1]) {
		console.log("You Win! " + CHOICES[2] + " beats " + CHOICES[1]);
		return "win";
	}
	else {
		console.log("You Lose! " + computerSelection + " beats " + playerSelection);
		return "loss";
	}
}

function game() {
	let playerWins = 0;
	let computerWins = 0;
	for (let i = 0; i < 5; i++) {
		let result = playRound(userPlay(), computerPlay());
		if (result === "tie") {}
		else if (result === "win") {
			playerWins++;
		}
		else if (result === "loss") {
			computerWins++;
		}
	}
	if (playerWins > computerWins) {
		console.log("You Win! The score was " + playerWins + "-" + computerWins);
	}
	else if (playerWins < computerWins) {
		console.log("You Lose! The score was " + playerWins + "-" + computerWins);
	}
	else if (playerWins == computerWins) {
		console.log("It's a tie! The score was " + playerWins + "-" + computerWins);
	}
}

game();