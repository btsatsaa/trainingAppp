// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../../db'); // Import your MySQL connection pool

const router = express.Router();

// Define the signup route
router.post('/api/usersData', async (req, res) => {
  try {
    const { users_name, users_phone, users_email, users_password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(users_password, 10);

    // Insert user data into the Users table
    const [result] = await pool.execute(
      'INSERT INTO Users (users_name, users_phone, users_email, users_password) VALUES (?, ?, ?, ?)',
      [users_name, users_phone, users_email, hashedPassword]
    );

    console.log(result);

    // Send a success response
    res.status(201).json({ success: true, message: 'User signed up successfully!' });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      // Duplicate entry error
      console.error('Error during signup:', error);
      res.status(400).json({ success: false, error: 'Email address already in use' });
    } else {
      // Other errors
      console.error('Error during signup:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
});

module.exports = router;
