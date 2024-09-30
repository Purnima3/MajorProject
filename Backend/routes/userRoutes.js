// /backend/routes/userRoutes.js

const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authorizeRoles'); // Ensure the correct path

const router = express.Router();

// User dashboard route - accessible only to 'user' role
router.get('/user/dashboard', protect, authorizeRoles(['user']), (req, res) => {
  res.json({ message: `Welcome to the user dashboard, ${req.user.email}` });
});

module.exports = router;
