'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    const rightBtn = document.querySelector('.personal-right'),
          leftBtn = document.querySelector('.personal-left'),
          slider = document.querySelector('.personal-slider'),
          slideWidth = document.querySelector('.personal-slide').clientWidth + 75;

    const setStyle = () => slider.style.cssText = `transform: translateX(-${slideWidth * i}px);`;

    rightBtn.addEventListener('click', () => {
        if (i == 3) {
            i = 0;
            setStyle();
            return;
        } else {
            ++i;
            setStyle();
        }
    });

    leftBtn.addEventListener('click', () => {
        if (i <= 0) {
            i = 3;
            setStyle();
        } else {
            --i;
            setStyle();
        }
    });
});