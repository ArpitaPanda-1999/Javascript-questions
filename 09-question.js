let result = [1, [2, [3, [[[4, [5]]]]]]].flat(Infinity);
console.log(result);
//answer: [1, 2, 3, 4, 5]