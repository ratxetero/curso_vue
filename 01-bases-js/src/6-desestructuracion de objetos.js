const person = {

    name: 'Tony',
    age: 45,
    codename: 'ironman',
    power: 'tiene poder'
}


//si power esta en blanco, el valor por defecto sera no tiene poder
const {name, age, codename, power = ' no tiene poder'} = person

console.log(name)
console.log(age)
console.log(codename)
console.log(power)


const createHero = ({name,age,codename,power} = person) => 

  ({  
  
        id:324345435,
        name:name,
        age:age,
        codename:codename,
        power: power

})




console.log (createHero(person))