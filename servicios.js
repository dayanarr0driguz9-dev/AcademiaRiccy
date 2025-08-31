// Menú hamburguesa accesible + año del footer
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');

if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Cerrar al navegar
  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
    });
  });
}

// Año actual
document.getElementById('year').textContent = new Date().getFullYear();