<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';


/* require 'vendor/autoload.php'; */

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';

$mail->setLanguage('ru', 'phpmailer/language/'); //сообщения об ошибках будут на русском языке
$mail->isHTML(true); //Set email format to HTML
$mail->addAddress('dinievarezeda@mail.ru');     //кому отправлять
$mail->Subject = 'Сообщение от сайта мушкетеров';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$body.='<p>Имя:'.$name.'</p>';/* Принимаем имя пользователя с формы .. */
$body.='<p>Номер:'.$phone.'</p>';/* Телефон */
$body.='<p>Эл.адрес:'.$email.'</p>'; /* Почту */
$body.='<p>Текст сообщения:'.$message.'</p>'; /* Сообщение с формы */

$mail->Body = $body;

if(!$mail->send()) {
    $message = 'Ошибка, cообщение не может быть отправлено';
} else {
    $message = 'Сообщение отправлено успешно';
}

$response= ['message' => $message];

header( "Content-Type": "application/json");
echo json_encode($response);

?>

