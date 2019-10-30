console.log('Easy_numbers');

const memo = fn => {
  const cache = {};
  return (...args) => {
    const argsString = args.toString();
    if (argsString in cache) {
      return cache[argsString];
    } else {
      let result = fn(...args);
      cache[argsString] = result;
      return result;
    }
  }
};

const withMeasureSpeed = fn => (...args) => {
  console.time('Took time');
  const result = fn(...args);
  console.timeEnd('Took time');
  return result;
};

const isNoRestAfterDivision = (num1, num2) => num1 % num2 === 0;
const memoIsNoRestAfterDivision = memo(isNoRestAfterDivision);

const isEasyNumber = num => {
  if (num <= 3) {
    return true
  } else {
    for (let i = 2; i < num; i++) {
      if (memoIsNoRestAfterDivision(num, i)) return false;
    }
  }
  return true;
};

const memoIsEasyNumber = memo(isEasyNumber);

const getEasyNumbers = (numbers) => {
  const arr = [];
  for (let i = 0; i <= numbers; i++) {
    if (memoIsEasyNumber(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const getEasyNumbersWithMeasureSpeed = withMeasureSpeed(getEasyNumbers);

console.log(getEasyNumbersWithMeasureSpeed(500));
console.log(getEasyNumbersWithMeasureSpeed(500));

