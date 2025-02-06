'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let j = 0;
    const rightCarouselBtn = document.querySelector('.galerie-right'),
          leftCarouselBtn = document.querySelector('.galerie-left'),
          sliderCarousel = document.querySelector('.galerie-slider');

    const setCarouselStyle = () => sliderCarousel.style.cssText = `transform: translateZ(-650px) rotateY(${j / 6 * -360}deg)`;

    rightCarouselBtn.addEventListener('click', () => {
        ++j;
        setCarouselStyle();
    })
    leftCarouselBtn.addEventListener('click', () => {
        --j;
        console.log(j)
        setCarouselStyle();
    })
});