$("document").ready(function (){

  var controles = $(".carousel-control");
  var ctrlprev = $(".left");
  var ctrlnext = $(".right");
  var cont_item = 0;
  var flecha_show=  $(".flecha_show");
  var flecha_hide=  $(".flecha_hide");
  var flecha_show_movil=  $(".flecha_show_movil");
  var flecha_hide_movil=  $(".flecha_hide_movil");
  var instrucciones = $(".instrucciones");
  var instrucciones_movil = $(".instrucciones_movil");
  var editar_form=  $(".editar_form");
  var change=     $(".change");
  var cambiar=    $(".cambiar");
  var btn_listo=    $(".btn_listo");
  var btn_listo_edit= $(".btn_listo_edit");
  var show_hover= $(".show_hover");
  var thumb_evento= $(".thumb_evento");
  var impresas = $(".impresas");
  var digital = $(".digital");
  var verdigital = $("#verdigital");
  var verimpresas = $("#verimpresas");
  var control_izq= $("#control_izq");
  var control_der= $("#control_der");
  var eyeopenimp = $("#eyeopenimp");
  var eyeopendig = $("#eyeopendig");
  var eyecloseimp = $("#eyecloseimp");
  var eyeclosedig = $("#eyeclosedig");
  
  var pais = $("#pais");
  var estados_mexico = $("#estados_mexico");
  var otro_estado = $("#otro_estado");
  var jalisco = $("#mun_14");
  var otro_mun = $("#otro_mun");
  var info_tarjeta = $("#info_tarjeta");
  var info_dep = $("#info_dep");
  var info_paypal = $("#info_paypal");
    var show = $(".show");
  var hide = $(".hide");
    var plus=     $(".plus");
  var add=      $(".add");
  $("#img_cert").hide();

$("#hide_cert").hide();
  
  
$("#total").hide();
$("#precio_especial").click(function(){
  $("#total").show();
});

if ( $("#categorias_show").length ) {
    $('#categorias_escritorio').show();
}
else
{  /*$('#categorias_escritorio').hide();*/
}

if ( $("#open_carr").length ) {
   $('#carrito').modal({
        show: 'true'
    }); 
}
else if($("#open_opc_carr").length)
{
    $('#opc_carrito').modal({
        show: 'true'
    });
}

  $("#ver_cert").click(function() {
  $("#img_cert").fadeIn( 3000, function() {
    // Animation complete
  });
  $("#hide_cert").show();
  $("#ver_cert").hide();
});

 $("#hide_cert").click(function() {
  $("#img_cert").fadeOut( 1000, function() {
      $("#ver_cert").show();
      $("#hide_cert").hide();
  });

});


$("select[name=organizador]").change(function(){

          if ($("select[name=organizador]").val()=="PE") {
            $("#t_pago").html("");
            $('#t_pago').append('<option value="efectivo" selected="selected">Efectivo</option><option value="tarjeta">Tarjeta</option>');
          
          }
          else if ($("select[name=organizador]").val()=="PA")
          {
            $("#t_pago").html("");
            $('#t_pago').append('<option value="asd" selected="selected">Asdeporte</option>');
          }
 });

plus.click(function(){
    add.toggle();
  });

$("#tab_resultados").click(function() {
        $('#categorias_escritorio').hide();
    });
    
$("#tab_fotos").click(function() {
        $('#categorias_escritorio').show();
    });

$("#go_video").click(function() {
        $('html, body').animate({
            scrollTop: $("#video").offset().top
        }, 1000);
    });


if ($(".scrollhere").length) {
$('html, body').animate({
        scrollTop: ($(".scrollhere").offset().top)-100
      },500);
  $(".scrollhere").css("background-color","#C9ED9F");
};

$("#go_f1").click(function() {
        $('html, body').animate({
            scrollTop: $("#f1").offset().top
        }, 1000);
    });
$("#go_venta").click(function() {
        $('html, body').animate({
            scrollTop: $("#venta").offset().top
        }, 1000);
    });
$("#go_bodas").click(function() {
        $('html, body').animate({
            scrollTop: $("#bodas").offset().top
        }, 1000);
    });
$("#go_photo").click(function() {
        $('html, body').animate({
            scrollTop: $("#photo").offset().top
        }, 1000);
    });
$("#go_top").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });



instrucciones_movil.show();
  show_hover.hide();
  instrucciones.hide();
  flecha_hide.hide();
  flecha_show_movil.hide();
  change.hide();
  btn_listo_edit.hide();
  impresas.hide();
  verdigital.addClass("dosd");
  control_izq.hide();
  control_der.hide();
  eyecloseimp.hide();
  eyeopendig.hide();
    show.show();
  hide.hide();
  add.hide();
  

	otro_estado.hide();
//  otro_mun.hide();
  otro_mun.prop('required',true);
  $('#acepto_politicas').prop('required',true);
  $("input[name=forma_pago]").prop('required',true);
  
  jalisco.hide();
  info_tarjeta.hide();
   info_dep.hide();
   info_paypal.hide();
  otro_estado.val(estados_mexico.val());
  //otro_mun.val(jalisco.val());


   $("#paypal").val(0);

$('#nombre_co').prop('required',true);
 
   function SacarIva() {
    var iva=(parseFloat($("#precio_subtotal").val())+parseFloat($("#envio").val()))*0.16;
     iva = iva.toFixed(2);
    $("#precio_iva").val(iva);
    $("#iva").html("$"+iva);
  }

if ( $("#precio_iva").length ) {
  SacarIva();
}
  function SacarTotal() {
    var total=parseFloat($("#precio_subtotal").val())+parseFloat($("#precio_iva").val())+parseFloat($("#envio").val());
     total = total.toFixed(2);
    $(".precio_total").val(total);
    $("#total").html("$"+total);
  }

if ( $("#impresas").length ) {
   if ( $("#organizador").length ) {
      if ($("#organizador").val()=="VI") {
           $(".precio_envio").html("$0.00");
          $("#envio").val(0);
      }
      if ($("#organizador").val()=="EI") {
        //   $(".precio_envio").html("$0.00");
         // $("#envio").val(0);
      }
    }
  else
  {
     $(".precio_envio").html("$130.00");
    $("#envio").val(130);
  }
 
  SacarIva();
  SacarTotal();
}
else
{

  $("#envio").val(0);
  SacarIva();
  SacarTotal();
}


    $("input[name=forma_pago]").click(function () {    
        if ($(this).val()=="tarjeta") {
          info_tarjeta.show();
          info_dep.hide();
          info_paypal.hide();
          $("input[name=tipo_tarjeta]").prop('required',true);
        //  $("#enviar_datos").attr("disabled", true);
          $("#ccnum").prop('required',true);
          $("#num_seguridad").prop('required',true); 
          $("#nombre_tarjeta").prop('required',true);
          $("#paypal").val(0);
        }
        else if ($(this).val()=="dep") {
          info_dep.show();
          info_tarjeta.hide();
          info_paypal.hide();
          $("#paypal").val(0);
           $("#enviar_datos").attr("disabled", false);
        }
        else if ($(this).val()=="paypal") {
          info_dep.hide();
          info_tarjeta.hide();
          info_paypal.show();
          $("#paypal").val(1);
           $("#enviar_datos").attr("disabled", false);
        }
        else
        { info_dep.hide();
          info_tarjeta.hide();
          info_paypal.hide();
          $("#paypal").val(0);
          $("input[name=tipo_tarjeta]").prop('required',false);
          $("#ccnum").prop('required',false);
          $("#num_seguridad").prop('required',false);
          $("#nombre_tarjeta").prop('required',false);
           $("#enviar_datos").attr("disabled", false);
        };
    });
    
    
  pais.change(function(){
    if ( $("#organizador").length ) {
      if ($("#organizador").val()=="VI" || $("#organizador").val()=="EI" ) {
           if(pais.val() != 138){
        estados_mexico.hide();
        otro_estado.show();
        otro_estado.val("");
        jalisco.hide();
        otro_mun.show();
        otro_mun.val("");
        //$(".precio_envio").html("$130.00");
        //$("#envio").val(130);
      }
      else
      {
        estados_mexico.show();
        otro_estado.hide();
        otro_estado.val(estados_mexico.val());
        if(estados_mexico.val() != 14){
          jalisco.hide();
          otro_mun.show();
         // $(".precio_envio").html("$130.00");
          //$("#envio").val(130);
        }
        else
        {
          jalisco.show();
          otro_mun.hide();
          otro_mun.val(jalisco.val());
         // $(".precio_envio").html("$50.00");
          //$("#envio").val(50);
        }
           
        
      }
      }
      else
      {
          if(pais.val() != 138){
        estados_mexico.hide();
        otro_estado.show();
        otro_estado.val("");
        jalisco.hide();
        otro_mun.show();
        otro_mun.val("");
        $(".precio_envio").html("$130.00");
        $("#envio").val(130);
      }
      else
      {
        estados_mexico.show();
        otro_estado.hide();
        otro_estado.val(estados_mexico.val());
        if(estados_mexico.val() != 14){
          jalisco.hide();
          otro_mun.show();
          $(".precio_envio").html("$130.00");
          $("#envio").val(130);
        }
        else
        {
          jalisco.show();
          otro_mun.hide();
          otro_mun.val(jalisco.val());
          $(".precio_envio").html("$50.00");
          $("#envio").val(50);
        }
           
        
      }
      }
    }
    else
    {if(pais.val() != 138){
      estados_mexico.hide();
      otro_estado.show();
      otro_estado.val("");
      jalisco.hide();
      otro_mun.show();
      otro_mun.val("");
      $(".precio_envio").html("$130.00");
      $("#envio").val(130);
    }
    else
    {
      estados_mexico.show();
      otro_estado.hide();
      otro_estado.val(estados_mexico.val());
      if(estados_mexico.val() != 14){
        jalisco.hide();
        otro_mun.show();
        $(".precio_envio").html("$130.00");
        $("#envio").val(130);
      }
      else
      {
        jalisco.show();
        otro_mun.hide();
        otro_mun.val(jalisco.val());
        $(".precio_envio").html("$50.00");
        $("#envio").val(50);
      }
         
      
    }

    }

    
    SacarIva();
    SacarTotal();
  });


  estados_mexico.change(function(){
    if(estados_mexico.val() != 14){
      jalisco.hide();
      otro_mun.show();
      otro_mun.val("");
      otro_mun.prop('required',true);
      $(".precio_envio").html("$130.00");
      $("#envio").val(130);
    }
    else
    {
      jalisco.show();
      otro_mun.val(jalisco.val());
      otro_mun.hide();
      $(".precio_envio").html("$50.00");
      $("#envio").val(50);
    }
    SacarIva();
    SacarTotal();
  });

   jalisco.change(function(){
    if(jalisco.val() == 120 || jalisco.val() == 101 || jalisco.val() == 97 || jalisco.val() == 39){
      $(".precio_envio").html("$50.00");
       $("#envio").val(50);
    }
    else
    {
      $(".precio_envio").html("$130.00");
       $("#envio").val(130);
    }
    SacarIva();
    SacarTotal();
  });
  
  

   thumb_evento.hover(
    function () {
           show_hover.show();
          
        }, 
        function () {
           show_hover.hide();
        }
     );

verimpresas.click(function(){
    impresas.show();
    digital.hide();
    eyeopenimp.toggle();
    eyecloseimp.toggle();
    digital.hide();
    eyeclosedig.hide();
    eyeopendig.show();
    verimpresas.addClass("dosd");
    verdigital.removeClass("dosd");
  });


  verdigital.click(function(){
    digital.show();
    impresas.hide();
    eyeopendig.toggle();
    eyeclosedig.toggle();
    eyecloseimp.hide();
    eyeopenimp.show();
    verdigital.addClass("dosd");
    verimpresas.removeClass("dosd");
  });
  
    
   /* $(window).resize(function() {
      if($(window).width() > 600){
        //instrucciones_movil.hide();
      }
      else if ($(window).width() <= 600) {
        instrucciones_movil.show();
      };
    });*/

  flecha_show.click(function(){
    flecha_show.hide();
    flecha_hide.show();
     instrucciones.show();
     //instruc.hide();
  });

  flecha_hide.click(function(){
    flecha_hide.hide();
    flecha_show.show();
     instrucciones.hide();
    // instruc.show();
  });

  flecha_show_movil.click(function(){
    flecha_show_movil.hide();
    flecha_hide_movil.show();
     instrucciones_movil.show();
  });

  flecha_hide_movil.click(function(){
    flecha_hide_movil.hide();
    flecha_show_movil.show();
     instrucciones_movil.hide();
  });

editar_form.click(function(){
    change.toggle();
    cambiar.toggle();
    btn_listo_edit.toggle();
  });




  $(".contenido").hide();
    
     $(function () {

  var $win = $(window);
  


  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento

  var $pos = 500;

  $win.scroll(function () {

     if ($win.scrollTop() <= $pos)
     {
       $("#go_top").hide();
       
      
     }
     else {

     
       $(".contenido").fadeIn(3500);
        $("#go_top").show();
       

     }

   });

});


   $(function() {
        $('#container_bodas img').hover(
          function(){
            var $this = $(this);
            $this.stop().animate({'height':'200px','top':'0px','left':'0px'},200);
          },
          function(){
            var $this = $(this);
            $this.stop().animate({'height':'220px','top':'-20px','left':'-20px'},200);
          }
        );
            });

$("#ccnum").keyup(function(e){
    validar_tarjeta();
      
});

$("#num_seguridad").keyup(function(e){
   validar_tarjeta();
});

function validar_tarjeta()
{
  var num = $("#ccnum").val().toString();
    var charCount = num.length;
    var tarjeta= $('input[name=tipo_tarjeta]:checked').attr('value');
    var seg = $("#num_seguridad").val().toString();
    var seguridad = seg.length;
 
    /* VALIDACION DE TIPO */
    if(charCount == 1) { 
        if(num == "4"){
            $("#type").html("Visa");
            $("#radio_visa").prop("checked", true);
            
        }
    }
    if(charCount == 2){
        if(num == "34" || num == "37"){
            $("#type").html("AmericanExpress");
            $("#radio_amex").prop("checked", true);
        } else if( num == "51" || num == "55" || num == "53"){
            $("#type").html("MasterCard");
            $("#radio_mc").prop("checked", true);
        } else if( num == "55" ){
            $("#type").html("Discover");
        }
    }
    if(charCount == 3){
        if(num == "644"){
             $("#type").html("Discover");
        }
    }
    if(charCount == 4){
        if(num == "6011"){
            $("#type").html("Discover");
        }
    }

    
    
    if(tarjeta=="visa" || tarjeta=="masterc") { 
        if(charCount == 16){
            $("#type").html(tarjeta+" valida");
            
            if(seguridad!==3){
              $("#type").html("Revise número de seguridad");
              $("#enviar_datos").attr("disabled", true);
            }
            else
            {
              $("#enviar_datos").attr("disabled", false);
            }
        }
        else if(charCount < 16){
            $("#type").html(tarjeta+" incompleta");
            $("#enviar_datos").attr("disabled", true);
        }
        else if(charCount >16){
          $("#type").html(tarjeta+" invalida");
          $("#enviar_datos").attr("disabled", true);
        }

    }
   else if(tarjeta=="amex") { 
        if(charCount == 15){
            $("#type").html(tarjeta+" valida");
            $("#enviar_datos").attr("disabled", false);
            if(seguridad!==4){
              $("#type").html("Revise número de seguridad");
            }
        }
        else if(charCount < 15){
            $("#type").html(tarjeta+" incompleta");
            $("#enviar_datos").attr("disabled", true);
        }
        else if(charCount >15){
          $("#type").html(tarjeta+" invalida");
          $("#enviar_datos").attr("disabled", true);
        }

    }
}



        
// thumbnails.carousel.js jQuery plugin

;(function(window, $, undefined) {
    

    ctrlprev.click(function(){ // primera forma
            cont_item-=1;
            ctrlnext.show();
            control_der.hide();
            stop(cont_item);
             $(".contador").html(cont_item);
            if (cont_item<0){
             
              ctrlprev.hide();
              ctrlprev.prop( "disabled", true );
              control_izq.show();
            }
            else{
              ctrlprev.show();
            };
             
    });
     ctrlnext.click(function(){ // primera forma
            cont_item+=1;
            ctrlprev.show();
            control_izq.hide();
            stop(cont_item);
             $(".contador").html(cont_item);
            if (cont_item===8)
            {    
              ctrlnext.hide();
              ctrlnext.prop( "disabled", true );
              control_der.show();

            }
            else
            { ctrlnext.show();
            };
    });

   
  var conf = {
    center: true,
    backgroundControl: false
  };

  var cache = {
    $carouselContainer: $('.thumbnails-carousel').parent(),
    $thumbnailsLi: $('.thumbnails-carousel li'),
    $controls: $('.thumbnails-carousel').parent().find('.carousel-control')
  };

  function init() {
    cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
    cache.$thumbnailsLi.first().addClass('active-thumbnail');

    if(!conf.backgroundControl) {
      cache.$carouselContainer.find('.carousel-control').addClass('controls-background-reset');
    }
    else {
      cache.$controls.height(cache.$carouselContainer.find('.carousel-inner').height());
    }

    if(conf.center) {
      cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
    }
  }

  function refreshOpacities(domEl) {
    cache.$thumbnailsLi.removeClass('active-thumbnail');
    cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
  } 

  function bindUiActions() {
    cache.$carouselContainer.on('slide.bs.carousel', function(e) {
        refreshOpacities(e.relatedTarget);
    });

    cache.$thumbnailsLi.click(function(){
      cache.$carouselContainer.carousel($(this).index());
    });
  }

  $.fn.thumbnailsCarousel = function(options) {
    conf = $.extend(conf, options);

    init();
    bindUiActions();

    return this;
  }

})(window, jQuery);

$('.thumbnails-carousel').thumbnailsCarousel();


$("#nueva_prev").submit(function(e){
    var go = true;
    if ($("#bus").val()=="-") {
      go=false;
      $("#bus").css("background-color","rgb(245, 180, 180)");
    };

    if ($("#num_pedido").val()=="") {
      go=false;
      $("#num_pedido").css("background-color","rgb(245, 180, 180)");
    };
    conceptos=0;
    dig=0;
    imp=0;
     $('.conceptos:checked').each(
    function() {
        conceptos++;
    }
    );

     $('.conceptos:checked').each(
    function() {
        conceptos++;
    }
    );

     if (conceptos<=0) {
      go=false;
       $("#error").html("Debe seleccionar al menos un concepto");
        $("#error").css("color","rgb(245, 180, 180)");
     };

    if (go == false){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: (select_evento.offset().top)-100
      },500);
    }
  });

$("#caja").submit(function(e){
    var go = true;

    if ($("#nombre_cliente").val()=="") {
      go=false;
      $("#nombre_cliente").css("background-color","rgb(245, 180, 180)");
    };
    if ($("#apellidos_cliente").val()=="") {
      go=false;
      $("#apellidos_cliente").css("background-color","rgb(245, 180, 180)");
    };
    if ($("#tel_cliente").val()=="") {
      go=false;
      $("#tel_cliente").css("background-color","rgb(245, 180, 180)");
    };
    if ($("#email_cliente").val()=="") {
      go=false;
      $("#email_cliente").css("background-color","rgb(245, 180, 180)");
    };
    if ($("#email_alter_cliente").val()=="") {
      go=false;
      $("#email_alter_cliente").css("background-color","rgb(245, 180, 180)");
    };
    if ($("#num_comp_cliente").val()=="") {
      go=false;
      $("#num_comp_cliente").css("background-color","rgb(245, 180, 180)");
    };
   
    if ($("select[name=expira_mes]").val()=="-" & $("input[name=forma_pago]").val()=="tarjeta") {
       go=false;
         $("select[name=expira_mes]").css("background-color","rgb(245, 180, 180)");
    };
    

    if (go == false){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: ($("#nombre_cliente").offset().top)-100
      },500);
    }
  });

 
  $("#form_imagen").submit(function(e) {
 var go = true;
    var ref = $(this).find("[required]");

    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            go=false;
            $(this).focus();
$(this).css("background-color","rgb(245, 180, 180)");
            e.preventDefault();
            
        }
    }); 

    if (go == false){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: ($("#nombre_cliente").offset().top)-100
      },500);
    }
});
});