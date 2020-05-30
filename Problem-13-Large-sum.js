function largeSum(arr) {
    let res = 0;
  
    arr.forEach(function(num) {
      res += parseInt(num, 10);
    });
  
    res = `${res}`;
  
    res = res.substr(0, 1) + res.substr(2);
  
    let firstTen = res.slice(0, 10);
    return parseInt(firstTen, 10);
  }
  
  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
  
console.log(largeSum(testNums));
  