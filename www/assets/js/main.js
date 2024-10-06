document.addEventListener('DOMContentLoaded', function () {
    // Settings for the slideshow
    const settings = {
        images: [
            'public/images/micro.png',
        ],
        delay: 6000 // Time between slides in ms
    };

    // DOM Elements
    const slideshowContainer = document.getElementById('slideshow');

    // Variables to keep track of the current and last images
    let currentImageIndex = 0;

    // Create and append the images dynamically to the slideshow container
    settings.images.forEach((imageSrc, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.style.backgroundImage = `url(${imageSrc})`;
        imgDiv.classList.add('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-cover', 'bg-center', 'transition-opacity', 'duration-1000', 'opacity-0');

        // Make the first image visible initially
        if (index === 0) {
            imgDiv.classList.add('opacity-100');
        }

        slideshowContainer.appendChild(imgDiv);
    });

    // Array of the divs containing the images
    const slides = slideshowContainer.querySelectorAll('div');

    // Function to switch images
    function changeImage() {
        const currentSlide = slides[currentImageIndex];
        const nextImageIndex = (currentImageIndex + 1) % slides.length;
        const nextSlide = slides[nextImageIndex];

        // Fade out current image
        currentSlide.classList.replace('opacity-100', 'opacity-0');

        // Fade in the next image
        nextSlide.classList.replace('opacity-0', 'opacity-100');

        // Update the current image index
        currentImageIndex = nextImageIndex;
    }

    // Set interval for the slideshow
    setInterval(changeImage, settings.delay);
});
