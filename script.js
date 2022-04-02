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
    questionone();
  }
  
}
questionone();
var questiontwo = prompt("Do you want this password to include capital letters? yes/no", "yes");
var questionthree = prompt("Do you want this password to include special characters? yes/no", "yes");
var questionfour = prompt("Do you want this password to include numbers? yes/no", "yes");
var questionfive = prompt("Do you want this password to include lowercase? yes/no", "yes");

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




// Write password to the #password input
function writePassword() {
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

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
  document.querySelector("#password").innerHTML = passwordField;
}