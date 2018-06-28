<?php

include $_SERVER['DOCUMENT_ROOT'].'/eventos/Modelo/clase_2d.php';

$seleccion=$_POST['seleccion'];
$evento=$_POST['evento'];
$competidor=$_POST['competidor'];
//$con=conexion();
//$seleccion=$_POST['seleccion'];
		

		
		
			//$obj->del_preseleccion($evento, $_POST['buscar_competidor'], $_POST['del_preselec']);
		

	/*echo "busqueda: ".$_POST['q']."<br/>";
	echo "Evento: ".$_POST['evento']."<br/>";
	echo "Competidor: ".$_POST['competidor']."<br/>";
*/
		$obj = new dosd();
		//$res=$obj->datos_evento_carrera($q);
		$obj->agregar_preseleccion($evento, $competidor, $seleccion);
		
		
/*echo "<pre>";
var_dump($res);
echo "</pre>";*/
/*
if(count($res)==0){

 echo '<b>No hay sugerencias</b>';

}else{

echo '<b>Sugerencias:</b><br />';

foreach ($res as $r => $fila) {
	echo $fila['nombre'].'<br />';
}
*/
echo '<button title="Quitar de las preselecciones" class="btn btn-default btn-xs pull-right" type="submit" id="del_preselec" name="del_preselec" value="'.$seleccion.'"> 
																		    		<span class="glyphicon glyphicon-remove"></span> Deseleccionar
																		</button>';
 



?>