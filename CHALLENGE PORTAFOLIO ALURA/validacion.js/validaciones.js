import { habilitarBotonEnviar } from "./validacion/habilitarBoton.js";
import validarCampos, { limpiarCampos } from "./validacion/validarCampos.js";

(() => {

   
    validarCampos();
    habilitarBotonEnviar();

     const validarBtnFormulario = (event) => {
        const element = event.target;
        if (element && element.tagName == 'INPUT') {
            habilitarBotonEnviar();
        } else if (element && element.tagName == 'TEXTAREA') {
            habilitarBotonEnviar();
        }
    }

    formularioContacto.addEventListener("keyup", validarBtnFormulario);
    window.addEventListener("DOMContentLoaded", limpiarCampos);
})();