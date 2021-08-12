
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = [ '@', '$', '#', '!', '~', '%', '^', '&', '*']
var pool = []

//
var all = [upperCaseLetters, lowerCaseLetters, numbers, symbols]
var noLowerLetters = [upperCaseLetters, numbers, symbols]
var noUpperLetters = [lowerCaseLetters, numbers, symbols]
var noNumbers = [upperCaseLetters, lowerCaseLetters, symbols]
var noSymbols = [upperCaseLetters, lowerCaseLetters, numbers]
var noLetters = [numbers, symbols]
var noUpperOrNumbers= [lowerCaseLetters, symbols]
var noUpperOrSymbols= [lowerCaseLetters, numbers]
var noLowerOrNumbers= [upperCaseLetters, symbols]
var noLowerOrSymbols= [upperCaseLetters, numbers]
var noNumbersOrSymbols= [lowerCaseLetters, upperCaseLetters]
//
//
function generatePassword () {
var initialChoice = window.confirm("Do you want to generate a random password?");
var lowerChoice = window.confirm("Do you want lower case letters in your password?");
var upperChoice = window.confirm("Do you want upper case letters in your password?");
var symbolChoice = window.confirm("Do you want symbols in your password?");
var numberChoice = window.confirm("Do you want numbers in your password?");

if (lowerChoice === false && upperChoice === false && numberChoice === false && symbolChoice === false) {
  return "You must select at least one character type for your random password.";
}
var lengthChoice = window.prompt("How many characters do you want in your password? Choose between 8-128 characters.");
if (lengthChoice < 8 || lengthChoice > 128) {
  return "You must choose a valid number of characters, 8-128.";
} else if (isNaN(lengthChoice)) {
  lengthChoice = prompt("You must enter a valid number.");
}


//this basically makes lines 9-19 obsolete :/ 
  if (lowerChoice) {
    pool = pool.concat(lowerCaseLetters);
  }
  if (upperChoice) {
    pool = pool.concat(upperCaseLetters);
  }
  if (numberChoice) {
    pool = pool.concat(numbers);
  }
  if (symbolChoice) {
    pool = pool.concat(symbols);
  }

  let finalPassword = ""
  for (let i = 0; i < lengthChoice; i++) {
    let pw =[Math.floor(Math.random() * pool.length)];
    finalPassword = finalPassword + pool[pw];
  }
  return finalPassword;
};

          
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);