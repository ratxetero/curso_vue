
        //usar api giphy

        
const api = '9XXGDZkyYlG1v5iheOmIbGLNDOviTofC'

/*

                                --api key--
https://api.giphy.com/v1/gifs/random?api_key=9XXGDZkyYlG1v5iheOmIbGLNDOviTofC


*/
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api}`)


.then(response => response.json() )
.then(({data}) =>{
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

})
