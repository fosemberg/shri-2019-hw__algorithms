const log = console.log;

const genCheckIsBracket = bracket => letter => `${bracket.open}${bracket.close}`.includes(letter);

const bracket1 = {
  open: '(',
  close: ')',
};

const checkIsBracket1 = genCheckIsBracket(bracket1);

const bracket2 = {
  open: '[',
  close: ']',
};

const checkIsBracket2 = genCheckIsBracket(bracket2);

const checkIsOpenBracket = letter => `${bracket1.open}${bracket2.open}`.includes(letter);
const checkIsCloseBracket = letter => `${bracket1.close}${bracket2.close}`.includes(letter);

const isBracketsOneType = (letter1, letter2) =>
  (checkIsBracket1(letter1) && checkIsBracket1(letter2)) ||
  (checkIsBracket2(letter1) && checkIsBracket2(letter2));

// bracket1_open = '<';
// bracket1_close = '>';
// bracket1_open = '{';
// bracket1_close = '}';

const checkIsBracket = letter =>
  checkIsOpenBracket(letter) ||
  checkIsCloseBracket(letter);

const checkBrackets = str => {
  const stack = [];
  for (const letter of str) {
    if (checkIsBracket(letter)) {
      if (checkIsOpenBracket(letter)) {
        stack.push(letter);
      } else {
        if (!isBracketsOneType(letter, stack.pop())) {
          return false;
        }
      }
      // if (stack.length === 0) {
      //   stack.push(letter);
      // } else {
      //   const bracket = stack.pop();
      // }
    }
  }
  return stack.length === 0;
};

tests = [
  '((sdf))',
  '(((sdf',
  '[]()(())[sdf]',
  '[]()(())[sdf',
];

tests.forEach(test => {
  log(`${test}: ${checkBrackets(test)}`);
});