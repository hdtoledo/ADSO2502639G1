const testimonials = [
    {
        name: 'Gildardo.',
        testimanial: 'El rol del tecnólogo de software en el sector empresarial. Explora cómo su capacidad para optimizar procesos y crear aplicaciones personalizadas ayuda a las empresas a alcanzar el éxito.'
    },
    {
        name: 'Camacho',
        testimanial: 'El mundo del diseño web está en constante evolución. En la actualidad, las tendencias incluyen diseños minimalistas, experiencias interactivas, micro-animaciones, tipografías audaces y el uso creativo de colores y degradados.'
    },
    {
        name: 'Monica',
        testimanial: 'Retos y oportunidades para los tecnólogos de software en el futuro. Analiza las tendencias tecnológicas que influirán en esta profesión y cómo pueden prepararse para enfrentar los desafíos que vendrán.'
    },
    {
        name: 'Yicela C.',
        testimanial: 'El software ha tenido un impacto significativo en todos los aspectos de nuestra vida, desde la forma en que nos comunicamos hasta cómo gestionamos negocios. Ha impulsado la innovación en industrias como la medicina, la educación, el transporte, el entretenimiento y muchos otros campos.'
    },
    {
        name: 'Andrea',
        testimanial: 'La impresión 3D ha revolucionado el proceso de fabricación, permitiendo la creación de prototipos rápidos y la personalización de productos. Descubre cómo esta tecnología está cambiando la industria y estimulando la innovación.'
    },
    {
        name: 'Martín C.',
        testimanial: 'El despliegue de la tecnología 5G promete una conectividad más rápida y estable. Descubre cómo esta nueva generación de redes inalámbricas impactará en la vida cotidiana y habilitará avances como el Internet de las cosas y la realidad virtual.'
    },
    {
        name: 'Maritza L.',
        testimanial: 'El rol del tecnólogo de software en el sector empresarial. Explora cómo su capacidad para optimizar procesos y crear aplicaciones personalizadas ayuda a las empresas a alcanzar el éxito.'
    },
  ]
  
  //? Variables HTML
  const testimonialsHTML = document.getElementById('testimonials')
  
  //? Variables de entorno
  let x = 0
  
  
  const getMethod = () => {
    setInterval(() => {
        x >= 6 ? x = 0 : x++
        let testimonialHTML = `
        <div class='container__testimonials'>
            <h2 class='name__testimonial'>${testimonials[x].name}</h2>
            <p class='testimonial'>${testimonials[x].testimanial}</p>
        </div>
        `
        testimonialsHTML.innerHTML = testimonialHTML
        setTimeout(() => {
            testimonialsHTML.firstElementChild.classList.add('hidden_animation')
        }, 8000)
    }, 10000)
  }
  
  testimonialsHTML.innerHTML = `
  <div class='container__testimonials'>
    <h2 class='name__testimonial'>${testimonials[x].name}</h2>
    <p class='testimonial'>${testimonials[x].testimanial}</p>
  </div>
  `
  const animation_initial = () => {
    setTimeout(() => {
        testimonialsHTML.firstElementChild.classList.add('hidden_animation')
    }, 8000)
  }
  
  document.addEventListener('load', getMethod())
  document.addEventListener('load', animation_initial())
  
  
  
  