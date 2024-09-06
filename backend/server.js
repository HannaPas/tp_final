const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express(); 

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Datos estáticos de los perfumes
const productos = [
  { nombre: 'Chanel', precio: 60.00, stock: 25, codigo: 1 },
  { nombre: 'Dior', precio: 50.00, stock: 15, codigo: 2 },
  { nombre: 'Dore', precio: 70.00, stock: 30, codigo: 3 },
  { nombre: 'Vitamina', precio: 40.00, stock: 20, codigo: 4 },
  { nombre: 'Victoria Secret', precio: 55.00, stock: 12, codigo: 5 }
];

// Ruta para obtener productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
