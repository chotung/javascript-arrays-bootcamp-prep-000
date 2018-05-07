var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)  {
  return [array,...element];
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array.unshift(element);
  return array;
}