let arr = [7, 3, 6, 4, 3, 2, 1];
bubbleSort = ([...arr]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minAddr = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minAddr]) {
        minAddr = j;
      }
    }
    const cash = arr[i];
    arr[i] = arr[minAddr];
    arr[minAddr] = cash;
  }
  return arr;
};

console.log('was: ', arr);
console.log('now: ', bubbleSort(arr));