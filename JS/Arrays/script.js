let arr = [1,2,3,4,5];

// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[4]);

console.log(arr.toString());

console.log(arr.join(" and "));

arr.pop();
arr.push("Nouman");
arr.shift();
arr.unshift("ahmed");

/*  
    shift <----> pop
    unshift <----> push
*/

delete arr[0];

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

a1.concat(a2,a3); // Returns a new array and it does not change the existing array.

a1.splice(1,3);

