function ordenarBotones(btnIzq, btnDer, estado){

            estadoBoton = estado;
            //btnIzq = createButton(text1);
            btnIzq.position((0.1 * windowWidth), (1.2 * windowHeight), 'absolute');
            btnIzq.style("z-index: 10");
            
           // btnDer = createButton(text2);
            btnDer.position((0.6 * windowWidth), (1.2 * windowHeight), 'absolute');
            btnDer.style("z-index: 10");
            
            return btnIzq, btnDer;
      
  } 

  function ordenar4Botones(btnIzq, btnDer, btnIzq2, btnDer2, estado){

      estadoBoton = estado;

      btnIzq.position((0.1 * windowWidth), (0.9 * windowHeight), 'absolute');
      btnIzq.style("z-index: 10");
      
      btnDer.position((0.6 * windowWidth), (0.9 * windowHeight), 'absolute');
      btnDer.style("z-index: 10");

      btnIzq2.position((0.1 * windowWidth), (1.2 * windowHeight), 'absolute');
      btnIzq2.style("z-index: 10");

      btnDer2.position((0.6 * windowWidth), (1.2 * windowHeight), 'absolute');
      btnDer2.style("z-index: 10");
      
      return btnIzq, btnDer, btnIzq2, btnDer2;

} 

