const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const field1 = document.getElementById("pw1-field");
const field2 = document.getElementById("pw2-field");
let password1 = "";
let password2 = "";

function generatePW1() {
	for (let i = 0; i < 15; i++) {
		let character = characters[Math.floor(Math.random()*characters.length)]
		password1 += character
	}
}

function generatePW2() {
	for (let i = 0; i < 15; i++) {
		let character = characters[Math.floor(Math.random()*characters.length)]
		password2 += character
	}
}

function genBoth() {
	if (password1 != "" && password2 != ""){
		password1 = "";
		password2 = "";
	}
	generatePW1();
	generatePW2();
	field1.textContent = password1;
	field2.textContent = password2;
}

