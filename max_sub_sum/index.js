const maxSubSum = arr => {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      const el = arr[j];
      currentSum += el;
      if (currentSum < 0) {
        currentSum = 0;
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
};

const arr = [-4, 2, 0, 5, 0, 3, -9, 10, 11, 4];
console.log('arr: ', arr);
console.log('maxSubSum: ', maxSubSum(arr));