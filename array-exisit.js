function megaFriends(friends) {
  if (Array.isArray(friends) == false) {
    return 'please provide an array';
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.lenght > mega.lenght) {
      mega = friend;
    }
  }
  return mega;
}

const friends = ['messi', 'shakib', 'upo', 'rabeya', 'alayna'];
const myBigBuddy = megaFriends(friends);
console.log(myBigBuddy);


if (friends.indexOf('mbrf') != -1) {
  console.log('messi love');
}
else {
  console.log('does not exists');
}
// includes
if (friends.includes('shakib')) {
  console.log('shakib love');
}

// concat
const first = [1, 34, 5];
const second = [34, 35, 3];
const combined = first.concat(second);
console.log(combined);
