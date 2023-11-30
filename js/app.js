"use strict";
(() => {
    document.addEventListener('DOMContentLoaded', function () {
        /* //Selecciona los elementos de la interfaz. */
        const inputEmail = document.querySelector('#email');
        const inputAsunto = document.querySelector('#asunto');
        const inputMessage = document.querySelector('#mensaje');
        // Asignar eventos
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMessage.addEventListener('blur', validar);
        function validar(event) {
            console.log(event.target.value);
        }
    });
})();
