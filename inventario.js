// Lee el archivo CSV y lo convierte en tabla
fetch('INVENTARIO TIENDA 2026.csv')
  .then(response => response.text())
  .then(data => {
    const filas = data.split('\n').slice(1); // Ignora la primera fila (encabezados)
    const tabla = document.querySelector('#tablaInventario tbody');

    filas.forEach(linea => {
      const columnas = linea.split(';'); // separa por punto y coma
      if (columnas.length > 1) {
        const material = columnas[0];
        const nombre = columnas[3];
        const inventarioFisico = columnas[11];
        const inventarioSAP = columnas[12];
        const diferencia = columnas[13];

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
