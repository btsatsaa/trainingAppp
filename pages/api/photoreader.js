// Import necessary libraries for database connection
import pool from '../../db' // Import your database connection

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const id = req.query.number // Get the id from the query parameters

        try {
            // Get a connection from the connection pool
            const connection = await pool.getConnection()

            // Execute SQL query to select image records
            const [rows, fields] = await connection.query(
                'SELECT * FROM Images'
            )

            // Release the connection back to the pool
            connection.release()

            // Convert binary data to base64

            // Send the fetched image records as JSON response
            res.status(200).json(rows)
        } catch (error) {
            // Handle errors
            console.error('Error fetching images:', error)
            res.status(500).json({
                success: false,
                error: 'Error fetching images',
            })
        }
    } else {
        res.status(405).json({
            success: false,
            error: 'Method not allowed',
        })
    }
}
