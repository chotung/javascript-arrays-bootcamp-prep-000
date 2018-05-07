var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)  {
  var temp  = [element,...array];
  return temp
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array.unshift(element);
  return array;
}