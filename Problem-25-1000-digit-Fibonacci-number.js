const digitFibonacci = (n) => {
    const digits = (number) => {
      return `${number}`.length;
    };
    let f1 = 1;
    let f2 = 1;
    let i = 3;
    while (true) {
      let fn = f1 + f2;
      if (digits(fn) === n) return i;
      [f1, f2] = [f2, fn];
      i++;
    }
  };
  
console.log(digitFibonacci(20));
  