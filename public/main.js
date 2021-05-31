//Rutas de videos
const intro = "https://videostvdigital.s3.amazonaws.com/Intro.mp4"
const exp_uni = "https://videostvdigital.s3.amazonaws.com/Exp_uao.mp4"
const conocer_multimedia = "https://videostvdigital.s3.amazonaws.com/conocer_multi.mp4"
const perfil_egresado = "https://videostvdigital.s3.amazonaws.com/PerfilEgresado.mp4"
const trabajos_estudiantes = "https://videostvdigital.s3.amazonaws.com/trabajos.mp4"
const materias = "https://videostvdigital.s3.amazonaws.com/Materias.mp4"
const final = "https://videostvdigital.s3.amazonaws.com/Final.mp4"

//Para el porcentaje de candidatura
let porcentajeCandidatura = 0;
let textoPorcentaje;

//Se almacena la ruta del video que se esta reproduciendo actualmente
let rutaVideo = intro;

//Para verificar si ya se crearon los botones
let estadoBoton = 0;

let btn1;
let btn2;
let btn3;
let btn4;

//Para obtener el panel de preguntas de html
let panelPreguntas;
let titulopregunta;
let opcion1;
let opcion2;
let opcion3;
let opcion;
let resp;

//Para obtener el formulario tectoFelicidades de html
let felicidades;

//Para obtener el formulario final de html
let formularioFinal;

//Para obtener el boton de Whatsapp de html
let botonWhatsapp;

// FUNCIÓN DE PRECARGA DE LOS RECURSOS
function preload() {
  
  video = createVideo(rutaVideo);
  video.size(1280, 720);
  video.hide(); 
  //video.aspectRatio('16:9');
  }
  
  // FUNCIÓN DE CONFIGURACIÓN
  function setup() {
    const myCanvas=createCanvas(0, 0);
    //const myCanvas=createCanvas(windowWidth, windowHeight);
    //myCanvas.parent('canvasDiv');
    //var context=canvas.getContext('2d');
    preload();
    loadVideo();
    textoPorcentaje = select('#textoPorcentaje');
    panelPreguntas = select('#preguntas');
    titulopregunta = select('#titulopregunta');
    felicidades =select('#textoExito');
    felicidades.hide();
    opcion1 = select('#opcion1');
    opcion2 = select('#opcion2');
    opcion3 = select('#opcion3');
    opcion4 = select('#opcion4');
    opcion1.mousePressed(responderPregunta1);
    opcion2.mousePressed(responderPregunta2);
    opcion3.mousePressed(responderPregunta3);
    opcion4.mousePressed(responderPregunta4);
    panelPreguntas.hide();
    formularioFinal = select('#datos');
    formularioFinal.hide();
    botonWhatsapp = select('#btnWhatsapp');
    botonWhatsapp.hide();
  }
  
  
  function loadVideo(){
    // Se inicia la reproducción del video
    //video.size(1280, 720);
    video.show();
    video.showControls(); 
    //video.parent('defaultCanvas0');
    //video.aspectRatio('16:9');
    //video.center();
  }
  
  function draw() {
    //Actualizar el texto del Porcentaje
    textoPorcentaje.html(`Porcentaje de candidatura: ${porcentajeCandidatura}%`);
    textoPorcentaje.position((0.1 * windowWidth), (0.65 * windowHeight), 'absolute');
    textoPorcentaje.style("z-index: 10");
    //Condicionales para evaluar que video se esta reproduciendo
    if(video.src.substr(video.src.length - 10) === intro.substr(intro.length - 10)){
      
      if(video.time()>0 && estadoBoton === 0){ //Método para hacer peticiones a la API con los botones
        estadoBoton = 2;
        /*
        btnGET= createButton('GET')
        btnGET.style("z-index: 15");
        btnGET.mousePressed(async()=>{await getEstudiantes()}) //Metodos propios de API

        btnPOST= createButton('POST')
        btnPOST.style("z-index: 15");
        btnPOST.mousePressed(async()=>{await createEstudiantes()}) //Metodos propios de API
        */
      }
      
      if(video.time() > 87 && estadoBoton === 2){
            btn1= createButton('Experiencia universitaria');
            btn2= createButton('Ingeniería multimedia');
            ordenarBotones(btn1, btn2, 1);   
            btn1.mousePressed(cambiarVideoExperiencia); 
            btn2.mousePressed(cambiarVideoIngenieria);   
            btn3 = createButton('');
            btn3.position(0,0);
            btn3.hide();
            btn4 = createButton('');
            btn4.position(0,0);
            btn4.hide();
            
      }
    }else if(video.src.substr(video.src.length - 10) === exp_uni.substr(exp_uni.length - 10)){

      if(video.time() > 65 && estadoBoton === 0){
            btn1= createButton('Ingeniería multimedia');
            btn2= createButton('Repetir video');
            ordenarBotones(btn1, btn2, 1);   
            btn1.mousePressed(cambiarVideoIngenieria); 
            btn2.mousePressed(cambiarVideoExperiencia); 
            btn3 = createButton('');
            btn3.position(0,0);
            btn3.hide();
            btn4 = createButton('');
            btn4.position(0,0);
            btn4.hide();
            
      }
    }else if(video.src.substr(video.src.length - 10) === conocer_multimedia.substr(conocer_multimedia.length - 10)){
      if(video.time() > 7 && estadoBoton === 0){

            btn1= createButton('Perfil del egresado');
            btn2= createButton('Trabajos de estudiantes');
            btn3= createButton('Materias interesantes');
            btn4= createButton('Experiencia universitaria');
            ordenar4Botones(btn1, btn2, btn3, btn4, 1);   
            btn1.mousePressed(cambiarVideoPerfil); 
            btn2.mousePressed(cambiarVideoTrabajos);
            btn3.mousePressed(cambiarVideoEjes)
            btn4.mousePressed(cambiarVideoExperiencia);
      }
    }else if(video.src.substr(video.src.length - 10) === perfil_egresado.substr(perfil_egresado.length - 10)){
      if(video.time() > 68 && estadoBoton === 0){

            btn1= createButton('Ingenieria multimedia');
            btn2= createButton('Finalizar');
            ordenarBotones(btn1, btn2, 1);   
            btn1.mousePressed(cambiarVideoIngenieria); 
            btn2.mousePressed(finalizarVideo); 
      }
    }else if(video.src.substr(video.src.length - 10) === trabajos_estudiantes.substr(trabajos_estudiantes.length - 10)){
      if(video.time() > 160 && estadoBoton === 0){

            btn1= createButton('Ingenieria multimedia');
            btn2= createButton('Finalizar');
            ordenarBotones(btn1, btn2, 1);   
            btn1.mousePressed(cambiarVideoIngenieria); 
            btn2.mousePressed(finalizarVideo); 
      }
    }else if(video.src.substr(video.src.length - 10) === materias.substr(materias.length - 10)){
      if(video.time() > 100 && estadoBoton === 0){

            btn1= createButton('Ingenieria multimedia');
            btn2= createButton('Finalizar');
            ordenarBotones(btn1, btn2, 1);   
            btn1.mousePressed(cambiarVideoIngenieria); 
            btn2.mousePressed(finalizarVideo); 
      }
    }else if(video.src.substr(video.src.length - 10) === final.substr(final.length - 10)){
      if(video.time() > 9){
        formularioFinal.show();
        formularioFinal.style("z-index: 10");
        formularioFinal.center('vertical');
        botonWhatsapp.show();
      }
    }
  }



