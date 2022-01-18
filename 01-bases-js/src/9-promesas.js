
console.log('inicio')

new Promise((resolve, reject) => {


    console.log ('Cuerpo de la promesa')
    reject('promesa resuelta ')


})
.then(console.log)
.catch (console.log)

console.log('fin')