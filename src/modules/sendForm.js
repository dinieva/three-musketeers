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
    let formData = new FormData(form); // получаем данные полей с инпутов формы
    
    let response = await fetch('telegram.php', {  // отправляем данные на почту 
        method: 'POST',
        body: formData
    });

    if (response.ok) { // успешная отправка данных
        let result = await response.json(); //получаем ответ в response
        resultText = result.message;
        statusBlock.textContent = resultText;
        formReset();
    } else {  //Ошибка
        resultText ="Сообщение не было отправлено. Причина ошибки:" + response.status;
        statusBlock.textContent = resultText;
        formElements.forEach(input => {
            if (!input.classList.contains('valid')) {
                    input.style.borderColor = 'red';
                } 
        })
    }
}

//сброс введенных данных после отправки
function formReset() {
    form.reset();
    formElements.forEach((input) => {
        input.value = '';
        input.style.borderColor = '#dfdfdf';
        setTimeout(function() {
            statusBlock.textContent = "";
        }, 3000);
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
