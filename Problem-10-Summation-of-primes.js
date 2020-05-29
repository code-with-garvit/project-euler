function primeSummation(n) {
    let nums = []
    let sum = 0;
    const upperBound = Math.ceil(Math.sqrt(n));
    for (let i = 0; i < n; i++){
      nums.push(i);   
    }
    nums[1] = 0;
    
    for (let i = 2; i <= upperBound; i++){
      if (nums[i] != 0){ 
        for (let j = i*i; j < n; j += i){
          if (nums[j] % i === 0) {
            nums[j] = 0;
          }
        }
      }
    }
  
    for (let i = 0; i < n; i++){
      sum += nums[i];
    }
    return sum;
  }
  
console.log(primeSummation(2000000));
  