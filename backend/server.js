const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mysql = require('mysql2'); 

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

//conexion base de datos 
const connection = mysql.createConnection({
  host: 'localhost',       
  user: 'root',           
  password: '',           
  database: 'productos'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida.');
});

app.get('/api/productos', (req, res) => {
  const query = 'SELECT nombre, precio, stock, codigo FROM productos';

  // Ejecutar la consulta
  connection.query(query, (err, results) => {
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

