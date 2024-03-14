// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../../db'); // Import your MySQL connection pool

const router = express.Router();

// Define the login route
router.post('/api/login', async (req, res) => {
  try {
    const { users_phone, users_password } = req.body;

    // Retrieve user data from the Users table
    const [users] = await pool.execute(
      'SELECT * FROM Users WHERE users_phone = ?',
      [users_phone]
    );

    // Check if a user with the provided phone number exists
    if (users.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid phone number or password' });
    }

    // Check if the provided password is correct
    const passwordMatch = await bcrypt.compare(users_password, users[0].users_password);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, error: 'Invalid phone number or password' });
    }

    // Password is correct, user is authenticated
    res.status(200).json({ success: true, message: 'Login successful!' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
