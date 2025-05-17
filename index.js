function sumAll (n) {
    let total = 0;

    for( let i = 0; i <= n; i++) {
        total += i;
    }
    return total;

}


function sumAll2 (n) {
    return n * (n+1) / 2;
}


let funcall = sumAll2(10);

console.log(funcall);