/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const arr = [];
  let count = 0;

  for (let x of str) {
    if (isNaN(parseInt(x))) {
      if (x === ' ') {
        continue;
      }
      else if (x === '+') {
        if (count > 0) {
            return 0;
        }
        count++;
        
      }
      else if (x === '-') {
        if (count === 0) {
          arr.push(x);
          count++;
        }
        else {
          return 0;
        }
      }
      else {
        break;
      }
    }
    else {
      arr.push(x);
    }
  }

  if (arr.length > 0 && arr[arr.length - 1] === '-') {
    arr.pop();
    arr.unshift('-');
  }

  if (arr.length > 0) {
    const num = parseInt(arr.join(''));
    if (num > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    }
    else if (num < Math.pow(2, 31) * -1) {
      return Math.pow(2, 31) * -1;
    }
    else {
      if (isNaN(num)) {
        return 0;
      }
      return num;
    }
  }

  return 0;
};