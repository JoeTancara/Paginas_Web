const images = document.querySelectorAll('.image-container img');
const imageMenu = document.querySelector('.image-menu');

images.forEach((image, index) => {
    const menuItem = document.createElement('img');
    menuItem.src = image.src;
    menuItem.alt = `Image ${index + 1}`;
    menuItem.addEventListener('click', () => scrollToImage(index));
    imageMenu.appendChild(menuItem);
});

function scrollToImage(index) {
    const imageWidth = images[0].clientWidth;
    const scrollPosition = index * imageWidth;
    document.querySelector('.image-gallery').scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}
