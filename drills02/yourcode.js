

function countOccurences(anArray, aWord){
// countif()

var arrayLength = 0;
var count = 0;
while(arrayLength < anArray.length){
 if(anArray[arrayLength]===aWord){
   count++
 }
 arrayLength++;
}
return count;
}

function wordLengths(someArray){
  var numberOfLetters = [];
  for(var x =0;x<someArray.length;x++){
  var word =  someArray[x];
  var wordLength = word.length;
  numberOfLetters.push(wordLength);
  }
return numberOfLetters;
}

function getMinMaxMean(anArray){
var statsObj = {
  min: anArray[0],
  max: null,
  mean: null
}
  var arraySum = 0;
for(var x = 0;x<anArray.length;x++){
  if(statsObj.max< anArray[x]){
  statsObj.max= anArray[x];
    }
  if(anArray[x] < statsObj.min ){
    statsObj.min = anArray[x];
    }

    arraySum+=anArray[x];
    var mean= arraySum/anArray.length;
    statsObj.mean = mean;
  }
  return statsObj;
}

function findMode(anArray){
  var highestCount= null;
 for(var i=anArray[0];i<anArray.length;i++){
  var count = anArray.filter(number => number ===anArray[0]);
  if(count.length> highestCount){
    highestCount.push(count);
  }
  }
  return highestCount[0];
}
