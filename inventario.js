// Lee el archivo CSV y lo convierte en tabla
fetch('TIENDA 2026 INVENTARIO.csv')
  .then(r => r.text())
  .then(data => {
    const filas = data.split('\n').slice(1);
    const tabla = document.querySelector('#tablaInventario tbody');
    filas.forEach(linea => {
      const columnas = linea.split(';').map(c => c.trim());
      if (columnas.length >= 14) {
        const material = columnas[0];
        const nombre = columnas[3];
        const inventarioFisico = columnas[3];
        const inventarioSAP = columnas[4];
        const diferencia = columnas[5];
        if (nombre) {
          tabla.innerHTML += `<tr><td>${material}</td><td>${nombre}</td><td>${inventarioFisico}</td><td>${inventarioSAP}</td><td>${diferencia}</td></tr>`;
        }
      }
    });
  });
