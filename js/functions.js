const checkStringLength = function (anyString, maxStringLength) {
  if (anyString.length <= maxStringLength) {
    return true
  }
  return false;
}
console.log(checkStringLength("qwertyuioprtyrtrthrthgrt", 20));

const isPalindrom = function (anyString) {
  const modifiedString = anyString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = modifiedString.length - 1; i >= 0; i--) {
    reversedString += modifiedString[i];
  }
  if (reversedString === modifiedString) {
    console.log(`Строка "${anyString}" является палиндромом.`);
    return true;
  }
  console.log(`Строка "${anyString}" не является палиндромом.`);
  return false;
}
isPalindrom('Лёша на полке клопа нашёл ');

const makeStringToNumber = function (anyString) {
  const input = anyString.toString();
  let resultNumber = '';
  for (let i = 0; i <= input.length; i++) {
    const simbol = input[i];
    const simbols = parseInt(simbol, 10);
    if (!Number.isNaN(simbol) && simbols >= 0 && simbols <= 9) {
      resultNumber += simbol;
    }
  }
  if (resultNumber === '') {
    return NaN;
  }
  return Number(resultNumber)
}
console.log(makeStringToNumber('1 кефир, 0.5 батона'));
