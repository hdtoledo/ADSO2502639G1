// Agregar evento para cerrar el menú desplegable al hacer clic fuera de él
window.addEventListener('click', function(event) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      if (!event.target.matches('.dropdown') && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      }
    }
  });