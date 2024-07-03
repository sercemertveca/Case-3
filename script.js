const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

const imageElement = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const imageCounter = document.getElementById('image-counter');

function updateSlider() {
    imageElement.src = images[currentIndex];
    imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

window.onload = updateSlider;