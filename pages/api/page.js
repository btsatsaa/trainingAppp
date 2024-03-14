// pages/api/page.js
import db from '../../db'; // Adjust the path

export default async function handler(req, res) {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM Users');
     // Replace 'users' with your actual table name
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}


