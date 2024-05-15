// Import necessary libraries for database connection
import pool from '../../db'; // Import your database connection

export default async function handler(req, res) {
  if (req.method === 'GET') {
    
    const { id } = req.query; // Get the id from the query parameters

    try {
      // Get a connection from the connection pool
      const connection = await pool.getConnection();

      // Execute SQL query to select traDetail records
      const [rows, fields] = await connection.query('SELECT * FROM traDetail WHERE traDetail_id = ?', [id]);

      // Release the connection back to the pool
      connection.release();

      // Send the fetched traDetail records as JSON response
      res.status(200).json(rows);
    } catch (error) {
      // Handle errors
      console.error('Error fetching traDetail:', error);
      res.status(500).json({ success: false, error: 'Error fetching traDetail' });
    }
  } else {
    // Method not allowed for other HTTP methods
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
