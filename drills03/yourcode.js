

function getPath(word){
return word.split("/");
}

function getPathParts(){
// var anArray = getPath();
// var anObj = {
//   'protocol': anArray[0],
//   'host'
//   'port'
//   'path'
//   'file'
}

function getCapitalCount(anArray){
var capitalLetteredWords = [];
for(var i = 0; i<anArray.length;i++){
  if(anArray[i].toUpperCase() === anArray[0]){
    capitalLetteredWords.push(anArray[i]);
  }
}
return capitalLetteredWords.length;
}

function correctCalcChecker(){

}

function doMath(anArrayOfObjects){
for(var i=0; i<anArrayOfObjects.length;i++){
  var propOne= anArrayOfObjects[i]["num1"];
  var propTwo = anArrayOfObjects[i]["num2"];
  var op = anArrayOfObjects[i]["op"];
  // var answer = "propOne  op  propTwo"; does not work
  // if (anArrayOfObjects[i][num] )
  }
}
