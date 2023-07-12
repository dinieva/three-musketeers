<?php
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['text'];
$body.='<p>Имя:'.$name.'</p>';/* Принимаем имя пользователя с формы .. */
$body.='<p>Номер:'.$phone.'</p>';/* Телефон */
$body.='<p>Эл.адрес:'.$email.'</p>'; /* Почту */
$body.='<p>Текст сообщения:'.$message.'</p>'; /* Сообщение с формы */

$mail->isSMTP();
$mail -> CharSet = 'utf-8';
$mail->SMTPAuth   = true;  //Enable SMTP authentication

$mail->Host       = 'smtp.mail.ru';                     //Set the SMTP server to send through         
$mail->Username   = 'dinievamail@mail.ru';                     //Логин от почты, с которой будут отправляются письма
$mail->Password   = 'f4Vg3G3xs5YB0ph9xDJh';                               //Пароль от почты, с которой будут отправляются письма
$mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
$mail->Port       = 465;              //порт,который используется для отправки данных. Отличается у других провайдеров    

$mail->setFrom('dinievamail@mail.ru'); //от кого уходит письмо
$mail->addAddress('dinievarezeda@mail.ru');     //адрес получателя письма

$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'Cообщение с сайта Мушкетеров';    //тема письма
$mail->Body = $body;

$mail->send();
    
if($mail->send()){
    $message = 'Сообщение отправлено успешно';
} else {
    $message = 'Ошибка, cообщение не может быть отправлено';
}
$response= ['message' => $message];

echo json_encode($response);
?>