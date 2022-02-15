

const anthem = "Amra sonar Bangla Ami Tomai Valobasi";
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr

const anotherPart = anthem.substr(4, 8);
// console.log(anotherPart);


// substring

const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'amader';
const second = 'city';

// const fullString = first + second;
const fullString = first.concat(second).concat('ABc').concat("Shakib");
// console.log(fullString);

// join

const words2 = ['agff', 'bdf', 'cdfds', 'edf', 'fdf'];
// const allJoined = words2.join(' ');
const allJoined = words2.join(', ');
console.log(allJoined);
