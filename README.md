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


