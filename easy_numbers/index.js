const log = console.log;

const isEasyNumber = num => {
  if (num <= 3) {
    return true
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
  }
  return true;
};

for (let i = 0; i <= 100; i++) {
  if (isEasyNumber(i)) {
    log(i)
  }
}
