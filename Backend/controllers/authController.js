const User = require('../models/userModel');
const { generateToken } = require('../utils/jwt');

// Signup new user
exports.signup = async (req, res) => {
  const { email, password, role } = req.body;
  
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ email, password, role });
    res.status(201).json({
      message: 'User created successfully',
      token: generateToken(user._id, user.role),
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};

// Login user
// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Include role in the response
    res.json({
      token: generateToken(user._id, user.role),
      role: user.role, // Include role in response
    });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

