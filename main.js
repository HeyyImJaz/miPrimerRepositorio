function capturarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById('username').value;
    const password = document.getElementById('password').value;
   
    const msj = crearMensaje(nombre, password)
    agregarMensajeASaludo(msj)
}

function crearMensaje(n, p){
    const mensaje = document.createElement('h2');
    mensaje.textContent = "¡Hola, " + n + "! Tu clave es " + p;
    return mensaje;
}

function agregarMensajeASaludo(msj) {
    const caja_donde_se_visualiza_el_msj = document.getElementById('saludo');
    caja_donde_se_visualiza_el_msj.appendChild(msj);
    
}