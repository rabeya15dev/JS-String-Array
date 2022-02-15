const numbers = [1, 9, 2, 5, 7, 9, 4, 6];
const sortedNumber = numbers.sort();
console.log(sortedNumber);

const friends = ['kabli', 'messi', 'shakib', 'roktim', 'upoma', 'alayna'];
const sortedFriends = friends.sort();
console.log(sortedFriends);
const reversedFriends = friends.reverse();
console.log(reversedFriends);


const sortedReverseFriends = friends.sort().reverse();
console.log(sortedReverseFriends);

// number sorting fun

const bigNumbers = [34, 55, 67, 34, 11, 99, 435, 00, 55];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);