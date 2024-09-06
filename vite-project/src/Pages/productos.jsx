import React, { useEffect, useState } from 'react';
import '../Styles/Productos.css'

function Productos() {

  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    async function obtenerProductos() {
      try {
        const response = await fetch('http://localhost:5000/api/productos');
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    }

    obtenerProductos();
  }, []); 

  return (
    <div>
      <h2>Listado de Productos</h2>
      <table id="productos-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody id="tabla-productos-body">
          {/* Mapeamos los productos del estado para mostrarlos en la tabla */}
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td>{producto.stock}</td>
              <td>{producto.codigo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
