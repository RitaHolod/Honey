<?php 
header('Content-Type: text/html; charset=UTF-8');
mb_internal_encoding('UTF-8');?> 
<?php

$fio = $_POST['name'];
$tel = $_POST['tel'];

$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);

$fio = urldecode($fio);
$tel = urldecode($tel);

$fio = trim($fio);
$tel = trim($tel);


// echo $fio;
// echo "<br>";
// echo $tel;

if (mail("zoomyzoomy@icloud.com", "Заявка с сайта на скидку 15%", "Имя:".$fio.". Телефон: ".$tel ,"From: zoomyzoomy@icloud.com \r\n"))

{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>