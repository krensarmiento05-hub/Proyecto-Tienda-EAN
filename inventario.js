// Lee el archivo CSV y lo convierte en tabla
fetch('INVENTARIO TIENDA 2026.csv')
  .then(response => response.text())
  .then(data => {
    const filas = data.split('\n').slice(1); // Ignora encabezados
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      const columnas = linea.split(';');

      // Validar que la fila tenga suficientes columnas
      if (columnas.length > 14) {
        const material = (columnas[0] || "").trim();
        const nombre = (columnas[3] || "").trim();
        const inventarioFisico = (columnas[11] || "0").trim();
        const inventarioSAP = (columnas[12] || "0").trim();
        const diferencia = (columnas[13] || "0").trim();

        // Evitar filas vacías
        if (material && nombre) {
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
