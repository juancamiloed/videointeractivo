function crearAspirante(){
    let tituloFormulario = document.getElementById("tituloFormulario");
    let nombreAspirante = document.getElementById("nombre");
    let apellidoAspirante = document.getElementById("apellido");
    let correoAspirante = document.getElementById("correo");
    let edadAspirante = document.getElementById("edad");
    let interesesAspirante = document.getElementById("intereses");
    let botonEnviar = document.getElementById("botonEnviar");

    const objetoEstudiante = {
        nombre: nombreAspirante.value,
        apellido: apellidoAspirante.value,
        correoestudiante: correoAspirante.value,
        edad: edadAspirante.value,
        intereses: interesesAspirante.value
    }

    createEstudiantes(objetoEstudiante);

    tituloFormulario.style.display = "none";
    nombreAspirante.style.display = "none";
    apellidoAspirante.style.display = "none";
    correoAspirante.style.display = "none";
    edadAspirante.style.display = "none";
    interesesAspirante.style.display = "none";
    botonEnviar.style.display = "none";
    felicidades.show();

}