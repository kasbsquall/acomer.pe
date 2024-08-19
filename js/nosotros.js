document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const dotsContainer = document.querySelector(".carousel-dots");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const totalItems = items.length;
    let itemsPerSlide = window.innerWidth > 768 ? 3 : 1; // Ajusta según el tamaño de pantalla
    let totalSlides = Math.ceil(totalItems / itemsPerSlide);
    let autoplayInterval;

    // Función para actualizar los dots
    const updateDots = () => {
        // Limpia los dots existentes
        dotsContainer.innerHTML = '';

        // Genera los nuevos dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);
        }

        // Selecciona los nuevos dots generados
        const dots = document.querySelectorAll(".dot");

        // Marca el dot activo
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex % totalSlides].classList.add("active");
    };

    const updateCarousel = () => {
        const offset = -(currentIndex * (100 / itemsPerSlide));
        carousel.style.transform = `translateX(${offset}%)`;

        updateDots(); // Actualiza los dots
    };

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + itemsPerSlide) % totalItems;
            updateCarousel();
        }, 5000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - itemsPerSlide + totalItems) % totalItems;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + itemsPerSlide) % totalItems;
        updateCarousel();
    });

    // Iniciar autoplay
    startAutoplay();

    // Detener autoplay al hacer hover
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.addEventListener("mouseover", stopAutoplay);
    carouselContainer.addEventListener("mouseout", startAutoplay);

    // Actualiza el número de elementos por slide al redimensionar la ventana
    window.addEventListener("resize", () => {
        itemsPerSlide = window.innerWidth > 768 ? 3 : 1;
        totalSlides = Math.ceil(totalItems / itemsPerSlide);
        updateCarousel();
    });

    // Actualiza los dots por primera vez
    updateDots();
    updateCarousel();
});
