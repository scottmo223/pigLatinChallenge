//recieve input from text box
function getWord() {
	var x = document.getElementById("word").value;
	translate(x.toLowerCase());
};

//translate word
function translate(word) {
	//string to array then translation
	var arr = word.split("");
	var vowel = ["a","e","i","o","u"];
	var cons = true;
	var norm = true;
	
	//vowel
	for (var i = 0; i < 4; i++) {
		if(arr[0]==vowel[i]){
			vowels(arr);
		}
	}
	
	//double constonant
	for (var i = 0; i < 4; i++) {
		if(arr[1]==vowel[i]){
		    cons = !cons;
		}
	}
	if(cons){
		dconstonant(arr);
	}
	
	//everything else
	if(norm){
		normal(arr);
	}
};

//back to string
function disp(arr){
	var trans = arr.join("");
	//add translation to html page
	document.getElementById("trans").innerHTML = trans;
};

function vowels(arr){
	arr.push("ay");
	disp(arr);
	cons = !cons;
	norm = !norm;
};

function dconstonant(arr){
	arr.push(arr[0],arr[1]);
	arr.splice(0,2);
	arr.push("ay");
	disp(arr);
	norm = !norm;
};

function normal(arr){
    arr.push(arr[0]);
    arr.shift();
    arr.push("ay");
    disp(arr);
};
