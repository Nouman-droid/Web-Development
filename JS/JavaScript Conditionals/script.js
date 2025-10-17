console.log("Hello I am conditional tutorial")

let age = 0;
//let grace = 2;

//age += grace  // increment asssignment operator
//console.log(age)
//console.log(age - grace)
//console.log(age / grace)
//console.log(age * grace)
//console.log(age ** grace) // exponentitaion
//console.log(age % grace) // modulus


if(age==18){
    console.log("You can drive");
}

else if(age == 0){
    console.log("Are you kidding?");
}

else{
console.log("You cannot drive");
}

// Ternary Operator 

a = 6;
b = 4;

let c = a > b ? (a-b) : (b-a);

/* This translates to:
if(a>b){
    let c = a - b;
}
else{
    let c = b - a
}

*/
