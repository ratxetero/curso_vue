const persona = {
    nombre: 'Alejandro',
    apellido: 'Agudelo',
    apellido2: 'Ochoa',
    direccion:{
        calle: '1234',
        zip: '23213',
        lat: '12.1564',
        lng: '89.3432'
    }


}

const persona2 = {...persona};
persona2.nombre = 'Peter',

console.log(persona)
console.log(persona2)