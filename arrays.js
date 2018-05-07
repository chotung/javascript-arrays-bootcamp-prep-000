var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)  {
  return [...element, array];
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array.unshift(element);
  return array;
}