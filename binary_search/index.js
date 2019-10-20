const binarySearch = (arr, findNum) => {
  const middle = ~~(arr.length / 2);
  const target = arr[middle];
  if (target === findNum) {
    return target;
  } else {
    if (arr.length === 1) {
      return false;
    }
    if (findNum < target) {
      return binarySearch(arr.slice(0, middle), findNum);
    } else {
      return binarySearch(arr.slice(middle), findNum);
    }
  }
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 17, 18];

console.log(binarySearch(arr, 17));