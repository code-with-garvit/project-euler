function nameScoreCalc(word) {
    let sum = 0, alphabets = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    for (let i = 0 ; i < word.length; i++)
      sum += alphabets.indexOf(word[i].toLowerCase());
      return sum;
    }
  
  function namesScores(arr) {
    arr = [...arr].sort();
    arr.unshift('');
    let t = 0;
  
    for (let i = 1 ; i < arr.length; i++)
      t += nameScoreCalc(arr[i]) * i;
      return t;
  }
  
  const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
  const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
  
  console.log(namesScores(test1));
  