var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
let i = 0;
let numberOfChars = 0;

function questionone() {
  numberOfChars = prompt("Please enter # of chars 8-128", "0");
  if (numberOfChars > 128 || numberOfChars < 8) {
    questionone();
  }
  
}

questionone();

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
    let randomDecimal = Math.random()*chars.length;
    let randomNumber = Math.floor(randomDecimal)
    passwordField += chars[randomNumber].toString();
  }
  console.log(passwordField);
  document.querySelector("#password").innerHTML = passwordField;
}