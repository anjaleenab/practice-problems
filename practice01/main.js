
var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function getLongWords (myArray, aString){
  var longWords =[];
for(var x =0;x<myArray.length;x++){
  if (aString.length > myArray[x].length){
    var longerWord = myArray.length[x];
    longWords.push(longerWord);
  }
}
console.log(longWords);
}
