function powerDigitSum(expo) {
    const largeNumber = [1];
    let res = 0;
  
    for (let i = 1; i <= expo; i++) {
      let count = largeNumber.length + 1;
      let overflow = 0;
      for (let j = 0; j < count; j++) {
        let digit = largeNumber[j] || 0;
        digit = 2 * digit + overflow;
  
        if (digit > 9) {
          digit -= 10;
          overflow = 1;
        } else {
          overflow = 0;
        }
  
       largeNumber[j] = digit;
      }
    }
  
   largeNumber.forEach(function(num) {
      return res += num;
    });
  
    return res;
  }
  
  console.log(powerDigitSum(15));
  