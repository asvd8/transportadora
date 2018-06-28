
<div id="a" class="panels" style="margin-top:2%;">
  
<div class="row">
 
  <div class="col-md-12 col-md-offset-2">
<p class="small" style="padding-bottom:0px;"><img src="Vista_sanjuan/imagenes/museia.png" width="100px"> Museia es un blog dedicado a "los artistas de hoy" principalmente con el objetivo de conocer qué les inspira y como llegaron hasta donde están.</p>

  </div>
</div>



  <div class="col-md-12 escritorio">
    <div class="site_wrap wrap ">
   

    <div id="port">
      <!-- List must be spaceless becuse <li>s are display: inline, and any spaces between them show in IE -->
      <ul class="thumbs_index indx_small index parallax-layer">
      	<?php
      		foreach ($galeria as $g => $gal1) {
            $buscar=basename($gal1);
            $buscar=explode(".", $buscar);
            $buscar=$buscar[0];
            $info_foto=$obj->info_museia($buscar);
           // var_dump($info_foto);
            if (count($info_foto)>0) {
              echo '<li><a href="'.$info_foto[0]['link'].'"><img src="'.$gal1.'" title="'.utf8_encode($info_foto[0]['titulo']).'"></a></li>';
        
            }
            else
            {
              echo '<li><img src="'.$gal1.'"></li>';
        
            }
      				}

      	?>
         
      </ul>
    </div>

  </div>
  </div>
  
</div>

    
  
  
<div id="b" class="panels">
  <div class="col-md-3 col-sm-4">
    <p justify class="small">
      El objetivo de este blog podría explicarse citando al arquitecto mexicano Luis Barragán: “No hagan lo que yo hice, vean lo que yo vi”. Como no podemos navegar por los recuerdos de los grandes artistas o robarnos su visión, decidí investigar cómo es que han logrado llegar al punto donde su talento es reconocido y premiado.
      <br/> <br/>
    “Museia” proviene de la palabra musa, que es la fuente de inspiración del artista. En la mitología griega, era un festival donde se rendía culto a las musas, divinidades inspiradoras de las artes como la danza, la poesía, la música.  Mi intención es conocer la opinión de los talentos creativos acerca de la inspiración, es decir, qué nos pueden decir acerca de sus “musas”. Cuándo vemos una gran obra pensamos que el artista “estaba muy inspirado”, pero, ¿cómo se logra esta inspiración?, ¿de dónde surgen sus ideas y la energía que les mueve a plasmarlas en una obra de arte del género que sea?
   </p>
    <div class="escritorio"> <p justify class="small"> En lo personal, desde mi infancia y motivada por mis padres, me interesé en el arte y en el diseño. Con el tiempo he convertido mis aficiones en pasiones, que como son tan variadas y no puedo verme sin conocer sobre cada una, decidí estudiar diseño integral. Aunque probablemente en el futuro me especialice en alguna rama del diseño, en el trayecto quiero descubrir cuál de todas es la que más me gusta y en cuál soy mejor. Por eso estoy interesada en conocer acerca de varios personajes con distinto talento artístico como pintores, escritores, fotógrafos, diseñadores, arquitectos, ceramistas, etc. Ya que son actividades en donde se busca la inspiración y donde necesitan de la combinación de talento y técnica, con su respectivo grado de dificultad.
 <br/> <br/>

 </p></div>

</div>
<div class="col-md-3 col-sm-4 ">
  <p justify class="small">
   Me interesan los artistas vivos principalmente. Creo que existen muchos talentos en México y el mundo que merecen ser reconocidos; Frida Kahlo fue increíble pero ¿no habrá una “Frida” en el futuro que viva ahora en nuestra época?
 <br/> <br/>

Sobran historias de genios que murieron sin nada y años después se descubrió su invaluable aptitud y obra. Desde luego, los artistas del pasado siguen siendo una gran fuente de motivación e inspiración en la actualidad, por lo que eventualmente publicaré algo sobre mis favoritos.
 <br/> <br/>


“Museia” será mi “muro de la motivación” y espero que pueda servirle a las personas que tengan el deseo de desarrollarse en el ámbito creativo.
 </p>

 
<div class="escritorio">
    <p justify class="small">
Tomaba una ducha donde generalmente me pongo a divagar, pensando en los secretos del universo y en la inmortalidad del cangrejo, cuando recordé que un maestro nos habló acerca del éxito y el fracaso, la mediocridad y la excelencia. Nos recomendó el libro “Creatividad S.A.” de Edwin Catmull de donde cito esta gran experiencia:
 <br/> <br/>
</div>

</div>
<div class="col-md-3  col-sm-4  escritorio">
  <p justify class="small">
“Cuando entro por las mañanas en los Estudios de Animación Pixar – después de dejar atrás la escultura de seis metros y pico de Luxo Jr., la lámpara de sobremesa que es nuestra simpática mascota; de atravesar la doble puerta que da paso a un espectacular vestíbulo con techo acristalado donde montan guardia unos Buzz Lightyear y Woody de tamaño natural, y subir las escaleras con dibujos y cuadros de los personajes que han poblado nuestras catorce películas – me vuelvo a sorprender por la peculiar cultura que define este lugar. Aunque he pasado por ahí un millón de veces, nunca me canso de él.”

En realidad uno de mis pasatiempos es investigar a mis ídolos creativos, pero nunca tengo un orden o algún método para conservar aquella información que conseguí. Por ello decidí crear mi espacio, en este caso digital, igual que Edwin. En resumen eso es Museia.
 <br/> <br/>
Creo que todos hemos escuchado “Te vas a morir de hambre si estudias diseño”, “No hay trabajo”. Lo cierto es que hay personas que han logrado triunfar en el mundo del arte y que consiguen mucho más que gente con otras profesiones. Tal vez algunos no midan su éxito en dinero, sino en reputación y reconocimiento, además de vivir haciendo aquello que aman y por lo que pueden ser felices sin ganar un centavo; pero hay otros que miden su éxito en millones. Sobran ejemplos de unos y otros. Pero el fracaso también puede ser una realidad cuando las musas no te tocan.

  <br/> <br/>
</p>
</div>
 <div class="col-md-3 col-sm-4 escritorio tableta">
  <p justify class="small">
Nadie quiere fracasar, desde luego. Pero a pocos se les ocurre investigar qué hicieron los que han triunfado. ¿Qué práctica realizan?, ¿cómo desarrollan su habilidad?, ¿cómo se promueven?, ¿con qué contactos cuentan?, ¿qué musas los inspiran?, ¿cómo definen el éxito?
 <br/> <br/>
Sus respuestas a mis preguntas seguramente me darán pistas para buscar mi propia inspiración y alcanzar mi propio éxito. Espero que para ti, con quien comparto estas inquietudes, también resulte inspirador.

    </p>
  </div>
</div>
<div class="col-md-12 movil">
   
   

   
        <?php
          foreach ($galeria as $g => $gal1) {
            $buscar=basename($gal1);
            $buscar=explode(".", $buscar);
            $buscar=$buscar[0];
            $info_foto=$obj->info_museia($buscar);
           // var_dump($info_foto);
            if (count($info_foto)>0) {
              echo '<a href="'.$info_foto[0]['link'].'"><img src="'.$gal1.'" title="'.utf8_encode($info_foto[0]['titulo']).'" width="50%" class="circular"></a>';
        
            }
            else
            {
              echo '<img src="'.$gal1.'" class="circular" width="50%">';
        
            }
              }

        ?>
         
     

  </div>
<footer>  <div class="col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-5 contenedor">
   
            <img src="../Vista_sanjuan/imagenes/redes_sociales/facebook.png" width="100%">
            <a href="https://www.facebook.com/pg/themuseia/"><img src="../Vista_sanjuan/imagenes/redes_sociales/facebook2.png" width="100%" class="top" ></a>
   
  </div> 
    </footer>
  