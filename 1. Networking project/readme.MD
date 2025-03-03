# **Networking Project (Nginx Configuration)**

This project involved setting up an **Nginx server** with multiple configurations to understand how web servers handle different types of requests.

## **🛠 Features Implemented**
- Served static files (**HTML, CSS, JS, images**) over **HTTP (port 80)** and **HTTPS (port 443)**.
- Configured custom **404 error handling** for missing files.
- Created multiple endpoints:
  - `/prueba1.html` → Static HTML page.
  - `/imagen1.jpg` → Served an image.
  - `/javascript/archivo1.js` → Served a JavaScript file.
  - `/prueba2.html` → Imported the JavaScript file.
  - `/error` → Returned a **500 error**.
  - `/metodo` → Responded dynamically to **GET, POST, PUT, DELETE**.
  - `/cabecera` → Returned a **204 response** with a custom header.
  - `/redireccion1` → Redirected to W3Schools.
  - `/redireccion2` → Redirected to `/cabecera`.
- Exposed static content on an **additional port (8000)**.
- Implemented HTTPS with **basic authentication**.
- Created a `/respuesta` route that serves JSON or HTML depending on the query parameter.
- Logged server access to `/var/www/html/logs.log`.

## **🚀 How to Run**
1. Copy the configuration file:
   ```bash
   sudo cp etc/nginx/sites-available/default /etc/nginx/sites-available/
   ```
2. Ensure the symbolic link is set up:
   ```bash
   sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
   ```
3. Copy static files:
   ```bash
   sudo cp -r var/www/html/* /var/www/html/
   ```
4. Test the configuration:
   ```bash
   sudo nginx -t
   ```
5. Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```
6. Access the server:
   - HTTP: [`http://0.0.0.0/`](http://0.0.0.0/)
   - HTTPS (if enabled): [`https://0.0.0.0/`](https://0.0.0.0/)