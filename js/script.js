const botonBusqueda = document.querySelector('.botones__busqueda');
const verIngresoBusqueda = document.querySelector('.site');

// eventos
botonBusqueda.addEventListener('click', () => {
  verIngresoBusqueda.classList.toggle('showbusqueda');
});

const botonMenu = document.querySelector('.botones__menu');
const verIngresoMenu = document.querySelector('.site');

botonMenu.addEventListener('click', () => {
  // agregar clase al selectro que tiene la clase .site
  verIngresoMenu.classList.toggle('showmenu');
});
