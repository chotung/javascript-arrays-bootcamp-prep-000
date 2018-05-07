var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)  {
  var temp  = [element,...array];
  return temp
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  return array.unshift(element);
}
function addElementToEndOfArray(array, element)  {
  var temp = [...array, element];
  return temp;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index)  {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array,element){
  return array.shift(element);
}
