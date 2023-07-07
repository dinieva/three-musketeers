document.addEventListener("DOMContentLoaded", function () {
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
let sponsors = [{name:'Симона', sum: '50 € '},   {name:'Оливия', sum: '50 €'}, {name:'Лоренсо', sum: '300 €'}, {name:'Аноним', sum: '120 €'},{name:'Ильфат Ильдарович', sum: '290.58 ₽'}, {name:'Анна Б.', sum: '500 ₽'}, {name:'Ринат Рифкатович Г.', sum: 500}, {name:'Лилия Накиповна', sum: 500},/* {name:'Жора', sum: 700}, {name:'Зак', sum: 800}, {name:'Игорь', sum: 900}, {name:'Карл', sum: 1000}, {name:'Лев', sum: 1100}, {name:'Макс', sum: 1200}, {name:'Николай', sum: 1300}, {name:'Олег', sum: 1400}, {name:'Петр', sum: 1500}, {name:'Роман', sum: 1600}, */ ];

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
/* проверка ввода имени, эл.адреса, текст сообщения */
const form = document.querySelector('form')
const phoneInputs = document.querySelector('#phone')
let userName;
let userPhone;
let userEmail;
let userMessage;

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute('data-reg');
    const reg = new RegExp(inputReg);

    if(reg.test(inputValue)){
        el.classList.add('valid')
        el.style.border = '2px solid rgb(0, 196, 0)'
        el.classList.add('valid')
       if(el.name = 'name') {
        userName = inputValue
       }
       if(el.name = 'email') {
        userEmail = inputValue
       }
       if(el.name = 'text') {
        userMessage = inputValue
       }

    } else {
        el.style.border = '2px solid rgb(255, 0, 0)'
    }
}

form.addEventListener("input", inputHandler);


/* проверка ввода номера телефона */
let getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, ''); /* не число удаляется */
}

let onPhoneInput = (e) => {
    let input = e.target;/* символ */
    let inputNumbersValue = getInputNumbersValue(input); /* остаются только цифры */
    let mask = '';
    let selectionStart = input.selectionStart;
    
    if(!inputNumbersValue) {
        return input.value = '';
    }

    if (input.value.length != selectionStart) {
        // редактирование в середине строки, не с последнего символа
        if (e.data && /\D/g.test(e.data)) {
            // Attempt to input non-numeric symbol
            input.value = inputNumbersValue;
        }
        return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1){
       //российский номер телефона
       let firstEnterSymbols = inputNumbersValue[0];
       if(firstEnterSymbols == "9") inputNumbersValue = "7" + inputNumbersValue;
       let firstSymbols = (firstEnterSymbols == '8' ) ?  "8" : '+7';
       mask = input.value = firstSymbols;
       if (inputNumbersValue.length > 1 ) {
         mask += "(" + inputNumbersValue.substring(1,4);
       }
       if (inputNumbersValue.length >= 5 ) {
        mask += ")" + inputNumbersValue.substring(4,7);
       }
       if (inputNumbersValue.length >= 8 ) {
        mask += "-" + inputNumbersValue.substring(7,9);
       }
       if (inputNumbersValue.length >= 10 ) {
         mask += "-" + inputNumbersValue.substring(9, 11);
       }
       if(inputNumbersValue.length >= 10) {
        input.style.border = '2px solid rgb(0, 196, 0)';
        input.classList.add('valid')
        userPhone = input.value
       }
    } else {
        //нероссийский номер телефона
        return input.value = "+" + inputNumbersValue.substring(0,16);
    }
    return input.value= mask
}
phoneInputs.addEventListener('input', onPhoneInput );

/* end phone number check */

/* отправка данных */
const statusBlock = document.createElement('div');
const successText = 'Спасибо! Ваше сообщение отправлено';
statusBlock.style.color="#c57a08"
statusBlock.style.textAlign = "center";
statusBlock.style.fontSize = "x-large";

const validate = (list) => {
    let success = true;

    list.forEach(input => {
        if (!input.classList.contains('valid')) {
            success = false
        } 
    })
    return success
}


const sendData = (data) => {
return fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.append(statusBlock)
    const formElements = form.querySelectorAll('.userInfo');
    
    let user = {
        name: userName,
        phone: userPhone,
        email: userEmail,
        message: userMessage,
    }

        if (validate(formElements)){
            sendData(user)
            .then(data => {
                statusBlock.textContent = successText

                formElements.forEach((input) => {
                    input.value = '';
                    input.style.borderColor = '#dfdfdf';
                })
            })
            .catch(error => {
                console.log(error);
            })
        }
            else {
                formElements.forEach(input => {
                    if (!input.classList.contains('valid')) {
                            input.style.borderColor = 'red';
                        } 
                    })
            }
})

   



})