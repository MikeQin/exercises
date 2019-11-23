void main() {
  var arr = [4, 5, 4, 6, 3, 4, 5, 2, 23, 1, 4, 4, 4];
  find(arr);

  arr = [4, 2];
  find(arr);

  arr = [2];
  find(arr);
}

void find(List arr) {
  // print original
  print('[*] original array: $arr');

  // validate
  if (arr.length < 2) {
    print('Invalid array');
    return;
  }

  // unique
  List unique = arr.toSet().toList();

  // sort
  unique.sort();

  // print sorted
  print('[*] unique and sorted: $unique');

  // print results
  print('[*] secondSmallest: ${unique[1]}');
  print('[*] secondLargest: ${unique[unique.length - 2]}');
}
