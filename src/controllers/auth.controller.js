// TP-LCG-VIDAL/src/controllers/auth.controller.js

const AuthService = require('../services/auth.service');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthService.login(email, password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate and return token (implementation not shown)
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.logout = (req, res) => {
    // Handle logout logic (e.g., invalidate token)
    res.status(200).json({ message: 'Logout successful' });
};

exports.register = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await AuthService.register(userData);
        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};