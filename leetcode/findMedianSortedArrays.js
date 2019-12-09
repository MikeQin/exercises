/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

  const arr = [...nums1, ...nums2];
  arr.sort((a, b) => a - b);
  let median;
  const midpoint = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    median = (arr[midpoint - 1] + arr[midpoint]) / 2.0;
  }
  else {
    median = arr[midpoint];
  }

  return median;
};