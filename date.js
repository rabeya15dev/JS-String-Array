const myFavDate = new Date('1971-12-16');
// console.log(myFavDate);
const anotherDate = new Date(1971, 12, 16, 11, 40, 30, 20);
// console.log(anotherDate);

if (myFavDate.getTime() < anotherDate.getTime()) {
  // console.log('yeardg');
}

const task = "practice Makes a person perfect";
const index = task.toLowerCase().indexOf("M");
// console.log(index);

const str1 = 'Bangladesh is abrautiful country.';
// console.log(str1.endsWith("country"));

const srt = 'I love coding more then eating';
const ret = srt.slice(2, 6);
// console.log(ret);
const names = ["rafiq", "jabbar", "bakkar", "habib", "dalim"];
// console.log(names);
const remove = names.reverse();
// console.log(remove);




const array = ["121", "12", "1", "112", "111"];
console.log(array.sort());