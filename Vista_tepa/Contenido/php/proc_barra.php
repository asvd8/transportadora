<?php

include $_SERVER['DOCUMENT_ROOT'].'/eventos/Modelo/clase_2d.php';


$q=$_POST['q'];
//$con=conexion();

		$obj = new dosd();
		$res=$obj->buscar_evento($q);
		
/*echo "<pre>";
var_dump($res);
echo "</pre>";*/
if(count($res)==0){

 echo '<b>No hay sugerencias</b>';

}else{

echo '<b>Sugerencias:</b><br />';

foreach ($res as $r => $fila) {
	echo' <li><a href="http://2digital.com.mx/eventos/?venta&evento='.$fila['id_evento'].'">'. $fila['nombre_evento'].'</a></li>';
}

//echo "</li>";
 



}

?>