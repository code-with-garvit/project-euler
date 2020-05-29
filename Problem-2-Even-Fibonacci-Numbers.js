function fiboEvenSum(n) {
    let a = 1,b = 2,sum = b;
  
    while (b <= n) {
      let temp = a;
      a = b,
      b += temp
  
      if (b % 2 === 0) sum += b;
    }
  
    return sum;
  }
  
  console.log(fiboEvenSum(10));
  