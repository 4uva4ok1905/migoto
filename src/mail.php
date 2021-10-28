<?php

$json = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!isset($_POST['name']) || empty($_POST['name'])) {
        $json['error']['name'] = "Error Name";
    }

    if (!isset($_POST['phone']) || empty($_POST['phone'])) {
        $json['error']['phone'] = "Error Phone";
    }

    if (!isset($_POST['country']) || empty($_POST['country'])) {
        $json['error']['country'] = "Error Country";
    }

    if (!isset($json['error'])) {
        $to = 'roma.fe1905@gmail.com';
        $subject = 'Обратная связь';
        $message = '
                <html lang="ru">
                    <meta charset=utf-8>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                ';

        if (isset($_POST['name']) && !empty($_POST['name'])) {
            $message .= ' <p>Ф.И.О: ' . $_POST['name'] . '</p>';
        }

        if (isset($_POST['phone']) && !empty($_POST['phone'])) {
            $message .= ' <p>Телефон: ' . $_POST['phone'] . '</p>';
        }

        if (isset($_POST['social']) && !empty($_POST['social'])) {
            $message .= ' <p>Тип: ' . $_POST['social'] . '</p>';
        }

        if (isset($_POST['country']) && !empty($_POST['country'])) {
            $message .= ' <p>Местоположение: ' . $_POST['country'] . '</p>';
        }

        if (isset($_POST['date']) && !empty($_POST['date'])) {
            $message .= ' <p>E-mail: ' . $_POST['date'] . '</p>';
        }

        if (isset($_POST['time']) && !empty($_POST['time'])) {
            $message .= ' <p>Время: ' . $_POST['time'] . '</p>';
        }

        if (isset($_POST['message']) && !empty($_POST['message'])) {
            $message .= ' <p>Сообщение: ' . $_POST['message'] . '</p>';
        }

        $message .= '
                    </body>
                </html>';

        $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= 'From: TEST SITE <' . $to . '>';

        if (@mail($to, $subject, $message, $headers)) {
            $json['success'] = "Mail has been send";
        }
    }
}

header('Content-type: application/json');

echo json_encode($json);
