//контактная форма
//проверка ввода имени, эл.адреса, текст сообщения
function contactForm(){
const form = document.querySelector('form')
const inputs = form.querySelectorAll('input')
const phoneInputs = document.querySelector('#phone')

form.addEventListener('input', (e) => {
    if (e.target.hasAttribute("data-reg")) {
        inputCheck(e.target)
    }
})

function inputCheck(el) {
    const inputValue = el.value.trim();
    const inputReg = el.getAttribute('data-reg');
    const reg = new RegExp(inputReg);
    if(reg.test(inputValue)){
        el.classList.add('valid')
        el.style.border = '2px solid rgb(0, 196, 0)'
    } else {
        el.style.border = '2px solid rgb(255, 0, 0)'
    }
}

//проверка ввода номера телефона
let getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, ''); //не число удаляется
}

let onPhoneInput = (e) => {
    let input = e.target;//символ
    let inputNumbersValue = getInputNumbersValue(input); //остаются только цифры
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
       if(inputNumbersValue.length >= 11) {
        input.style.border = '2px solid rgb(0, 196, 0)';
        input.classList.add('valid')
       /*  userPhone = inputNumbersValue; */
       } else if(inputNumbersValue.length < 11) {
        input.classList.remove('valid')
        input.style.border = '2px solid rgb(255, 0, 0)'
       }
    } else {
        //нероссийский номер телефона
        return input.value = "+" + inputNumbersValue.substring(0,16);
    }
    return input.value= mask
}
phoneInputs.addEventListener('input', onPhoneInput );
//end phone number check

}

export default contactForm;