// ScrollReveal para entrada animada
ScrollReveal().reveal('.texto', {
  delay: 300,
  origin: 'left',
  distance: '60px',
  duration: 800
});
ScrollReveal().reveal('.imagen', {
  delay: 500,
  origin: 'right',
  distance: '60px',
  duration: 800
});
ScrollReveal().reveal('.servicio', {
  interval: 200,
  origin: 'bottom',
  distance: '40px'
});

// Botón activo
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});

// Carrusel de testimonios
let index = 0;
const testimonios = document.querySelectorAll('.testimonio');

function mostrarTestimonio() {
  testimonios.forEach(t => t.classList.remove('active'));
  testimonios[index].classList.add('active');
  index = (index + 1) % testimonios.length;
}

setInterval(mostrarTestimonio, 4000); // cada 4 segundos
mostrarTestimonio(); // mostrar el primero