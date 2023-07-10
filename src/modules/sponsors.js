//список спонсоров
function sponsors(){
    let sponsorsTicker = document.querySelector('.sponsor-wrapper');
    let sponsors = [{name:'Симона', sum: '50 € '},   {name:'Оливия', sum: '50 €'}, {name:'Лоренсо', sum: '300 €'}, {name:'Аноним', sum: '120 €'},{name:'Ильфат Илдарович Ш.', sum: '290.58 ₽'}, {name:'Анна Владимировна Б.', sum: '500 ₽'}, {name:'Ринат Рифкатович Г.', sum: 500}, {name:'Лилия Накиповна Г.', sum: 500}, {name:'Миляуша Ногмановна Г.', sum: 300}, {name:'Динара Рямисовна Ш.', sum: 350}, {name:'Анна Витальевна Ш.', sum: 350}, {name:'Алина Ринатовна Г.', sum: 2000}, /*{name:'Лев', sum: 1100}, {name:'Макс', sum: 1200}, {name:'Николай', sum: 1300}, {name:'Олег', sum: 1400}, {name:'Петр', sum: 1500}, {name:'Роман', sum: 1600}, */ ];

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

}

export default sponsors;