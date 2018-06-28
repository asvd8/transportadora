<?php

include $_SERVER['DOCUMENT_ROOT'].'/eventos/Modelo/clase_2d.php';

$q=$_POST['q'];
//$con=conexion();

	echo "busqueda: <br/>".$_POST['q']."<br/>";

		$obj = new dosd();
		$res=$obj->buscar_orden_por_fecha($q);
		
/*echo "<pre>";
var_dump($res);
echo "</pre>";*/
if(count($res)==0){

 echo '<b>No hay sugerencias</b>';

}else{

echo '<b>Sugerencias:</b><br />';


 



}

?>