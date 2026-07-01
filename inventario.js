// Lee el archivo CSV y lo convierte en tabla
fetch('INVENTARIO TIENDA 2026.csv')
  .then(response => response.text())
  .then(data => {
    const filas = data.split('\n').slice(1); // Ignora encabezados
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      const columnas = linea.split(';').map(c => c.trim()); // limpia espacios

      // Validar que existan las columnas necesarias
      if (columnas.length >= 14) {
        const material = columnas[0];
        const nombre = columnas[3];
        const inventarioFisico = columnas[11] || "0";
        const inventarioSAP = columnas[12] || "0";

        // Solo mostrar filas con nombre de producto
        if (nombre) {
          const filaHTML = `
            <tr>
              <td>${material}</td>
              <td>${nombre}</td>
              <td>${inventarioFisico}</td>
              <td>${inventarioSAP}</td>
    
            </tr>
          `;
          tabla.innerHTML += filaHTML;
        }
      }
    });
  })
  .catch(error => console.error('Error al cargar CSV:', error));
