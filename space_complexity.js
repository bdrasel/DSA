function sum ( arr) {
    let total = 0;
    for (let i =0; i < arr.length; i++) {
        total += arr[i];
    }   
    return total;
}

console.log(sum([20,50,63,96,100,50,83]));


// function double (arr) {
//     let  newArr = [];
//     for (let i =0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
//     return newArr;
// }
// console.log(double([2,5,5,8,10,60]));