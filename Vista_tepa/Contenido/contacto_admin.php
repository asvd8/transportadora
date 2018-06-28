
<?php
/*echo "<pre>";
var_dump($total);
echo "</pre>";
*/
/*
if (count($info_contacto)<=0) {
	echo '	<div class="jumbotron">
				<div class="row">
					<div class="col-md-3">
						<h3>Contacto de </h3>
					</div>
					<div class="col-md-3">
					<form action="" method="post"><br/>
						<input type="checkbox" name="check_org"> <span class="minispan"><b>Organizador:</b></span>
							<select name="org" class="form-control">
								';
								$organizadores=$obj->organizadores();
								foreach ($organizadores as $id_org => $org) {
									
									echo '<option value="'.$org['org'].'">'.utf8_encode($org['org']).'</option>';
								}
						echo '<span class="minispan"><b>Fechas:</b></span>
						<input type="date" value="'.$fecha_desde.'" name="fecha_desde" placeholder="YYYY-MM-DD" class="form-control">
					      <input type="date" value="'.$fecha.'" name="fecha" class="form-control">
					      <br/><span class="minispan"><b>Buscar:</b></span>';
						    if (isset($_POST['buscar_pedido']) and !empty($_POST['buscar_pedido'])) {
						    	echo '<input type="text" name="buscar_pedido" class="form-control" placeholder="Busca por pedido, clientes, etc" value="'.$_POST['buscar_pedido'].'">';
						    }
						    else
						    {
						    	echo '<input type="text" name="buscar_pedido" class="form-control" placeholder="Busca por pedido, clientes, etc">';
						    }
					      echo '
					        <center><button class="btn btn-default" name="buscar_fecha" type="submit">Buscar</button></center>
					      
					</form>	
					</div>
				</div>
				  <h1>No hay pedidos</h1>
				  
		  		<div class="row">
					<div class="col-md-4 col-md-offset-3">
					
					</div>
				</div>
			</div>';
}
else
{*/	


	echo '<div class="jumbotron"><h1>Admin contacto</h1>
				<div class="row">
					
			<form action="" method="post">
			
			<input type="hidden" value="'.$fecha.'" name="fecha">   
			<input type="hidden" value="'.$fecha_desde.'" name="fecha_desde">        
			  <table class="table table-hover">
			    <thead>
			      <tr>
			      	<th>Fecha</th>
					<th>Nombre</th>
			        <th>Correo</th>
			        <th>Mensaje</th>
			     	<th>Respuesta</th>
			        <th></th>
			      </tr>
			    </thead>
			    <tbody>';
			    /*$mostrar=15;
				$last=count($ordenes_fecha)/$mostrar;
				$last=intval(round($last));
				$paginas=$this->paginacion($last, $mostrar);	

		*/
					$inicio=$paginas['inicio'];
					$limite=$paginas['limite'];
					$pag_act=$paginas['pag_act'];
				
			    
			   /* if (!isset($_POST['ir_a'])) {
			    	$inicio=0;
			    	
			    }
			    else
			    {
			    	$inicio=$_POST['ir_a'];
			    	
			    }*/

			    foreach (array_slice($info_contacto, $inicio,$limite) as $id_contact => $datos_contacto) {
			    	$id_contacto=$datos_contacto['id_contacto'];

					if ($id_contact>$mostrar and $pag_act<>$last) break;

				
					$texto_digital='Gracias por tu compra.<br/>
								Si tu servidor te deniega el acceso a este tipo de p&aacute;ginas, puedes:
								-Bajarlas desde otra computadora (casa).
								Puedes bajar tus fotos desde la liga:<br/><br/>

								#LINK_MENSAJE
<br/><br/>

								Tienes 14 d&iacute;as para poder bajar los archivos las veces que quieras desde las computadoras que quieras.
								Cualquier duda, quedo a tus &oacute;rdenes.<br/>

								Jos&eacute; Manuel Sevilla<br/>
								2 digital';
								$texto_impresas='Gracias por tu compra.<br/>

Estamos enviando tu pedido en estos momentos.<br/>
<br/>

Tu código de rastreo  es:

#LINK_MENSAJE<br/>

Puedes rastrear tu envío en http://www.estafeta.com 

</br>

Cualquier duda, quedo a tus órdenes.
<br/><br/>

Kassandra Cárdenas<br/>
kasandra@2digital.com.mx<br/>
tel. 33 3126 5928<br/>
2 digital
';
			    	
			    	
					if (isset($_POST['enviar_respuesta']) and $datos_contacto['id_contacto']==$_POST['enviar_respuesta']) {
			    		
						echo '<input type="hidden" name="ir_a" value="'.$pag_act.'">';	
					
							$show_hide="show scrollhere";
							$fecha_mensaje=$datos_contacto['fecha_mensaje'];

						if ($datos_contacto['fecha_respuesta']!="0000-00-00 00:00:00") {
			    		
				    		$text_respuesta='<textarea required class="form-control" name="respuesta">'.$datos_contacto['respuesta'].'</textarea>
				    		';
				    		
				    	}
				    	else
				    	{
				    		$text_respuesta='<textarea required class="form-control" name="respuesta"></textarea>';
				    		
				    	}
							
						
				    	
						$fecha_total =  $fecha_mensaje-$fecha_hora;
						 
						$dias_diferencia = ceil($fecha_total/(3600*24));
						 
					
						
						if ($dias_diferencia>=2) {
							$clase_fecha="crojo";	
						}
						else
						{
							$clase_fecha="";
						}

					echo '<tr><div class="'.$show_hide.'">

							 <td style="width: 13%"><abbr class="'.$clase_fecha.'">'.$fecha_mensaje.'</abbr></td>
					        <td style="width: 13%">'.utf8_encode($datos_contacto['nombre']).'
					        </td>
					        <td>'.$datos_contacto['correo'].'</td>
					        <td> '.utf8_encode($datos_contacto['mensaje']).'
					        </td>
					        <td> '.$text_respuesta.'
					        </td>
					        <td><input type="hidden" name="destinatario" value="'.$datos_contacto['correo'].'">
					        	<button class="btn btn-xs btn-success" type="submit" name="enviar_respuesta_done" value="'.$id_contacto.'" title="Enviar"><span class="glyphicon glyphicon-send"></span></button>
					        </td>
					      </tr>
						';
					}
					elseif (isset($_POST['editar']) and $datos_contacto['id_contacto']==$_POST['editar']) {
			    		
						echo '<input type="hidden" name="ir_a" value="'.$pag_act.'">';

						if ($datos_contacto['status']=="enviado") {
							$options_status='<option value="enviado" selected>enviado</option>
			    					<option value="cancelado">cancelado</option>
					        		<option value="pendiente">pendiente</option>';
						}
						elseif ($datos_contacto['status']=="pendiente") {
							$options_status='<option value="enviado">enviado</option>
			    					<option value="cancelado">cancelado</option>
					        		<option value="pendiente" selected>pendiente</option>';
						}
						elseif ($datos_contacto['status']=="cancelado") 
						{
							$options_status='<option value="enviado">enviado</option>
			    					<option value="cancelado" selected>cancelado</option>
					        		<option value="pendiente">pendiente</option>';
						}
						else
						{
							$options_status='<option value="enviado">enviado</option>
			    					<option value="cancelado">cancelado</option>
					        		<option value="pendiente" selected>pendiente</option>';
						}	
					
							$show_hide="show scrollhere";

						if ($datos_contacto['fecha_respuesta']!="0000-00-00 00:00:00") {
			    		
				    		$text_respuesta='<textarea class="form-control" readonly rows="3" cols="200">'.utf8_encode($respuesta).'</textarea>
				    		';
				    		
				    	}
				    	else
				    	{
				    		$text_respuesta='<textarea class="form-control" readonly rows="3" cols="200">No hay respuesta</textarea>';
				    		
				    	}
							
						

		

					echo '<tr><div class="'.$show_hide.'">
							 <td style="width: 13%">'.$datos_contacto['fecha_mensaje'].'
							 <select name="status" class="form-control">
					        		'.$options_status.'
					        	</select>
							 </td>
					        <td style="width: 13%">'.utf8_encode($datos_contacto['nombre']).'
					        </td>
					        <td>'.$datos_contacto['correo'].'</td>
					        <td> '.utf8_encode($datos_contacto['mensaje']).'
					        </td>
					        <td> '.$text_respuesta.'
					        </td>
					        <td>
					        	<button class="btn btn-xs btn-success" type="submit" name="editar_done" value="'.$id_contacto.'" title="Editar"><span class="glyphicon glyphicon-pencil"></span></button>
					        </td>
					      </tr>
						';
					}
					else
					{	echo '<input type="hidden" name="ir_a" value="'.$pag_act.'">';	
						if ($datos_contacto['status']=="enviado") {
							$icon_status="glyphicon-ok-circle cverde";
						}
						elseif ($datos_contacto['status']=="pendiente") {
							$icon_status="glyphicon glyphicon-time cinfo";
						}
						elseif ($datos_contacto['status']=="cancelado") 
						{
							$icon_status="glyphicon glyphicon-remove-circle crojo";
						}
						else
						{
							$icon_status="glyphicon glyphicon-time cinfo";
						}
						

						
					if ($datos_contacto['fecha_respuesta']!="0000-00-00 00:00:00") {
			    		
			    		$boton_respuesta='<button class="btn btn-xs btn-info" type="submit" name="enviar_respuesta" value="'.$id_contacto.'" title="Enviado '.$datos_contacto['fecha_respuesta'].'"><span class="glyphicon glyphicon-send" style="color: #7eff0d;"></span></button>';
			    		$text_respuesta='<input type="text" name="respuesta" class="form-control" value="'.$datos_contacto['respuesta'].'" placeholder="Respuesta" required>';
			    		$respuesta=$datos_contacto['respuesta'];
			    	}
			    	else
			    	{
			    		$boton_respuesta='<button class="btn btn-xs btn-info" type="submit" name="enviar_respuesta" value="'.$id_contacto.'" title="Enviar respuesta"><span class="glyphicon glyphicon-send"></span></button>';
			    		$text_respuesta='<input type="text" name="respuesta" class="form-control" placeholder="Respuesta" required>';
			    		$respuesta="No hay respuesta";
			    	}

			    	

					echo '<tr>
							
		        			 <td style="width: 13%">'.$datos_contacto['fecha_mensaje'].'<br/><abbr title="'.$datos_contacto['status'].'"><span class="glyphicon '.$icon_status.'"></span></abbr></td>
					        <td style="width: 13%">'.utf8_encode($datos_contacto['nombre']).'
					        </td>
					        <td >'.$datos_contacto['correo'].'</td>
					        <td> <textarea class="form-control" readonly rows="3" cols="200">'.utf8_encode($datos_contacto['mensaje']).'</textarea>
					        </td>
					        <td><textarea class="form-control" readonly rows="3" cols="200">'.utf8_encode($respuesta).'</textarea>
					        </td>
					       <td>
					      		<div class="btn-group" role="group">
					      		<button class="btn btn-xs btn-warning" type="submit" name="editar" value="'.$id_contacto.'" title="Editar"><span class="glyphicon glyphicon-pencil"></span></button>
					        
					      			'.$boton_respuesta.'
					      		</div>
					      	</td>
					      </tr>
						';
					}
				
					
				}
			    echo'</tbody>
			  </table>
			 	
		 										<div class="row">
														<!--BOTONES DE NAVEGACION (PAG SIG, ANTERIOR E IR A) -->
														<div class="col-xs-12 col-sm-12 col-md-5 col-md-offset-2">
															
																<input type="hidden" name="vista_fotos">
															';
																
																
																	 echo'
																	 <center><span class="badge ">Página '.$pag_act.' de '.$last.'</span><br/>
																<div class="btn-group">
																	<button type="submit" name="first" class="btn btn_menu btn-default">
																        <span class="glyphicon glyphicon-step-backward"></span> 
																    </button>
																    <button type="submit" name="prev" class="btn btn_menu btn-default" value="'.$pag_act.'">
																        <span class="glyphicon glyphicon-chevron-left"></span>  
																    </button>
																    <button type="submit" name="next" class="btn btn_menu btn-default" value="'.$pag_act.'">
																          <span class="glyphicon glyphicon-chevron-right"></span>
																    </button>
																    <button type="submit" name="last" class="btn btn_menu btn-default">
																         <span class="glyphicon glyphicon-step-forward"></span> 
																    </button>
																</div>
																</center>';
																
																echo '
																
															</form>	
														</div>
														<div class="col-xs-12 col-sm-12 col-md-3"><br/>
														  	<form action="" method="post">
														  		<input type="hidden" name="vista_fotos">
														  	';

														  	if (isset($_POST['buscar_contacto']) and !empty($_POST['buscar_contacto'])) {
								$boton_detalles='<input type="hidden" name="buscar_contacto" value="'.$_POST['buscar_contacto'].'">';
							}

							
							
						
																
																	 echo'
																	 <div class="input-group input-group-sm">
																      <input type="number" name="ir_a" placeholder="ir a:" required class="form-control" min="1" max="'.$last.'">
																      <span class="input-group-btn">
																        <button class="btn btn_menu btn-default" type="submit" name="ir" >Ir</button>
																      </span>
																    </div>';
																
															echo '
																	
															
														</div>
													</div>
		</form>
		';
	

//}

?>
