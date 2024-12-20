// funcionalidad del carrusel
var slidesContainer = document.querySelector('.contenedor_general')
var slides = document.querySelectorAll('.slides');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;


var manualNav = function (manual) {

    slides.forEach((slides) => {
        slides.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// slider autoplay navigation

var repeat = function (activeClass) {
    let active = slidesContainer.getElementsByClassName('active');
    let i = 1;


    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');

            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();
