const list = {
  v: 1,
  next: {
    v: 2,
    next: {
      v: 3,
      next: {
        v: 4
      }
    }
  }
};

addNext = (next, v) => ({v, next});

const reverseList = (list, stack = []) => {
  stack.push(list.v);
  return list.next
    ? reverseList(list.next, stack)
    : stack.reduce((accum, v) => addNext(accum, v), {});
};

console.log(list);
console.log(reverseList(list));