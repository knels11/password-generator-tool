console.log("linked")

//password object array
function generatePassword() {
  var length = 12,
     charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     returnPassword = "";
//loop through password criteria array
  for (var i = 0, n = charset.length; i < length; ++i) {
    returnPassword += charset.charAt(Math.floor(Math.random() * n));
  }
  return returnPassword;
}
console.log(generatePassword);
