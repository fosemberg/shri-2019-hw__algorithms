let arr = [7, 3, 6, 4, 3, 2, 1];
bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const cash = arr[i];
        arr[i] = arr[j];
        arr[j] = cash;
      }
    }
  }
  return arr;
};

console.log('was: ', arr)
console.log('now: ', bubbleSort(arr));