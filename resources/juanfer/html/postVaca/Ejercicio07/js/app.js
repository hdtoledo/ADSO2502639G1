const testimonials = [
    {
        name: 'María G.',
        testimanial: '¡Increíble trabajo! Gracias al equipo de diseño gráfico, mi marca ahora se destaca con un logotipo impresionante y profesional. ¡Altamente recomendado!'
    },
    {
        name: 'Carlos S.',
        testimanial: 'Estoy realmente impresionado con la creatividad y atención al detalle que demostraron en el diseño de mis tarjetas de visita. ¡Definitivamente volveré por más!'
    },
    {
        name: 'Laura M.',
        testimanial: 'Nuestra página web necesitaba una renovación urgente, y el equipo de diseño gráfico lo hizo posible. Ahora tenemos un sitio web moderno y atractivo. ¡Estamos encantados!'
    },
    {
        name: 'Pedro R.',
        testimanial: 'Desde el primer boceto hasta el producto final, el proceso fue fluido y profesional. Gracias por la paciencia y por captar exactamente lo que quería para mi folleto publicitario.'
    },
    {
        name: 'Ana L.',
        testimanial: 'Quería destacar en las redes sociales, y el equipo de diseño gráfico nos proporcionó contenido visual excepcional que ha generado un gran impacto en nuestra audiencia. ¡Los resultados son asombrosos!'
    },
    {
        name: 'Martín C.',
        testimanial: 'Nuestro equipo necesitaba una identidad visual coherente para nuestras presentaciones y materiales impresos. Gracias a este servicio de diseño, ahora proyectamos una imagen sólida y profesional.'
    },
    {
        name: 'Sofía D.',
        testimanial: 'Recomendaría a este equipo de diseño en un abrir y cerrar de ojos. Me ayudaron a crear una imagen de marca coherente y única que realmente representa quiénes somos. ¡Estamos realmente satisfechos!'
    },
]

//? Variables HTML
const testimonialsHTML = document.getElementById('testimonials')

//? Variables de entorno
let x = 0
// TODO Render del array de objetos
// let testimoniosHTML = testimonials.map(testimonio => `
//     <div class='container__testimonials'>
//         <h2 class='name__testimonial'>${testimonio.name}</h2>
//         <p class='testimonial'>${testimonio.testimanial}</p>
//     </div>
// `).join('')
// testimonialsHTML.innerHTML = testimoniosHTML

const getMethod = () => {
    let intervalInner = setInterval(() => {
        x > 6 ? x = 0 : x++
        let testimonialHTML = `
        <div class='container__testimonials'>
            <h2 class='name__testimonial'>${testimonials[x].name}</h2>
            <p class='testimonial'>${testimonials[x].testimanial}</p>
        </div>
        `
        testimonialsHTML.innerHTML = testimonialHTML
    }, 7000)
}

testimonialsHTML.innerHTML = `
<div class='container__testimonials'>
    <h2 class='name__testimonial'>${testimonials[x].name}</h2>
    <p class='testimonial'>${testimonials[x].testimanial}</p>
</div>
`


document.addEventListener('load', getMethod())




