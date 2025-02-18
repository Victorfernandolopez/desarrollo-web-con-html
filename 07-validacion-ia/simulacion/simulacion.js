// Escuchar el envío del formulario y prevenir el comportamiento por defecto
document.getElementById('contactFormSimulacion').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    validarFormularioSimulacion(nombre, email, mensaje);
});

// Función de validación simulada
function validarFormularioSimulacion(nombre, email, mensaje) {
    let error = "";

    if (!email.includes("@")) {
        error += "El correo electrónico no es válido. ";
    }
    if (mensaje.trim() === "") {
        error += "El mensaje no puede estar vacío.";
    }

    if (error !== "") {
        document.getElementById('errorMessageSimulacion').textContent = error;
    } else {
        document.getElementById('errorMessageSimulacion').textContent = "";
        alert("Formulario enviado correctamente (validación simulada).");
        
    }
}