const binarySearch = (arr, findNum, fromTo = [0, arr.length]) => {
  const length = fromTo[1] - fromTo[0];
  const middle = fromTo[0] + ~~(length / 2);
  const targetValue = arr[middle];
  if (targetValue === findNum) {
    return middle;
  } else {
    if (length === 1) {
      return -1;
    }
    let _fromTo;
    if (findNum < targetValue) {
      _fromTo = [fromTo[0], middle];
      return binarySearch(arr, findNum, _fromTo);
    } else {
      _fromTo = [middle, fromTo[1]];
      return binarySearch(arr, findNum, _fromTo);
    }

  }
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 17, 18];
tests = [1, 5, 6, 11, 12, 17, 18];

tests.forEach(test => {
  console.log(`${test}: ${binarySearch(arr, test)}`);
});
