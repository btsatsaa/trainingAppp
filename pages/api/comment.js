// Import necessary libraries for database connection
import pool from '../../db' // Import your database connection

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query // Get the id from the query parameters

        try {
            // Get a connection from the connection pool
            const connection = await pool.getConnection()

            // Execute SQL query to select userComment records
            const [rows, fields] = await connection.query(
                'SELECT * FROM userComment WHERE lessonid = ?',
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
        const comment = req.body.commenta
        const useremail = req.body.useremail
        const lessonname = req.body.lessonname
        let id = req.body.id
        try {
            // Get a connection from the connection pool
            const connection = await pool.getConnection()

            // Execute SQL query to insert a new userComment record
            const [result] = await connection.query(
                'INSERT INTO userComment(comments,userEmail,lessonName,lessonid) VALUES (?,?,?,?)',
                [comment, useremail, lessonname, id]
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
    } else {
        // Method not allowed for other HTTP methods
        res.status(405).json({ success: false, message: 'Method Not Allowed' })
    }
}
