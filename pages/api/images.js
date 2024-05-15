// pages/api/images.js

import pool from '../../db'; // Import your MySQL connection pool from the correct file path

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch data from MySQL table
      const connection = await pool.getConnection();
      const [results] = await connection.query('SELECT * FROM Images');
      connection.release(); // Release the connection back to the pool
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
