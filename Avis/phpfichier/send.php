
<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    session_start();

    // Valider et filtrer les entrées utilisateur
    $nom = $_POST['nom'];
    $email = $_POST['mail'];
    $prenom = $_POST['prenom'];
    $message = $_POST['message'];

    // Vérifier que les champs requis sont remplis
    if ($nom && $email && $prenom && $message) {
        try {
            $mail = new PHPMailer(true);

            // Configuration du serveur SMTP
            $mail->isSMTP(); 
            $mail->Host = 'smtp.gmail.com'; 
            $mail->SMTPAuth = true; 
            $mail->Username = 'mathonregis28@gmail.com'; 
            $mail->Password = 'ljwywlrgzhuvjafr'; 
            $mail->SMTPSecure = 'ssl'; 
            $mail->Port = 465; 

            // Destinataires
            $mail->setFrom('mathonregis28@gmail.com', 'Vialle Construction');
            $mail->addAddress('mathonregis07@gmail.com');
            $mail->addReplyTo($email);

            // Contenu du mail
            $mail->isHTML(true); 
            $mail->Subject = 'Avis Client';

            // Template HTML pour un mail professionnel
            $mailBody = "
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        .header { background-color: #f2f2f2; padding: 20px; text-align: center; border-radius: 30px; box-shadow: 0 0 40px -20px black;}
                        .content { margin: 20px; }
                        .footer { background-color: #f2f2f2; padding: 10px; text-align: center; }
                    </style>
                </head>
                <body>
                    <div class='header'>
                        <h1>$nom $prenom nous a donné son avis !</h1>
                    </div>
                    <div class='content'>
                        <p>$message</p>
                    </div>
                    <div class='footer'>
                        <p>Ce mail a été envoyé depuis le site web de la part de $email</p>
                    </div>
                </body>
                </html>
            ";

            $mail->Body = $mailBody;

            $mail->send();
            $erreur_mail = 0;
        } catch (Exception $e) {
            $erreur_mail = 1;
        }
    } else {
        $erreur_mail = 1;
    }

    $result = array("res" => $erreur_mail);
    echo json_encode($result);
?>
