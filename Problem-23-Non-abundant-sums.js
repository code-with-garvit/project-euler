function abundantCheck(n) {
    let sum = 1;
  
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if(n % i === 0) {
        sum += i + (i !== Math.sqrt(n) && n / i);
      }
    }
    return sum > n;
  }
  
  function sumOfNonAbundantNumbers(n) {
    let sum = 0, abundantList = [], memo = {};
    
  
    const checkSum = (n, s, m) => {
      for (let i = 0; i < s.length; i += 1) {
        if ((n - s[i]) in m) return true;
      }
    };
  
    for (let i = 1; i <= n; i++) {
      if (abundantCheck(i)) {
        abundantList.unshift(i);
        memo[i] = 1;
      }
      if (checkSum(i, abundantList, memo)) continue;
      sum += i;
    }
    return sum;
  }
  
console.log(sumOfNonAbundantNumbers(28123));
  