# Desarrollo Web con HTML

Este repositorio documenta mi progreso en el curso de Desarrollo Web con HTML. Aquí se registran desde los fundamentos hasta proyectos más avanzados.

# Bitácora de Aprendizaje 🌐🚀

Registro de mi progreso en desarrollo web, integrando HTML, CSS e IA.

---

## 📅 Módulos del Plan de Estudios

### 1. **Fundamentos de HTML**  
   - **Aprendido**:  
     - Estructura básica de HTML (`<html>`, `<head>`, `<body>`).  
     - Uso de etiquetas básicas (`<h1>`, `<p>`, `<div>`).  
   - **Ejemplo práctico**:  
     ```html
     <!DOCTYPE html> <!-- Indica que estamos usando HTML5 -->
     <html lang="es"> <!-- Configura el idioma de la página -->
     <head> <!-- Contiene metadatos y enlaces a recursos externos -->
         <meta charset="UTF-8"> <!-- Permite la correcta visualización de caracteres especiales -->
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Mini proyecto 1</title> <!-- Título de la pestaña del navegador y factor SEO -->
     </head>
     <body> <!-- Contiene todo el contenido visible de la página -->
         <!-- Encabezado principal de la página -->
         <h1>Mi primera pagina web</h1>
         
         <!-- Descripción del propósito del sitio -->
         <p>Aquí comienzo mi camino hacia el desarrollo web.</p>
         <p>¡Deseenme suerte!</p>
     </body>
     </html>
     ```

---

### 2. **IA: HTML desde Lenguaje Natural**  
   - **Herramientas usadas**: ChatGPT  
   - **Ejemplo de IA**:  
     *Prompt*: "nececito una pagina html de tipo portafolio que tenga un saludo en el encabesado, mi nombre de titulo, un parrafo descriptivo y una imagen que al hacer click redirija la pagina a mi perfil de linkedin, debajo de la imagen un texto que la describa que se redirige al clickear la imagen"
     *Resultado*:  
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <!-- Configuración de la codificación y vista de la página -->
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- Título que aparecerá en la pestaña del navegador -->
         <title>Portafolio de Lopez victor</title>
     </head>
     <body>
         <!-- Saludo en el encabezado -->
         <header>
             <h1>¡Bienvenido a mi Portafolio!</h1>
         </header>
         
         <!-- Sección para mostrar el nombre -->
         <section>
             <h2>Lopez Victor</h2>
         </section>
         
         <!-- Párrafo descriptivo sobre ti o tu trabajo -->
         <section>
             <p>Soy un desarrollador web apasionado por crear experiencias digitales innovadoras. Aquí encontrarás una selección de mis proyectos y logros profesionales.</p>
         </section>
         
         <!-- Sección con la imagen que redirige a tu perfil de LinkedIn -->
         <section>
             <!-- Enlace que redirige a tu perfil de LinkedIn al hacer click en la imagen -->
             <a href="https://www.linkedin.com/in/v%C3%ADctor-fernando-l%C3%B3pez-a71584168/" target="_blank">
                 <!-- Imagen representativa con texto alternativo -->
                 <img src="foto.jpg" alt="Perfil de LinkedIn">
             </a>
             <!-- Texto descriptivo debajo de la imagen -->
             <p>Haz click en la imagen para visitar mi perfil de LinkedIn.</p>
         </section>
     </body>
     </html>
     ```

---

### 3. **Utilización y aplicación de CSS**  
   - **Aprendido**:  
     - Creación de una hoja de estilos CSS y su enlace al HTML.  
     - Aplicación de reglas básicas para mejorar la apariencia (fuentes, colores, márgenes, etc.).
   - **Ejemplo práctico (archivo: `styles.css`)**:
     ```css
     /* Estilos generales para el cuerpo de la página */
     body {
         font-family: Arial, sans-serif;
         margin: 20px;
         background-color: #f5f5f5;
     }
     
     /* Estilo para el encabezado principal */
     header h1 {
         color: #333;
         text-align: center;
     }
     
     /* Espaciado entre secciones */
     section {
         margin-bottom: 20px;
     }
     
     /* Estilo para la imagen con enlace */
     a img {
         display: block;
         margin: 0 auto;
         border: 2px solid #ccc;
         transition: border-color 0.3s;
     }
     
     a img:hover {
         border-color: #0073b1;
     }
     
     /* Estilos para los párrafos */
     p {
         font-size: 1.1em;
         line-height: 1.6;
         color: #555;
         text-align: center;
     }
     ```

---

### 4. **Propiedades, atributos y tipografías**  
   - **Aprendido**:  
     - Uso de atributos globales en HTML (`id`, `class`, `style`) para personalizar elementos.  
     - Aplicación de tipografías y estilos específicos con CSS (familia, tamaño, peso y color de las fuentes).
   - **Ejemplo práctico**:
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <!-- Configuración de la codificación y vista de la página -->
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- Título que aparecerá en la pestaña del navegador -->
         <title>Portafolio de Lopez victor</title>
         <!-- incluir archivo css -->
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <!-- Saludo en el encabezado -->
         <header id="encabezado-portafolio">
             <h1 class="saludo">¡Bienvenido a mi Portafolio!</h1>
         </header>
         
         <!-- Sección para mostrar el nombre -->
         <section id="nombre">
             <h2 class="nombre-titulo">Lopez Victor</h2>
         </section>
         
         <!-- Párrafo descriptivo sobre ti o tu trabajo -->
         <section id="descripcion">
             <p class="texto-descriptivo">Soy un desarrollador web apasionado por crear experiencias digitales innovadoras. Aquí encontrarás una selección de mis proyectos y logros profesionales.</p>
         </section>
        
         <!-- Sección con la imagen que redirige a tu perfil de LinkedIn -->
         <section id="linkedin">
             <!-- Enlace que redirige a tu perfil de LinkedIn al hacer click en la imagen -->
             <a href="https://www.linkedin.com/in/v%C3%ADctor-fernando-l%C3%B3pez-a71584168/" target="_blank" class="enlace-linkedin"><!-- target="_blank" permite abrir la pagina en una hoja nueva -->
                 <!-- Imagen representativa con texto alternativo -->
                 <img src="foto.jpg" alt="Perfil de LinkedIn" class="imagen-linkedin">
             </a>
             <!-- Texto descriptivo debajo de la imagen -->
             <p class="descripcion-imagen">Haz click en la imagen para visitar mi perfil de LinkedIn.</p>
         </section>
     </body>
     </html>
     ```
     
     **Archivo CSS específico (ubicado en `04-propiedades-y-atributos/styles.css`):**
     ```css
     /* Estilos para el encabezado */
     #encabezado-portafolio {
         background-color: #e0e0e0;
         padding: 20px;
         border-bottom: 2px solid #ccc;
     }
     
     .saludo {
         font-family: 'Georgia', serif;
         font-size: 2.5em;
         text-align: center;
         color: #222;
     }
     
     /* Estilos para el nombre */
     .nombre-titulo {
         font-family: 'Helvetica Neue', Arial, sans-serif;
         font-size: 2em;
         text-align: center;
         margin-top: 10px;
     }
     
     /* Estilos para la descripción */
     .texto-descriptivo {
         font-family: 'Arial', sans-serif;
         font-size: 1.2em;
         text-align: center;
         margin: 20px;
         color: #444;
     }
     
     /* Estilos para el enlace e imagen de LinkedIn */
     .enlace-linkedin {
         text-decoration: none;
     }
     
     .imagen-linkedin {
         display: block;
         margin: 0 auto;
         border: 2px solid #ccc;
         transition: border-color 0.3s;
     }
     
     .imagen-linkedin:hover {
         border-color: #0073b1;
     }
     
     .descripcion-imagen {
         text-align: center;
         font-size: 1em;
         margin-top: 10px;
     }
     ```

---

### 5. **Utilización de vínculos e imágenes**  
   - **Aprendido**:  
     - Creación de enlaces con la etiqueta `<a>`, utilizando atributos como `href` y `target`.  
     - Inserción de imágenes con la etiqueta `<img>` y atributos `src`, `alt`, además de atributos opcionales para definir tamaño.  
     - Combinación de imágenes y enlaces para hacer que una imagen sea clicable.
   - **Ejemplo práctico**:
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Proyecto: Vínculos e Imágenes</title>
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <!-- Encabezado -->
         <header>
             <h1>Proyecto: Vínculos e Imágenes</h1>
         </header>
        
         <!-- Sección de navegación -->
         <nav>
             <!-- Enlace a una sección interna usando anclas -->
             <a href="#contacto">Ir a Contacto</a>
             <!-- Enlace a una página externa -->
             <a href="https://www.google.com" target="_blank">Visitar Google.com</a>
         </nav>
        
         <!-- Sección interna identificada para el ancla -->
         <section id="Contacto">
             <h2>Contacto</h2>
             <p>Esta es una sección de la página que puedes alcanzar mediante el enlace de navegación.</p>
         </section>
        
         <!-- Sección de imágenes con enlaces -->
         <section>
             <h2>Imágenes con Enlace</h2>
             <!-- Imagen que al hacer clic redirige a un recurso externo -->
             <a href="https://www.linkedin.com/in/v%C3%ADctor-fernando-l%C3%B3pez-a71584168/" target="_blank">
                 <img src="foto.jpg" alt="Visita mi perfil de LinkedIn">
             </a>
             <!-- Texto descriptivo para la imagen -->
             <p>Haz clic en la imagen para visitar mi perfil de LinkedIn.</p>
         </section>
     </body>
     </html>
     ```

---

### 6. **Desarrollo de Formularios Básicos**  
   - **Aprendido**:  
     - Creación de formularios en HTML utilizando `<form>`, `<input>`, `<textarea>`, y `<button>`.  
     - Uso correcto de etiquetas `<label>` para mejorar la accesibilidad y relacionarlas con los campos del formulario.  
   - **Ejemplo práctico** (archivo: `06-formularios/index.html`):
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Formulario de Contacto</title>
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <!-- Encabezado de la página -->
         <header>
             <h1>Formulario de Contacto</h1>
         </header>
        
         <!-- Formulario para recopilar datos del usuario -->
         <form action="/ruta-del-servidor" method="POST">
             <!-- Campo para el nombre -->
             <label for="nombre">Nombre:</label>
             <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required>
            
             <!-- Campo para el correo electrónico -->
             <label for="email">Correo Electrónico:</label>
             <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required>
            
             <!-- Campo para el mensaje -->
             <label for="mensaje">Mensaje:</label>
             <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
            
             <!-- Botón para enviar el formulario -->
             <button type="submit">Enviar</button>
         </form>
     </body>
     </html>

     ```
   - **Archivo CSS específico (ubicado en `07-validacion-ia/styles.css`):**
     ```css
     /* Estilos generales para el cuerpo del documento */
     body {
         font-family: Arial, Helvetica, sans-serif;
         margin: 20px;
         background-color: #f5f5f5;
     }

     /* Estilos para el encabezado */
     header h1 {
         color: #333;
         text-align: center;
     }

     /* Estilos para el formulario */
     form {
         max-width: 600px;
         margin: 0 auto;
         padding: 20px;
         background-color: #fff;
         border: 1px solid #ccc;
         border-radius: 5px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     }

     /* Estilos para las etiquetas de los campos del formulario */
     form label {
         display: block;
         margin-bottom: 8px;
         font-weight: bold;
         color: #333;
     }

     /* Estilos para los campos de entrada de texto y correo electrónico */
     form input[type="text"],
     form input[type="email"],
     form textarea {
         width: 100%;
         padding: 10px;
         margin-bottom: 20px;
         border: 1px solid #ccc;
         border-radius: 3px;
         box-sizing: border-box;
     }

     /* Estilos para el campo de texto del mensaje */
     form textarea {
         height: 150px;
         resize: vertical;
     }

     /* Estilos para el botón de envío */
     form button[type="submit"] {
         width: 100%;
         padding: 10px;
         background-color: #0073b1;
         color: #fff;
         border: none;
         border-radius: 3px;
         font-size: 16px;
         cursor: pointer;
     }

     /* Estilos para el botón de envío al pasar el cursor */
     form button[type="submit"]:hover {
         background-color: #005f8a;
     }
     ```

### Descripción de Atributos y Propiedades Nuevas:

- **HTML**:
  - `<form>`: Define un formulario HTML para la entrada de datos del usuario.
  - `action`: Especifica la URL a la que se enviarán los datos del formulario.
  - `method`: Define el método HTTP para enviar los datos del formulario (`POST` en este caso).
  - `<label>`: Etiqueta para un elemento de formulario, mejora la accesibilidad.
  - `for`: Atributo de `<label>` que asocia la etiqueta con un elemento de formulario mediante su `id`.
  - `<input>`: Campo de entrada de datos, puede ser de varios tipos (`text`, `email`).
  - `placeholder`: Texto que aparece en el campo de entrada cuando está vacío.
  - `required`: Atributo que indica que el campo es obligatorio.
  - `<textarea>`: Campo de entrada de texto de varias líneas.
  - `<button>`: Botón que se utiliza para enviar el formulario.

- **CSS**:
  - `max-width`: Define el ancho máximo del elemento.
  - `margin`: Define el espacio exterior alrededor del elemento.
  - `padding`: Define el espacio interior dentro del elemento.
  - `background-color`: Define el color de fondo del elemento.
  - `border`: Define el borde del elemento.
  - `border-radius`: Define el radio de las esquinas redondeadas del borde.
  - `box-shadow`: Aplica una sombra al elemento.
  - `display`: Define cómo se muestra el elemento (por ejemplo, `block`).
  - `width`: Define el ancho del elemento.
  - `box-sizing`: Define cómo se calculan los anchos y altos del elemento (`border-box` incluye el padding y el borde en el cálculo).
  - `resize`: Permite cambiar el tamaño del elemento (`vertical` permite cambiar solo la altura).
  - `cursor`: Define el tipo de cursor que se muestra cuando el ratón está sobre el elemento.
  - `transition`: Define la transición suave entre dos estados de un elemento.


### 7. **Validación de Formularios(simulacion en javaScript)**  
   - **Aprendido**:  
     - Validación de formularios utilizando JavaScript para simular la validación de datos.
   - **Ejemplo práctico** (archivo: `07-validacion-ia/simulacion/index.html`):
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Formulario con Validación Simulada</title>
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <!-- Encabezado de la página -->
         <header>
             <h1>Formulario con Validación Simulada</h1>
         </header>
        
         <!-- Formulario para recopilar datos del usuario -->
         <form id="contactFormSimulacion" novalidate>
             <!-- Campo para el nombre -->
             <label for="nombre">Nombre:</label>
             <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required>
             <br>
            
             <!-- Campo para el correo electrónico -->
             <label for="email">Correo Electrónico:</label>
             <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required>
             <br>
            
             <!-- Campo para el mensaje -->
             <label for="mensaje">Mensaje:</label>
             <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
             <br>
            
             <!-- Botón para enviar el formulario -->
             <button type="submit">Enviar</button>
         </form>

         <!-- Contenedor para mostrar mensajes de error -->
         <div id="errorMessageSimulacion" style="color:red;"></div>

         <!-- Enlace al archivo JavaScript de validación simulada -->
         <script src="simulacion.js"></script>
     </body>
     </html>
     ```

   - **Archivo CSS específico (ubicado en `07-validacion-ia/simulacion/styles.css`):**
     ```css
     /* Estilos generales para el cuerpo del documento */
     body {
         font-family: Arial, Helvetica, sans-serif;
         margin: 20px;
         background-color: #f5f5f5;
     }

     /* Estilos para el encabezado */
     header h1 {
         color: #333;
         text-align: center;
     }

     /* Estilos para el formulario */
     form {
         max-width: 600px;
         margin: 0 auto;
         padding: 20px;
         background-color: #fff;
         border: 1px solid #ccc;
         border-radius: 5px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     }

     /* Estilos para las etiquetas de los campos del formulario */
     form label {
         display: block;
         margin-bottom: 8px;
         font-weight: bold;
         color: #333;
     }

     /* Estilos para los campos de entrada de texto y correo electrónico */
     form input[type="text"],
     form input[type="email"],
     form textarea {
         width: 100%;
         padding: 10px;
         margin-bottom: 20px;
         border: 1px solid #ccc;
         border-radius: 3px;
         box-sizing: border-box;
     }

     /* Estilos para el campo de texto del mensaje */
     form textarea {
         height: 150px;
         resize: vertical;
     }

     /* Estilos para el botón de envío */
     form button[type="submit"] {
         width: 100%;
         padding: 10px;
         background-color: #0073b1;
         color: #fff;
         border: none;
         border-radius: 3px;
         font-size: 16px;
         cursor: pointer;
     }

     /* Estilos para el botón de envío al pasar el cursor */
     form button[type="submit"]:hover {
         background-color: #005f8a;
     }

     /* Estilos para el mensaje de error */
     #errorMessageSimulacion {
         color: red;
         margin-top: 20px;
         text-align: center;
     }
     ```

   - **Archivo JavaScript específico (ubicado en `07-validacion-ia/simulacion/simulacion.js`):**
     ```javascript
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
             // Aquí podrías simular el envío de datos
         }
     }
     ```

### 7. **Validación de Formularios(API)**  
   - **Aprendido**:  
     - Validación de formularios utilizandoatravez de una api generada en Django
   - **Ejemplo práctico** (archivo: `07-validacion-ia/-api/index.html`):
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Formulario con validacion via API</title>
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <header>
             <h1>Formulario con validacion via API</h1>
         </header>

         <form id="contactFormAPI" novalidate >
             <label for="nombre">Nombre</label>
             <input type="text" id="nombre" name="nombre" placeholder="ingresa tu nombre" required>
             <br>

             <label for="email">Correo Electronico</label>
             <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required>
             <br>

             <label for="mensaje">Mensaje</label>
             <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aqui" required></textarea>
             <br>

             <button type="submit">Enviar</button>
         </form>
         <div id="errorMensajeAPI" style="color:red"></div>
         <script src="api.js"></script>
     </body>
     </html>
     ```

   - **Archivo CSS específico (ubicado en `07-validacion-ia/-api/styles.css`):**
     ```css
     /* Estilos generales para el cuerpo del documento */
     body {
         font-family: Arial, Helvetica, sans-serif;
         margin: 20px;
         background-color: #f5f5f5;
     }

     /* Estilos para el encabezado */
     header h1 {
         color: #333;
         text-align: center;
     }
 
     /* Estilos para el formulario */
     form {
         max-width: 600px;
         margin: 0 auto;
         padding: 20px;
         background-color: #fff;
         border: 1px solid #ccc;
         border-radius: 5px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     }
 
     /* Estilos para las etiquetas de los campos del formulario */
     form label {
         display: block;
         margin-bottom: 8px;
         font-weight: bold;
         color: #333;
     }
 
     /* Estilos para los campos de entrada de texto y correo electrónico */
     form input[type="text"],
     form input[type="email"],
     form textarea {
         width: 100%;
         padding: 10px;
         margin-bottom: 20px;
         border: 1px solid #ccc;
         border-radius: 3px;
         box-sizing: border-box;
     }
 
     /* Estilos para el campo de texto del mensaje */
     form textarea {
         height: 150px;
         resize: vertical;
     }
 
     /* Estilos para el botón de envío */
     form button[type="submit"] {
         width: 100%;
         padding: 10px;
         background-color: #0073b1;
         color: #fff;
         border: none;
         border-radius: 3px;
         font-size: 16px;
         cursor: pointer;
     }
 
     /* Estilos para el botón de envío al pasar el cursor */
     form button[type="submit"]:hover {
         background-color: #005f8a;
     }
 
     /* Estilos para el mensaje de error */
     #errorMensajeAPI {
         color: red;
         margin-top: 20px;
         text-align: center;
     }
     ```

   - **Archivo JavaScript específico (ubicado en `07-validacion-ia/-api/api.js`):**
     ```js
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
 
     fetch('http://127.0.0.1:8000/api/validar/', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ nombre, email, mensaje })
     })
         .then(response => response.json())
         .then(data => {
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
      ```

### Descripción de Atributos y Propiedades Nuevas:

- **HTML**:
  - `novalidate`: Atributo que desactiva la validación de formulario por defecto del navegador.
  - `<textarea>`: Campo de entrada de texto de varias líneas.
  - `placeholder`: Texto que aparece en el campo de entrada cuando está vacío.
  - `required`: Atributo que indica que el campo es obligatorio.

- **CSS**:
  - `box-shadow`: Aplica una sombra al elemento.
  - `resize`: Permite cambiar el tamaño del elemento (`vertical` permite cambiar solo la altura).

- **JavaScript**:
  - `addEventListener`: Método que adjunta un evento a un elemento.
  - `preventDefault`: Método que cancela el evento si es cancelable, evitando el comportamiento por defecto.
  - `textContent`: Propiedad que establece o devuelve el contenido textual de un nodo.

---

## Instructivo para Clonar y Usar el Repositorio

### Requisitos Previos

- Tener instalado [Git](https://git-scm.com/).
- Tener instalado [Python](https://www.python.org/) y [pip](https://pip.pypa.io/en/stable/).
- Tener instalado [Django](https://www.djangoproject.com/).

### Pasos para Clonar el Repositorio

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Victorfernandolopez/desarrollo-web-con-html.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd tu-repositorio
   ```

### Configuración del Backend en Django

1. Crea un entorno virtual:
   ```bash
   python -m venv env
   ```

2. Activa el entorno virtual:
   - En Windows:
     ```bash
     .\env\Scripts\activate
     ```
   - En macOS/Linux:
     ```bash
     source env/bin/activate
     ```

3. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Realiza las migraciones de la base de datos:
   ```bash
   python manage.py migrate
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

6. Abre tu navegador y navega a `http://127.0.0.1:8000/` para ver la aplicación en funcionamiento.
