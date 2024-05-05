let output = document.getElementById("output");
let output2 = document.getElementById("output2");

// for loop
// initializer , condition(to end the loop),
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// DO while loops
let j = 0;

do {
  console.log(j);
  j++;
} while (j <= 5);

// FOR IN (SPECIFIC TO OBJECT)--- object iterables

const syam = {
  name: "Shyam",
  add: "Sydney",
  age: "25",
};
for (let key in syam) {
  console.log(syam[key]);
}

// FOR IF (SPECIFIC TO string and array)
// for of
let grocery_list = ["apple", "milk", "chicken"];
for (let grocery_items of grocery_list) {
  console.log(grocery_items);
}

let sachin = "Hey whats up";
for (let sentence of sachin) {
  console.log(sentence);
}

// PATTERN PRATICE
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    output.innerHTML = output.innerHTML + "*";
  }
  output.innerHTML = output.innerHTML + "<br/>";
}

for (let i = 4; i >= 0; i--) {
  for (let y = 1; y <= i; y++) {
    output.innerHTML = output.innerHTML + "*";
  }
  output.innerHTML = output.innerHTML + "<br/>";
}
