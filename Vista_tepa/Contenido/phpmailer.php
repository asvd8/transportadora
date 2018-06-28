<?php
			require_once ($_SERVER['DOCUMENT_ROOT']."/Vista_sanjuan/phpmailer/class.phpmailer.php"); 
			require_once ($_SERVER['DOCUMENT_ROOT']."/Vista_sanjuan/phpmailer/class.smtp.php"); 
			include_once($_SERVER['DOCUMENT_ROOT']."/Vista_sanjuan/phpmailer/PHPMailerAutoload.php");
		
			$mail = new PHPMailer(); 
			$mail->IsSMTP(); 
			$mail->SMTPAuth = true; 
			$mail->SMTPSecure = "ssl"; 
			$mail->Host = "smtp.gmail.com"; 
			$mail->Port = 465; 
			$mail->Username = "ventas@2digital.com.mx"; 
			$mail->Password = "2d1g1t4l";


			 $mail->From = "anasofiavd8@gmail.com"; 
			$mail->FromName = "Sofia Villarreal"; 
			$mail->Subject = $asunto; 
			$mail->AltBody = "Gracias por tu compra "; 
			$mail->MsgHTML($mensaje); 
			//$mail->AddAttachment("files/files.zip"; 
			//$mail->AddAttachment("files/img03.jpg"; 
			$mail->AddAddress($destinatario, "Destinatario"); 
			//$mailer->AddBCC("anasofiavd8@gmailcom", "copia");
			$mail->IsHTML(true); 
			if(!$mail->Send()) { 
			//echo "Error: " . $mail->ErrorInfo; 
			} else { 
			//echo "Mensaje enviado correctamente"; 
			}
?>