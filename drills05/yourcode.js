

function populateRecords(arrayOfObjs){
  console.log(arrayOfObjs);
var obj ={'charge': 0,
          'cash advance': 0};
for(var index=0; index<arrayOfObjs.length;index++) {
 if(arrayOfObjs[index]["type"] === 'charge') {
  obj["charge"] += parseFloat(arrayOfObjs[index]["amount"]);
 } else if (arrayOfObjs[index]["type"] === 'cash advance') {
   obj["cash advance"] += parseFloat(arrayOfObjs[index]["amount"]);
 }

var charge = $('<div>').addClass('testOutput').text((arrayOfObjs[index]["type"]));
var source = $('<div>').addClass('testOutput').text((arrayOfObjs[index]["source"]));
var amount =$('<div>').addClass('testOutput').text(parseFloat(arrayOfObjs[index]["amount"]));
charge.appendTo('aside');
source.appendTo('aside');
amount.appendTo('aside');
}
  return obj;
}
