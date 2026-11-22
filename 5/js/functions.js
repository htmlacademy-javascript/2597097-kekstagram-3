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

// 5.16 Функции возвращаются
const checkMeetingAndWorkday = (startWorkingday, endWorkingday, startMeeting, timeMeeting) => {
  const timeToMinutes = (param) => {
    const [hours, minutes] = param.split(':');
    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  };
  return (
    timeToMinutes(startMeeting) >= timeToMinutes(startWorkingday) && //!!!!!! Так можно? или надо было вызов функций сначала зафиксировать в виде переменных, а уже с переменными производить сравнение??
    timeToMinutes(startMeeting) + timeMeeting <= timeToMinutes(endWorkingday)
  );
};

window.console.log(checkMeetingAndWorkday('08:00', '17:30', '14:00', 90)); //true
window.console.log(checkMeetingAndWorkday('8:0', '10:0', '8:0', 120)); //true
window.console.log(checkMeetingAndWorkday('08:00', '14:30', '14:00', 90)); //false
window.console.log(checkMeetingAndWorkday('14:00', '17:30', '08:0', 90)); //false
window.console.log(checkMeetingAndWorkday('8:00', '17:30', '08:00', 900)); //false
