let numberOfChars = prompt("Please enter your name", "0");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
let i = 0;


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