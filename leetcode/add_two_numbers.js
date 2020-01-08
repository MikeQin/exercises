/**
leetcode: https://leetcode.com/problems/add-two-numbers/#

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Input: [2,4,3] + [5,6,4]
Output: 7 -> 0 -> 8
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
class ListNode {
  constructor(val, node = null) {
    this.val = val;
    if (node !== null) {
      this.next = node;
    }
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const sum = getNumber(l1) + getNumber(l2);
  const node = createListNode(sum, true);
  return node;
}

function createListNode(number, reverse = false) {
  let strArr = number.toString().split('');
  if (reverse) {
    strArr = strArr.reverse();
  }

  let node;
  let headNode;
  for (let s of strArr) {
    if (node) { // node not null
      node.next = new ListNode(Number(s));
      node = node.next;
    }
    else { // node is null
      node = new ListNode(Number(s));
      headNode = node;
    }
  }

  return headNode;
}

function getNumber(listNode) {
  let node = listNode;
  const strArr = [];

  while (node) {
    strArr.unshift(node.val.toString());
    node = node.next;
  }

  return Number(strArr.join(''));
}

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// 1000000000000000000000000000001
//const l1 = createListNode(1000000000000000000000000000001);
const l1 = createListNode(243);
const l2 = createListNode(564);

const result = addTwoNumbers(l1, l2);
console.log('l1:', l1, 'l2:', l2);
console.log('output:', result);
