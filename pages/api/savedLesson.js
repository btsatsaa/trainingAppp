// Import necessary libraries for database connection
import pool from '../../db' // Import your database connection

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const id = req.query.number // Get the id from the query parameters

        try {
            // Get a connection from the connection pool
            const connection = await pool.getConnection()

            // Execute SQL query to select userComment records
            const [rows, fields] = await connection.query(
                'Select * from lesson join savedSale on lesson.lesson_id = savedSale.lessonID and savedSale.phoneNumber = ?',
                [id]
            )

            // Release the connection back to the pool
            connection.release()

            // Send the fetched userComment records as JSON response
            res.status(200).json(rows)
        } catch (error) {
            // Handle errors
            console.error('Error fetching userComment:', error)
            res.status(500).json({
                success: false,
                error: 'Error fetching userComment',
            })
        }
    }
    if (req.method === 'POST') {
        const number = req.body.number
        const id = req.body.id
        try {
            // Get a connection from the connection pool
            const connection = await pool.getConnection()

            // Execute SQL query to check if the id and number combination exists
            const [existingRows] = await connection.query(
                'SELECT * FROM savedSale WHERE phoneNumber = ? AND lessonID = ?',
                [number, id]
            )

            // If the combination already exists, respond with an error
            if (existingRows.length > 0) {
                connection.release()
                return res.status(400).json({
                    success: false,
                    error: 'Combination already exists',
                })
            }

            // Insert the new record if the combination doesn't exist
            const [result] = await connection.query(
                'INSERT INTO savedSale(phoneNumber, lessonID) VALUES (?, ?)',
                [number, id]
            )
            console.log('id:', id)
            // Release the connection back to the pool
            connection.release()

            // Check if the insertion was successful
            let message = result.affectedRows > 0 ? 'success' : 'error'

            res.status(200).json({
                response: { message: message },
            })
        } catch (error) {
            console.error('Error adding comment:', error)
            res.status(500).json({
                success: false,
                error: 'Error adding comment',
            })
        }
    }
}
