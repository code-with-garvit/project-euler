function longestCollatzSequence(limit) {
    let longest = 1;
    let maxLength = 1;
    let i = Math.floor(limit / 2);
    while (i < limit) {
      let len = colLen(i);
      if (len > maxLength) {
        longest = i;
        maxLength = len;
      }
      i++
    }
    return longest;
  }
  
  const knownSequence = { '1': 1 };
  
  function colLen(n) {
    if (knownSequence[n]) {
      return knownSequence[n];
    } else {
      const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
      knownSequence[n] = len;
      return len;
    }
  }
  
  console.log(longestCollatzSequence(1000000));