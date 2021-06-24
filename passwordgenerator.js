console.log("linked")

function makePassword(maxLengthPass){
    var maxLengthPass=12;
    var collectionOfLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var collectionOfNumbers=["1-128"];
    var size= collectionOfLetters.length;

for(var=i; i<maxLengthPass; ++i){
    generatedPassword=collectionOfNumbers+collectionOfLetters.charAt(Math.floor(Math.random()*size));
}
return generatedPassword;

}
 console.log(makePassword(12));



