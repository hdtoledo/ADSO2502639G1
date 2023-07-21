const galery = document.getElementById('galery')

let arrObjects = []

//? Function crear Array de Objetos

const arrObjetos = (arr, data) => {
    return (
        arr.push(
            {
                image: data.sprites.front_shiny,
                name: data.name
            }
        )
    )
}

async function getMethod(){
    for (let i = 1; i < 70; i++) {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((e) => e.json())

        arrObjetos(arrObjects, data)

        image_galery = arrObjects.map(e => {
            return (`
                <div class='image'>
                    <p class='name_poke'>${e.name}</p>
                    <img class='img_poke' src='${e.image}' />
                </div>
            `)
        })

        galery.innerHTML = image_galery.join('')
        
    }
    // console.log(arrObjects)
}

getMethod()