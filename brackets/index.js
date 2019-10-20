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

const bracket3 = {
  open: '<',
  close: '>',
};

const checkIsBracket3 = genCheckIsBracket(bracket3);

const checkIsOpenBracket = letter => `${bracket1.open}${bracket2.open}${bracket3.open}`.includes(letter);
const checkIsCloseBracket = letter => `${bracket1.close}${bracket2.close}${bracket3.close}`.includes(letter);

const isBracketsOneType = (letter1, letter2) =>
  (checkIsBracket1(letter1) && checkIsBracket1(letter2)) ||
  (checkIsBracket2(letter1) && checkIsBracket2(letter2)) ||
  (checkIsBracket3(letter1) && checkIsBracket3(letter2));

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
    }
  }
  return stack.length === 0;
};

tests = [
  '((sdf))',
  '(((sdf',
  '[]()(())[sdf]',
  '[]()(())[sdf',
  '<>()<<>>[sdf',
  '<>()(())<sdf>',
];

tests.forEach(test => {
  log(`${test}: ${checkBrackets(test)}`);
});