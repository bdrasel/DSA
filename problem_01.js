let temtuare = [5, 10, 45, -5, 2, "Rasel", -3, 15];

function higerLowerTem(arr) {

     let higher = arr[0];
     let lower = arr[0];

    for (let i =0; i < arr.length; i++) {


        if(typeof(arr[i]) !== 'number') continue
        console.log(typeof(arr[i]))

    
        if (higher < arr[i]) {
            higher = arr[i]
        }

        if (lower > arr[i]) {
            lower = arr[i]
        }

    }
    return higher - lower;

}

console.log(higerLowerTem(temtuare));