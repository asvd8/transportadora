function loadXMLDoc()
{
var xmlhttp;

var selec=document. getElementsByName('seleccion')[0].value;
if(selec==''){
 var selec=document. getElementsByName('seleccion')[1].value;
}
var ev=document.getElementById('evento').value;
var comp=document.getElementById('competidor').value;
 misdatos="seleccion="+selec+"&evento="+ev+"&competidor="+comp;
//var sel=document.getElementById('seleccionar').value;

if(selec==''){
 document.getElementsByClassName("respuesta")[0].innerHTML="";
 return;
}

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
   
    document. getElementsByClassName(selec)[0].innerHTML=xmlhttp.responseText;
    document. getElementById(selec).innerHTML=xmlhttp.responseText;
   
   
    document.getElementById("variables").innerHTML=selec+ev;
    }else{ document.getElementsByClassName("selec")[0].innerHTML='Error'; }
  }
xmlhttp.open("POST","Vista_2d/Contenido/php/proc.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(misdatos);
//xmlhttp.send("evento="+ev);
}