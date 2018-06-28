<html>
   <head>

<script src="jquery.js"></script> 

<script type="text/javascript">
 window.onload = function () {
alert("cargado...");
}


$(document).ready(function(){


var notificaciones = $("#contador").val(); 

if (notificaciones = 0) { 
$("#mielemento").hide(); 
} 

else if (notificaciones =1) { 
$("#mielemento").show(); 

} 

}
</script

   </head>
   <body>
   <?php 
$notificaciones = 0; 
echo '<input type="hidden" value=".$notificaciones." id="contador"/>' ; 
?>
   
   
   <div id="mielemento">
   Hola como estas
   </div>
   
   </body>
   </html>