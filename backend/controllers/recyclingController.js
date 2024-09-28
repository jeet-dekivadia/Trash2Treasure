const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.recycleItem = async (req, res) => {
    const { userId, item } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.recycledItems.push(item);
        user.recycledCount += 1;
        await user.save();
        res.status(200).json({ message: 'Item recycled successfully!', recycledCount: user.recycledCount });
    } catch (err) {
        res.status(500).json({ error: 'Failed to recycle item' });
    }
};

exports.getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({ recycledCount: -1 }).limit(10);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
};

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, recycledItems: [], recycledCount: 0 });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: 'Failed to log in' });
    }
};
