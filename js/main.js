// Script para el contador
const counters = document.querySelectorAll(".counter");
const speed = 5000; // Duración total en milisegundos

const formatNumber = (number) => {
  // Utiliza 'en-US' como locale para asegurar el uso de comas
  return number.toLocaleString("en-US");
};

const animateCounters = () => {
  counters.forEach((counter) => {
    const numberElement = counter.querySelector(".number");
    const target = +numberElement.getAttribute("data-target");
    let count = 0; // Inicializa el contador en 0

    const increment = target / (speed / 100);

    const animate = () => {
      if (count < target) {
        count = Math.ceil(count + increment);
        numberElement.innerText = formatNumber(count); // Formatea con comas
        setTimeout(animate, 100);
      } else {
        numberElement.innerText = formatNumber(target); // Formatea con comas
      }
    };

    animate();
  });
};

// Si los contadores ya son visibles al cargar la página, inicia la animación.
document.addEventListener("DOMContentLoaded", () => {
  if (counters.length > 0) {
    animateCounters();
  }

  const selectorContainer = document.querySelector(".selector-container");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  selectorContainer.addEventListener("click", (e) => {
    e.stopPropagation(); // Evitar que el clic en el contenedor cierre el menú
    dropdownMenu.classList.toggle("show");
  });

  // Cierra el dropdown al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    if (!selectorContainer.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});

//menu

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const menuItems = document.getElementById("menu-items");

  menuToggle.addEventListener("click", () => {
    menuItems.classList.add("show");
  });

  menuClose.addEventListener("click", () => {
    menuItems.classList.remove("show");
  });

  // Optional: close the menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !menuToggle.contains(e.target) &&
      !menuClose.contains(e.target) &&
      !menuItems.contains(e.target)
    ) {
      menuItems.classList.remove("show");
    }
  });
});

//subseccion
document.addEventListener("DOMContentLoaded", () => {
  const subsectionWrapper = document.querySelector(".subsection-wrapper");

  let isDragging = false;
  let startX;
  let scrollLeft;

  // Función para manejar el inicio del arrastre
  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX - subsectionWrapper.offsetLeft;
    scrollLeft = subsectionWrapper.scrollLeft;
    subsectionWrapper.style.cursor = "grabbing";
  };

  // Función para manejar el final del arrastre
  const stopDragging = () => {
    isDragging = false;
    subsectionWrapper.style.cursor = "grab";
  };

  // Función para manejar el movimiento del arrastre
  const drag = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - subsectionWrapper.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajusta el factor para suavizar el desplazamiento
    subsectionWrapper.scrollLeft = scrollLeft - walk;
  };

  // Eventos para el arrastre con el mouse
  subsectionWrapper.addEventListener("mousedown", startDragging);
  subsectionWrapper.addEventListener("mouseleave", stopDragging);
  subsectionWrapper.addEventListener("mouseup", stopDragging);
  subsectionWrapper.addEventListener("mousemove", drag);

  // Eventos para el arrastre con el dedo en dispositivos táctiles
  subsectionWrapper.addEventListener("touchstart", (e) => {
    // Previene el comportamiento predeterminado del desplazamiento táctil
    e.preventDefault();
    startX = e.touches[0].pageX - subsectionWrapper.offsetLeft;
    scrollLeft = subsectionWrapper.scrollLeft;
    isDragging = true;
  });

  subsectionWrapper.addEventListener("touchend", () => {
    isDragging = false;
  });

  subsectionWrapper.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.touches[0].pageX - subsectionWrapper.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajusta el factor para suavizar el desplazamiento
    subsectionWrapper.scrollLeft = scrollLeft - walk;
  });
});


//Search container

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".search-button");
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.querySelector(".search-input");

  // Función para mostrar el contenedor de búsqueda
  const showSearchContainer = () => {
    searchContainer.style.display = "block";
    positionSearchContainer();
  };

  // Función para ocultar el contenedor de búsqueda
  const hideSearchContainer = () => {
    searchContainer.style.display = "none";
  };

  // Función para posicionar el contenedor de búsqueda
  const positionSearchContainer = () => {
    const buttonRect = searchButton.getBoundingClientRect();
    searchContainer.style.top = `${buttonRect.top + window.scrollY}px`;
    searchContainer.style.left = `${buttonRect.left - searchContainer.offsetWidth - 10}px`; // 20px a la izquierda del botón
  };

  // Mostrar el contenedor al hacer clic en el botón de búsqueda
  searchButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic en el contenedor cierre el menú
    showSearchContainer();
    
    // Configura el temporizador para ocultar después de 5 segundos
  });

  // Ocultar el contenedor si se hace clic fuera de él
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && !searchButton.contains(e.target)) {
      hideSearchContainer();
    }
  });

  // Reiniciar el temporizador cuando el usuario escribe en el input
  searchInput.addEventListener("input", () => {
    clearTimeout(hideTimer);
  });
});
