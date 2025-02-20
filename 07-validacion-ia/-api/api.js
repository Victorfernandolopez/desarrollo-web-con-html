document.getElementById('contactFormAPI').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Realizar una validación básica en el cliente
    if (!email.includes("@") || mensaje.trim() === "") {
        document.getElementById('errorMessageAPI').textContent = "Por favor, corrige los errores en el formulario.";
        return;
    } else {
        document.getElementById('errorMessageAPI').textContent = "";
    }

    // Simular el envío de datos a la API
    // Reemplaza 'https://api.ejemplo.com/validar' por la URL real de la API que utilices
    fetch('https://api.ejemplo.com/validar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, mensaje })
    })
        .then(response => response.json())
        .then(data => {
            // Suponemos que la API responde con { valid: true } o { valid: false, error: "mensaje de error" }
            if (data.valid) {
                alert("Formulario enviado correctamente (validación vía API).");
            } else {
                document.getElementById('errorMessageAPI').textContent = data.error || "Error en la validación.";
            }
        })
        .catch(error => {
            console.error("Error al comunicarse con la API:", error);
            document.getElementById('errorMessageAPI').textContent = "Error al validar los datos. Intenta nuevamente.";
        });
});
