module.exports = function toReadable (number) {
  const numbers = [
    [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ],
    [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ],
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];

  if (number == 0) {
    return 'zero';
  }

  number = number.toString().split('').reverse();
  let digit = number[0];
  let dozen = number[1];
  let hundred = number[2];
  let result = '';

  hundred ? (result += `${numbers[0][hundred]} hundred`) : (result += '');
  (dozen > 1) ? (result += ` ${numbers[dozen]}`) :
  (dozen == 1) ? (result += ` ${numbers[1][digit]}`) : (result += '');
  (digit && dozen != 1) ? (result += ` ${numbers[0][digit]}`) : (result += '');

  result = result.trim();
  
  return result;
}
