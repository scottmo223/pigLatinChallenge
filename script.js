const vowel = ["a", "e", "i", "o", "u"];
let isConstonant = true;
let isNormal = true;

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
	let wordsArray = document.getElementById("word").value.split(" "); //separates multiple words
	document.getElementById("trans").innerHTML = ""; //resets the translated html when new words are passed through
	//loop through each word translating it
	let translatedArr = [];
	for (let i = 0; i < wordsArray.length; i++) {
		const word = wordsArray[i].toLowerCase();
		translatedArr.push(translate(word));
	}
};

//translate word
function translate(word) {
	let lettersArray = word.split("");
	let isVowel = x => x === lettersArray[0];
	let isDoubleConstonant = x => x != lettersArray[1];
	let isNormal = x => x != lettersArray[0];

	//word starting with vowel
	if(vowel.some(isVowel)){
		lettersArray.push("ay");
		return disp(lettersArray);
	}

	//word starting with double constonant
	if(vowel.every(isDoubleConstonant)){
		lettersArray.push(lettersArray[0], lettersArray[1], "ay");
		lettersArray.splice(0, 2);
		return disp(lettersArray);
	}

	//all other words
	if(vowel.some(isNormal)){
		lettersArray.push(lettersArray[0], "ay");
		lettersArray.shift();
		return disp(lettersArray);
	}

	//reset variables
	isConstonant = true;
	isNormal = true;
};

//array to string
function disp(arr) {
	let trans = arr.join("");
	//add translation to html page
	document.getElementById("trans").innerHTML += trans += " ";
};

function normalWord(arr) {
	arr.push(arr[0]);
	arr.shift();
	arr.push("ay");
	disp(arr);
};