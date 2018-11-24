const vowel = ["a", "e", "i", "o", "u"];

//input listeners for pressing enter and click
let textBox = document.getElementById("word");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getWord, false);
textBox.addEventListener("keyup", pressEnter => {
	if(pressEnter.keyCode === 13){
		submitButton.click();
	}
});

//recieve input from text box
function getWord() {
	let wordsArray = document.getElementById("word").value.split(" ");
	document.getElementById("trans").innerHTML = ""; //resets the translated html when new words are passed through
	wordsArray.map(translate);
};

//translate word
const translate = word => {
	word = word.toLowerCase(); //get rid of capital letters
	let wordArray = word.split("");
	let isVowel = x => x === wordArray[0];
	let isDoubleConstonant = x => x != wordArray[1];
	let isNormal = x => x != wordArray[0];

	//word starting with vowel
	if(vowel.some(isVowel)){
		wordArray.push("ay");
		return display(wordArray);
	}

	//word starting with double constonant
	if(vowel.every(isDoubleConstonant)){
		wordArray.push(wordArray[0], wordArray[1], "ay");
		wordArray.splice(0, 2);
		return display(wordArray);
	}

	//all other words
	if(vowel.some(isNormal)){
		wordArray.push(wordArray[0], "ay");
		wordArray.shift();
		return display(wordArray);
	}
};

//array to string
function display(wordArray) {
	wordArray = wordArray.join("");
	//add translation to html page
	document.getElementById("trans").innerHTML += wordArray += " ";
};