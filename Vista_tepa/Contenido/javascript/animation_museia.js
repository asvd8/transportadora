$(document).ready(function() {
  
  $("body").css({"overflow":"hidden"});
  $("#go_top").hide();
  $("#a_1").hide();
  $("body").append("<div id='cargando' class='navbar-fixed-top'><img src='..//Vista_sanjuan/imagenes/museia.png'  width='300px' /><br /></div>");

})


$(window).load(function() {

  var doblar = $(".doblar");
  var tituloextro = $("#tituloextro");
   

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

          
         }
         else {
         	
         	$("#a").hide();
         	$("#a_1").show();
         	$("#redes_barra").fadeOut();

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





		$('#logo2').hide();


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

