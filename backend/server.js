const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');

const app = express(); 

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

//conexion base de datos 
const pool = mysql.createPool({
  host: 'localhost',       
  user: 'root',           
  password: '',           
  database: 'productos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306
});

// Ruta para obtener productos
app.get('/api/productos', (req, res) => {
  const query = 'SELECT nombre, precio, stock, codigo FROM productos';

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error al obtener los productos');
      return;
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
