const array1 = [1,2,3,4]

console.log(array1 [0])
array1.push(5)


const array2 = [...array1] //los puntos hacen nuevo array aparte del array 1
array2.push(6)




//Array 3 es un array nuevo con todos los valores de array2 multiplicados por 2

const array3 = array2.map (function ( n ) {
    return n*2
})

console.log(array1)
console.log(array2)