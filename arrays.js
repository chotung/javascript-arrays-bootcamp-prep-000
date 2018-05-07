var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array = [];
  array.unshift(element);
  return array;
}