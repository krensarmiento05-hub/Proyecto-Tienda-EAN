fetch('TIENDA 2026 INVENTARIO.csv')
  .then(response => response.text())
  .then(data => {
    const filas = data.split('\n').slice(1); // Ignora encabezados
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      const columnas = linea.split(';').map(c => c.trim());

      // Validar que existan las columnas necesarias
      if (columnas.length >= 13) {
        const material = columnas[0];
        const nombre = columnas[3];
        const inventarioFisico = parseInt(columnas[11] || "0");
        const inventarioSAP = parseInt(columnas[12] || "0");
        const diferencia = inventarioSAP - inventarioFisico;

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

fetch('TIENDA 2026 INVENTARIO.csv')
  .then(response => response.text())
  .then(data => {
    document.body.innerHTML += "<pre>" + data + "</pre>";
  });
