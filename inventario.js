fetch('TIENDA 2026 INVENTARIO.csv')
  .then(response => response.text())
  .then(data => {
    // Dividir en filas
    const filas = data.split('\n').slice(1); // Ignora la primera fila (encabezados)
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      // Separar columnas por ;
      const columnas = linea.split(';').map(c => c.trim());

      // Validar que haya datos
      if (columnas.length >= 5) {
        const material = columnas[0];
        const nombre = columnas[1];
        const inventarioFisico = columnas[2];
        const inventarioSAP = columnas[3];
        const diferencia = columnas[4];

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
