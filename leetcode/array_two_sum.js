/**
 * Find if there is a sum of two numbers in an array.
 * If found, return the indexes of the two numbers in the array.
 * If not found, return an empty array
 * 
 * if array = [1, -2, 2, 2, -2, 4, 5], sum = 6
 * return [ 2, 5 ]
 * 
 * @param [] arr 
 * @param number sum
 * 
 * @return an array that contains the two numbers' indexes
 * if no match, return an empty array
 */

function arrayTwoSum(arr, sum) {

  const map = {};
  let index = 0;
  for (let n of arr) {
    let number = sum - n;
    if (map[number]) {
      return [map[number], index];
    }
    else {
      if (map[n]) {
        // do nothing, it's already there
      }
      else {
        map[n] = index;
      }
    }
    index++;
  }

  return [];
}

const array = [1, -2, 2, 2, -2, 4, 5];
const sum = -4;

const result = arrayTwoSum(array, sum);
console.log(result);
