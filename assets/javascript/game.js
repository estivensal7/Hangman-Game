window.onLoad = function() {


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let categories;
let chosenCategory;
let hint;
let answer;
let guess;
let guesses = [];
let lives;
let counter;
let space;

//Getting Elements

const showLives = document.getElementById("myLives");

const showCategory = document.getElementById("chosenCateogry");

const getHint = document.getElementById("hintBtn");

const showClue = document.getElementById("clue");

//creating buttons ul
const buttons = function() {

	const myButtons = document.getElementById("buttons");

	letters = document.createElement('ul');

	for (let i = 0; i < alphabet.length; i++) {
		
		letters.id = 'alphabet';
		
		list = document.createElement('li');
		
		list.id = 'letter';

		list.innerHTML = alphabet[i];

		check();

		myButtons.appendChild(letters);

		letters.appendChild(list);
	}

}

// selecting category

let selectCategory = function() {

	if ( chosenCategory === categories[0] ) {

		category.innerHTML = "The chosen category is International Soccer Teams!";
	
	} else if ( chosenCategory === categories[1] ) {

		category.innerHTML = "The chosen category is NFL Football Teams";

	} else if ( chosenCategory === categories[2] ) {

		category.innerHTML = "The chosen category is Whiskey/Bourbon Brands";

	}
}

//creating guessed letters ul

result = function() {

	guessHolder = document.getElementById("guessedLetters");

	correct = document.getElementById('ul');

	for( let i = 0; i = word.length; i++) {

		correct.setAttribute('id', 'my-word');

		guess = document.createElement('li');
			guess.setAttribute('class', 'guess');

		if ( word[i] === "-" ) {

			guess.innerHTML = "-";

		} else {

			guess.innerHTML = "_";

		}

		guesses.push(guess);
		guessHolder.appendChild(correct);
		correct.appendChild(guess);
	}
}





}






