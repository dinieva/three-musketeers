// отправка данных формы обратной связи
function sendForm() {
const statusBlock = document.createElement('div');
const formElements = form.querySelectorAll('.userInfo');
let resultText;
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

async function formSubmit(){
    const data = serializeForm(form); // получаем данные формы
    const response = await sendData(data);// отправляем данные на почту
    if (response.ok) {
        let result = await response.json();
        resultText = result.message;
        /* statusBlock.textContent = resultText; */
        statusBlock.textContent = "Сообщение отправлено";
        formReset();
    } else {
        resultText = response.status;
        /* statusBlock.textContent = resultText; */
        statusBlock.textContent = "Ошибка";
        formElements.forEach(input => {
            if (!input.classList.contains('valid')) {
                    input.style.borderColor = 'red';
                } 
        })
    }
}

function serializeForm(formNode) {
    return new FormData(form);
}

async function sendData(data) {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {  //sendmail.php
            method: 'POST',
            body: data,
    });
}
//сброс введенных данных после отправки
function formReset() {
    form.reset();
    formElements.forEach((input) => {
        input.value = '';
        input.style.borderColor = '#dfdfdf';
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.append(statusBlock)
   
    if (validate(formElements)){
        formSubmit()
    }
})

}

export default sendForm;
