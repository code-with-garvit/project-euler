function countingSundays(firstYear, lastYear) {
    let s = 0;
  
    for (let i = firstYear; i <= lastYear; i++) {
      for (let month = 0; month <= 11; month++) {
        const thisDate = new Date(i, month, 1);
        if (thisDate.getDay() === 0) {
          s++;
        }
      }
    }
    return s;
  }
  
  console.log(countingSundays(1943, 1946));
  