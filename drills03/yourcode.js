

function getPath(word){
return word.split("/");
}

function getPathParts(string){
  var exp = string;
  var stringArray = exp.split('/');
  var protocol = stringArray[0];
  var protocolArray = protocol.split(':');
  var actualProtocol = protocolArray[0];
  var portArray = stringArray[2].split(':');
  var localHost =portArray[0];
  var port = portArray[1];
  var websiteChars =string.split('');
  var slashCounter=0;
  var indexOfSlashThree =null;
  for(var index=0;index<websiteChars.length;index++) {
  if(websiteChars[index] === '/') {
    slashCounter++;
  }
  if(slashCounter === 3) {
    indexOfSlashThree = index;
    break;
  }
  }
  var path = string.slice(indexOfSlashThree + 1, string.lastIndexOf('/'));
  var file = string.slice(string.lastIndexOf('/')+1);
 var object = {
   protocol: actualProtocol,
   host: localHost,
   port: parseInt(port),
   path: path,
   file: file
 }
 return object;
}

function getCapitalCount(anArray){
var capitalLetteredWords = [];
for(var i = 0; i<anArray.length;i++){
  if(anArray[i][0].toUpperCase() === anArray[i][0]){
    capitalLetteredWords.push(anArray[i]);
  }
}
return capitalLetteredWords.length;
}

function correctCalcChecker(objArray){
  var correctEquations= [];
  for(var index=0; index<objArray.length;index++) {
    if (objArray[index].op === '-') {
      if (objArray[index].num1 - objArray[index].num2 === objArray[index].result) {
        correctEquations.push(objArray[index]);
      }
    } else if (objArray[index].op === '+') {
      if (objArray[index].num1 + objArray[index].num2 === objArray[index].result) {
        correctEquations.push(objArray[index]);
      }
    } else if (objArray[index].op === '/') {
      if (objArray[index].num1 / objArray[index].num2 === objArray[index].result) {
        correctEquations.push(objArray[index]);
      }
    } else if (objArray[index].op === '*') {
      if (objArray[index].num1 * objArray[index].num2 === objArray[index].result) {
        correctEquations.push(objArray[index]);
      }
    }
  }
  return correctEquations;
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
