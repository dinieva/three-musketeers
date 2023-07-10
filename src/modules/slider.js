function slider() {
    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.gallery-container');
    const mainSlide  = document.querySelector('.main-slide');
    const slidesCount = mainSlide.querySelectorAll('div').length;

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

}

export default slider;