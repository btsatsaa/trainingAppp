// pages/api/lessons.js
import pool from '../../db'; // Import your database connection

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.query('SELECT * FROM lesson');
      connection.release();
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching lessons:', error);
      res.status(500).json({ success: false, error: 'Error fetching lessons' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
