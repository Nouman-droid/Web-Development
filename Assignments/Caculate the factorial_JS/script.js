let num = prompt("Enter a number: ");
let fctrl = [];

for(i = 1; i <= num; i++){
    fctrl.push(i);
}

prompt(fctrl);

let factorial = fctrl.reduce((acc,current)=> acc * current, 1);

prompt(`Factorial of ${num} is ${factorial}`);