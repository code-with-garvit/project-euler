function numberLetterCounts(limit) {
    const dictionary = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      1000: 'onethousand'
    };
  
    let numString = '';
  
    function convertToString(num) {
      // check dictionary for number
      if (dictionary[num]) {
        return dictionary[num];
      } else {
        const hundreds = Math.floor(num / 100);
        const tens =  Math.floor((num / 10) % 10) * 10;
        const remainder = num % 10;
  
        let tempStr = '';
  
        if (hundreds === 0) {
          tempStr += dictionary[tens] + dictionary[remainder];
        } else {
          tempStr += dictionary[hundreds] + 'hundred';
  
          if (tens !== 0 || remainder !== 0) {
            tempStr += 'and';
          }
  
          if (tens < 20) {
            const lessThanTwenty = tens + remainder;
            tempStr += dictionary[lessThanTwenty];
          } else {
            tempStr += dictionary[tens] + dictionary[remainder];
          }
        }
        return tempStr;
      }
    }
  
    for (let i = 1; i <= limit; i++) {
      numString += convertToString(i);
    }
    return numString.length;
  }
  
  console.log(numberLetterCounts(5));
  