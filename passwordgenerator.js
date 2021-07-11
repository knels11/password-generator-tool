console.log("linked")

//password object array
function generatePassword(passwordLength) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var allChars = numberChars + upperChars + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  alert(generatePassword(12));

//function makePassword(maxLengthPass){
  //  var maxLengthPass=12;
   // var collectionOfLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //var collectionOfNumbers=["1-128"];
    //var size= collectionOfLetters.length;

//for(var=i; i<maxLengthPass; ++i){
  //  generatedPassword=collectionOfNumbers+collectionOfLetters.charAt(Math.floor(Math.random()*size));
//}
//return generatedPassword;

//}
 //console.log(makePassword(12));



