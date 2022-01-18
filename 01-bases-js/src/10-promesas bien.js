import {getHeroById} from './08-imp-exp'


const getHeroByIdAsync  = (id) =>{

    return new Promise((resolve, reject)=>{

        setTimeout(() => {


            const hero = getHeroById( id )

            if (hero){
            resolve( hero )

        }else{
            reject ('el heroe no existe')
        }
        },1000);
    });

}

getHeroByIdAsync(3).then(hero => console.log(`El heroe es: ${hero.name}`))
.catch (console.log)