

function removeClassFromElement(element, className){
$(element).removeClass(className);
}

function toggleClassOnElement(element, className){
$(element).toggleClass(className);
}

function hideElements(target, removalType){
if(removalType === 'hide') {
  $(target).hide();
} else if (removalType === 'removeChildren') {
  $(target).children().remove();
} else if (removalType === 'removeSelf') {
  $(target).remove();
}
}

function addAttributeToElement(element, attribute, value ){
$(element).attr(attribute, value);
}

function putPosInElement(element){
var pos =$(element).position();
var objPos = {
        "x": pos["top"],
        "y": pos["left"]
};
$(element).html(`x: ${pos["top"]}px<br>y: ${pos["left"]}px`);
return objPos;
}
