var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function destructivelyAddElementTobeginningOfArray(array, element)  {
  array = [];
  array.unshift(element);
  return array;
}