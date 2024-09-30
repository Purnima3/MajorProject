// /backend/routes/authRoutes.js

const express = require('express');
const { signup, login } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware'); // Ensure this path is correct

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Protect the dashboard route
router.get('/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}!` });
});

module.exports = router;
