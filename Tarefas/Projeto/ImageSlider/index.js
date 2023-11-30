const prev = document.querySelector('button#prev');
const next = document.querySelector('button#next');

const slides = document.querySelectorAll('.slide');

const auto = true;
const intervalo = 5000;

let slideInterval;

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(){
    const atual = document.querySelector('.atual');
    atual.classList.remove('atual');

        if(atual.previousElementSibling) {
            atual.previousElementSibling.classList.add('atual');
        } else {
            slides[slides.length-1].classList.add('atual');
        }
}


function nextSlide(){
    const atual = document.querySelector('.atual');
    atual.classList.remove('atual');

    if(atual.nextElementSibling) {
        atual.nextElementSibling.classList.add('atual');
    } else {
        slides[0].classList.add('atual');
    }

}

if (auto) {
    slideInterval = setInterval(nextSlide, intervalo)
}