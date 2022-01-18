
<template>
    <h2>{{customTitle}} {{start}}</h2>
    <!-- La etiqueta sup crea un exponente-->
    <p> {{counter}} <sup>2</sup> = {{squareCounter}} </p>

    <div>
        <!-- v-on:click y @click hace lo mismo -->
        <button @click="increaseCounter">+1</button>
        <button v-on:click="decreaseCounter">-1</button>
    </div>
</template>

<script>
export default {
    props: {
        title:String, 
        start:{
            type:Number,
            default:100,
            validator(value){
                return value >= 0
            }
          //  required:true
        }   
    },
    //name: 'Componente'

    data(){
        return{
            counter: this.start

        }
    },

    methods:{
        getSquareValue(){
            
            return this.counter * this.counter
        },

        increaseCounter(){
          this.counter++
        },
        
        decreaseCounter(){
            this.counter--
            
        }
        
    },
    computed:{
        squareCounter(){
            return this.counter * this.counter
        },

        customTitle(){
        if (this.title !==undefined) {
            return this.title
        }else{
            return 'Counter'
        }
    }
    }
}
</script>

<style>
    button{
        background-color:#64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor:pointer;
        margin: 0 5px;
        padding:5px 15px;
        transition: 0.3s ease-in-out;

    }
    button:hover{
        backgroun-color:#5aa67b;
        transition:0.3s ease-in-out}
</style>