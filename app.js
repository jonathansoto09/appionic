const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'encuestas',
  password: '123456',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/create-users', async (req, res) => {
  try {
    const { 
      pregunta1, 
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      comentarios,
      fecha
     } = req.body; // Suponiendo que los datos llegan en el cuerpo de la solicitud

    // Verifica si se proporcionan todos los datos necesarios
    //if (!nombre || !apellido || !email) {
    //  return res.status(400).json({ error: 'Faltan datos obligatorios' });
    //}

    // Ejecuta la consulta de inserción
    const result = await pool.query('INSERT INTO clientes (pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, comentarios, fecha_creacion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
     [pregunta1, 
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      comentarios,
      fecha]);
    
    // Devuelve los datos insertados como respuesta
    res.json(result);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

