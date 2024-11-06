
// Cambia el título de la página
document.title = "Nuevo título";

// Cambie el color de fondo
document.body.style.backgroundColor = "#000025"

// Cambia el color de la fuente
const style = document.createElement("style");
style.textContent = `
    body, body * {
        color: purple !important;
    }
`;
document.head.appendChild(style);

// Selecciona todas las imágenes de la página y le aplica el filtro.
const allImages = document.querySelectorAll('img');
allImages.forEach(image => {
    image.style.filter = 'hue-rotate(240deg)';
});

// Añade un elemento al DOM
var miEtiqueta = document.createElement("p");
miEtiqueta.textContent = "Soy capaz de insertar elementos en el DOM";
var destino = document.getElementsByClassName("portlet-content-container")[0];
destino.prepend(miEtiqueta);