function sumFactorialDigits(n) {
    let factorial = (n) => n <= 1 ? BigInt(n) : BigInt(n) * BigInt(factorial(--n));
  
  let sumDigits = n => n.toString().split('').map(x => parseInt(x)).reduce((a,b) => a + b);
    return sumDigits(factorial(n));
  }
  
  console.log(sumFactorialDigits(100));