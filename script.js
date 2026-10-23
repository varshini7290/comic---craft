
const slider = document.getElementById("comicSlider");

const slides = document.querySelectorAll(".slide");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const dotsContainer = document.getElementById("sliderDots");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 0;

const totalSlides = slides.length;

// Create slide indicator dots
slides.forEach((slide, index) => {

    const dot = document.createElement("span");

    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });

    dotsContainer.appendChild(dot);

});

// Update slider
function updateSlider() {

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    // Update dots
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

    // Update slide number
    slideNumber.textContent =
        `Slide ${currentSlide + 1} of ${totalSlides}`;

    // Disable buttons at beginning and end
    prevBtn.disabled = currentSlide === 0;

    nextBtn.disabled = currentSlide === totalSlides - 1;

}

// Previous slide
prevBtn.addEventListener("click", () => {

    if (currentSlide > 0) {

        currentSlide--;

        updateSlider();

    }

});

// Next slide
nextBtn.addEventListener("click", () => {

    if (currentSlide < totalSlides - 1) {

        currentSlide++;

        updateSlider();

    }

});

// Keyboard navigation
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight" &&
        currentSlide < totalSlides - 1) {

        currentSlide++;
        updateSlider();

    }

    if (event.key === "ArrowLeft" &&
        currentSlide > 0) {

        currentSlide--;
        updateSlider();

    }

});

// Start the slideshow
updateSlider();
