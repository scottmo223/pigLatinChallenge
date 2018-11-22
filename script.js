const vowel = ["a", "e", "i", "o", "u"];
let isConstonant = true;
let isNormal = true;

//input listeners for pressing enter and click
let textBox = document.getElementById("word");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getWord, false);

//be able to press enter after typing word, instead of clicking button
textBox.addEventListener("keyup", pressEnter => {
	if(pressEnter.keyCode === 13){
		submitButton.click();
	}
});

/* 
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); */






//recieve input from text box
function getWord() {
	let textInput = document.getElementById("word").value;
	let wordsArr = textInput.split(" ");
	document.getElementById("trans").innerHTML = "";
	let translatedArr = [];
	for (let i = 0; i < wordsArr.length; i++) {
		const word = wordsArr[i].toLowerCase();
		translatedArr.push(translate(word));

	}
};

//loop through each word and translate it


//translate word
function translate(word) {
	//string to array then translation
	let arr = word.split("");

	//word starting with vowel
	for (let i = 0; i < 4; i++) {
		if (arr[0] == vowel[i]) {
			vowels(arr);
		}
	}

	//word starting with double constonant
	for (let i = 0; i < 4; i++) {
		if (arr[1] == vowel[i]) {
			isConstonant = !isConstonant;
		}
	}
	if (isConstonant) {
		dconstonant(arr);
	}

	//all other words
	if (isNormal) {
		normalWord(arr);
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

function vowels(arr) {
	arr.push("ay");
	disp(arr);
	isConstonant = !isConstonant;
	isNormal = !isNormal;
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
