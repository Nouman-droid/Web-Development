let arr = [1, 13, 5, 7, 11];

// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e, index, array)=>{
    return e**2;
})

console.log(newArr);

const greaterThanEight = (e)=>{
    if (e>8){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanEight));

let arr2 = [1,2,3,4,5,6];

const red = (a,b)=>{
    return a*b;
}

console.log(arr2.reduce(red));