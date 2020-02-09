

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
  var highestCount= {};
 for(var i=0;i<anArray.length;i++){
  highestCount[anArray[i]]=0;
}
  for (var num = 0; num < anArray.length; num++) {
    highestCount[anArray[num]]= highestCount[anArray[num]]+1;
  }
  var highestNum=0;
  var maxKey =[];
  for(var key in highestCount) {
    if(highestCount[key] > highestNum){
      highestNum = highestCount[key];
      maxKey.push(parseInt(key));
    } else if(highestCount[key] === highestNum) {
      maxKey=[];
      for(var number = anArray.length; number>0; number--) {
          var firstNum=anArray.lastIndexOf(highestCount[key]);
          var secondNum = anArray.lastIndexOf(maxKey[0]);
          if( firstNum > secondNum){
            maxKey.push(anArray[firstNum]);
          } else {
            maxKey.push(anArray[secondNum]);
          }
        }
      }
    }
  return maxKey[maxKey.length - 1];
  }
