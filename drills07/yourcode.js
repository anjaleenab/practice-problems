

function testFunction1(element, className){
$(element).removeClass(className);
}

function testFunction2(element, className){
$(element).toggleClass(className);
}

function testFunction3(target, removalType  ){
if(removalType === 'hide') {
  $(target).hide();
} else if(removalType === 'removeChildren') {
  $(target).empty();
} else if(removalType === 'removeSelf') {
  $(target).remove();
}
}

function testFunction4(element, attribute, value){
$(element).attr(attribute, value);
}

function testFunction5(element, attribute, value){
$(element).attr(attribute, value);
}
