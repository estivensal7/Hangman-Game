
$(document).ready(function() {

//Array of Letters for buttons
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
	"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Array of Hints
let hints = ["I believe that we will win!", "Home of Barcelona, and Real Madrid", "Won the 2014 World Cup",
	 "Pele's National Team", "Home of the Colosseum"], 
	 ["Makers of the R8", "M1 - M6", "458 Italia", "Aventador", "GranTurismo"],
	 ["Sponsored by Diddy", "Swedish Vodka", "Popular Russian Vodka", "Popular gluten-free vodka", 
	 "Polish Rye Vodka"]

//Array of categories/answers
let categories = ["USA", "Spain", "Germany", "Brasil", "Italy"],
	["Audi", "BMW", "Ferrari", "Lamborghini", "Maserati"], 
	["Ciroc", "Absolut", "Stolichnaya", "Titos", "Belvedere"];

//Creating loop to iterate through letters array
for(i = 0; i < letters.length; i++) {
	const letterBtn = $("<button>"); //creating button elements
	letterBtn.addClass("letter-button letter letter-button-color"); //adding classes to new element
	$(letterBtn).attr("data-letter", letters[i]); //adding data attribute to letterBtn's === letters[i]
	$(letterBtn).html(letters[i]); //giving each letterBtn a text === letters[i]
	$("#buttons").append(letterBtn); //appending each letterBtn to the "#buttons" div in html
}

//creating on click function for buttons
$(".letter-button").on("click", function() {
	let guessedLetter = $("<div>"); //creating div for guessed letters
	guessedLetter.addClass("letter alphabet-display"); //added classes to the new div
	guessedLetter.text($(this).attr("data-letter")); //added a data-letter attr to new div
	$("#display").append(guessedLetter); //appended guessedLetter div to #display
});

//creating on click event for playAgain button
$("#resetGame").on("click", function() {
	$("#display").empty();
})


//creating on click event for getHint button
$("#hint").on("click", function() {
	let showHint = $("<div>"); //creating div for the requested hint
	showHint.addClass("hint hint-displayed"); //adding classes to the new div
	showHint.text($(this).attr("data-letter")); //adding a data-letter attr to new div
	$("#hintDisplay").append(showHint);
})






})





