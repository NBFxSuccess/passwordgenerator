var justNumbers = "0123456789";
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "!@#$%^&*()";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var generateBtn = document.querySelector("#generate");
let i = 0;
let numberOfChars = 0;
let charLength = 0;
var caps = false;
var lowercase = false;
var special = false;
var numbers = false;

function questionone() {
  numberOfChars = prompt("Please enter # of chars 8-128", "0");
  if (numberOfChars > 128 || numberOfChars < 8) {
    alert("invalid input!");
    questionone();
  }
  
}
questionone();
questions();
function questions() {
var questiontwo = prompt("Do you want this password to include capital letters? yes/no", "yes");
var questionthree = prompt("Do you want this password to include special characters? yes/no", "yes");
var questionfour = prompt("Do you want this password to include numbers? yes/no", "yes");
var questionfive = prompt("Do you want this password to include lowercase? yes/no", "yes");


// setting password options.
if (questiontwo == "yes") {
  caps = true;
}
if (questionthree == "yes") {
  special = true;
}
if (questionfour == "yes") {
  numbers = true;
}
if (questionfive == "yes") {
  lowercase = true;
}

  } // V what happens if all questions get answered no/invalid
  if (!caps && !special && !numbers && !lowercase) {
    alert("You need to have valid input. Must input yes to one of the options.")
    questions();

  }


// listener for click
generateBtn.addEventListener("click", generatePassword);


// what happens after click
function generatePassword() {
  console.log("clicked")
  var passwordField = "";
  for (var i = 0 ;i <numberOfChars; i++) {
    console.log("test")
    if (caps == true) {
    let randomCapDecimal = Math.random()*capitalLetters.length;
    let randomCapRounded = Math.floor(randomCapDecimal)
    passwordField += capitalLetters[randomCapRounded].toString();
    }
    if (numbers == true){
    let randomNumberDecimal = Math.random()*justNumbers.length;
    let randomNumberRounded = Math.floor(randomNumberDecimal)
    passwordField += justNumbers[randomNumberRounded].toString();
  }
  if (special == true) {
    let randomSpecialDecimal = Math.random()*specialChars.length;
    let randomSpecialRounded = Math.floor(randomSpecialDecimal)
    passwordField += specialChars[randomSpecialRounded].toString();
}
    if (lowercase == true) {
    let randomLowercaseDecimal = Math.random()*lowercaseLetters.length;
    let randomLowercaseRounded = Math.floor(randomLowercaseDecimal)
    passwordField += lowercaseLetters[randomLowercaseRounded].toString();
    }
  }
  console.log(passwordField);
  // writing password on screen
  document.querySelector("#password").innerHTML = passwordField;
}