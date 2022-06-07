const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
	let randChoice = Math.floor(Math.random() * 3)
	return choices[randChoice];
}

console.log(computerPlay());