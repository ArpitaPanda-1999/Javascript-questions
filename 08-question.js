console.log([1, 10, 20, 3].sort());
//answer : [1, 10, 20, 3]  (because sort converts the number UTF16 and then apply comparision operate)

//we can fix this 
console.log([1, 10, 20, 3].sort((a,b) => a-b));
//answer: [1, 3, 10, 20]
