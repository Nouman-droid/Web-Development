let a = "Nouman";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]); --> O/p = undefined

console.log(a.length) // property

let real_name = "Nouman" ;
let friend = "xyz" ;

// console.log("His name is " + real_name + " and his friend is " + friend);

console.log(`His name is ${real_name} and his friend is ${friend}`); // Template literals

let b = "Ahmed";
console.log(b.toUpperCase()); // function
console.log(b.toLowerCase()); // function
console.log(b.slice(1,4)); // count begins from 0, o/p is "hme" (prints from 1 to 4, 4 is not included)
console.log(b.slice(1));
console.log(b.replace("e", "a"));
console.log(a.concat(b));

