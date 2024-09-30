// /backend/routes/adminRoutes.js

const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authorizeRoles'); // Import authorizeRoles
const router = express.Router();

// Admin dashboard route - accessible only to 'admin' role
router.get('/admin/dashboard', protect, authorizeRoles(['admin']), (req, res) => {
  res.json({ message: `Welcome to the admin dashboard, ${req.user.email}` });
});

module.exports = router;
