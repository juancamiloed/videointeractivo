let videoExperiencia = 0;
let videoIngenieria = 0;
let videoPerfil = 0;
let videoTrabajos = 0;
let videoEjes = 0;

function cambiarVideoExperiencia(){
    if(videoExperiencia === 0){
      //Cambiar contador para que no se repita la pregunta orientadora
      videoExperiencia++;

      //Cambiar video y reiniciarlo
      video.remove();  
      rutaVideo = exp_uni;
      preload();
      loadVideo(); 
      video.stop();
      video.hideControls();

      //Ocultar botones cuando se les da click
      btn1.hide();
      btn2.hide();
      btn3.hide();
      btn4.hide();

      //Mostrar panel de pregunta orientadora
      panelPreguntas.show();
      panelPreguntas.style("z-index: 10");
      panelPreguntas.center('vertical');

      //Modificar textos de la pregunta orientadora
      titulopregunta.html('¿En cuál de estos proyectos te gustaría participar?');
      opcion1.value('Desarrollo de un videojuego');
      opcion2.value('Desarrollo de una app móvil');
      opcion3.value('Desarrollo de personaje en 3D');
      opcion4.value('Desarrollo de un largometraje');
    }else{
      //Para recargar el video actual
      video.remove();  
      rutaVideo = exp_uni;
      preload();
      loadVideo();
      video.play();
      video.showControls();

      //Para que se muestren las opciones de videos al final
      estadoBoton = 0;

      //Ocultar botones cuando se les da click
      btn1.hide();
      btn2.hide();
      btn3.hide();
      btn4.hide();
    }
}

function cambiarVideoIngenieria(){
  if(videoIngenieria === 0){
    //Cambiar contador para que no se repita la pregunta orientadora
    videoIngenieria++;

    //Cambiar video y reiniciarlo
    video.remove();  
    rutaVideo = conocer_multimedia;
    preload();
    loadVideo(); 
    video.stop();
    video.hideControls();

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();

    //Mostrar panel de pregunta orientadora
    panelPreguntas.show();
    panelPreguntas.style("z-index: 10");
    panelPreguntas.center('vertical');

    //Modificar textos de la pregunta orientadora
    titulopregunta.html('¿Cuál de estos juegos te gusta más?');
    opcion1.value('Rompecabezas');
    opcion2.value('Sudoku');
    opcion3.value('Dominó');
    opcion4.value('Parques');
  }else{
    //Para recargar el video actual
    video.remove();  
    rutaVideo = conocer_multimedia;
    preload();
    loadVideo();
    video.play();
    video.showControls();

    //Para que se muestren las opciones de videos al final
    estadoBoton = 0;

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();
  }
}

function cambiarVideoPerfil(){
  if(videoPerfil === 0){
    //Cambiar contador para que no se repita la pregunta orientadora
    videoPerfil++;

    //Cambiar video y reiniciarlo
    video.remove();  
    rutaVideo = perfil_egresado;
    preload();
    loadVideo(); 
    video.stop();
    video.hideControls();

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();

    //Mostrar panel de pregunta orientadora
    panelPreguntas.show();
    panelPreguntas.style("z-index: 10");
    panelPreguntas.center('vertical');

    //Modificar textos de la pregunta orientadora
    titulopregunta.html('Te consideras una persona:');
    opcion1.value('Creativa');
    opcion2.value('Analitica');
    opcion3.value('Emprendedora');
    opcion4.value('Negociadora');
  }else{
    //Para recargar el video actual
    video.remove();  
    rutaVideo = perfil_egresado;
    preload();
    loadVideo();
    video.play();
    video.showControls();

    //Para que se muestren las opciones de videos al final
    estadoBoton = 0;

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();
  }
}

function cambiarVideoTrabajos(){
  if(videoTrabajos === 0){
    //Cambiar contador para que no se repita la pregunta orientadora
    videoTrabajos++;

    //Cambiar video y reiniciarlo
    video.remove();  
    rutaVideo = trabajos_estudiantes;
    preload();
    loadVideo(); 
    video.stop();
    video.hideControls();

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();

    //Mostrar panel de pregunta orientadora
    panelPreguntas.show();
    panelPreguntas.style("z-index: 10");
    panelPreguntas.center('vertical');

    //Modificar textos de la pregunta orientadora
    titulopregunta.html('¿Cuál de estas materias te llama más la atención?');
    opcion1.value('Matemáticas');
    opcion2.value('Arte');
    opcion3.value('Biología');
    opcion4.value('Idiomas');
  }else{
    //Para recargar el video actual
    video.remove();  
    rutaVideo = trabajos_estudiantes;
    preload();
    loadVideo();
    video.play();
    video.showControls();

    //Para que se muestren las opciones de videos al final
    estadoBoton = 0;

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();
  }
}

function cambiarVideoEjes(){
  if(videoEjes === 0){
    //Cambiar contador para que no se repita la pregunta orientadora
    videoEjes++;

    //Cambiar video y reiniciarlo
    video.remove();  
    rutaVideo = materias;
    preload();
    loadVideo(); 
    video.stop();
    video.hideControls();

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();

    //Mostrar panel de pregunta orientadora
    panelPreguntas.show();
    panelPreguntas.style("z-index: 10");
    panelPreguntas.center('vertical');

    //Modificar textos de la pregunta orientadora
    titulopregunta.html('¿Cuál de estas tecnologías te llama más la atención?');
    opcion1.value('Realidad virtual');
    opcion2.value('Aplicaciones web/móviles');
    opcion3.value('Internet de las cosas');
    opcion4.value('Inteligencia artificial');
  }else{
    //Para recargar el video actual
    video.remove();  
    rutaVideo = materias;
    preload();
    loadVideo();
    video.play();
    video.showControls();

    //Para que se muestren las opciones de videos al final
    estadoBoton = 0;

    //Ocultar botones cuando se les da click
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();
  }
}

function finalizarVideo(){
  //video.hideControls();
  video.remove();  
  rutaVideo = final;
  preload();
  loadVideo(); 
  video.play();
  //Ocultar botones cuando se les da click
  btn1.hide();
  btn2.hide();
  btn3.hide();
  btn4.hide();

}
