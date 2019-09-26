
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

//set a variable to 0
//add number in each index to the variable that is equal to 0
//if tempsum var (start at 0) + the next number is equal
//to the number push those numbers to an array
//if not add the next number in the array to those numbers
var placeHolder = 0;
var sumNumArray = [];
for(var index=0; index <array.length;index++){
    if(placeHolder >= number){
      sumNumArray.push(placeHolder);
    } else {
     placeHolder += array[index];
    }
  }
}

function getAllNamesShorterThan(anArray, num){
for(var x;x<anArray.length;x++){
  var anotherArray =[];
  if(anArray[x]< num.length){
    anotherArray.push(anArray[x]);
    }
  return anotherArray;
  }
}





function makeLabel(){


}
