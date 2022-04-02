let numberOfChars = prompt("Please enter your name", "0");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  for (var i  = 0; i <= numberOfChars; i++) {
    let randomDecimal = Math.random()*chars.length;
  let randomNumber = Math.floor(randomDecimal)
  passwordField += chars[i]
  document.querySelector("#password").value = passwordField;
 


  }
  



}
