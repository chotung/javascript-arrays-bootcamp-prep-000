var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array.unshift(element);
  return array;
}