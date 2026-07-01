<head>
  <meta charset="UTF-8">
  <title>Tienda EAN</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>TIENDA EAN</h1>
    <p>Primera colección institucional</p>
  </header>

  <section class="grid">
    <div class="card verde">
      <h2>Inventario</h2>
      <p>Unidades proximas a recompra</p>
    </div>
    <div class="card amarillo">
      <h2>Ventas</h2>
      <p>Referencia más vendida</p>
    </div>
    <div class="card verde">
      <h2>Informe</h2>
      <p>Datos y reportes</p>
    </div>
  </section>

  <footer>
    <p>📧 tiendaean@universidadean.edu.co | 📍 Bogotá, Colombia</p>
  </footer>
</body>
<section id="Inventario" class="seccion">
  <h2>📊 Dashboard de Inventario</h2>
  <table id="tablaInventario">
    <thead>
      <tr>
        <th>Material</th>
        <th>Nombre Producto</th>
        <th>Inventario Físico</th>
        <th>Inventario SAP</th>
        <th>Diferencia</th>
      </tr>
    </thead>
    <tbody>
      <!-- Aquí se llenarán los datos automáticamente -->
    </tbody>
  </table>
</section>

<script src="inventario.js"></script>
</html>
