async function obtenerProductos() {
    try {
        const response = await fetch('productos.json'); // Carga los datos desde el archivo JSON local
        const productos = await response.json();

        const tablaBody = document.getElementById('tabla-productos-body');

        // Recorre los productos y crea las filas para la tabla
        productos.forEach(producto => {
            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>${producto.codigo}</td>
            `;
            tablaBody.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Llama a la función cuando se carga la página
document.addEventListener('DOMContentLoaded', obtenerProductos);
