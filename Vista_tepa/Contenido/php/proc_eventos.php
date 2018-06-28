<?php

include $_SERVER['DOCUMENT_ROOT'].'/eventos/Modelo/clase_2d.php';

$q=$_POST['q'];
//$con=conexion();

	echo "<b>ID evento:</b> ".$_POST['q']."<br/>";

		$obj = new dosd();
		$impresas=$obj->conceptos_carrito_imp($q);
		$digitales=$obj->conceptos_carrito_dig($q);
		
/*echo "<pre>";
var_dump($impresas);
echo "</pre>";*/


if(count($impresas)<=0 and count($digitales)<=0){


 echo "<b>No se encontraron conceptos</b>";

}else{



foreach ($digitales as $d => $dig) {
	if ($dig['precio_prev']>0) {
		echo '<input type="checkbox" value="'.$dig['id_concepto'].'" name="conceptos_dig[]" class="conceptos" class="conceptos_dig">'.utf8_encode($dig['concepto']).' $'.$dig['precio_prev'].'<br/>';
	}
}
foreach ($impresas as $i => $imp) {
	if ($imp['precio_prev']>0) {
		echo '<input type="checkbox" value="'.$imp['id_concepto'].'" name="conceptos_imp[]" class="conceptos" class="conceptos_imp">'.$imp['concepto'].' $'.$imp['precio_prev'].'<br/>';
	}
}




}

?>