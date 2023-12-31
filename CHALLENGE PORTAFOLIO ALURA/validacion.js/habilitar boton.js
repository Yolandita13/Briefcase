export function habilitarBotonEnviar() {
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("email");
    const contraseña = document.getElementById("contraseña");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");
    const btnEnviar = document.getElementById("boton-enviar");
    let nombreValido = nombre.validity.valid;
    let correoValido = correo.validity.valid;
    let contraseñaValido = contraseña.validity.valid;
    let asuntoValido = asunto.validity.valid;
    let mensajeValido = mensaje.validity.valid;

    if (nombreValido && correoValido && contraseñaValido && asuntoValido && mensajeValido) {
        btnEnviar.removeAttribute("disabled");
        btnEnviar.classList.remove("boton--bloqueado");
    } else {
        btnEnviar.setAttribute("disabled", "true");
        btnEnviar.classList.add("boton--bloqueado");
    }
}