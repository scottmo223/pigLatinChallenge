let vowel = ["a", "e", "i", "o", "u"];
let isConstonant = true;
let isNormal = true;

//input listeners for pressing enter and click
let inputBox = document.getElementById("word");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getWord, false);
//pressing enter works for a second, then the word disappears. ?
inputBox.addEventListener("keydown", function(e){
	if(e.keyCode === 13){
		getWord();
	}
});

//recieve input from text box
function getWord() {
	let x = document.getElementById("word").value;
	translate(x.toLowerCase());
};

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
	document.getElementById("trans").innerHTML = trans;
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
