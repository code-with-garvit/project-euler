function sumAmicableNum(n) {
    const fsum = (n) => {
      let sum = 1;
      for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
        if (Math.floor(n % i) == 0)
          sum += i + Math.floor(n / i);
      return sum;
    };
    let d = [];
    let amicableSum = 0;
    for (let i = 2; i < n; i++) {
      d[i] = fsum(i)
    };
    for (let i = 2; i < n; i++) {
      let dsum = d[i];
      if (d[dsum] == i && i != dsum) {
        amicableSum += i + dsum;
      }
    }
    return amicableSum / 2;
};
  
console.log(sumAmicableNum(10000));
  