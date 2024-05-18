import pool from '../../db'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let query = 'SELECT * FROM reqCom'
            const { type } = req.query

            if (type === 'Active' || type === 'Pending') {
                query += ` WHERE com_type = '${type}'`
            }

            const connection = await pool.getConnection()
            const [results] = await connection.query(query)
            connection.release() // Release the connection back to the pool
            res.status(200).json(results)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    } else if (req.method === 'PUT') {
        try {
            const { type, email } = req.body
            const connection = await pool.getConnection()
            const [updateResult] = await connection.query(
                'UPDATE reqCom SET com_type = ? WHERE com_email = ?',
                [type, email]
            )
            connection.release() // Release the connection back to the pool

            if (updateResult.affectedRows > 0) {
                res.status(200).json({ message: 'Update successful' })
            } else {
                res.status(404).json({ error: 'No matching record found' })
            }
        } catch (error) {
            console.error('Error updating comment:', error)
            res.status(500).json({ error: 'Error updating comment' })
        }
    } else if (req.method === 'POST') {
        const { name, email, facebook, phone, message } = req.body

        try {
            const query = `
                INSERT INTO reqCom (com_name, com_email, com_fb, com_phone, com_offer)
                VALUES (?, ?, ?, ?, ?)
            `
            const values = [name, email, facebook, phone, message]

            const [result] = await pool.execute(query, values)

            res.status(200).json({
                message: 'Data inserted successfully',
                result,
            })
        } catch (error) {
            console.error('Error inserting data:', error)
            res.status(500).json({ error: 'Error inserting data' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
