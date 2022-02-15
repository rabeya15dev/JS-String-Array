function addNumbers(num1, num2) {

  // console.log(arguments[2]);
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }
  // const result = num1 + num2;
  return result;
}
const sum = addNumbers(23, 7, 12, 8);
// console.log(sum);


function getFullNAme(firstNAme, lastNAme) {
  let fullName = '';
  for (const part of arguments) {
    fullName = fullName + part + ' ';
  }
  return fullName;
}

const name = getFullNAme('yh', 'yfs', 'rabeya', 'bosri');
console.log(name);
