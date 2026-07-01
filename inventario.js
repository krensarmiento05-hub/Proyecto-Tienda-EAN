fetch('TIENDA 2026 INVENTARIO.csv')
  .then(response => response.text())
  .then(data => {
    const filas = data.split('\n').slice(1); // Ignora encabezados
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      const columnas = linea.split(';').map(c => c.trim());

      // Validar que existan las columnas necesarias
      if (columnas.length >= 5) {
        const material = columnas[0];
        const nombre = columnas[1];
        const inventarioFisico = parseInt(columnas[2] || "0");
        const inventarioSAP = parseInt(columnas[3] || "0");
        const diferencia = parseInt(columnas[4] || "0");

        if (nombre) {
          const filaHTML = `
            <tr>
              <td>${material}</td>
              <td>${nombre}</td>
              <td>${inventarioFisico}</td>
              <td>${inventarioSAP}</td>
              <td>${diferencia}</td>
            </tr>
          `;
          tabla.innerHTML += filaHTML;
        }
      }
    });
  })
  .catch(error => console.error('Error al cargar CSV:', error));
