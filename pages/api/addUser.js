import pool from '../../db'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            let query = 'SELECT * FROM lesson'

            const connection = await pool.getConnection()
            const [results] = await connection.query(query)
            connection.release() // Release the connection back to the pool
            res.status(200).json(results)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    } else if (req.method === 'POST') {
        const { name, price, course, category, address, info } = req.body

        if (!name || !price || !course || !category || !address || !info) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        try {
            const query = `
                INSERT INTO lesson (lesson_name, lesson_price, lesson_course, category, lesson_address, lesson_info)
                VALUES (?, ?, ?, ?, ?, ?)
            `
            const values = [name, price, course, category, address, info]

            const connection = await pool.getConnection()
            const [result] = await connection.execute(query, values)
            connection.release()

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
