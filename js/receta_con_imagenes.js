const miniaturas = document.querySelectorAll('.receta-miniaturas img');
const imagenPrincipal = document.querySelector('.receta-imagen-principal img');

miniaturas.forEach((miniatura) => {
  miniatura.addEventListener('click', () => {
    imagenPrincipal.src = miniatura.src;
  });
});
