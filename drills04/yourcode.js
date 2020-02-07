

function changeElements(className){
  debugger;
var elements=document.querySelectorAll(className);

for(var element=0;element < elements.length; element++) {
var text=elements[element].innerText;

switch (text) {
  case 'one':
    elements[element].innerText = 1;
    break;
  case 'two':
    elements[element].innerText = 2;
    break;
  case 'three':
    elements[element].innerText = 3;
    break;
  case 'four':
    elements[element].innerText = 4;
    break;
  case 'five':
    elements[element].innerText = 5;
    break;
  case 'six':
    elements[element].innerText = 6;
    break;
  case 'seven':
    elements[element].innerText = 7;
    break;
  case 'eight':
    elements[element].innerText = 8;
    break;
  case 'nine':
    elements[element].innerText = 9;
    break;
}
}
}

function appendTextToElement(className, word){
var elements=document.querySelectorAll(className);
for(var element=0;element<elements.length;element++) {
  elements[element].innerText += word;
}

}

function addClass(className, newClassName){
$(className).addClass(newClassName);
var numberOfElements= $(className).length;
return numberOfElements;
}

// function removeElements(){

// }
