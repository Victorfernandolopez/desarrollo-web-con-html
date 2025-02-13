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
     *Prompt*:   "nececito una pagina html de tipo portafolio que tenga un saludo en el encabesado, mi nombre de titulo, un parrafo descriptivo y una imagen que al hacer click redirija la pagina  a mi perfil de linkedin, debajo de la imagen un texto que la describa que se redirige al clickear la imagen"
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
              <a href="https://www.linkedin.com/in/v%C3%ADctor-fernando-l%C3%B3pez-a71584168/" target="_blank"><!-- target="_blank" permite abrir la pagina en una hhoja nueva -->
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