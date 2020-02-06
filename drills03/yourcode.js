

function getPath(word){
return word.split("/");
}

function getPathParts(string){
  debugger;
  var exp = string;
  var split = exp.split('/');
  var protocol = split[0];
  var sProtocol = protocol.split(':');
  var correct = split[2];
  var correctT = correct.split(':');
  var numT = correctT[0].toInt();
  var allObj = {
    "protocol": sProtocol[0],
    "host": correctT[0],
    "port": numT,
    "path": split[3],
    "file": split[4]
  };
  return allObj
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
