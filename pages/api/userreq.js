import db from '../../db'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const phone = req.query.type

            // Execute the query to fetch data from the database
            const [rows, fields] = await db.execute(
                'SELECT * FROM reqCom WHERE com_phone = ?',
                [phone]
            )

            // Send the response with the fetched data
            res.status(200).json(rows)
        } catch (error) {
            // Handle errors that may occur during database execution
            console.error('Error fetching data:', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    } else {
        // Handle invalid HTTP methods
        res.status(405).json({ error: 'Method not allowed' })
    }
}
