console.log("linked")

//button id = shufflePassword
//generated password textarea id = password
//when user clicks button random password appears in the read-only textarea container
'==============='
//password object array
function generatePassword() {
 var length = 12,
     charset= ['a', 'A', 'b', 'B', 'c','C', 'd','D','e','E','f','F','g','G','h','H',
     'i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T',
     'u','U','v','V','w','W','x','X','y','Y','z','Z','0','1','2','3','4','5','6','7','8','9'];

     returnPassword = "";
//loop through password criteria array
 for (var i = 0, n = charset.length; i < length; ++i) {
    returnPassword += charset.charAt(Math.floor(Math.random() * n));
  }
  return generatePassword;
}
console.log(generatePassword);




//when you click button password generates
var passwordBtn = document.getElementById("shufflePassword");


//password length equals 20 characters
var passwordLength = parseInt(20)
  prompt('Your password must include 20 characters in length.')
  ; 
//loop 20 times and generate a random number between 1 and 20 for shuffled password options
function shufflePasswordOptions() {
  for (let i= 0; i< 20; i++)
//passwordOptions
  var shufflePasswordOptions = Math.floor(Math.random() * 20);
}

var passwordOptions = {
  length: length,
  passwordLetters: passwordLetters,
  passwordNumbers: passwordNumbers
};

return passwordOptions;


//var generateBtn = document.querySelector("#generatePassword");
//write password to the #password
function getPassword() {
  var password = generatePassword();
  var passwordCharacters = document.querySelector("#password");

  passwordCharacters.value = password;
}

//generate password button
generateBtn.addEventListener("click", getPassword);


