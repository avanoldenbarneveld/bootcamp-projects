// Añadimos un event listener al botón HTML
const button = document.getElementById('button');
button.addEventListener('click', obtenerUbicacionUsuario);

// Solicitar la geolocalización del usuario
function obtenerUbicacionUsuario() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(consigueTiempoConCoordenadas, manejarErrorUbicacion);
    } else {
        alert("La geolocalización no es compatible con este navegador.");
    }
}

// Manejar éxito de geolocalización: obtener el clima usando coordenadas
function consigueTiempoConCoordenadas(posicion) {
    const lat = posicion.coords.latitude;
    const lon = posicion.coords.longitude;

// Update latitude and longitude in HTML
document.getElementById('latitud').innerHTML = lat.toFixed(2);
document.getElementById('longitud').innerHTML = lon.toFixed(2);

// Llamada a la API OpenWeather con lat/lon en lugar de nombre de ubicación
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=d67cbcf0c8b57ca447b4db2f4e5baf9b`;
const opcionesSolicitud = {
    method: 'GET',
    redirect: 'follow'
};

fetch(url, opcionesSolicitud)
    .then(response => response.text())
    .then(result => responseManager(JSON.parse(result)))
    .catch(error => alert('Error al obtener los datos del tiempo: ' + error.message));
}

// Manejar error de geolocalización
function manejarErrorUbicacion(error) {
    alert("No se pudo obtener la ubicación. Verifique sus permisos e intente nuevamente.");
}

/* función principal que gestiona la respuesta a la llamada AJAX */
function responseManager(resp) {
    if (resp.cod === 200) {
        console.log(resp);
        cambiaIcono(resp.weather[0].icon);
        muestraDesc(resp.weather[0].description);

        // Convertimos la temperatura a Celsius
        const tempCelsius = (resp.main.temp - 273.15).toFixed(1);
        muestraTemp(tempCelsius);

        muestraHumedad(resp.main.humidity);
    } else {
        alert("Ubicación no encontrada. Intente nuevamente.");
    }
}

/* funciones auxiliares para cambiar el HTML/CSS */
function cambiaIcono(nombreIco) {
    // Añade o cambia el icono que tiene el id icono
    const icono = document.getElementById('icono');
    icono.src = "img/" + nombreIco + "@2x.png";
}

function muestraDesc(desc) {
    // Lleva un texto (que contiene la descripción de la previsión) a la página HTML
    const prev = document.getElementById('prevision');
    prev.innerHTML = desc;
}

function muestraTemp(temp) {
    // Lleva el valor de la temperatura en Celsius al HTML
    const elementoTemp = document.getElementById('temp');
    elementoTemp.innerHTML = temp + " °C";
}

function muestraHumedad(humedad) {
    // Lleva el valor de la humedad relativa al HTML
    const elementoHumedad = document.getElementById('humedad');
    elementoHumedad.innerHTML = humedad + "%";
}
