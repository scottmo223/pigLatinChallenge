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

	//word starting with vowel
	if(vowel.some(isVowel)){
		lettersArray.push("ay");
		return disp(lettersArray);
	}

	//word starting with double constonant
	for (let i = 0; i < 4; i++) {
		if (lettersArray[1] == vowel[i]) {
			isConstonant = !isConstonant;
		}
	}
	if (isConstonant) {
		dconstonant(lettersArray);
	}

	//all other words
	if (isNormal) {
		normalWord(lettersArray);
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

function dconstonant(arr) {
	arr.push(arr[0], arr[1]);
	arr.splice(0, 2);
	arr.push("ay");
	disp(arr);
	isNormal = !isNormal;
};

function normalWord(arr) {
	arr.push(arr[0]);
	arr.shift();
	arr.push("ay");
	disp(arr);
};
