const numbers = [34, 6, 43, 45, 782, 54, 3];
// slice
const numberSlices = numbers.slice(4, 7);
console.log(numberSlices);
console.log(numbers);
// splice to remove an array


const numberSpliced = numbers.splice(2, 3);
console.log(numberSpliced);
console.log(numbers);

// 
const numberSpliced2 = numbers.splice(4, 1, 99, 111);
console.log(numberSpliced2);
console.log(numbers);