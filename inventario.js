// Lee el archivo CSV y lo convierte en tabla
fetch('INVENTARIO TIENDA 2026.csv')
  .then(response => response.text())
  .then(data => {
    const filas = data.split('\n').slice(1);
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      const columnas = linea.split(';');
      if (columnas.length > 13) {
        const material = columnas[0].trim();
        const nombre = columnas[3].trim();
        const inventarioFisico = columnas[11].trim();
        const inventarioSAP = columnas[12].trim();
        const diferencia = columnas[13].trim();

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
    });
  })
  .catch(error => console.error('Error al cargar CSV:', error));
