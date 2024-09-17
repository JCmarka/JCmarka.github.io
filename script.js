let lastScrollTop = 0;
const header = document.getElementById('header');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

console.log(header, menuBtn, menu);

window.addEventListener('scroll', function() {
  console.log('Scroll detectado');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log('scrollTop:', scrollTop);
  console.log('lastScrollTop:', lastScrollTop);
  
  if (scrollTop > lastScrollTop) {
    console.log('Desplazando hacia abajo');
    header.style.transform = 'translateY(-100%)';
  } else {
    console.log('Desplazando hacia arriba');
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

menuBtn.addEventListener('click', () => {
  console.log('Menu btn clickeado');
  menu.classList.toggle('show');
});

// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu-container a');

// Agrega evento de clic a cada enlace
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Evita el comportamiento por defecto del enlace
    e.preventDefault();
    
    // Obtiene el atributo href del enlace
    const href = link.getAttribute('href');
    
    // Verifica si el enlace es una ancla (#)
    if (href.startsWith('#')) {
      // Obtiene el elemento con el id correspondiente
      const section = document.querySelector(href);
      
      // Lleva al usuario a la sección correspondiente
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Oculta el menú después de clickear un enlace
    document.querySelector('.menu').classList.remove('show');
  });
});

// Añade evento para mostrar/ocultar el modal
const abrirTerminos = document.getElementById('abrir-terminos');
const modalTerminos = document.getElementById('modal-terminos');
const cerrarTerminos = document.getElementById('cerrar-terminos');

abrirTerminos.addEventListener('click', () => {
  modalTerminos.classList.add('show');
});

cerrarTerminos.addEventListener('click', () => {
  modalTerminos.classList.remove('show');
});