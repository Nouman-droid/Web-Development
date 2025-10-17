/* Create a Faulty calculator using JavaScript

This faulty calculator does the following:
--> It takes 2 numbers as input from the user
--> It performs wrong operations as follows:
1. + ---> -
2. * ---> +
3. - ---> /
4. / ---> **

It performs wrong operations 10% of the time.

*/

let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter Operation");
let b = prompt("Enter second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (random > 0.1){
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else{
    // Perform wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}