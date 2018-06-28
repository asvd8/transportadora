
$(document).ready(function() {
 
  $("body").css({"overflow":"hidden"});
  $("#go_top").hide();
  $("#a_1").hide();
  $("body").append("<div id='cargando' class='navbar-fixed-top'><img src='..//Vista_tepa/imagenes/logo.png'  width='300px' /><br /></div>");

})

$(window).load(function() {

  var doblar = $(".doblar");
  var tituloextro = $("#tituloextro");

var $yeti = $('#yeti');
  var $transitionList = $('#transitionList');
   

  tituloextro.hover(
    function () {
           doblar.css({"-moz-transform": "scaleX(-1)", "-o-transform": "scaleX(-1)", "-webkit-transform": "scaleX(-1)", "transform": "scaleX(-1)", "filter": "FlipH", "-ms-filter": "FlipH"});
          
        }, 
        function () {
           doblar.css({"-moz-transform": "scaleX(1)", "-o-transform": "scaleX(1)", "-webkit-transform": "scaleX(1)", "transform": "scaleX(1)", "filter": "FlipH", "-ms-filter": "FlipH"});
        }
     );


  $("#cargando").fadeOut(1000,function()
  { 
    $(this).remove();
    $("body").css({"overflow":"auto"}); 
    $(".contenido").fadeIn(); 

  });  
	

     $(function () {

      var $win = $(window);

      // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento

      var $pos = 500;
      var $pos1 = 1500;

      $win.scroll(function () {

         if ($win.scrollTop() <= $pos)
         {
          //doblar.css({"height": "100px"});
          $("#portada").fadeIn(); 
          $("#go_top").hide();
          $("#go_down").show();
            
         

          
         }
         else {
         	$("#portada").fadeOut(300); 
         	$("#go_top").show();
         	$("#go_down").hide();
         	 
         	

          // doblar.css({"height": "60px"});
        //   doblar.css({"height": "60px"});
          

         }
         if ($win.scrollTop() <= $pos1)
         {
          //doblar.css({"height": "100px"});
         
          $("#a").show();
          $("#a_1").hide();
          $("#redes_barra").fadeIn();
           $( ".navbar" ).removeClass( "gradient_transp" );
          
         }
         else {
         	
         	$("#a").hide();
         	$("#a_1").show();
         	$("#redes_barra").fadeOut();

          $( ".navbar" ).addClass( "gradient_transp" );


          // doblar.css({"height": "60px"});
        //   doblar.css({"height": "60px"});
          

         }

       });

    });


    $("#go_acerca").click(function() {
        $('html, body').animate({
            scrollTop: $("#acerca").offset().top
        }, 1000);
    });
    $("#go_servicios").click(function() {
        $('html, body').animate({
            scrollTop: $("#servicios").offset().top
        }, 1500);
    });
    $("#go_clientes").click(function() {
        $('html, body').animate({
            scrollTop: $("#clientes").offset().top
        }, 1500);
    });


     $("#mision").click(function() {
        $("#title_about").html("MISIÓN");
        $("#text_about").html("Otorgar a nuestros clientes un servicio con los estándares más altos de calidad y calidez, acrecentando el liderazgo dentro del ramo y esforzándonos a ser los mejores día con día.");
        
      });


     $("#vision").click(function() {
        $("#title_about").html("VISIÓN");
        $("#text_about").html("Llegar a ser la Empresa Líder en nuestro campo de acción, mantener y acrecentar nuestra infraestructura para servicio del cliente y desarrollar mecanismos para eficientar nuestros procesos. ");
    });


      $("#valores").click(function() {
        $("#title_about").html("VALORES");
        $("#text_about").html("<b>TRABAJO.-</b> Tenemos y mantenemos un compromiso con nosotros mismos, y para con nuestros clientes, de esfuerzo y trabajo continuo, desde el más alto rango hasta el más bajo, en nuestra organización.<br/><b>HONESTIDAD, LEALTAD Y RESPETO.-</b> Actuamos con Rectitud, Integridad, Honestidad y Lealtad, porque creemos que es la base para fundamentar las relaciones comerciales.<br/><b>RESPONSABILIDAD.-</b> Para nosotros solo existe una forma de que el trabajo se realice bien, siendo responsables de nuestras actividades.<br/><b>COMPETITIVIDAD.-</b> Es el resultado de la pasión con que ejercemos nuestras labores, teniendo como objetivo brindar un servicio con estándares altos en calidad, manteniendo Liderazgo en el mercado.<br/><b>PROFESIONALISMO.-</b> Estamos constantemente cambiando, buscando ser mejores, eficientando nuestros procesos y nuestro hacer diario.");
    });




		$('#logo2').hide();


  $('#transitioner').hover(function() {
    MotionUI.animateIn($yeti, $transitionList.val());
  });


		/*$('#logo1').hover(
    	function () {
        
          $('#logo1').hide();
           $('#logo2').show();
          
        }, 
        function () {
         
          
        }
     );


		$('#logo2').hover(
    	function () {
        
           $('#logo2').fadeOut();
            $('#logo1').fadeIn();
        }, 
        function () {
       
          
        }
     );*/




    // Declare parallax on layers
    jQuery('.parallax-layer').parallax({
      mouseport: jQuery("#port"),
      yparallax: false
    });


		$('body').jKit({ 
			'plugins': {
				date: { 'path': "plugins/datepicker/js/datepicker.js", 'fn': 'DatePicker' },
				hint: { 'path': "plugins/jquery.ztinputhint-1.2.js", 'fn': 'ztInputHint' },
				maxlength: { 'path': "plugins/maxlength/jquery.maxlength-min.js", 'fn': 'maxlength' },
				confirm: { 'path': "plugins/jquery.confirm-1.3.js", 'fn': 'confirm' }
			},
			'replacements': {
				'encode': specialEncodeCommand
			}
		});

		function specialEncodeCommand(that, type, options){

		var s = this.settings; // we don't need this one, but I'll leave it here so you know how to get the plugin settings in case you need them
		var $that = $(that);

		this.executeCommand(that, type, options); // execute the original command

		// now add some additional functionality:

		if (options.format == 'uppercase'){
			$that.html($that.html().toUpperCase());
		}

	}


   
});

