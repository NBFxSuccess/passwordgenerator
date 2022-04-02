let numberOfChars = prompt("Please enter your name", "0");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {


  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  console.log("clicked")
  for (var i =0 ;i <numberOfChars; i++) {
    console.log("test")
    let randomDecimal = Math.random()*chars.length;
  let randomNumber = Math.floor(randomDecimal)
  var passwordField =+ chars[randomNumber];
  console.log(passwordField);
  document.querySelector("#password").innerHTML = passwordField;
 


  }
  



}
