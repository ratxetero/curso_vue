
//Diferentes maneras de escribir lo mismo
function saludar(xyz) {
    
    return `Hola ${xyz}`
}


const saludar2 = function (xyz){
    return `Hola ${xyz}`
}

const saludar3 = (xyz) => `Hola ${xyz}`
const saludar4 = (nombre = 'Peter') => `Hola ${nombre}`



//



const getUser = () =>{
    return{
        uid: 'ABC123',
        username: 'Alejandro00'
    }
}

//


//

const heroes = [{
    id: 1,
    name: 'Batman'
},

{
    id: 2,
    name: 'Superman'
}]

const existe = heroes.some( ( heroe) => heroe.id === 2);
console.log (existe)

const nombre = 'Alejandro'

console.log(saludar(nombre))
console.log(saludar2(nombre))
console.log(saludar3(nombre))
console.log(saludar4()) 

 

console.log(getUser())

