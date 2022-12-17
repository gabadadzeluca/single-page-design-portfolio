"use strict";

const slider = document.getElementById('slider');
const sliderImgs = document.querySelectorAll('.slider img');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

let current = 0;
const size = sliderImgs[0].clientWidth;
arrowRight.addEventListener('click', ()=>{
    if(current >= 2) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    current++;
    slider.style.transform = `translateX(${-size*current}px)`;
    
});

arrowLeft.addEventListener('click', ()=>{
    if(current <= -2) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    current--;
    slider.style.transform = 'translateX(' + (-size * current) + 'px)';
});
