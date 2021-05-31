function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    if(usuario === "agallego" && password === "agallego123"){
        window.open("panel.html", "_self");
    }else{
        let error = document.getElementById("error");
        error.style.display = "block";
    }
}