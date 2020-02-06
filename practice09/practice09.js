
function wordMatch(string, arrayOfStrings) {
  var someArray=[];
  for (var index = 0; index < arrayOfStrings.length; index++) {
    for(var index1 =0;index1<string.length;index1++){
    console.log(index);
    console.log(index1);
    console.log(arrayOfStrings[index][index]);
    console.log(string[index1]);
    if (arrayOfStrings[index][index]=== string[index1]){
      someArray.push(arrayOfStrings[index]);
     }
    }
  }
}

var myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];
wordMatch('cat', myArray);
