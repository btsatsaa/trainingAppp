import db from '../../db'; // Adjust the path

export default async function handler(req, res) {
  try {
    // Assuming req.body.username contains the username you want to search for
    const username = req.body.username;
    
    // Using parameterized query to prevent SQL injection
    const [rows, fields] = await db.execute('SELECT * FROM About WHERE lesson_id = ?', [username]);
    
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
