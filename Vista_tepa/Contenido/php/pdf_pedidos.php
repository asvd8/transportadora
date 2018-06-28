<?php
require_once ($_SERVER['DOCUMENT_ROOT']."/eventos/Vista_2d/html2pdf_v4.03/html2pdf.class.php");
if (isset($_POST['pdf']))
{

 
ob_start();
	    require_once ($_SERVER['DOCUMENT_ROOT']."/eventos/Vista_2d/Contenido/vista_pdf_pedidos.php");
	    $html=ob_get_clean();
	    $mipdf=new HTML2PDF('L','CARTA','es','true','UTF-8',array(20, 20, 20, 20));
	    $mipdf->writeHTML($html);
	 	ob_clean();
	    $nombre="Reporte";
        $mipdf->Output($nombre.'.pdf', 'D'); 
//echo $_POST['total'];


}

?>