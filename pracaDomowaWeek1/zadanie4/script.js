function sum(arr){
    
    suma = 0;

    for(var i = 0; i < arr.length; i++) {

        suma += arr[i];

    }

    return suma;
}

console.log( sum([1, 10, 5, 4]) );