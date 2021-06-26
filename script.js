// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = {

  characterlength: function() {
     var length = window.prompt ("How long would you like your password?");

      if (length < 8 || length > 128) {
          length = characters.characterlength();
        }
     return length;
     },
 lowercase: function() {
       var lower = window.confirm ("Would you like to include lower case characters?");

      return lower
 },
 uppercase: function() {
      var upper = window.confirm ("Would you like to include upper case characters?");

      return upper
 },
 symbols: function() {
      var symbol = window.confirm ("Would you like to include symbols?");
      return symbol;

 }

  }

console.log(characters.symbols());

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword () {}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);