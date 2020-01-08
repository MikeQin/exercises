
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

const arr = [1, 2, 3, 4, 5];
console.log(chunk(arr, 3));
