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

  
/* список спонсоров */
let sponsorsTicker = document.querySelector('.sponsor-wrapper');
let sponsors = [{name:'Ильфат Ильдарович', sum: '290.58 ₽'}, {name:'Анна Б.', sum: '500 ₽'}, {name:'Симона', sum: '50 € '},   {name:'Оливия', sum: '50 €'}, {name:'Лоренсо', sum: '300 €'}, {name:'Аноним', sum: '120 €'}/* ,{name:'Дима', sum: 500},{name:'Егор', sum: 600}, {name:'Жора', sum: 700}, {name:'Зак', sum: 800}, {name:'Игорь', sum: 900}, {name:'Карл', sum: 1000}, {name:'Лев', sum: 1100}, {name:'Макс', sum: 1200}, {name:'Николай', sum: 1300}, {name:'Олег', sum: 1400}, {name:'Петр', sum: 1500}, {name:'Роман', sum: 1600}, */ ];

sponsors.forEach(sponsor => {

    let card = document.createElement("div");
    let ava = document.createElement("div");
    let name = document.createElement("p");
    let countBlock = document.createElement("div");
    let sum = document.createElement("span");
    let countBlockTitle = document.createElement("p");


    card.classList.add("sponsor-card");
    ava.classList.add("sponsor-avatar");
    name.classList.add("sponsor-name");
    countBlock.classList.add("count-block");
    countBlockTitle.classList.add("count-block");
    sum.classList.add("count-block-sum");

    countBlockTitle.textContent="Сумма помощи";
    name.textContent=sponsor.name;
    sum.textContent=sponsor.sum;

    sponsorsTicker.appendChild(card);
    card.appendChild(ava);
    card.appendChild(name);
    card.appendChild(countBlock);
    countBlock.appendChild(countBlockTitle);
    countBlock.appendChild(sum);
    
})

/* контактная форма */
