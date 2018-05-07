var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [...element];
  array.push(...array,element);
  return array;
}
