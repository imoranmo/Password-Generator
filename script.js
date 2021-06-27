// Assignment Code
var generateBtn = document.querySelector("#generate");

// Object containing prompts to create password
var characters = {

  characterlength: function() {
     var length = window.prompt ("How long would you like your password?");

     if ( /^[0-9.,]+$/.test(length) && length >=8 && length <=128){
       return length;
     }
      else if (!length) {
        return;
      }
      else {
          window.alert("you can only create a password which contains 8-128 characters");
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

 numbers: function() {
  var num = window.confirm ("Would you like to include numbers?");
  return num;

},
 symbols: function() {
      var symbol = window.confirm ("Would you like to include symbols?");
      return symbol;

 }

  }

  // Functions which pull random characters

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


// Write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Function to generate password

function generatePassword () {

  var passLength = characters.characterlength();

  if (!passLength){
    return
  }
  var passLowcase = characters.lowercase();
  var passUppercase = characters.uppercase();
  var passNumber = characters.numbers();
  var passSymbol = characters.symbols ();
  var pass = "";
  var it = "";
  
  for (var i = 0; i < passLength; i++) { 
    if ( passLowcase == true && it != passLength ) {
      var lcase = getLower();
      pass += lcase;
      it++;
    }
    if ( passUppercase == true && it != passLength) {
      var Ucase = getUpper();
      pass += Ucase;
      it++;
    }
    if ( passNumber == true && it != passLength) {
      var Ncase = getNumber();
      pass += Ncase;
      it++;
    }
    if ( passSymbol == true && it != passLength) {
      var Scase = getSymbol();
      pass += Scase;
      it++;
    }
}
return pass
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);