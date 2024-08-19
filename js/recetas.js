document.addEventListener("DOMContentLoaded", () => {
  const buscarButton = document.getElementById("buscar-recetas");

  buscarButton.addEventListener("click", () => {
    const categoria = document.getElementById("categoria").value;
    const dificultad = document.getElementById("dificultad").value;
    const duracion = document.getElementById("duracion").value;
    const busqueda = document.getElementById("busqueda").value;

    // Aquí puedes agregar la lógica para filtrar recetas según los valores seleccionados
    console.log("Categoría:", categoria);
    console.log("Dificultad:", dificultad);
    console.log("Duración:", duracion);
    console.log("Búsqueda:", busqueda);

    // Lógica adicional para mostrar los resultados filtrados
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const puntos = document.querySelectorAll(".punto");
  let paginaActual = 0;

  // Actualizar el paginador
  const actualizarPaginador = () => {
    puntos.forEach((punto, index) => {
      if (index === paginaActual) {
        punto.classList.add("active");
      } else {
        punto.classList.remove("active");
      }
    });
  };

  // Evento para las flechas
  document.getElementById("prev").addEventListener("click", () => {
    if (paginaActual > 0) {
      paginaActual--;
      actualizarPaginador();
    }
  });

  document.getElementById("next").addEventListener("click", () => {
    if (paginaActual < puntos.length - 1) {
      paginaActual++;
      actualizarPaginador();
    }
  });

  // Evento para los puntos
  puntos.forEach((punto, index) => {
    punto.addEventListener("click", () => {
      paginaActual = index;
      actualizarPaginador();
    });
  });

  // Inicializar el paginador
  actualizarPaginador();
});

//toggle filtros

document.addEventListener("DOMContentLoaded", () => {
  const filtroToggle = document.getElementById("filtro-toggle");
  const filtrosDropdown = document.getElementById("filtros-dropdown");

  // Alternar la visibilidad de los filtros al hacer clic en el botón de filtros
  filtroToggle.addEventListener("click", () => {
    filtrosDropdown.style.display =
      filtrosDropdown.style.display === "none" ||
      filtrosDropdown.style.display === ""
        ? "flex"
        : "none";
  });
});
