const app = Vue.createApp({
    // DENTRO DE DOS LLAVES PUEDO PONER CUALQUIER EXPRESION DE JS
//    template: `
//     <h1> Hola mundo </h1>
//     <p> {{ 1 + 1}} </p>
//     `

data(){
    return{
        quote: "Im Batman",
        author: "Bruce Wayne"
    }
},

    methods:{
        changeQuote(){
            console.log('Hhhhhhhhhhh')
            this.author = 'Alejandro Agudelo'
            
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }


})

// Para que la app se inicie en el div que se llama #myapp
//si fuese una clase seria .myApp
app.mount('#myApp')