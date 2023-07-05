const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.gallery-container');
const mainSlide  = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const navbar = document.querySelector('.header-navbar')
const mobileMenu = document.querySelector('.mobile-menu')
let targets = document.querySelectorAll('.anim')
/* navbar */ 
mobileMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
});
/* скрытие навбара после скроллинга */
window.addEventListener('scroll', ()=>{
    navbar.classList.remove('active')
});
/* анимация появление элементов*/
let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('find', entry);
            entry.target.classList.add('active');
        }
    })
}
let observer = new IntersectionObserver(callback, options);

targets.forEach(target => {
    observer.observe(target);
})


/* слайдер десктоп */
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1) *80}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount){
            activeSlideIndex=0;
        }
    } else if (direction === 'down'){
        activeSlideIndex--;
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1;
        }
    }

const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown'){
        changeSlide('down');
    }
});
/* свайпер слайдер для мобилок */
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });