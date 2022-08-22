const oddishOrEvenish = (number) => {
    let tmp = 0;
    const GetSeperetedArr = DoSeparatedNumber(number);
    GetSeperetedArr.forEach((item) => {
      tmp += +item;
    });
    if (tmp % 2 === 1) {
      return 'Odd';
    }
    return 'Even';
  };
  const DoSeparatedNumber = (number) => {
    let separatedArr = [];
    const separatedNumber = number.toString().split('');
    separatedNumber.forEach((item) => {
      separatedArr.push(item);
    });
    return separatedArr;
  };  
console.log(oddishOrEvenish(0));
console.log(oddishOrEvenish(456));
console.log(oddishOrEvenish(353));
console.log(oddishOrEvenish(3711));
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
