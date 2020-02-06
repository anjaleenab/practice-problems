
function sumArray(someArray){
  var x = 0;
  var t = 0;
  var arrTotal = 0;
  while (x < someArray.length) {
    t = t + someArray[x];
    arrTotal = t;
    x++;
  }
  return arrTotal;
}



function fitWithinVal(array, number){
var numbersBelow=[];
var testNum=0;
for(var index=0; index<array.length;index++) {
  var measure=testNum + array[index];
  if(measure <= number) {
    numbersBelow.push(array[index]);
    testNum += array[index];
  }
}
return numbersBelow;
}

function getAllNamesShorterThan(anArray, num){
  var anotherArray = [];
for(var x=0;x<anArray.length;x++){
  if(anArray[x].length< num){
    anotherArray.push(anArray[x]);
    }
  }
  return anotherArray;
}





// function makeLabel(object){
//   var string = `${object[0][1].greeting} ${object[0].givenName} ${object[0].streetNumber} ${object[0].streetName}
// ${object[0].city} ${object[0].state} ${object[0].zip}`;
// return string;

// }
