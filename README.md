<html lang="es">
<head>
  <link rel="stylesheet" href="style.css">
  <meta charset="UTF-8">
  <title>Tienda EAN</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>🛍️ Tienda EAN</h1>
    <p>Selecciona la sección que quieres compartir:</p>
    <div class="botones">
      <button onclick="mostrar('Inventario')">Inventario</button>
      <button onclick="mostrar('Ventas')">Ventas</button>
      <button onclick="mostrar('Informe')">Informe</button>
    </div>
  </header>

  <section id="Inventario" class="seccion">
    <h2>Inventario</h2>
    <p>Aquí puedes mostrar las unidades más vendidas.</p>
  </section>

  <section id="Ventas" class="seccion">
    <h2>Ventas</h2>
    <p>Resumen de las referencias más vendidas.</p>
  </section>

  <section id="Informe" class="seccion">
    <h2>Informe</h2>
    <p>Datos y reportes de la Tienda EAN.</p>
  </section>

  <footer>
    <p>📧 tiendaean@universidadean.edu.co | 📍 Bogotá, Colombia</p>
  </footer>

  <script>
    function mostrar(seccion) {
      // Oculta todas las secciones
      document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
      // Muestra solo la seleccionada
      document.getElementById(seccion).style.display = 'block';}
  </script>
</body>
</html>
