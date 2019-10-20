const create = (arr, el) => {
  let res = [];
  for(let i = arr.length; i >= 0; i--) {
    res.push([...arr.slice(0, i), el, ...arr.slice(i)]);
  }
  return res;
};

function numbersPermutation(n) {
  arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  let current = [];
  current.push([arr[0]]);

  for(let i = 1; i < arr.length; i++) {
    const el = arr[i];
    const prev = current;
    current = [];

    for (let item of prev) {
      current.push(...create(item, el));
    }
  }
  return current;
}

console.log(numbersPermutation(2));
console.log(numbersPermutation(3));
console.log(numbersPermutation(4));