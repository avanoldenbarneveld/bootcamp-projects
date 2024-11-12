# Proyecto Final Modulo HTML y CSS

## Nombre del Alumno
Alberto van Oldenbarneveld

## Temática
Este proyecto es un sitio web de portfolio personal, diseñado para mostrar mis habilidades, proyectos, y trayectoria profesional. Incluye páginas dedicadas a mi experiencia, conocimientos técnicos, y proyectos, así como una página de contacto con un mapa y un formulario. El objetivo es crear un sitio funcional, atractivo y responsivo usando exclusivamente HTML y CSS.

## Mapa del Sitio
- **index.html**: Página de login con un formulario que permite al usuario introducir su email y contraseña, con un enlace para recuperación de contraseña.
- **password-recovery.html**: Página para recuperar la contraseña, con campos adicionales para la seguridad del usuario.
- **home.html**: Página de bienvenida con un mensaje de introducción y navegación al resto de páginas. Incluye una animación de entrada.
- **about.html**: Página sobre mí, donde detallo mi trayectoria profesional y metas.
- **skills.html**: Página de habilidades, organizada en tarjetas individuales que muestran mis competencias técnicas y personales.
- **projects.html**: Página de proyectos, donde presento algunos de mis trabajos con enlaces a GitHub.
- **contact.html**: Página de contacto que incluye un formulario de contacto y un mapa en un iframe.

## Listado de Técnicas/Herramientas/Recursos

| Técnica/Herramienta/Recurso               | Página/s                          | Elemento/s sobre el que se usa                                                                                                     |
|-------------------------------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Transición**                            | index.html                        | Botón de envío del formulario de login (`:hover` para cambio de color).                                                            |
| **Transición**                            | about.html, projects.html, skills.html | Efecto de elevación (`transform: translateY(-5px)`) y sombra en tarjetas al pasar el ratón.                                    |
| **@media queries**                        | Todas las páginas                 | Adaptabilidad de contenido para diferentes tamaños de pantalla (`max-width: 768px`).                                               |
| **Animación (fade-in)**                   | home.html                         | Efecto de entrada de la página (`<body>`) para un desvanecimiento suave al cargar.                                                 |
| **Transición con `:hover`**               | Todas las páginas                 | Efecto en los enlaces de la barra de navegación, donde el color cambia al pasar el ratón.                                          |
| **Formulario de contacto**                | contact.html                      | Formulario de contacto con validación HTML básica (`required`, `type="email"`).                                                    |
| **Validación HTML**                       | index.html, contact.html, password-recovery.html | Validación de formularios sin JavaScript: se emplea `required`, `minlength`, y `type="email"`.   |
| **Estilo de tarjeta**                     | skills.html, projects.html        | Organización en tarjetas para habilidades y proyectos, usando `flex` y `grid`.                                                     |
| **Diseño responsivo**                     | Todas las páginas                 | Adaptación de secciones y contenedores al ancho de pantalla con `flex`, `max-width`, y media queries.                              |
| **Botones personalizados**                | Todas las páginas                 | Botones en formularios (`btn-primary`) con transiciones suaves y bordes redondeados.                                               |
| **Mapa y Multimedia**                     | contact.html                      | Mapa de ubicación incrustado en un `<iframe>`, mostrando una dirección específica en Google Maps.                                  |
| **Favicon**                               | Todas las páginas                 | Icono personalizado en la barra de navegador.                                                                                      |
| **Fuentes personalizadas**                | Todas las páginas                 | Google Fonts (Poppins para títulos y Roboto para el texto).                                                                        |
| **Efecto de sombra en contenedores**      | skills.html, projects.html, about.html | Sombra en tarjetas y contenedores (`box-shadow`).                                  |
| **Diseño de barra de navegación**         | Todas las páginas                 | Barra de navegación fija (`position: sticky`) con enlaces a todas las páginas principales.                                         |
| **Footer con enlaces**                    | Todas las páginas                 | Footer con enlaces de contacto, LinkedIn, GitHub, etc., fijo en dispositivos grandes y adaptado para móviles.                      |
| **Formulario de recuperación de contraseña** | password-recovery.html          | Campos para recuperación de cuenta (email, teléfono, fecha de nacimiento) con validación HTML.                                     |
| **Estructura de página en secciones**     | Todas las páginas                 | Contenido organizado en secciones (`section` y `div`).                                                                             |
| **Efecto `object-fit` para imágenes**     | home.html                         | Imagen en el hero redondeada y ajustada con `object-fit: cover`.                                                                   |

## Recursos Externos
- **Google Fonts**: Usado para las fuentes [Poppins](https://fonts.google.com/specimen/Poppins) y [Roboto](https://fonts.google.com/specimen/Roboto).
- **Animación de entrada**: Inspirado en un ejemplo de animación CSS en [HubSpot](https://blog.hubspot.com/website/css-fade-in).
- **Icono Favicon**: Generado con [favicon.io](https://favicon.io/favicon-generator/).

## Agradecimiento
Muchísimas gracias por el esfuerzo en enseñarnos todo lo visto en este módulo y por el tiempo dedicado a evaluar este proyecto. Espero que se vean los frutos, y estaré encantado de recibir feedback para mejorarlo. Como verás, este proyecto tiene la intención de ser la base para seguir aprendiendo, por lo que toda crítica será más que bienvenida.
