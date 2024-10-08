
async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:5000/api/productos');
        const productos = await response.json();

       
        const tablaBody = document.getElementById('tabla-productos-body');

        
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


document.addEventListener('DOMContentLoaded', obtenerProductos);

