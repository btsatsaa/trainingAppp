import pool from '../../db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
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
