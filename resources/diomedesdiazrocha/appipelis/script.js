
let pagina =1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
        pagina +=1;
        cargarpeliculas();
    }
});

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1){
        pagina -=1;
        cargarpeliculas();
    }
});

const cargarpeliculas = async() => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}');

        console.long(respuesta);

        //si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = '';
            datos.results.forEach(pelicula => {
        peliculas += `
        <div class="pelicula">
            <img class="poster" src="https://image.tmbd.org/t/p/w500/${peliculas.poster_path}">
            <h3 class="titulo">${pelicula.title}</h3>
        </div>

       `;
        });

        document.getElementById('contenedor').innerHTML = peliculas;

    
         } else if (respuesta.status === 401){
           console.log('pusiste la llave mal');
         } else if(respuesta.status===404){
           console.log('la pelicula que buscas no existe');
         } else {
           console.log('hubo un error  y no sabemos que paso');

       }

    } catch(error){
        console.log(error);
    }
}

cargarpeliculas();
            
                
       


    



          
