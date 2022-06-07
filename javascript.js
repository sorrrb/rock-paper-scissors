const CHOICES = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
	return CHOICES[Math.floor(Math.random() * 3)];
}

console.log(computerPlay());