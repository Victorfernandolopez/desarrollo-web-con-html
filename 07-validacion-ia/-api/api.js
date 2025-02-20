document.getElementById('contactFormAPI').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Realizar una validación básica en el cliente
    if (!email.includes("@") || mensaje.trim() === "") {
        document.getElementById('errorMensajeAPI').textContent = "Por favor, corrige los errores en el formulario.";
        return;
    } else {
        document.getElementById('errorMensajeAPI').textContent = "";
    }

    fetch('http://127.0.0.1:8000/api/validar/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, mensaje })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta de la API:", data); // Agregar esta línea para depuración
            if (data.valid) {
                alert("Formulario enviado correctamente (validación vía API).");
            } else {
                document.getElementById('errorMensajeAPI').textContent = data.error || "Error en la validación.";
            }
        })
        .catch(error => {
            console.error("Error al comunicarse con la API:", error);
            document.getElementById('errorMensajeAPI').textContent = "Error al validar los datos. Intenta nuevamente.";
        });
});
