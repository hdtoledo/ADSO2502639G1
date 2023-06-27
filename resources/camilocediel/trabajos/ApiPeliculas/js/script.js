let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', async () => {
    if (pagina < 1000) {
        pagina += 1;
        await cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', async () => {
    if (pagina > 1) {
        pagina -= 1;
        await cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);

        if (respuesta.ok) {
            const datos = await respuesta.json();

            let peliculas = "";
            datos.results.forEach((pelicula) => {
                peliculas += `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;
        } else if (respuesta.status === 401) {
            console.log('Pusiste la clave de API incorrecta');
        } else if (respuesta.status === 404) {
            console.log('La película que buscas no existe');
        } else {
            console.log('Hubo un error y no sabemos qué pasó');
        }
    } catch (error) {
        console.log(error);
    }
}

cargarPeliculas();