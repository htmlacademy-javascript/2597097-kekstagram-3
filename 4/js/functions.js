const checkStringLength = function (anyString, maxStringLength) {
  return anyString.length <= maxStringLength;
};
checkStringLength('qwertyuioprtyrtrthrthgrt', 20);

const isPalindrome = function (anyString) {
  const modifiedString = anyString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = modifiedString.length - 1; i >= 0; i--) {
    reversedString += modifiedString[i];
  }
  return reversedString === modifiedString;
};
isPalindrome('Лёша на полке клопа нашёл ');

const makeStringToNumber = function (anyString) {
  const input = anyString.toString();
  let resultNumber = '';
  for (let i = 0; i < input.length; i++) {
    const symbol = parseInt(input[i], 10);
    if (!Number.isNaN(symbol)) {
      resultNumber += symbol;
    }
  }
  return parseInt(resultNumber, 10);
};
makeStringToNumber('1 кефир, 0.5 батона');
