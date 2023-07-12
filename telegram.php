<?php
/* https://api.telegram.org/bot6301347679:AAFFghHI3vrNYvhHorCqlFQSCuCsRvD_rHA/getUpdates */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['text'];
$token = "6301347679:AAFFghHI3vrNYvhHorCqlFQSCuCsRvD_rHA";
$chat_id = "-904269586";
$arr = array(
    'Имя: ' => $name, /* Принимаем имя пользователя с формы .. */
    'Номер:' => $phone, /* Телефон */
    'Эл.адрес:' => $email, /* Почту */
    'Текст сообщения:'=> $message, /* Сообщение с формы */
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};  

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
   /*  header('Location: success.html'); */
   $message = 'Сообщение отправлено успешно';
  } else {
    /* echo "Error"; */
    $message = 'Ошибка, cообщение не может быть отправлено';
}
$response= ['message' => $message];

echo json_encode($response);
?>