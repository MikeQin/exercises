
// Find second smallest and second largest numbers
// from an array
function find(arr) {
  console.log('input:', arr);

  // validate
  if (arr.length < 2) {
    console.log("Invalid array");
  }

  // unique
  const unique = [...new Set(arr)];
  // sort
  unique.sort((a, b) => { return a - b });
  console.log('unique & sorted:', unique);

  // find secondSmallest and secondLargest
  const secondSmallest = unique[1];
  const secondLargest = unique[unique.length - 2];

  // Print
  console.log('secondSmallest', secondSmallest);
  console.log('secondLargest', secondLargest);
}

const items = [4, 5, 4, 6, 3, 4, 5, 2, 23, 1, 4, 4, 4];

find(items);