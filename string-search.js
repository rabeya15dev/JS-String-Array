const products = [
  'Dell hard core i34 200Gb laptop',
  'Dell iphone 1TB camera flashlight Phone',
  'yellow laptop with black camera',
  '324f Lenovo commercial yoga Laptop',
  'LG laptop',
  "Asus laptop",
  "OPPP Phone",
  'camera 56Ib Dell'
];
const searching = 'dell';

// indexOf

const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    // output.push(product);
  }
}

// console.log(output);
// includes()


for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    // output.push(product);
  }
}

// console.log(output);

// starts with

for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}

console.log(output); 