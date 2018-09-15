//Tugas 1

function shoutOut() {
	console.log("Halo Function!");
}
console.log(shoutOut());


//Tugas 2

function calculateMultiply() {
	return num1 * num2
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


//Tugas 3
function processSentence() {
	return 'Nama saya ' +name + '. Umur saya ' +age + '. Alamat saya di ' +address + '. Dan hobi saya ' +hobby;
}
var name = "Agus";
var age = "30th";
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "bermain game";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);