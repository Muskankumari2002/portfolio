<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "muskankumari76176@gmail.com"; // Replace with your email address
    $subject = "New Message from Portfolio Website";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($to, $subject, $message, $headers);
}
?>
